
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './thumbnail.css';

class Header extends React.Component {
  render() {
    return (
      <div className={s.thumbMain+" "+this.props.thumbCss}>
        <div className={s.imgBlock}>
            <img src={this.props.imgUrl}/>
        </div>
        <h3>{this.props.headTxt}</h3>
        <p>{this.props.descTxt}</p>
      </div>
    );
  }
}

export default withStyles(s)(Header);