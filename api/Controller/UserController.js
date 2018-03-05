const _ = require('lodash');

module.exports = (app, mongoose) => {
  const userModel = require('../Model/UserModel')(mongoose);

  app.post('/user/regist', (req, res) => {
    const base64Pw = _.isUndefined(req.body.password) ? '' : new Buffer(req.body.password).toString('base64');
    const user = new userModel({...req.body, password : base64Pw });
    user.save((err) => {
      if(err){
        return res.json({success: false, message: (err.code == 11000) ? 'Email is existed' : err.message});
      }
      return res.json({success: true});
    });
  });

  app.post('/user/login', (req, res) => {
    const base64Pw = _.isUndefined(req.body.password) ? '' : new Buffer(req.body.password).toString('base64');
    const email = _.isUndefined(req.body.password) ? '' : req.body.email;
    if(!email && !base64Pw){
      return res.json({});
    }
    userModel.findOne({ email, password: base64Pw }, (err, user) => {
      if(err) return res.status(500).end();
      
      if(_.isEmpty(user))
        return res.json({ success: false, message: 'Email or password is invalid' });

      return res.json({
        success: true,
        user : {
          id: user._id,
          email: user.email
        }
      });
    });
  })
}