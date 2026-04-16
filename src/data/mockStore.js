export const mockCategories = [
  "Living Room",
  "Bedroom",
  "Dining",
  "Office",
  "Storage",
  "Decor",
];

export const mockProducts = [
  {
    _id: "sofa-nova-l",
    title: "Nova Cloud Sofa",
    category: "Living Room",
    image: "/sofa.webp",
    price: 42999,
    oldPrice: 49999,
    rating: 4.8,
    reviews: 128,
    badge: "Best Seller",
    description:
      "A deep-seat modular sofa designed for long evenings, soft textures, and modern family spaces.",
    features: ["Feather-soft cushions", "Solid wood frame", "Easy-clean fabric"],
  },
  {
    _id: "chair-arc-lounge",
    title: "Arc Lounge Chair",
    category: "Living Room",
    image: "/chair.png",
    price: 12999,
    oldPrice: 15999,
    rating: 4.6,
    reviews: 84,
    badge: "New",
    description:
      "A sculpted accent chair with curved edges and a warm oak finish for cozy corners.",
    features: ["Oak legs", "High-density foam", "Compact footprint"],
  },
  {
    _id: "table-aero-dining",
    title: "Aero Dining Table",
    category: "Dining",
    image: "/table.png",
    price: 23999,
    oldPrice: 27999,
    rating: 4.7,
    reviews: 63,
    badge: "20% Off",
    description:
      "A compact round dining table that brings softness and function into apartment dining zones.",
    features: ["Rounded top", "Seats four", "Scratch-resistant surface"],
  },
  {
    _id: "bed-serene-queen",
    title: "Serene Queen Bed",
    category: "Bedroom",
    image: "/bed.webp",
    price: 31999,
    oldPrice: 36999,
    rating: 4.9,
    reviews: 152,
    badge: "Premium",
    description:
      "A minimal upholstered bed frame built to add warmth, balance, and a hotel-like calm to bedrooms.",
    features: ["Padded headboard", "Storage-ready base", "Matte walnut finish"],
  },
  {
    _id: "wardrobe-luna-slide",
    title: "Luna Sliding Wardrobe",
    category: "Storage",
    image: "/Wardrobe.webp",
    price: 38999,
    oldPrice: 44999,
    rating: 4.5,
    reviews: 47,
    badge: "Limited",
    description:
      "A sleek sliding wardrobe with mirrored panels and organized shelving for compact bedrooms.",
    features: ["Sliding doors", "Mirror panel", "Multi-shelf storage"],
  },
  {
    _id: "shelf-studio-tall",
    title: "Studio Tall Bookshelf",
    category: "Storage",
    image: "/bookshelf.avif",
    price: 14999,
    oldPrice: 17999,
    rating: 4.4,
    reviews: 58,
    badge: "Hot",
    description:
      "An open bookshelf that doubles as display storage for books, ceramics, and collected decor.",
    features: ["Five open shelves", "Powder-coated frame", "Anti-tip support"],
  },
  {
    _id: "desk-orbit-work",
    title: "Orbit Work Desk",
    category: "Office",
    image: "/dining.jpg",
    price: 18999,
    oldPrice: 21999,
    rating: 4.7,
    reviews: 76,
    badge: "Editor Pick",
    description:
      "A clean-lined workspace desk with storage-friendly proportions and cable management.",
    features: ["Cable slot", "Engineered wood top", "Work-from-home friendly"],
  },
  {
    _id: "decor-amber-lamp",
    title: "Amber Floor Lamp",
    category: "Decor",
    image:
      "/Modern living room with white sofa have cabinet and wood shelves on wood flooring and white wall, 3d rendering _ Premium Photo.jpg",
    price: 7999,
    oldPrice: 9499,
    rating: 4.3,
    reviews: 32,
    badge: "Soft Glow",
    description:
      "A warm ambient lamp created to layer cozy lighting into living rooms and reading nooks.",
    features: ["Soft linen shade", "Warm light tone", "Stable metal base"],
  },
];

