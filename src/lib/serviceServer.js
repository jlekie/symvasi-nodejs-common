export class ServiceServer {
    constructor(transport, protocol) {
        this.transport = transport;
        this.protocol = protocol;
    }
    
    async startAsync() {
        await this.transport.listenAsync();
        this.running = true;
        
        this._handler();
    }
    stop() {
        throw new Error('Not implemented');
    }
    
    async _handler() {
        while (this.running) {
            try {
                let request = await this.protocol.readRequestStartAsync();
                await this.handleRequestAsync(request);
            }
            catch (err) {
                console.error('Error: ' + err.message);
            }
        }
    }
}