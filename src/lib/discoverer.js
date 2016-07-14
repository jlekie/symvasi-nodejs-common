import _ from 'lodash';
import Bluebird from 'bluebird';

export class Discoverer {
    constructor(serviceName, endpointFactory) {
        this.serviceName = serviceName;
        this.endpointFactory = endpointFactory;

        this.endpoints = [];
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
        let endpoints = await this.loadEndpointsAsync();
        for (let endpoint of endpoints) {
            if (!_.some(this.endpoints, ep => ep.equals(endpoint))) {
                this.endpoints.push(endpoint);
            }
        }
    }

    async getEndpointAsync(timeout = 30000, retryInterval = 500) {
        let startTime = new Date();

        let endpoint = this.endpoints.shift();
        while (!endpoint) {
            if ((new Date() - startTime) > timeout) {
                throw new Error('Could not find backend endpoint');
            }

            await Bluebird.delay(retryInterval);

            endpoint = this.endpoints.shift();
        }
        this.endpoints.push(endpoint);

        return endpoint;
    }

    async _handler() {
        while (this.running) {
            try {
                await this.refreshAsync();

                await Bluebird.delay(20000);
            }
            catch (err) {
                console.error('Error: ' + err.message);
            }
        }
    }
}