import React from 'react';

import Dashboard from './components/Dashboard/Dashboard';

import styles from './root.module.scss';

interface RootProps {}

const Root: React.FC<RootProps> = () => {
  return (
    <div className={styles.container}>
      <Dashboard />
    </div>
  );
};

export default Root;
