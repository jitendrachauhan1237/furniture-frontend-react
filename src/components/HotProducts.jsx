import React from "react";
import { Link } from "react-router-dom";
import { useStore } from "../context/StoreContext";

const HotProducts = () => {
  const { products } = useStore();
  const featured = products.slice(0, 8);

  return (
    <div className="mx-auto max-w-screen-2xl bg-white px-6 py-12 md:px-16 md:py-16">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Best picks</p>
          <h2 className="mt-2 text-3xl font-bold text-gray-800">Hot Products</h2>
        </div>
        <Link to="/shop" className="text-sm font-semibold text-gray-800 hover:text-orange-500">
          View Full Collection →
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {featured.map((item) => (
          <Link
            key={item._id}
            to={`/product/${item._id}`}
            className="group relative overflow-hidden rounded-2xl border bg-gray-50"
          >
            <span className="absolute right-3 top-3 z-10 rounded-full bg-red-500 px-2 py-1 text-xs font-semibold text-white">
              {item.badge}
            </span>
            <img
              src={item.image}
              alt={item.title}
              className="h-56 w-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="px-4 pb-4 pt-3">
              <div className="text-xs text-gray-500">{item.reviews} reviews</div>
              <h3 className="mt-1 text-sm font-semibold text-gray-700">{item.title}</h3>
              <p className="mt-1 text-xs text-gray-500">{item.category}</p>
              <div className="mt-2 flex items-center gap-2">
                {item.oldPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    Rs. {item.oldPrice.toLocaleString()}
                  </span>
                )}
                <span className="text-sm font-semibold text-orange-500">
                  Rs. {item.price.toLocaleString()}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HotProducts;
