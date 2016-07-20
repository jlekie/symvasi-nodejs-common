var indefinateTypesCodes = {
    string: 0,
    boolean: 1,
    integer: 2,
    float: 3,
    double: 4,
    byte: 5,
    enum: 6,
    model: 7,
    list: 8
};
export class IndefinateTypes {
    static get(value) {
        return indefinateTypesCodes[value];
    }
}

export class ErrorHeader {
    constructor(props) {
        this.message = props.message;
    }

    createError() {
        return new Error(this.message);
    }
}