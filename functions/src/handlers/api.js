import App from 'koa';
import router from "../routes/routes";

const api = new App();
// Register all routes for the application
api.use(router.allowedMethods());
api.use(router.routes());

export default api;
