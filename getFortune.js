var exec = require('child_process').exec;

var fortuneCmd = process.env.FORTUNE_PATH || 'fortune'

var getFortune = function(req, res, next){
  exec(fortuneCmd, function(err, stdout, stderr){
    if (err) {
      return next(err);
    }
    console.log(stdout);
    res.set('fortune', stdout);
    next();
  });
};

module.exports = getFortune;