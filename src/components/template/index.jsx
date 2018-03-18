import Proptypes from 'prop-types';
import Head from 'next/head';
import React from 'react';

const Template = props => (
  <main>
    <Head>
      <title>{props.title || 'Next App'}</title>
    </Head>
    {props.children}
  </main>
);

Template.propTypes = {
  children: Proptypes.node.isRequired,
  title: Proptypes.string,
};

Template.defaultProps = {
  title: 'No Title',
};

export default Template;
