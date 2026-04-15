import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HiMiniAdjustmentsHorizontal } from "react-icons/hi2";
import useScrollToTop from "../hooks/useScrollToTop";
import { useStore } from "../context/StoreContext";

const ShopPage = () => {
  useScrollToTop();
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const location = useLocation();
  const navigate = useNavigate();
  const mobileFilterRef = useRef(null);
  const { products, categories } = useStore();

  const params = new URLSearchParams(location.search);
  const urlCategory = params.get("category");

  useEffect(() => {
    if (urlCategory) setSelectedCategory(urlCategory);
  }, [urlCategory]);

  const filteredProducts =
    selectedCategory === "All Products"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="mx-auto min-h-screen max-w-screen-2xl bg-[#f6f2ea] px-4 py-10 pt-28 md:px-16">
      <div className="relative mb-10 flex items-center justify-between overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#f3dec3] via-[#ede3d4] to-[#d6e2e9] p-6 shadow-lg md:flex-row md:p-12">
        <div className="z-10 text-left">
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-gray-600">
            Curated furniture edit
          </p>
          <h1 className="mb-3 text-2xl font-extrabold leading-tight text-slate-800 md:text-5xl">
            Make every room feel
            <br className="hidden md:block" /> composed and lived in.
          </h1>
          <p className="max-w-xl text-sm font-medium text-gray-700 md:text-lg">
            Browse demo-ready furniture collections with clean filtering, polished visuals, and a storefront flow that feels complete.
          </p>
        </div>
        <div className="z-0">
          <img
            src="/sofa.webp"
            alt="Banner Sofa"
            className="w-48 rounded-xl object-contain md:w-72"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-4">
        <div className="hidden space-y-6 md:block">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md">
            <h3 className="mb-6 border-b pb-3 text-2xl font-bold text-gray-900">
              Filter Products
            </h3>
            <div>
              <h4 className="mb-4 text-base font-semibold text-gray-700">Category</h4>
              <ul className="flex flex-col gap-4">
                {["All Products", ...categories].map((cat) => (
                  <li key={cat}>
                    <label className="flex cursor-pointer items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-2 shadow-sm transition duration-200 hover:border-black hover:shadow-md">
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          value={cat}
                          checked={selectedCategory === cat}
                          onChange={() => setSelectedCategory(cat)}
                          className="accent-yellow-500"
                        />
                        <span className="text-sm font-medium text-gray-700">{cat}</span>
                      </div>
                      <span className="text-xl text-gray-800">→</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <details
            className="w-full rounded-xl border border-gray-300 bg-white p-4 shadow-md"
            ref={mobileFilterRef}
          >
            <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-gray-800">
              {selectedCategory === "All Products" ? "Filter by Category" : selectedCategory}
              <HiMiniAdjustmentsHorizontal size={20} />
            </summary>
            <ul className="mt-4 space-y-3">
              {["All Products", ...categories].map((cat) => (
                <li key={cat}>
                  <label className="flex cursor-pointer items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-2 shadow-sm transition duration-200 hover:border-black hover:shadow-md">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        value={cat}
                        checked={selectedCategory === cat}
                        onChange={() => {
                          setSelectedCategory(cat);
                          if (mobileFilterRef.current) {
                            mobileFilterRef.current.open = false;
                          }
                        }}
                        className="accent-yellow-500"
                      />
                      <span className="text-sm font-medium text-gray-700">{cat}</span>
                    </div>
                    <span className="text-xs text-gray-400">→</span>
                  </label>
                </li>
              ))}
            </ul>
          </details>
        </div>

        <div className="grid grid-cols-2 gap-6 lg:col-span-3 md:grid-cols-3">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product._id}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-gray-200 bg-[#fdfdfd] transition hover:shadow-xl"
                onClick={() => navigate(`/product/${product._id}`)}
              >
                <div className="overflow-hidden rounded-t-xl bg-white">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="aspect-square h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <span className="inline-flex rounded-full bg-orange-100 px-2 py-1 text-xs font-semibold text-orange-700">
                    {product.badge}
                  </span>
                  <h3 className="mb-1 mt-3 text-sm font-semibold text-gray-800 md:text-lg">
                    {product.title}
                  </h3>
                  <p className="mb-2 text-sm text-gray-500">{product.category}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-bold text-red-500">
                      Rs. {product.price.toLocaleString()}
                    </span>
                    {product.oldPrice && (
                      <span className="text-gray-400 line-through">
                        Rs. {product.oldPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <p className="mt-3 line-clamp-2 text-xs text-gray-500">
                    {product.description}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center font-semibold text-gray-500">
              No products found in selected category.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
