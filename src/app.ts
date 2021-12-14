import express, { Application } from "express";

export class App {
  private application?: Application;

  private constructor() {
    this.application = express();
  }

  static startUp(port: number | string = 3333, cb?: () => void) {
    const app = new App();
    app.application?.listen(port, () => {
      if (cb) {
        cb();
      }
      console.log(`App listen on port ${port}`);
    });
  }
}
