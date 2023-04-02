import {Request, Response} from 'express';
import {User, users} from './users';

export const handleAuthentication = (req: Request, resp: Response) => {
    const user: User = req.body;
    if (isValid(user)) {
        const dbuser: User = users[user.email];
        resp.json({name: dbuser.name, email: dbuser.email});
    } else {
        resp.status(403).json({message: 'Dados inválidos.'});
    }
}

function isValid(user: User): boolean {
    if (!user) {
        return false
    }
    const dbuser: User = users[user.email];
    return dbuser !== undefined && dbuser.matches(user);
}