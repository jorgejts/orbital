import React, { useCallback, useEffect, useState } from 'react';

import Button from '../../UIComponents/Button/Button';
import SearchBar from '../../UIComponents/SearchBar/SearchBar';

import styles from './selector.module.scss';
import { ListElement } from '../../../utils/schemas/element';
import SelectorList from '../SelectorList/SelectorList';
import { returnNotSelected, returnSelected } from '../../../utils/helpers';

interface SelectorProps {
  elements: ListElement[];
  setElements: (elements: ListElement[]) => void;
}

const Selector: React.FC<SelectorProps> = ({ elements, setElements }) => {
  const [selected, setSelected] = useState([] as ListElement[]);
  const [notSelected, setNotSelected] = useState([] as ListElement[]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    setSelected(returnSelected(elements));
    setNotSelected(returnNotSelected(elements));
  }, [elements]);

  const selectElement = useCallback(
    (id: string) => {
      const element = elements.find((element) => element.id === id);
      if (element) {
        element.selected = !element?.selected;
      }
      setElements([...elements]);
    },
    [elements, setElements]
  );

  const searchValueFunc = useCallback(({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(value);
  }, []);

  function showSearchedElements(elements: ListElement[]) {
    if (searchValue) {
      return elements.filter((element) => element.name.toLowerCase().includes(searchValue.toLowerCase()));
    } else {
      return elements;
    }
  }

  function clearAll() {
    const clearElements = elements.map((element) => {
      element.selected = false;
      return element;
    });

    setElements(clearElements);
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <SearchBar searchValue={searchValueFunc} />
        <Button onclick={clearAll}>Clear all</Button>
      </div>
      <div className={styles.elementsContainer}>
        <SelectorList elements={showSearchedElements(notSelected)} selectElement={selectElement} />
        <SelectorList elements={selected} selectElement={selectElement} />
      </div>
    </div>
  );
};

export default Selector;
