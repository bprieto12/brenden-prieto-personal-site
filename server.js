const express = require('express');
const app = express();
const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 4000);
const compression = require('compression');
const morgan = require('morgan');
const path = require('path');

// const dev = app.get('env') !== 'production';
// console.log(dev);
// if (!dev) {
app.disable('x-powered-by');
app.use(compression());
app.use(morgan('common'));

app.use(express.static(path.resolve(__dirname, 'client/build')));
console.log(PORT);
// app.get('/*', (req, res) => {
//     console.log(PORT);
//     console.log(path.resolve(__dirname, 'client/build', 'index.html'));
//     res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'))
// });

app.get("/api/test", (req, res) => {
    res.json({"test": "message"});
})
// }

// if (dev) {
//     app.use(morgan('dev'));
// }

app.listen(PORT, err => {
    if (err) throw err;

    console.log("Server started");
});