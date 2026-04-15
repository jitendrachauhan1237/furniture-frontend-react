import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useStore } from "../context/StoreContext";

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    paymentMethod: "cod",
  });

  const [selectedAddress, setSelectedAddress] = useState("");
  const [showAllAddresses, setShowAllAddresses] = useState(false);

  const navigate = useNavigate();
  const { cartItems, addresses, placeOrder, currentUser } = useStore();

  useEffect(() => {
    if (currentUser) {
      const [firstName = "", lastName = ""] = currentUser.displayName.split(" ");
      setFormData((prev) => ({
        ...prev,
        firstName,
        lastName,
        email: currentUser.email,
        phone: currentUser.phone || "",
      }));
    }
  }, [currentUser]);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) return;
    placeOrder(formData);
    navigate("/myorders");
  };

  const visibleAddresses = showAllAddresses ? addresses : addresses.slice(0, 2);

  return (
    <div className="mx-auto max-w-screen-2xl px-4 py-10 pt-28">
      <h1 className="mb-10 flex items-center gap-2 text-3xl font-bold text-amber-600">
        <ShoppingBag size={28} /> Checkout
      </h1>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        <form
          onSubmit={handleSubmit}
          className="rounded-xl border bg-white p-6 shadow-md lg:col-span-2"
        >
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { label: "First Name", name: "firstName", placeholder: "First name" },
              { label: "Last Name", name: "lastName", placeholder: "Last name" },
              { label: "Email Address", name: "email", placeholder: "Your email", type: "email" },
              { label: "Phone No.", name: "phone", placeholder: "Phone number", type: "text" },
              { label: "Street Address", name: "address", placeholder: "Street address", full: true },
              { label: "City", name: "city", placeholder: "City" },
              { label: "Pincode", name: "pincode", placeholder: "Pincode" },
            ].map((field) => (
              <div key={field.name} className={field.full ? "md:col-span-2" : ""}>
                <label className="text-sm text-gray-700">{field.label}</label>
                <input
                  type={field.type || "text"}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-md border bg-white px-4 py-2 text-sm text-gray-800 outline-none"
                  placeholder={field.placeholder}
                />
              </div>
            ))}

            <div className="md:col-span-2">
              <h3 className="mb-2 text-sm font-semibold text-gray-700">Saved Addresses</h3>
              <div className="divide-y rounded-md border">
                {visibleAddresses.map((addr) => (
                  <label
                    key={addr._id}
                    className="flex cursor-pointer items-start gap-3 px-4 py-3"
                  >
                    <input
                      type="radio"
                      name="addressType"
                      value={addr._id}
                      checked={selectedAddress === addr._id}
                      onChange={() => {
                        setSelectedAddress(addr._id);
                        setFormData((prev) => ({
                          ...prev,
                          address: addr.address,
                          city: addr.city,
                          pincode: addr.pincode,
                        }));
                      }}
                      className="mt-1"
                    />
                    <div>
                      <p className="font-semibold capitalize text-black">{addr.type}</p>
                      <p className="mt-1 text-xs text-gray-600">
                        {addr.address}, {addr.city} - {addr.pincode}
                      </p>
                    </div>
                  </label>
                ))}
              </div>
              {addresses.length > 2 && (
                <button
                  type="button"
                  className="ml-4 mt-2 text-xs text-blue-600"
                  onClick={() => setShowAllAddresses(!showAllAddresses)}
                >
                  {showAllAddresses ? "View Less" : "View All"}
                </button>
              )}
            </div>

            <div className="md:col-span-2">
              <label className="text-sm text-gray-700">Payment Method</label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border bg-white px-4 py-2 text-sm text-gray-800 outline-none"
              >
                <option value="cod">Cash on Delivery</option>
                <option value="upi">UPI</option>
                <option value="card">Credit / Debit Card</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={cartItems.length === 0}
                className="w-full rounded-md bg-amber-600 py-3 text-sm font-semibold text-white shadow disabled:cursor-not-allowed disabled:bg-amber-200"
              >
                Place Order
              </button>
            </div>
          </div>
        </form>

        <div className="h-fit rounded-xl border bg-white p-6 shadow-md">
          <h2 className="mb-4 text-xl font-bold text-amber-600">Order Summary</h2>
          <div className="max-h-[300px] space-y-4 overflow-y-auto pr-2">
            {cartItems.map((item) => (
              <div key={item._id} className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-16 w-16 rounded-md object-cover"
                />
                <div className="flex-1">
                  <h3 className="line-clamp-1 text-sm font-medium text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500">{item.category}</p>
                  <span className="text-sm text-gray-600">x{item.quantity}</span>
                </div>
                <span className="text-sm font-semibold text-gray-700">
                  Rs. {(item.price * item.quantity).toLocaleString()}
                </span>
              </div>
            ))}
          </div>

          <hr className="my-4" />
          <div className="flex justify-between text-sm text-gray-600">
            <span>Total Items</span>
            <span>{cartItems.length}</span>
          </div>
          <div className="mt-2 flex justify-between text-base font-semibold text-amber-600">
            <span>Total Price</span>
            <span>Rs. {total.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
