import fs from 'fs';

const routes = (app) => {
    app.get('/healthcheck', (req, res) => res.sendStatus(200)); // Health check

    app.get('/collections', (req, res) => {
        const data = JSON.parse(fs.readFileSync('./collections.json', 'utf8'));
        res.header('Content-Type', 'application/json');
        res.send(data);
    });
};

export default routes;