export const mockTestimonials = [
  {
    name: "Ayesha Khan",
    title: "Apartment Owner",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    feedback:
      "The whole setup feels intentional now. Even with demo products, the shopping journey looks premium and trustworthy.",
  },
  {
    name: "Rohan Malhotra",
    title: "Interior Consultant",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    feedback:
      "The UI is clean, the product pages feel complete, and the fake checkout flow is strong enough for a portfolio demo.",
  },
  {
    name: "Naina Kapoor",
    title: "First-time Homebuyer",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    feedback:
      "I could imagine using this as a real furniture store. The visuals, cart, profile, and orders all feel connected.",
  },
];

export const demoUser = {
  uid: "demo-user-001",
  displayName: "Aarav Sharma",
  email: "aarav.demo@furnivia.com",
  phone: "+91 98765 12345",
  photoURL: "/userPfp.png",
  role: "Customer",
  city: "Jaipur",
  memberSince: "2024",
};

export const demoAddresses = [
  {
    _id: "addr-home",
    type: "Home",
    address: "12 Palm Residency, Vaishali Nagar",
    city: "Jaipur",
    pincode: "302021",
  },
  {
    _id: "addr-office",
    type: "Studio",
    address: "205 Design Avenue, Civil Lines",
    city: "Jaipur",
    pincode: "302006",
  },
];

export const demoCart = [
  {
    _id: "cart-1",
    productId: "sofa-nova-l",
    title: "Nova Cloud Sofa",
    image: "/sofa.webp",
    category: "Living Room",
    price: 42999,
    quantity: 1,
  },
  {
    _id: "cart-2",
    productId: "chair-arc-lounge",
    title: "Arc Lounge Chair",
    image: "/chair.png",
    category: "Living Room",
    price: 12999,
    quantity: 2,
  },
];

export const demoOrders = [
  {
    _id: "order-1001",
    firstName: "Aarav",
    lastName: "Sharma",
    email: "aarav.demo@furnivia.com",
    phone: "+91 98765 12345",
    address: "12 Palm Residency, Vaishali Nagar",
    city: "Jaipur",
    pincode: "302021",
    paymentMethod: "cod",
    total: 55998,
    status: "Delivered",
    createdAt: "2026-03-28T10:00:00.000Z",
    cartItems: [
      {
        _id: "line-1",
        title: "Studio Tall Bookshelf",
        image: "/bookshelf.avif",
        category: "Storage",
        price: 14999,
        quantity: 1,
      },
      {
        _id: "line-2",
        title: "Orbit Work Desk",
        image: "/dining.jpg",
        category: "Office",
        price: 18999,
        quantity: 1,
      },
    ],
  },
  {
    _id: "order-1002",
    firstName: "Aarav",
    lastName: "Sharma",
    email: "aarav.demo@furnivia.com",
    phone: "+91 98765 12345",
    address: "205 Design Avenue, Civil Lines",
    city: "Jaipur",
    pincode: "302006",
    paymentMethod: "upi",
    total: 31999,
    status: "In Transit",
    createdAt: "2026-04-07T15:30:00.000Z",
    cartItems: [
      {
        _id: "line-3",
        title: "Serene Queen Bed",
        image: "/bed.webp",
        category: "Bedroom",
        price: 31999,
        quantity: 1,
      },
    ],
  },
];

export const featuredCollections = [
  {
    title: "Calm Bedroom Edit",
    subtitle: "Layered wood tones, soft upholstery, and storage-first pieces.",
    image: "/bed.webp",
  },
  {
    title: "Compact Dining Stories",
    subtitle: "Round tables and warm textures made for everyday hosting.",
    image: "/dining.jpg",
  },
  {
    title: "Soft Living Corners",
    subtitle: "Cloud sofas, lounge chairs, and ambient decor that feels lived in.",
    image: "/livingRoom.jpg",
  },
];
