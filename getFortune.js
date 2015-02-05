var exec = require('child_process').exec;

var getFortune = function(req, res, next){
  exec("fortune", function(err, stdout, stderr){
    if (err) {
      return next(err);
    }
    console.log(stdout);
    res.set('fortune', stdout);
    next();
  });
};

module.exports = getFortune;