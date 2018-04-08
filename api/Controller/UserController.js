const util = require('util');
const _ = require('lodash');
const helpers = require('../helper');

module.exports = (app, mongoose) => {
  const userModel = require('../Model/UserModel')(mongoose);

  app.post('/user/regist', async (req, res) => {
    try{
      const base64Pw = _.isUndefined(req.body.password) ? '' : new Buffer(req.body.password).toString('base64');
      const user = new userModel({...req.body, password : base64Pw });
      const userSaved = await user.save();
      const token = helpers.getJwtToken(userSaved._id);

      return res.json({success: true, data : { token, id : userSaved._id }});
    } catch(err) {
      return res.json({success: false, message: (err.code == 11000) ? 'Email is existed' : err.message});
    }

  });

  app.post('/user/login', async (req, res) => {
    const base64Pw = _.isUndefined(req.body.password) ? '' : new Buffer(req.body.password).toString('base64');
    const email = _.isUndefined(req.body.password) ? '' : req.body.email;
    const keepLogin = req.body.keepLogin;
    if(!email && !base64Pw)
      return res.json({ success: false, message: 'Email or password is invalid' });

    try {
      const user = await userModel.findOne({ email, password: base64Pw });
      if(_.isEmpty(user))
        return res.json({ success: false, message: 'Email or password is invalid' });
      
      const token = helpers.getJwtToken(user._id, keepLogin);
      return res.json({
        success: true,
        data : {
          id: user._id,
          token
        }
      });
    } catch (err) {
      return res.status(403).end();
    }
  })

  app.get('/user/detail', async (req, res) => {
    const token = req.get('Authorization');
    try {
      const decoded = helpers.verifyJwtToken(token);
      const id = decoded.id;
      const user = await userModel.findOne({ _id : id })
        .select('id nickname email token books bookmark avatar')
        .exec();
        
      return _.isEmpty(user) ? res.status(400).end() : res.json({ success: true, data: user });
    } catch(err) {
      return res.status(403).end();
    }
  });

  app.put('/user/loginFb', async (req, res) => {
    const { email, nickname, fbId } = req.body;
    try {
      const userData = await userModel.findOne({ email, fbId }).select('id token').exec();
      if(userData)
        return res.json({ success: true, data: { token : helpers.getJwtToken(userData._id), id : userData._id } });
      
      const user = new userModel({ ...req.body, password: 'na' });
      const userSaved = await user.save();
      
      return res.json({success: true, data : { token : helpers.getJwtToken(userSaved._id), id : userSaved._id }});
    } catch(err) {
      return res.json({success: false, message: (err.code == 11000) ? 'Email is existed' : err.message});
    }
  });

  app.put('/user/logingg', async (req, res) => {
    const { email, nickname, ggId } = req.body;
    try {
      const userData = await userModel.findOne({ email, ggId }).select('id').exec();
      if(userData)
        return res.json({ success: true, data: { token : helpers.getJwtToken(userData._id), id : userData._id } });
      
      const user = new userModel({ ...req.body, password: 'na' });
      const userSaved = await user.save();
      
      return res.json({success: true, data : { token : helpers.getJwtToken(userSaved._id), id : userSaved._id }});
    } catch(err) {
      return res.json({success: false, message: (err.code == 11000) ? 'Email is existed' : err.message});
    }
  });
}