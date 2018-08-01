const React = require('react');
const ReactDOM = require('react-dom');

class FormContainer extends React.Component {
  render() {
    return (
      <div className='container'>
        <form>
        	<input type='text' placeholder='City, State'>
        	</input>
        	<button>
        		Get Weather
        	</button>
        </form>
      </div>
    )
  }
}

module.exports=FormContainer;