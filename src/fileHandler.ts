import path from "path";
import fs from "fs/promises";

export class Handler {
  protected directory: string;
  constructor() {
    this.directory = ((): string => {
      const dir = __dirname.split("\\").slice(0, 3);
      dir.push("Downloads");
      dir.push("image_downloads");
      return dir.join("\\");
    })();
  }
  public async mkdir() {
    try {
      await fs.mkdir(this.directory);
    } catch (error) {
      console.log("directory is used.");
    }
  }

  private getexts(url: string): string {
    return path.extname(url);
  }

  public async saveData(data: Buffer, url: string): Promise<boolean> {
    try {
        await fs.writeFile(
            `${this.directory}/${Date.now()}.${this.getexts(url)}`,
            data
        );
        return true;
    } catch (error) {
        return false;
    }
  }
}
