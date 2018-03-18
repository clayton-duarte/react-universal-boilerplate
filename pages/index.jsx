import React from 'react';
import { Template, Test, Button } from '../src';

export default () => (
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
);
