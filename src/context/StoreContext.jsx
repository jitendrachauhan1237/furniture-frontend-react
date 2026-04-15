/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import {
  demoAddresses,
  demoCart,
  demoOrders,
  demoUser,
  featuredCollections,
  mockCategories,
  mockProducts,
  mockTestimonials,
} from "../data/mockStore";

const STORAGE_KEY = "furnilux-demo-store";

const initialStore = {
  currentUser: demoUser,
  products: mockProducts,
  addresses: demoAddresses,
  cartItems: demoCart,
  orders: demoOrders,
};

const StoreContext = createContext(null);

const readStore = () => {
  if (typeof window === "undefined") {
    return initialStore;
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : initialStore;
  } catch {
    return initialStore;
  }
};

export const StoreProvider = ({ children }) => {
  const [store, setStore] = useState(readStore);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  }, [store]);

  const setCurrentUser = (user) => {
    setStore((prev) => ({ ...prev, currentUser: user }));
  };

  const login = ({ email }) => {
    const nameFromEmail = email.split("@")[0].replace(/[._-]/g, " ");
    const displayName = nameFromEmail.replace(/\b\w/g, (char) => char.toUpperCase());
    setCurrentUser({
      ...demoUser,
      uid: `demo-${Date.now()}`,
      email,
      displayName,
    });
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const addToCart = (product) => {
    setStore((prev) => {
      const existing = prev.cartItems.find((item) => item.productId === product._id);
      const cartItems = existing
        ? prev.cartItems.map((item) =>
            item.productId === product._id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [
            ...prev.cartItems,
            {
              _id: `cart-${Date.now()}`,
              productId: product._id,
              title: product.title,
              image: product.image,
              category: product.category,
              price: product.price,
              quantity: 1,
            },
          ];

      return { ...prev, cartItems };
    });
  };

  const updateCartQuantity = (id, quantity) => {
    setStore((prev) => ({
      ...prev,
      cartItems: prev.cartItems.map((item) =>
        item._id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      ),
    }));
  };

  const removeFromCart = (id) => {
    setStore((prev) => ({
      ...prev,
      cartItems: prev.cartItems.filter((item) => item._id !== id),
    }));
  };

  const placeOrder = (formData) => {
    const total = store.cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const newOrder = {
      _id: `order-${Date.now()}`,
      ...formData,
      total,
      status: "Confirmed",
      createdAt: new Date().toISOString(),
      cartItems: store.cartItems,
    };

    setStore((prev) => {
      const addressExists = prev.addresses.some(
        (address) =>
          address.address === formData.address &&
          address.city === formData.city &&
          address.pincode === formData.pincode
      );

      return {
        ...prev,
        cartItems: [],
        orders: [newOrder, ...prev.orders],
        addresses: addressExists
          ? prev.addresses
          : [
              {
                _id: `addr-${Date.now()}`,
                type: "Saved",
                address: formData.address,
                city: formData.city,
                pincode: formData.pincode,
              },
              ...prev.addresses,
            ],
      };
    });

    return newOrder;
  };

  const resetDemo = () => {
    setStore(initialStore);
  };

  const value = {
    ...store,
    categories: mockCategories,
    testimonials: mockTestimonials,
    featuredCollections,
    login,
    logout,
    addToCart,
    updateCartQuantity,
    removeFromCart,
    placeOrder,
    resetDemo,
    setCurrentUser,
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};

export const useStore = () => {
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error("useStore must be used within StoreProvider");
  }

  return context;
};
