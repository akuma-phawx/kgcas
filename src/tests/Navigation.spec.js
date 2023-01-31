import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navigation from '../routes/navigation/navigation.component';

afterEach(cleanup);

describe('Navigation component', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );
    expect(container).toBeTruthy();
  });

  it('has a header with a brand link and two main links', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    const brandLink = screen.getByText('KanonGaming');
    const gamesLink = screen.getByText('Games');
    const slotsLink = screen.getByText('Slots');

    expect(brandLink).toBeTruthy();
    expect(gamesLink).toBeTruthy();
    expect(slotsLink).toBeTruthy();
  });
});
