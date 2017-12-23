'use strict';

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Yooooo'
  ),
  React.createElement(
    'p',
    null,
    'This is JSX! This is ',
    React.createElement(
      'b',
      null,
      'Sparta'
    ),
    '!'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
