import React from 'react';
import { Row } from 'gridx';

import { Template, Test, Button } from '../src';

const style = {
  height: '100vh',
};

export default () => (
  <Row justify="center" align="center" style={style}>
    <Template title="Test Page">
      <Button>
        <Test />
      </Button>
      {/* <p>Styled</p>
    <style jsx>
      {`
        p {
          color: cyan;
        }
      `}
    </style> */}
    </Template>
  </Row>
);
