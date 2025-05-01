import { useEffect, useState } from "react";
import axios from "axios";

export default function Products() {
  const [items, setItems] = useState([]); // Ganti nama state menjadi 'items'

  // Fetch items from backend
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("http://localhost:3000/item"); // Ganti endpoint ke /item
        console.log("Items fetched:", response.data); // Debug log
        setItems(response.data); // Simpan data ke state
        console.log("Items fetched:", items);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="min-h-screen w-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">Daftar Item</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <img
              src={item.image_url} // Gunakan URL lengkap langsung dari backend
              alt={item.name}
              className="w-full h-40 object-cover rounded mb-4"
            />
            {console.log("Image URL:", item.image_url)}
            <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
            <p className="text-gray-600 mt-2">Harga: Rp{item.price.toLocaleString()}</p>
            <p className="text-gray-500 mt-1">Stok: {item.stock}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Beli
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}