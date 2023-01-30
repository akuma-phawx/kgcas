import './search-box.styles.scss';
const SearchBox = ({ searchChange }) => {
  return (
    <div className="search__container">
      <input
        className="search__input"
        type="text"
        placeholder="Search Game Title"
        autoComplete="off"
        onChange={searchChange}
      />
      <p>Note: Some games might not be playable.</p>
    </div>
  );
};

export default SearchBox;
