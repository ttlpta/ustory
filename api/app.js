
const user = require('./routes/user');

module.exports = app => {
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