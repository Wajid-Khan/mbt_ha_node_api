const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/test', (req, res) => {
    res.send('Hostaway Mabaat');
});

app.post('/api/webhook', (req, res) => {
    const event = req.body;
    console.log('Date:-------------' + new Date());
    console.log('Received event:', event);
    res.status(200).send('Event received');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});