import {Observable} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';

export class ErrorHandler {
    static handleError(error: HttpErrorResponse | any) {
        let errorMessage: string;
        if (error instanceof HttpErrorResponse) {
            const body = error.error
            errorMessage = `Erro ${error.status} ao acessar a URL ${error.url} - ${body}`;
        } else {
            errorMessage = error.toString();
        }
        console.log(errorMessage);
        return Observable.throw(errorMessage);
    }
}
