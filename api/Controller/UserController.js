const _ = require('lodash');
const jwt = require('jsonwebtoken');
const configs = require('../configs');

module.exports = (app, mongoose) => {
  const userModel = require('../Model/UserModel')(mongoose);

  app.post('/user/regist', (req, res) => {
    const base64Pw = _.isUndefined(req.body.password) ? '' : new Buffer(req.body.password).toString('base64');
    const token = jwt.sign({ email : req.body.email }, configs.jwtToken, {
      expiresIn: configs.jwtExpiredTine // expires in 24 hours
    });

    const user = new userModel({...req.body, password : base64Pw, token });
    user.save((err, userData) => {
      if(err){
        return res.json({success: false, message: (err.code == 11000) ? 'Email is existed' : err.message});
      }
      return res.json({success: true, data : { token, id : userData._id }});
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

  app.get('/user/detail', (req, res) => {
    const token = req.get('Authorization');
    try {
      const decoded = jwt.verify(token, configs.jwtToken);
      const email = decoded.email;
      userModel.findOne({ _id : req.query.id })
        .select('id nickname email token books bookmark')
        .exec((err, user) => {
        if(err) return res.status(400).end();
        if(user.email != decoded.email) return res.status(400).end();
        
        return res.json({ success: true, data: user });
      });
    } catch(err) {
      console.log(err);
      return res.status(403).end();
    }
  });

  app.put('/user/loginFb', (req, res) => {
    
  });
}