module.exports = function(app, db) {
    // Create route
    app.post('/notes', (req, res) => {
        // Create notes here
        console.log(req.body)
        res.send('Hello')
    })
}

