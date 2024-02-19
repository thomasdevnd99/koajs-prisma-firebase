import * as functions from 'firebase-functions';

const {app} = functions.config();

export default {
    dbUrl: app.db_url
};
