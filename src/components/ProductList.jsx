import { useContext } from "react";
import ProductListItem from "./ProductListItem";
import { PageSetterContext } from "./Providers";

export default function ProductList({ products }) {
  const setPage = useContext(PageSetterContext);

  function handleClick() {
    setPage("New");
  }

  return (
    <ul className="flex flex-wrap">
      {products.map((product) => (
        <ProductListItem key={product.name} product={product} />
      ))}
      <li>
        <button
          type="button"
          className="py-3 px-5 border-2 border-slate-600 rounded-lg m-2 text-lg hover:scale-105 hover:drop-shadow-md"
          onClick={handleClick}
        >
          Add a New Product
        </button>
      </li>
    </ul>
  );
}
