const React = require('react');
const ReactDOM = require('react-dom');
const FormContainer = require('./FormContainer');

class Nav extends React.Component {
  render() {
    return (
      <div className='nav'>
        <h1>NAV</h1>
        <FormContainer />
      </div>
    )
  }
}

module.exports=Nav;