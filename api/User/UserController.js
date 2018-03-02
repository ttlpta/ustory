
module.exports = (app) => {
    app.post('/user/regist', (req, res) => {
        res.json({test : 'a'});
    });
}