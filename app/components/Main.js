const React = require('react');
const ReactDOM = require('react-dom');
const MainHeader = require('./MainHeader');
const FormContainer = require('./FormContainer')

class Main extends React.Component {
  render() {
    return (
      <div className='home-container'>
        <MainHeader />
        <FormContainer />
      </div>
    )
  }
}

module.exports=Main;