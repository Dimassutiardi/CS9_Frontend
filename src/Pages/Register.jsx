export default function Register() {
    return (
      <div className="min-h-screen w-screen bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
        <form className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Register</h2>
          <input className="w-full mb-4 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-400" type="text" placeholder="Username" />
          <input className="w-full mb-4 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-400" type="email" placeholder="Email" />
          <input className="w-full mb-4 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-400" type="password" placeholder="Password" />
          <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded transition">Register</button>
        </form>
      </div>
    );
}