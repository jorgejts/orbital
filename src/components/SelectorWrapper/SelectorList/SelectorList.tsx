import React from 'react';

import { ListElement } from '../../../utils/schemas/element';
import SelectorElement from '../SelectorElement/SelectorElement';
import styles from './selectorList.module.scss';

interface SelectorListProps {
  elements: ListElement[];
  selectElement: (id: string) => void;
}

const SelectorList: React.FC<SelectorListProps> = ({ elements, selectElement }) => {
  return (
    <div className={styles.container}>
      {elements.map((element) => (
        <SelectorElement key={element.id} element={element} selecElement={selectElement} />
      ))}
    </div>
  );
};

export default SelectorList;
