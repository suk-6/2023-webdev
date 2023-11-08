import express from 'express';
import Logger from './utils/logger.js';
import routes from './routes.js';
import config from 'config';

const app = express();



const port = config.get('serverSetting.port');

app.listen(port, () => {
    Logger.info(`Server is listening on port ${port}`);
    routes(app);
});