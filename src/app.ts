import express from 'express';

import { Application } from 'express'

class App {

    public app: Application
    public port: number

    constructor(appInt: { port: number, middleware: any, controller: any }) {
        this.app = express()
        this.port = appInt.port
        this.routes(appInt.controller)
        this.middlewares(appInt.middleware) 
    } 

    public listen(){
        this.app.listen(this.port, () => {
            console.log(`Aap has started on port ${this.port}`)
        })
    }  

    private middlewares(middlewares: any){
        middlewares.forEach(middleware => {
            this.app.use(middleware)
        });
    }

    private routes(controllers: any){
        controllers.forEach(controller => {
            console.log(controller.path)
            this.app.use(controller.path, controller.router)
        });

    } 
}

export default App