export class ServiceConsumer {
    constructor(transportFactory, protocolFactory, clientFactory) {
        this.transportFactory = transportFactory;
        this.protocolFactory = protocolFactory;
        this.clientFactory = clientFactory;
    }
    
    createClient() {
        let transport = this.transportFactory();
        let protocol = this.protocolFactory(transport);
        
        return this.clientFactory(transport, protocol);
    }
    async spawnClientAsync() {
        let client = this.createClient();
        await client.connectAsync();
        
        return client;
    }
}