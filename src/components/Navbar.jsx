import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-10 p-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-blue-600">Tutam Store</div>
      <div className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-blue-600">Login</Link>
        <Link to="/register" className="text-gray-700 hover:text-blue-600">Register</Link>
        <Link to="/products" className="text-gray-700 hover:text-blue-600">Produk</Link>
      </div>
    </nav>
  );
}
