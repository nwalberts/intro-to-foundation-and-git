import express from "express"
import articlesRouter from "./articlesRouter.js"

const rootRouter = new express.Router()

rootRouter.use("/", (req, res) => {
    res.render("articles/index")
})
rootRouter.use("/articles", articlesRouter)

export default rootRouter