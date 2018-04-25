
var request = require('request');
request({
    url: 'https://api.gizwits.com/app/users',
    method: "POST",
    json: true,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Gizwits-Application-Id': 'dffd3515a9a042d98cff7449993a044e'

    },
    body: JSON.stringify(
      {"phone_id": "123456"}
    )
}, function(error, response, body) {
console.log(JSON.stringify(response) );
});
