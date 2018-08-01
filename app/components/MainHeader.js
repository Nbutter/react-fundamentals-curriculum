const React = require('react');
const ReactDOM = require('react-dom');

class MainHeader extends React.Component {
  render() {
    return (
      <div className='mainheader'>
        <h3>Enter a City and State</h3>
      </div>
    )
  }
}

module.exports=MainHeader;