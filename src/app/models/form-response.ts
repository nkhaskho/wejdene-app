export class FormResponse {
    
    message: string = '';
    error: string = '';

    setMessage(message: string) {
        this.reset();
        this.message = message;
    }

    setError(error: string) {
        this.reset();
        this.error = error
    }

    reset() {
        this.message = '';
        this.error = '';
    }
}
