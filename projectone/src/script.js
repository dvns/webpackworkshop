var data = require('./data');

var app = document.getElementById('app');
app.innerHTML = `<p>Hello ${data.location}!</p>`;

if (module.hot) {
  module.hot.accept();
}
