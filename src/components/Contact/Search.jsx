const Search = ({ onSearch, value }) => {
  return (
    <input
      type="search"
      name="searchTerm"
      value={value}
      placeholder="Search Contact"
      className="search-input"
      onChange={(e) => onSearch(e)}
    />
  );
};

export default Search;
