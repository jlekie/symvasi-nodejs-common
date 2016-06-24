export class ServiceDirector {
    constructor(transportFactory, protocolFactory, serverFactory) {
        this.transportFactory = transportFactory;
        this.protocolFactory = protocolFactory;
        this.serverFactory = serverFactory;
    }
    
    createServer() {
        let transport = this.transportFactory();
        let protocol = this.protocolFactory(transport);
        
        return this.serverFactory(transport, protocol);
    }
    async spawnServerAsync() {
        let server = this.createServer();
        await server.startAsync();
        
        return server;
    }
}