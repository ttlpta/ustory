
const user = require('./routes/user');
const helpers = require('./helper');

module.exports = app => {
  app.use(function (req, res, next) {
    if(req.path.includes('auth')) {
      const token = req.get('Authorization');
      if(!token)
        return res.status(403).end();

      try {
        helpers.verifyJwtToken(token);
      } catch(err) {
        return res.status(403).json(err);
      }
    } 
    next();
  });

  app.use('/user', user);

  // if (app.get('env') === 'development') {
  //   app.use((err, req, res, next) => {
  //     res.status(err.status || 500);
  //     if (err.errors) {
  //       res.json({ error: true, errors: err.errors, message: err.message });
  //     } else {
  //       res.send(err.stack);
  //     }
  //   });
  // }

  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    if (err.errors && Object.keys(err.errors).length) {
      res.json({
        error: true,
        errors: err.errors || {},
      });
    } else {
      res.send(err.message);
    }
  });
};