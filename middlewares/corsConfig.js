const cors = require('cors');

const corsOptions = {
    credentials: true,
    origin: 'https://step-up-frontend.vercel.app'
};

/*



const corsOptions = {
    credentials: true,
    origin: 'http://localhost:5173/'
};

*/

module.exports = cors(corsOptions);
