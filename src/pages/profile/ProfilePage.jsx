import React from "react";
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { useStore } from "../../context/StoreContext";

const ProfilePage = () => {
  const { currentUser, orders, addresses, resetDemo } = useStore();

  return (
    <div className="mx-auto mt-[70px] min-h-screen max-w-screen-2xl bg-white text-gray-800">
      <div className="relative h-64 w-full rounded-[2rem] bg-gradient-to-tr from-amber-700 via-orange-500 to-orange-300">
        <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.28),_transparent_35%)]"></div>
        <div className="absolute bottom-[-56px] left-1/2 -translate-x-1/2 transform">
          <img
            src={currentUser?.photoURL || "/userPfp.png"}
            className="h-28 w-28 rounded-full border-4 border-white object-cover shadow-xl"
            alt="Profile"
          />
        </div>
      </div>

      <div className="px-4 pb-12 pt-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold">{currentUser?.displayName || "Guest User"}</h2>
          <p className="text-sm text-gray-400">{currentUser?.email}</p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
          <div className="rounded-2xl border bg-[#f7f2ea] p-6">
            <p className="text-sm text-gray-500">Orders placed</p>
            <p className="mt-2 text-3xl font-bold text-gray-900">{orders.length}</p>
          </div>
          <div className="rounded-2xl border bg-[#f7f2ea] p-6">
            <p className="text-sm text-gray-500">Saved addresses</p>
            <p className="mt-2 text-3xl font-bold text-gray-900">{addresses.length}</p>
          </div>
          <div className="rounded-2xl border bg-[#f7f2ea] p-6">
            <p className="text-sm text-gray-500">Member since</p>
            <p className="mt-2 text-3xl font-bold text-gray-900">{currentUser?.memberSince}</p>
          </div>
        </div>

        <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold">Account Details</h3>
            <div className="space-y-4 text-sm text-gray-600">
              <p className="flex items-center gap-3">
                <Mail size={16} /> {currentUser?.email}
              </p>
              <p className="flex items-center gap-3">
                <Phone size={16} /> {currentUser?.phone}
              </p>
              <p className="flex items-center gap-3">
                <MapPin size={16} /> {currentUser?.city}
              </p>
              <p className="flex items-center gap-3">
                <ShieldCheck size={16} /> Demo customer account
              </p>
            </div>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold">Demo Controls</h3>
            <p className="text-sm text-gray-600">
              Reset the fake store at any time to restore the original demo user, cart, addresses, and orders.
            </p>
            <button
              onClick={resetDemo}
              className="mt-6 rounded-full bg-amber-600 px-5 py-3 text-sm font-semibold text-white"
            >
              Reset Demo Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
