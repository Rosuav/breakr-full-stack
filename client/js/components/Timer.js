import React from 'react';
import {connect} from 'react-redux';

// const Timer = () => {
// 	return (
// 		<div>Timer!</div>
// 	)
// }

//running timer
//animated timer
//buttons to increment/decrement time
//begin button


var Timer = React.createClass({
  render: function() {
    console.log('TIME REMAINING', this.props.timeRemaining);
    console.log('START:::', this.props.start);
    return (
      <div> 
      	<div>this is TIME REMAINING{this.props.timeRemaining}</div>
		<img src="http://i.giphy.com/gHmCa7Qq1bqj6" width="480" height="907" />
		<div>this is START {this.props.start}</div>
	  </div>
    );
  }
});

const mapStateToProps = (state, props) => {

	return {
		start: state.start,
		timeRemaining: state.timeRemaining
	}
}

let Container = connect(mapStateToProps)(Timer);

module.exports = Container;