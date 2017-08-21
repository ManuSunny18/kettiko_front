/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import pageCss from '!!isomorphic-style-loader!css-loader?modules=false!./page.css';
import bannerUrl from './kettiko_01.jpg';
import ThumbNail from '../../components/thumbnails/thumbnail.js';
class Home extends React.Component {
   static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    var thumbCss={
      thumbCss:s.homeThumb,
      imgUrl:bannerUrl,
      headTxt:"Two way matches",
      descTxt:"It's when your preferences and match's preferences match. All your matches will be 2 way matches. It works better ex ea commodo-consequat. Duis"
    }
    return (
      <div className={s.root}>
        <div className={s.container+" "+ s.txtCenter}>
          <h1>Happiness is marrying</h1>
          <p>the one who accepts who you're</p>
          <div className={s.bannerImg}>
            <img src={bannerUrl}/>
          </div>
          <p>to find your happiness</p>
          <div>
            <button className={s.primaryBtn}>Join Free Now</button>
          </div>
        </div>

        <div className={s.hrLine}></div>

        <div className={s.container+" "+s.preferMain}>
          <p>Say your preferences</p>
          <h2>Kettiko handpicks the best matches for you.</h2>
          <div className={s.row+" "+s.col2}>
              <div className={s.col50}>
                <div className={s.imgBlock}>
                  <img src={bannerUrl}/>
                </div>
                <a>Build your profile</a>
                <p>Say about yourself: your likes and dislikes and build your cool profile.<br/>It's fun. It's done</p>
              </div>
              <div className={s.col50}>
                  <div className={s.imgBlock}>
                    <img src={bannerUrl}/>
                  </div>
                  <a>Recommended matches</a>
                  <p>Your list of best matches based on our preferences. Select the one you like the most. so simple.</p>
                </div>
            </div>
        </div>

        <div className={s.container+" "+ s.txtCenter+" "+s.storyBoard}>
          <h3>The beautiful story begins!</h3>
          <div className={s.row+" "+s.cardBanner}>
            <div className={s.cardImg}>
              <img src={bannerUrl}/>
            </div>
            <div className={s.cardDesc}>
                <p>Hi, I'm an unmarried Malayali.</p>
                <p>My first name is <span className={s.myName}>Sobilal</span></p>
                <div>
                  <button className={s.primaryBtn}>Find my matches</button>
                </div>
            </div>
          </div>
        </div>

        <div className={s.container+" "+s.ftrBlock}>
          <p>Features to help you choose</p>
          <h2>The happy marriage.Easily.</h2>
          <div className={s.rowW+" "+s.col3}>
              <ThumbNail {...thumbCss}  />
              <ThumbNail {...thumbCss}  />
              <ThumbNail {...thumbCss}  />
              <ThumbNail {...thumbCss}  />
              <ThumbNail {...thumbCss}  />
              <ThumbNail {...thumbCss}  />
              <ThumbNail {...thumbCss}  />
              <ThumbNail {...thumbCss}  />
              <ThumbNail {...thumbCss}  />
          </div>
          <div className={s.top100+" "+s.txtCenter}>
            <p>What are you waiting for?</p>
            <button className={s.primaryBtn}>Join Free Now</button>
          </div>
        </div>

      </div>
    );
  }
}

export default withStyles(s,pageCss)(Home);
