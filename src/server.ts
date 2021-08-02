import App from "./app";

import HomeController from './controller/home.controller'

const app = new App({
    port: 3000,
    controller:[
        new HomeController()
    ],
    middleware:[]
})

app.listen()