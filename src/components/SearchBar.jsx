export default function SearchBar({ text, setSearchFilter }) {
  return (
    <div className="space-x-2">
      <label htmlFor="search-input" className="text-lg">
        Search
      </label>
      <input
        id="search-input"
        type="text"
        className="border border-black rounded-md py-0.5 px-2 text-lg"
        value={text}
        onChange={(e) => setSearchFilter(e.target.value)}
      />
    </div>
  );
}
