const CONF = require('./Config/conf');
const rq = require('request-promise');

module.exports = (content) => {
    rq.post('https://notify-api.line.me/api/notify', {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            'Cache-Control' : "no-cache",
            'Authorization' : "Bearer " + CONF.token
        },
        form: {
            'message': content
        }
    }).then(data => {
        console.log(content, data);
    }).error(err => {
        console.log(err);
    });
}