export class HttpResponseError {
    constructor(status? : number, errorMessage? : string, errorDescription? : string) {
        this.status = status;
        this.errorMessage = errorMessage;
        this.errorDescription = errorDescription;
    }
    public status : number;
    public errorMessage : string;
    public errorDescription : string;
    public priority : Priority;
}
enum Priority {
    Top = 1,
    High = 2,
    Mid = 3,
    Low = 4
}