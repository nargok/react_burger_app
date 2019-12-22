import React from 'react';

import Layout from './components/Layout/Layout';
import BugerBulder from './containers/BurgerBuilder/BurgerBuilder';

function App() {
  return (
    <div>
      <Layout>
        <BugerBulder />
      </Layout>
    </div>
  );
}

export default App;
