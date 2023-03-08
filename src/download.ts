import axios, { Axios }from 'axios';

export class DownloadSystem {
    private request: Axios;
    constructor() {
        this.request = axios;
    }

    public async getData(url: string) {
            const imageData = await this.request.get(url, {
                responseType: 'arraybuffer'
            });
            return imageData.data;  
    }
}