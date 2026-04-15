import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, ClipboardList, LogOut, X } from "lucide-react";
import { useStore } from "../context/StoreContext";

const ProfileDrawer = React.forwardRef((props, ref) => {
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const { currentUser, logout } = useStore();

  const handleLogout = () => {
    logout();
    if (ref.current) ref.current.checked = false;
    setShowLogoutModal(false);
    navigate("/login");
  };

  return (
    <>
      <div className="drawer drawer-end z-50">
        <input
          id="my-drawer-4"
          type="checkbox"
          className="drawer-toggle"
          ref={ref}
        />
        <div className="drawer-content"></div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            className="drawer-overlay"
            aria-label="close sidebar"
          ></label>
          <ul className="menu min-h-full w-80 space-y-3 bg-white p-4 text-gray-800">
            {currentUser && (
              <li className="mb-4 border-b border-gray-200 pb-4">
                <div className="flex items-center gap-3 px-0">
                  <img
                    src={currentUser.photoURL || "/userPfp.png"}
                    alt={currentUser.displayName}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{currentUser.displayName}</p>
                    <p className="text-xs text-gray-500">{currentUser.email}</p>
                  </div>
                </div>
              </li>
            )}
            <li>
              <Link
                to="/profile"
                onClick={() => {
                  if (ref.current) ref.current.checked = false;
                }}
                className="flex items-center gap-2 hover:text-orange-600"
              >
                <User size={20} />
                Profile Page
              </Link>
            </li>
            <li>
              <Link
                to="/myorders"
                onClick={() => {
                  if (ref.current) ref.current.checked = false;
                }}
                className="flex items-center gap-2 hover:text-orange-600"
              >
                <ClipboardList size={20} />
                My Orders
              </Link>
            </li>
            <li>
              <button
                onClick={() => setShowLogoutModal(true)}
                className="flex w-full items-center gap-2 text-left hover:text-orange-600"
              >
                <LogOut size={20} />
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>

      {showLogoutModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50">
          <div className="relative w-80 max-w-full rounded-lg bg-white p-6 text-center shadow-lg">
            <button
              onClick={() => setShowLogoutModal(false)}
              className="absolute right-3 top-3 text-gray-600 hover:text-gray-900"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
            <h2 className="text-lg font-semibold text-gray-900">Confirm Logout</h2>
            <p className="mb-6 text-gray-900">Are you sure you want to logout?</p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={handleLogout}
                className="rounded bg-red-600 px-4 py-2 font-semibold text-white transition hover:bg-red-700"
              >
                Yes, Logout
              </button>
              <button
                onClick={() => setShowLogoutModal(false)}
                className="rounded bg-gray-300 px-4 py-2 font-semibold text-gray-800 transition hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

export default ProfileDrawer;
