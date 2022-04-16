import * as React from 'react';
import { createRoot } from 'react-dom/client';

describe('it', () => {
  it('renders without crashing', () => {
    const container = document.createElement('div');

    const root = createRoot(container);
    root.render(<h1>Hello world!</h1>);
  });
});
