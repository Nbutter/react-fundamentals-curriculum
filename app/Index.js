const React = require('react');
const ReactDOM = require('react-dom');
require('./index.css');
const Hello = require('./components/Hello');

ReactDOM.render(<Hello />, document.getElementById('hello'));