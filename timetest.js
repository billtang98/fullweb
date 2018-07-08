var moment = require('moment');
moment.locale('en-ca');
test = moment().format('LLL');
console.log(test);