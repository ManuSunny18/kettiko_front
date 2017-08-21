/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.css';
import Link from '../Link';

class Footer extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Link className={s.link} to="/">FAQS</Link>
          <Link className={s.link} to="/admin">Abput Kettiko</Link>
          <Link className={s.link} to="/privacy">Terms</Link>
          <Link className={s.link} to="/not-found">Privacy</Link>

          <div className={s.fr}>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Footer);