import { DownloadSystem } from "./download";
import { Handler } from "./fileHandler";

class Init {
    private download: DownloadSystem;
    private fileHandler: Handler;
    
    constructor() {
        this.download = new DownloadSystem();
        this.fileHandler = new Handler();
    }

    public init() {
        this.fileHandler.mkdir();
    }

    public async downloadImage(url: string) {
        const buffer = await this.download.getData(url);
        const save = await this.fileHandler.saveData(buffer, url);
        if (save) {
            return "file successfuly saved."
        }
        return "file can't be saved."
    }
}

const data = new Init();
data.init();
data.downloadImage('https://pedagogy.lnu.edu.ua/wp-content/uploads/2016/11/Robert-Chaldyny_Psyhologyya-vliyaniya_Kak-nauchitsya-ubezhdat-y-dobivatsya-uspeha.pdf')