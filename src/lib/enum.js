export class Enum {
    constructor(value, nameMappings) {
        this.literalValue = value;
        this.name = nameMappings[value];
    }
}