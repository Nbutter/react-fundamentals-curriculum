const React = require('react');
const ReactDOM = require('react-dom');

class Hello extends React.Component {
  render() {
    return (
      <div className='container'>
        <h1>Hello, world!</h1>
      </div>
    )
  }
}

module.exports=Hello;