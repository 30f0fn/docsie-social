import React from 'react';
import {Helmet} from 'react-helmet';

import Router from './utilities/router.js';
import OuterHeader from './components/outer-header.js';

const App = () =>
      <div className="ma3 mw7">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Docsie Social</title>
        </Helmet>
        <OuterHeader/>
        <Router/>
      </div>;


export default App;

