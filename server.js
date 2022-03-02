const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const axios = require('axios')

const app = module.exports = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors())
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head class="h-full">
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="h-full">
        <div id="app" class="h-full flex items-center flex-col py-20 px-5 md:px-20">
            <h1 class="text-4xl font-bold text-gray-500">CORS Proxy</h1>
            <p class="text-gray-400">Simple tool to bypass CORS Issues</p>
            <p>Documentation is coming soon, but you can message me on whatsapp for usage</p>
            <div class="p-3 bg-green-400 text-gray-100 rounded-full mt-3">+2347088445549</div>
        </div>
    </body>
    </html>
    `)
})

app.post('/url', (req, res) => {
    axios.get(req.body.url)
    .then(response => {
        res.send(response.data)
    })
    .catch(err => {
        console.log(err);
        res.send(err.data)
    })
})

app.post('/post', (req, res) => {
    axios.post(req.body.url, req.body.data)
    .then(response => {
        res.send(response.data)
    })
    .catch(err => {
        console.log(err);
        res.send(err.data)
    })
})

app.listen(process.env.PORT || 4000, () => {
    console.log('Server started...');
})