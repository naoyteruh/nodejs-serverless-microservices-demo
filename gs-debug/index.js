const debug = require('debug.js');


const traceApi = require('@google-cloud/trace-agent').start({
    serviceContext: {
        service: 'gs-debug'
    }
});
const debug = require('@google-cloud/debug-agent').start();
//   require('@google-cloud/profiler').start();

/**
 * Generic background Cloud Function to be triggered by Cloud Storage.
 *
 * @param {object} file The Cloud Storage file metadata.
 * @param {object} context The event metadata.
 */
exports.helloGCS = (file, context) => {
    
    const contextSpan = traceApi.createChildSpan({name: 'context'});
    debug.debugContext(context);    
    contextSpan.endSpan();
    const fileSpan = traceApi.createChildSpan({name: 'file'});
    debug.debugFile(file);
    fileSpan.endSpan();

};