import React from 'react';

import navigation from '../../configs/navigations';

import Navigation from '../Navigation';

const AppHeader = () => {
  return (
    <header>
      <Navigation items={navigation} />
    </header>
  );
};

export default AppHeader;
