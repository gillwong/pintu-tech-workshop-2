import { useContext } from "react";
import ProductList from "../components/ProductList";
import { PageContext } from "../components/Providers";

export default function HomePage(props) {
  const page = useContext(PageContext);
  console.log(page);
  return (
    <section className="p-5 space-y-3">
      <h1 className="font-bold text-2xl">
        Showing <span className="text-red-600">{props.categoryFilter}</span>{" "}
        Products
      </h1>
      <hr className="border border-slate-300 rounded-full" />
      <ProductList products={props.products} />
    </section>
  );
}
