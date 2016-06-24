export class ServiceClient {
    constructor(transport, protocol) {
        this.transport = transport;
        this.protocol = protocol;
    }
    
    async connectAsync() {
        await this.transport.connectAsync();
    }
}