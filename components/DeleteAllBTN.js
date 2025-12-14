import {HideElements} from './HideElements.js';

export function DeleteAllBTN(btn) {
  btn.addEventListener('click', () => {
    localStorage.clear();
    HideElements(btn);
  });
}
