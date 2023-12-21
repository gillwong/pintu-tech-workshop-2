import { useContext, useReducer, useState } from "react";
import { PageSetterContext } from "../components/Providers";

function formDataReducer(state, action) {
  switch (action.type) {
    case "changed_name": {
      return { ...state, name: action.payload };
    }
    case "changed_price": {
      return { ...state, price: action.payload };
    }
    case "changed_category": {
      return { ...state, category: action.payload };
    }
    case "reset": {
      return { name: "", price: 0, category: "" };
    }
    default: {
      throw new Error("Unknown action type" + action.type);
    }
  }
}

export default function NewPage({ setProducts }) {
  const [formData, dispatch] = useReducer(formDataReducer, {
    name: "",
    price: 0,
    category: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const setPage = useContext(PageSetterContext);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/items`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    const savedItem = await response.json();
    setProducts((products) => products.concat(savedItem));
    alert(`Added a new product: ${savedItem.name}`);
    dispatch({ type: "reset" });
    setPage("Home");
    setIsLoading(false);
  }

  return (
    <section className="p-5">
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="space-x-2">
          <label htmlFor="product-name">Name</label>
          <input
            id="product-name"
            type="text"
            className="border py-0.5 px-2 border-black rounded-md"
            value={formData.name}
            onChange={(e) =>
              dispatch({ type: "changed_name", payload: e.target.value })
            }
          />
        </div>
        <div className="space-x-2">
          <label htmlFor="product-price">Price</label>
          <input
            id="product-price"
            type="number"
            step={0.01}
            className="border py-0.5 px-2 border-black rounded-md"
            value={formData.price}
            onChange={(e) =>
              dispatch({ type: "changed_price", payload: e.target.value })
            }
          />
        </div>
        <div className="space-x-2">
          <label htmlFor="product-category">Category</label>
          <select
            id="product-category"
            className="border py-0.5 px-2 border-black rounded-md"
            value={formData.category}
            onChange={(e) =>
              dispatch({ type: "changed_category", payload: e.target.value })
            }
          >
            <option value="" selected disabled>
              Select a category
            </option>
            <option value="Electronics">Electronics</option>
            <option value="Clothes">Clothes</option>
          </select>
        </div>
        <button
          type="submit"
          className="py-2 px-4 bg-green-600 hover:drop-shadow-md hover:bg-green-500 transition text-white rounded-lg"
          disabled={isLoading}
        >
          Submit
        </button>
      </form>
    </section>
  );
}
