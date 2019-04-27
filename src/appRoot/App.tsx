import * as React from 'react';

import Layout from 'components/Layout/Layout';
import Routes from './routes/index';

class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <Layout>
          <Routes />
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
