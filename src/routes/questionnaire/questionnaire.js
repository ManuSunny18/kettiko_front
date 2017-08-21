import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './questionnaire.css';

class Questions extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };
  clicking = this.clicking.bind(this);
  state = {
      name:"",
      loading:true,
      recieved:false
    }
  componentDidMount(){
    
  }
  clicking(e){
    console.log(e);
    this.setState({
      loading:!this.state.loading
    },function(){
      console.log(this.state);
    })
  }
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <p>question</p>
          <button onClick={this.clicking}>test </button>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Questions);