var React = require('react');
var QuestionApp = require('./component/QuestionApp.js');

var mainCom = React.render(
  <QuestionApp/>,
  document.getElementById('app')
)