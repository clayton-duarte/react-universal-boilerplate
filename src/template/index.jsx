import Proptypes from 'prop-types';
import Head from 'next/head';
import React from 'react';

import GlobalStyles from './globalStyles';

const Template = props => (
  <GlobalStyles>
    <Head>
      <title>{props.title || 'Next App'}</title>
    </Head>
    {props.children}
  </GlobalStyles>
);

Template.propTypes = {
  children: Proptypes.node.isRequired,
  title: Proptypes.string,
};

Template.defaultProps = {
  title: 'No Title',
};

export default Template;
