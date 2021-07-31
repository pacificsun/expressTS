import express from 'express';

import { Application } from 'express'

class App {

    public app: Application
    public port: number

    constructor(appInt: { port: number, middleware: any, controller: any }) {
        this.app = express()
        this.port = appInt.port

    } 

    public listen(){
        this.app.listen(this.port, () => {
            console.log(`Aap has started on port ${this.port}`)
        })
    }   
}

export default App