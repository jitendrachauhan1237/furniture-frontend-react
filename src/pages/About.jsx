import React from "react";
import useScrollToTop from "../hooks/useScrollToTop";
import { featuredCollections } from "../data/mockStore";

const AboutUs = () => {
  useScrollToTop();

  return (
    <div className="mx-auto max-w-screen-2xl px-4 pb-10 pt-28 text-gray-800 md:px-16">
      <div className="mb-16 flex flex-col items-center justify-between gap-10 rounded-[2rem] bg-gradient-to-r from-[#fef0d8] to-[#f7f2ea] p-10 shadow-xl md:flex-row md:p-16">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-gray-500">About furnivia</p>
          <h1 className="mb-4 text-4xl font-extrabold md:text-6xl">
            Crafting warm, modern homes with thoughtful furniture stories.
          </h1>
          <p className="text-lg text-gray-700">
            furnivia is built as a premium demo storefront where every page feels connected, curated, and ready for a real product brand.
          </p>
        </div>
        <img src="/sofa.webp" alt="Luxury Sofa" className="w-full max-w-sm" />
      </div>

      <section className="mb-16 grid gap-10 md:grid-cols-2">
        <div className="rounded-2xl border bg-white p-8 shadow-sm">
          <h2 className="mb-4 text-3xl font-bold">Our Story</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            This project focuses on presenting a believable ecommerce furniture experience using fake data, consistent visual direction, and realistic shopping flows.
          </p>
        </div>
        <div className="rounded-2xl border bg-white p-8 shadow-sm">
          <h2 className="mb-4 text-3xl font-bold">Our Vision</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            A portfolio-ready frontend should not stop at a homepage. It should feel complete across browsing, product discovery, cart, checkout, profile, and admin views.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-8 text-3xl font-bold">Featured Collections</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredCollections.map((collection) => (
            <div key={collection.title} className="overflow-hidden rounded-2xl border bg-white shadow-sm">
              <img src={collection.image} alt={collection.title} className="h-60 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{collection.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{collection.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="mb-4 rounded-2xl bg-orange-100 p-10 text-center shadow-md">
        <h3 className="mb-3 text-2xl font-bold">Ready to Explore the Demo Store?</h3>
        <p className="mb-4 text-gray-700">
          Browse the shop and experience the full UI flow without depending on a live backend.
        </p>
        <a
          href="/shop"
          className="inline-block rounded-full bg-orange-500 px-6 py-3 font-medium text-white transition hover:bg-orange-600"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
