import React from 'react';

import styles from './searchBar.module.scss';

interface SearchBarProps {
  searchValue: (value: React.ChangeEvent<HTMLInputElement>) => void;
}

const SeachBar: React.FC<SearchBarProps> = ({ searchValue }) => {
  return (
    <div className={styles.container}>
      <input type="text" onChange={searchValue} />
    </div>
  );
};

export default SeachBar;
