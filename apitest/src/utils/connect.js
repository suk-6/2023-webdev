import mongoose from 'mongoose';
import config from 'config';
import logger from './logger';

async function connect() {
    const dbUri = config.get('dbUri');
    try {
        await mongoose.connect(dbUri);
        logger.info('Database connected!');
    } catch (error) {
        logger.error('db error', error);
        process.exit(1);
    }
}

export default connect;