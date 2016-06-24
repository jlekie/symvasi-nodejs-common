import Bluebird from 'bluebird';

export class Announcer {
    constructor(serviceName, endpoint) {
        this.serviceName = serviceName;
        this.endpoint = endpoint;
    }

    async startAsync() {
        await this.refreshAsync();
        this.running = true;

        this._handler();
    }
    stop() {
        throw new Error('Not implemented');
    }
    async refreshAsync() {
        await this.registerAsync();
    }

    async _handler() {
        while (this.running) {
            try {
                await this.refreshAsync();

                await Bluebird.delay(10000);
            }
            catch (err) {
                console.error('Error: ' + err.message);
            }
        }
    }
}