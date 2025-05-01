export default function Login() {
    return (
      <div className="min-h-screen w-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
        <form className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h2>
          <input className="w-full mb-4 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" type="text" placeholder="Username" />
          <input className="w-full mb-4 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" type="password" placeholder="Password" />
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded transition">Login</button>
        </form>
      </div>
    );
}
