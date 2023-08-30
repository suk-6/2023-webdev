import http from 'node:http';
import { fileURLToPath } from 'node:url';
import { mkdir } from 'node:fs/promises';
import formidable from 'formidable';

const UPLOAD_DIR = new URL('./uploads', import.meta.url);
await mkdir(UPLOAD_DIR, { recursive: true });

http.createServer(async (req, res) => {
    const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
        'Access-Control-Max-Age': 2592000, // 30 days
    };

    if (req.method === 'OPTIONS') {
        res.writeHead(204, headers);
        res.end();
        return;
    }

    if (req.url === '/upload' && req.method.toLowerCase() === 'post') {
        const form = formidable({ keepExtensions: true, uploadDir: fileURLToPath(UPLOAD_DIR) });
        form.parse(req, (err, fields, files) => {
            if (err) {
                console.error('Some Error: ', err);
                res.writeHead(500, headers);
                res.end(JSON.stringify({ error: err }));
                return;
            }

            const { file: [{ filepath, originalFilename, mimetype, size }] } = files;
            console.log('Save File: ', { filepath, originalFilename, mimetype, size });

            res.writeHead(200, headers);
            res.end(JSON.stringify({ fields, files }));
        });
        return;
    }
}
).listen(3020, () => {
    console.log('Listening on http://localhost:3020');
});