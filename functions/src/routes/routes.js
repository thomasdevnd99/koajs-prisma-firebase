import Router from "koa-router";
import * as accountRepository from "../repository/accountRepository";

const router = new Router();

const json = (param) => {
    return JSON.parse(
        JSON.stringify(
            param,
            (key, value) => (typeof value === "bigint" ? value.toString() : value) // return everything else unchanged
        )
    );
};

router.get('/accounts', async (ctx) => {
    const accounts = await accountRepository.list();

    return ctx.body = {data: json(accounts)}
});

export default router;
