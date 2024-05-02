import express from 'express';
const app = express();
app.use(express.json());

const PORT = 4000;


app.get('/', (req, res) => {
    res.send('<html><body><h1>Hello World</h1></body></html>');
    });

app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });