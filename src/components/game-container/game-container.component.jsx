import Game from '../game/game.component';
import games from '../../game-data.json';
import SearchBox from '../search-box/search-box.component';
import { Fragment, useState, useEffect } from 'react';
import './game-container.component.styles.scss';

const GameContainer = () => {
  // Use state to keep track of the filtered games and the search field value
  const [filteredGames, setFilteredGames] = useState(games);
  const [searchField, setSearchField] = useState('');

  // Use `useEffect` hook to update filtered games whenever `searchField` changes
  useEffect(() => {
    setFilteredGames(
      games.filter((game) =>
        game.title.toLowerCase().includes(searchField.toLowerCase().trim())
      )
    );
  }, [searchField]);

  return (
    <Fragment>
      {/* Pass a callback to the `SearchBox` component that updates the `searchField` value */}
      <SearchBox searchChange={(e) => setSearchField(e.target.value)} />
      <div className="game-list-container">
        {filteredGames.map((game) => (
          <Game key={game.id} game={game} />
        ))}
      </div>
    </Fragment>
  );
};

export default GameContainer;
