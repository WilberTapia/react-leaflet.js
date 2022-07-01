const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('build'))
    app.listen(PORT, console.log(`Listening on PORT ${PORT}`))
    const path = require('path');
    app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
    });
}