import React, { useState } from 'react';

import Button from '../UIComponents/Button/Button';
import Selector from './Selector/Selector';

import styles from './selectorWrapper.module.scss';
import { ListElement } from '../../utils/schemas/element';

interface SelectorWrapperProps {
  elements: ListElement[];
  setElements: (elements: ListElement[]) => void;
}

const SelectorWrapper: React.FC<SelectorWrapperProps> = ({ elements, setElements }) => {
  const [toggleSelector, setToggleSelector] = useState(false);
  return (
    <div className={styles.container}>
      <Button onclick={() => setToggleSelector(!toggleSelector)}>Select elements</Button>
      {toggleSelector && (
        <>
          <Selector elements={elements} setElements={setElements} />
          <div className={styles.layout} onClick={() => setToggleSelector(false)}></div>
        </>
      )}
    </div>
  );
};

export default SelectorWrapper;
