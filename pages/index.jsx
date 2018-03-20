import React from 'react';
import { Grid } from 'gridx';

import { Template, Test, Button } from '../src';

export default () => (
  <Grid>
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
  </Grid>
);
