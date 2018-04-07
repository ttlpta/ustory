const util = require('util');
const _ = require('lodash');
const helpers = require('../helper');

module.exports = (app, mongoose) => {
  const userModel = require('../Model/UserModel')(mongoose);

  app.post('/user/regist', async (req, res) => {
    try{
      const base64Pw = _.isUndefined(req.body.password) ? '' : new Buffer(req.body.password).toString('base64');
      const token = helpers.getJwtToken(req.body.email);
      const user = new userModel({...req.body, password : base64Pw, token });
      const userSaved = await user.save();
      
      return res.json({success: true, data : { token, id : userSaved._id }});
    } catch(err) {
      return res.json({success: false, message: (err.code == 11000) ? 'Email is existed' : err.message});
    }

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

  app.get('/user/detail', async (req, res) => {
    const token = req.get('Authorization');
    try {
      const decoded = helpers.verifyJwtToken(token);
      const email = decoded.email;
      const user = await userModel.findOne({ _id : req.query.id })
        .select('id nickname email token books bookmark avatar')
        .exec();
      
      return (user.email != decoded.email) ? res.status(400).end() : res.json({ success: true, data: user });
    } catch(err) {
      console.log(err);
      return res.status(403).end();
    }
  });

  app.put('/user/loginFb', async (req, res) => {
    const { email, nickname, fbId } = req.body;
    try {
      const userData = await userModel.findOne({ email, fbId }).select('id token').exec();
      const token = helpers.getJwtToken(req.body.email);
      if(userData)
        return res.json({ success: true, data: { token, id : userData._id } });
      
      const user = new userModel({ ...req.body, token, password: 'na' });
      const userSaved = await user.save();
      
      return res.json({success: true, data : { token, id : userSaved._id }});
    } catch(err) {
      return res.json({success: false, message: (err.code == 11000) ? 'Email is existed' : err.message});
    }
  });
}