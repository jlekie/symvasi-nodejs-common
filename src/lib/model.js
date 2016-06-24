export class Model {
    write(protocol) {
        
    }
    read(protocol, model) {
        for (let a = 0; a < model.propertyCount; a++) {
            let prop = protocol.readModelPropertyStart();
            
            if (!this.readPropertyValue(protocol, prop)) {
                throw new Error(`Property "${prop.Name}" not recognized`);
            }
            protocol.readModelPropertyEnd();
        }
    }
    
    readPropertyValue(protocol, prop) {
        return false;
    }
    
    validateProp(prop, type) {
        
    }
}