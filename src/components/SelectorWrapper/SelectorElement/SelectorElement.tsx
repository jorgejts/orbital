import React from 'react';
import { ListElement } from '../../../utils/schemas/element';

import styles from './selectorElement.module.scss';

interface SelectorElementProps {
  element: ListElement;
  selecElement: (id: string) => void;
}

const SelectorElement: React.FC<SelectorElementProps> = ({ element, selecElement }) => {
  return (
    <button className={styles.container} onClick={() => selecElement(element.id)}>
      {element.name}
    </button>
  );
};

export default SelectorElement;
