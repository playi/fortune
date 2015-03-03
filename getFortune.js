var exec = require('child_process').exec;
var fs   = require('fs');

var fortuneCmd = 'fortune';

if (fs.existsSync(process.env.FORTUNE_PATH)) {
  fortuneCmd = process.env.FORTUNE_PATH;
} else if (process.env.FORTUNE_PATH) {
  console.error("couldn't find fortune on path " + process.env.FORTUNE_PATH)
  process.exit(1)
}

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