const _ = require('lodash');

module.exports = (app, mongoose) => {
  const userModel = require('../Model/UserModel')(mongoose);
  app.post('/user/regist', (req, res) => {
    const base64Pw = _.isUndefined(req.body.password) ? '' : new Buffer(req.body.password).toString('base64');
    const user = new userModel({...req.body, password : base64Pw });
    user.save((err) => {
      if(err){
        if(err.message.indexOf('duplicate key error') !== -1) {
          return res.json({success: false, message: 'Email is existed'});
        }
        
        return res.json({success: false, message: err.message});
      }
      return res.json({success: true});
    });
  });
}