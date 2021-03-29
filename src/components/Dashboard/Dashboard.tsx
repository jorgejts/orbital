import React, { useState } from 'react';

import styles from './dashboard.module.scss';
import SelectorWrapper from '../SelectorWrapper/SelectorWrapper';
import { initialElements } from '../../constants/elements';
import { returnSelected } from '../../utils/helpers';

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  const [elements, setElements] = useState(initialElements);
  return (
    <div className={styles.container}>
      <div className={styles.elementsDisplayContainer}>
        <p>Selected elements</p>
        <SelectorWrapper elements={elements} setElements={setElements} />
        <div className={styles.elementsDisplay}>{returnSelected(elements).map((element) => element.name)}</div>
      </div>
    </div>
  );
};

export default Dashboard;
