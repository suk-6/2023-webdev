import Uppy from '@uppy/core';
import Dashboard from '@uppy/dashboard';
import XHRUpload from '@uppy/xhr-upload';

import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';

const uppy = new Uppy({
    debug: true,
    autoProceed: false,
})

uppy.use(Dashboard, {
    inline: true,
    target: 'body',
    plugins: [],
})

uppy.use(XHRUpload, {
    endpoint: 'http://localhost:3020/upload',
})