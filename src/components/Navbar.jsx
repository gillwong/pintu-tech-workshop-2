import Navbtn from "./Navbtn";
import SearchBar from "./SearchBar";

export default function Navbar({
  categoryFilter,
  setCategoryFilter,
  searchText,
  setSearchText,
}) {
  return (
    <nav className="bg-white z-10 flex space-x-5 justify-center items-center py-3 px-5 border-b border-black sticky top-0">
      <SearchBar text={searchText} setSearchFilter={setSearchText} />
      <Navbtn
        isActive={categoryFilter === "All"}
        onClick={() => setCategoryFilter("All")}
      >
        All
      </Navbtn>
      <Navbtn
        isActive={categoryFilter === "Electronics"}
        onClick={() => setCategoryFilter("Electronics")}
      >
        Electronics
      </Navbtn>
      <Navbtn
        isActive={categoryFilter === "Clothes"}
        onClick={() => setCategoryFilter("Clothes")}
      >
        Clothes
      </Navbtn>
    </nav>
  );
}
