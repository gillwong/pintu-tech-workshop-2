import { useContext, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import NewPage from "./pages/NewPage";
import { PageContext } from "./components/Providers";

function App() {
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState(null);
  const page = useContext(PageContext);

  useEffect(() => {
    let ignored = false;

    async function getItems() {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/items`
      );
      const data = await response.json();
      if (!ignored) {
        // console.log({ data });
        setProducts(data);
      }
    }

    getItems();
    return () => {
      ignored = true;
    };
  }, []);

  if (products === null) {
    return <div>Loading...</div>;
  }

  const filteredProducts = products
    .filter((product) => {
      if (categoryFilter === "All") return true;
      return product.category === categoryFilter;
    })
    .filter((product) =>
      product.name.toLowerCase().includes(searchText.trim().toLowerCase())
    );

  return (
    <main>
      <Navbar
        searchText={searchText}
        setSearchText={setSearchText}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
      />
      {page === "Home" && (
        <HomePage products={filteredProducts} categoryFilter={categoryFilter} />
      )}
      {page === "New" && <NewPage setProducts={setProducts} />}
    </main>
  );
}

export default App;
