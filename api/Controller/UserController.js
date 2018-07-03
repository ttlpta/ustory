const _ = require('lodash');

const configs = require('../configs');
const helpers = require('../helper');
const userModel = require('../Model/UserModel');

var UserController = function () {};

UserController.prototype.regist = async (req, res, next) => {
  try{
    const base64Pw = _.isUndefined(req.body.password) ? '' : new Buffer(req.body.password).toString('base64');
    const expriedTime = helpers.getCurrentUnixTime() + configs.jwtExpiredTine * 60;
    const user = new userModel({...req.body, password : base64Pw, expriedTime });
    const userSaved = await user.save();
    const token = helpers.getJwtToken(userSaved._id);

    return res.json(helpers.success({ token, id : userSaved._id }));
  } catch(err) {
    return res.status(400).json(helpers.fail(err.code == 11000 ? 'Email is existed' : err.message));
  }
}

UserController.prototype.loginFb = async (req, res, next) => {
  const { email, fbId } = req.body;
  try {
    const userData = await userModel.findOne({ email, fbId }).select('id token').exec();
    if(userData)
      return res.json({ success: true, data: { token : helpers.getJwtToken(userData._id), id : userData._id } });
    
    const expriedTime = helpers.getCurrentUnixTime() + configs.jwtExpiredTine * 60;
    const user = new userModel({ ...req.body, password: 'na', expriedTime });
    const userSaved = await user.save();
    
    return res.json(helpers.success({ token : helpers.getJwtToken(userSaved._id), id : userSaved._id }));
  } catch(err) {
    return res.status(400).json(helpers.fail(err.code == 11000 ? 'Email is existed' : err.message));
  }
}

UserController.prototype.login = async (req, res, next) => {
  const base64Pw = _.isUndefined(req.body.password) ? '' : new Buffer(req.body.password).toString('base64');
  const email = _.isUndefined(req.body.email) ? '' : req.body.email;
  const keepLogin = req.body.keepLogin;
  if(!email || !base64Pw)
    return res.status(400).end();

  try {
    let user = await userModel.findOne({ email, password: base64Pw });
    if(_.isEmpty(user))
      return res.status(422).json({ message: 'Email or password is invalid' });
    
    const token = helpers.getJwtToken(user._id, keepLogin);
    const expriedTime = keepLogin ? helpers.getCurrentUnixTime() + configs.jwtExpiredLongTine * 60 
      : helpers.getCurrentUnixTime() + configs.jwtExpiredTine * 60;
    user.set({ 'expriedTime' : expriedTime });
    user = await user.save();
    
    return res.json(helpers.success({id: user._id, token}));
  } catch (err) {
    return res.status(400).end();
  }
}

UserController.prototype.logingg = async (req, res, next) => {
  const { email, ggId } = req.body;
  try {
    const userData = await userModel.findOne({ email }).select('id').exec();
    if(userData)
      return res.json(helpers.success({ token : helpers.getJwtToken(userData._id), id : userData._id }));
    
    const expriedTime = helpers.getCurrentUnixTime() + configs.jwtExpiredTine * 60;
    const user = new userModel({ ...req.body, password: 'na', expriedTime });
    const userSaved = await user.save();

    return res.json(helpers.success({ token : helpers.getJwtToken(userSaved._id), id : userSaved._id }));
  } catch(err) {
    return res.status(400).json(helpers.fail(err.code == 11000 ? 'Email is existed' : err.message));
  }
}

UserController.prototype.detail = async (req, res, next) => {
  const token = req.get('Authorization');
  try {
    const decoded = helpers.verifyJwtToken(token);
    const id = decoded.id;
    const user = await userModel.findOne({ _id : id })
      .select('id nickname email expriedTime books bookmark avatar')
      .exec();
      
    return _.isEmpty(user) || helpers.isExpiredTime(user.expriedTime) ? res.status(400).end() : res.json({ success: true, data: user });
  } catch(err) {
    return res.status(400).end();
  }
}

UserController.prototype.logout = async (req, res, next) => {
  const token = req.get('Authorization');
  try {
    const decoded = helpers.verifyJwtToken(token);
    const id = decoded.id;
    const result = await userModel.update({ _id: id }, { $set: { expriedTime: helpers.getCurrentUnixTime() }});
    
    return result.ok ? res.json({ success: true, data: {} }) : res.status(400).end();
  } catch(err) {
    return res.status(400).end();
  }
}

module.exports = new UserController();
