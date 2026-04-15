import React from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import { useStore } from "../../context/StoreContext";

const AdminPanel = () => {
  const { products, orders } = useStore();

  return (
    <div className="flex min-h-screen bg-gray-100 pt-20">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-6">
        <section id="overview">
          <Dashboard />
        </section>

        <section id="catalog" className="mt-10 rounded-2xl bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-gray-800">Catalog Snapshot</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {products.slice(0, 6).map((product) => (
              <div key={product._id} className="rounded-xl border p-4">
                <img src={product.image} alt={product.title} className="h-40 w-full rounded-lg object-cover" />
                <h4 className="mt-3 font-semibold">{product.title}</h4>
                <p className="text-sm text-gray-500">{product.category}</p>
                <p className="mt-2 font-semibold text-amber-600">Rs. {product.price.toLocaleString()}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="orders" className="mt-10 rounded-2xl bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-gray-800">Recent Orders</h3>
          <div className="mt-4 space-y-4">
            {orders.slice(0, 4).map((order) => (
              <div key={order._id} className="flex items-center justify-between rounded-xl border p-4">
                <div>
                  <p className="font-semibold">{order.firstName} {order.lastName}</p>
                  <p className="text-sm text-gray-500">{new Date(order.createdAt).toLocaleDateString()}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-amber-600">Rs. {order.total.toLocaleString()}</p>
                  <p className="text-sm text-gray-500">{order.status}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminPanel;
