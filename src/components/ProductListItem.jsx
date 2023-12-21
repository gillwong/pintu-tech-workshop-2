export default function ProductListItem({ product }) {
  return (
    <li>
      <button
        type="button"
        className="border-2 border-slate-600 py-3 px-5 rounded-lg m-2 hover:scale-105 hover:drop-shadow-md transition bg-white"
      >
        <img
          src={product.image}
          alt="Handphone 1"
          className="h-[200px] aspect-square object-contain"
        />
        <h2 className="font-semibold text-lg">{product.name}</h2>
        <p>S${product.price}</p>
      </button>
    </li>
  );
}
