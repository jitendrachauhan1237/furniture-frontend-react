import React from "react";
import { Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useStore } from "../context/StoreContext";

const CartPage = () => {
  const { cartItems, updateCartQuantity, removeFromCart } = useStore();

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const delivery = subtotal > 0 ? 0 : 0;
  const total = subtotal + delivery;

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 pt-28 lg:flex-row">
      <div className="flex-1">
        <h1 className="mb-6 text-2xl font-bold text-amber-600">My Cart</h1>
        <div className="space-y-6">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item._id}
                className="relative flex items-start gap-4 rounded-xl border bg-white p-4 shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-28 w-28 rounded-md object-cover"
                />
                <div className="flex-1 space-y-1">
                  <h3 className="text-md font-semibold text-gray-800 md:text-lg">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">{item.category}</p>
                  <div className="mt-2 flex items-center space-x-3">
                    <button
                      onClick={() => updateCartQuantity(item._id, item.quantity - 1)}
                      className="flex h-8 w-8 items-center justify-center rounded-full border text-base font-bold leading-none text-amber-600"
                    >
                      -
                    </button>
                    <span className="text-sm font-medium text-amber-600">{item.quantity}</span>
                    <button
                      onClick={() => updateCartQuantity(item._id, item.quantity + 1)}
                      className="flex h-8 w-8 items-center justify-center rounded-full border text-base font-bold leading-none text-amber-600"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex h-full flex-col items-end justify-between text-right">
                  <span className="text-lg font-semibold text-amber-600">
                    Rs. {(item.price * item.quantity).toLocaleString()}
                  </span>
                  <button onClick={() => removeFromCart(item._id)}>
                    <Trash2 className="mt-5 h-5 w-5 text-red-500 hover:text-red-600" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="rounded-2xl border border-dashed bg-white p-10 text-center">
              <p className="font-semibold text-gray-600">Your cart is empty.</p>
              <Link
                to="/shop"
                className="mt-4 inline-flex rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white"
              >
                Continue Shopping
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="h-fit w-full rounded-xl border bg-white p-6 shadow-md lg:w-1/3">
        <h2 className="mb-6 text-xl font-bold text-amber-600">Order Summary</h2>
        <div className="space-y-4 text-sm text-gray-700">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>Rs. {subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery</span>
            <span>{delivery === 0 ? "Free" : `Rs. ${delivery}`}</span>
          </div>
          <div className="flex justify-between border-t pt-4 text-base font-semibold">
            <span>Total</span>
            <span>Rs. {total.toLocaleString()}</span>
          </div>
        </div>

        <Link to="/checkout">
          <button
            disabled={cartItems.length === 0}
            className="mt-6 w-full rounded-md bg-amber-600 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:bg-amber-200"
          >
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
