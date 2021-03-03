import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Home from './Home';

let container = null;
beforeEach(() => {
  // met en place un élément DOM comme cible de rendu
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // nettoie en sortie de test
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('s’affiche avec ou sans nom', () => {
  act(() => {
    render(<Home />, container);
  });
  expect(container.querySelector('button').textContent).toBe('Récupérer les liens');
});
