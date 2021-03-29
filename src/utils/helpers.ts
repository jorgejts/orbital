import { ListElement } from './schemas/element';

export function returnSelected(elements: ListElement[]): ListElement[] {
  return elements.filter((element) => element.selected);
}

export function returnNotSelected(elements: ListElement[]): ListElement[] {
  return elements.filter((element) => !element.selected);
}
