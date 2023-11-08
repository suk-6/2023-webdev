import logger from 'pino';
import dayjs from 'dayjs';

const log = logger({
    transport: {
        target: 'pino-pretty',
        options: {
            levelFirst: true,
            translateTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
            ignore: 'pid,hostname',
        },
    },
});

export default log;