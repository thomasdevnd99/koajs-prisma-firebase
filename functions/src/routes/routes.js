import Router from "koa-router";

const router = new Router();

router.get('/hello', async (ctx) => {
    return ctx.body = {message: "Hello world"}
});

export default router;
