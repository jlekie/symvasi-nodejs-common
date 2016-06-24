export class Transport {
}
export class ServerTransport extends Transport {
    constructor(endpoint) {
        super();
        
        this.endpoint = endpoint;
    }
}
export class ClientTransport extends Transport {
    constructor(endpoint) {
        super();
        
        this.endpoint = endpoint;
    }
}