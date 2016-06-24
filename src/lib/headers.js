export class ErrorHeader {
    constructor(props) {
        this.message = props.message;
    }

    createError() {
        return new Error(this.message);
    }
}