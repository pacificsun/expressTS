import express, { Request, Response } from 'express'

class AuthController {
    public path = "/auth"
    public router = express.Router()

    constructor() {
        this.initRoutes()
    }

    private initRoutes(){
        this.router.post("/signUp", this.signUp)
        this.router.post("/signIn", this.signIn)
        this.router.post("/verify", this.verify)
    }
 
    signUp(req: Request, res: Response){

    }
    signIn(req: Request, res: Response){}
    verify(req: Request, res: Response){}
}