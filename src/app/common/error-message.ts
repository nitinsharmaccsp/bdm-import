export class ErrorMessage {
public static errorMap = {
    400 : { errorMessage : 'Bad request formed', errorDescription : 'Server cannot process the request'},
    401 : { errorMessage : 'Unauthorized Error', errorDescription : 'You are unauthorized to visit this page'},
    403 : { errorMessage : 'Forbidden', errorDescription : 'You are not permitted to perform this action'},
    404 : { errorMessage : 'Not Found', errorDescription : 'The requested resource could not be found but may be available in the future.' },
    500 : { errorMessage : 'Internal Server Error', errorDescription : 'Network error occurred. Please try again later.'},
    'default' : { errorCode : '0', errorMessage : 'Network error occurred. Please try again later' },
    }
} 