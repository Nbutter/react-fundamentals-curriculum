const React = require('react');
const ReactDOM = require('react-dom');
const Nav = require('./Nav');
const Main = require('./Main');

class Home extends React.Component {
  render() {
    return (
    	<div className='container'>
    		<Nav />
    		<Main />
    	</div>

    )
  }
}

module.exports=Home;