import React, { useState } from "react";
import {
  X,
  Package,
  CalendarDays,
  MapPin,
  User,
  Phone,
  Mail,
} from "lucide-react";
import { useStore } from "../context/StoreContext";

const statusStyles = {
  Delivered: "bg-green-100 text-green-800",
  "In Transit": "bg-blue-100 text-blue-800",
  Confirmed: "bg-amber-100 text-amber-800",
};

const MyOrders = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { orders } = useStore();

  return (
    <div className="mx-auto mt-12 max-w-6xl p-4 pt-24">
      <h2 className="mb-6 text-3xl font-bold text-gray-800">My Orders</h2>

      {orders.length === 0 ? (
        <div className="rounded-2xl border border-dashed bg-white p-10 text-center text-gray-600">
          You have not placed any demo orders yet.
        </div>
      ) : (
        <div className="grid gap-5">
          {orders.map((order) =>
            order.cartItems.map((item) => (
              <div
                key={`${order._id}-${item._id}`}
                className="flex flex-col items-center justify-between rounded-2xl border border-gray-200 bg-white p-5 shadow-md transition hover:shadow-lg sm:flex-row"
              >
                <div className="flex w-full items-center gap-5 sm:w-auto">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-24 w-24 rounded-xl border object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    <p className="mt-1 font-medium text-gray-700">
                      Rs. {item.price.toLocaleString()}
                    </p>
                    <span
                      className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                        statusStyles[order.status] || statusStyles.Confirmed
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setSelectedOrder(order);
                    setSelectedProduct(item);
                  }}
                  className="mt-4 rounded-lg bg-amber-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-amber-700 sm:mt-0"
                >
                  More Details
                </button>
              </div>
            ))
          )}
        </div>
      )}

      {selectedOrder && selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">
            <button
              onClick={() => {
                setSelectedOrder(null);
                setSelectedProduct(null);
              }}
              className="absolute right-4 top-3 text-xl font-bold text-gray-600 hover:text-gray-900"
            >
              <X size={24} />
            </button>

            <h3 className="mb-4 flex items-center gap-2 text-2xl font-bold text-gray-800">
              <Package className="text-amber-600" /> Order Details
            </h3>

            <div className="mb-4 rounded-lg bg-gray-50 p-4 shadow-inner">
              <p className="flex items-center gap-2 text-sm text-gray-800">
                <Package className="text-gray-500" size={16} />
                <span className="font-semibold">Product:</span> {selectedProduct.title}
              </p>
              <p className="mt-2 text-sm text-gray-800">
                <span className="font-semibold">Price:</span> Rs. {selectedProduct.price.toLocaleString()}
              </p>
              <p className="mt-2 text-sm text-gray-800">
                <span className="font-semibold">Quantity:</span> {selectedProduct.quantity}
              </p>
              <p className="mt-2 text-sm text-gray-800">
                <span className="font-semibold">Total Order:</span> Rs. {selectedOrder.total.toLocaleString()}
              </p>
              <p className="mt-2 flex items-center gap-2 text-sm text-gray-800">
                <CalendarDays className="text-gray-500" size={16} />
                <span className="font-semibold">Order Date:</span>
                {new Date(selectedOrder.createdAt).toLocaleString()}
              </p>
            </div>

            <h4 className="mb-2 text-lg font-semibold text-gray-800">Customer Info</h4>
            <div className="space-y-2 text-sm text-gray-700">
              <p className="flex items-center gap-2">
                <User className="text-gray-500" size={16} />
                <span>{selectedOrder.firstName} {selectedOrder.lastName}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="text-gray-500" size={16} />
                <span>{selectedOrder.email}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="text-gray-500" size={16} />
                <span>{selectedOrder.phone}</span>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="text-gray-500" size={16} />
                <span>
                  {selectedOrder.address}, {selectedOrder.city} - {selectedOrder.pincode}
                </span>
              </p>
            </div>

            <div className="mt-4">
              <span className="mr-2 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">
                Payment: {selectedOrder.paymentMethod.toUpperCase()}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
