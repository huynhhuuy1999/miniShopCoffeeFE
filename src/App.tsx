import axios from "axios";
import { useNavigate } from "react-router";

function App() {
  const navigate = useNavigate();
  const handleLogin = () => {
    axios.get("http://localhost:3000/api/products").then((response) => {
      if (response.status === 200 && response.data) {
        if (response.data.length > 0) {
          const check: boolean = response.data.some(
            (item: any) => item.name === "Cà phê sữa đá"
          );
          if (check) navigate("/home");
          else alert("Login failed");
        }
      } else console.log("Login failed");
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen m-0 font-[sans-serif] bg-[#f5f7fa]">
      <div className=" flex bg-white rounded-[20px] shadow-[0 10px 30px rgba(0, 0, 0, 0.1)] overflow-hidden w-[900] max-w-[100%]">
        <div className="p-4">
          <div className="text-[24px] font-bold mb-[20px]">Your Logo</div>
          <h2 className="mb-5 text-[#333]">Login</h2>
          <form>
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
            />
            <a href="#" className="block mb-5 text-[#007bff] decoration-none">
              Forgot Password?
            </a>
            <button
              type="submit"
              className="w-full p-3 bg-[#ff7f50] text-white border-none rounded-lg font-bold cursor-pointer"
              onClick={handleLogin}
            >
              Sign In
            </button>
          </form>
          <div className="text-center m-5 text-[#888]">Or Continue With</div>
          <div className="flex justify-between gap-[10px]">
            <button className="bg-[#db4437] text-white flex-1 p-[10px] border-none rounded-lg cursor-pointer font-bold">
              Google
            </button>
            <button className="bg-[#4267b2] text-white flex-1 p-[10px] border-none rounded-lg cursor-pointer font-bold">
              Facebook
            </button>
            <button className="bg-[#333] text-white flex-1 p-[10px] border-none rounded-lg cursor-pointer font-bold">
              Apple
            </button>
          </div>
          <p className="mt-[30px] text-center text-[14px]">
            Don’t have an account yet?{" "}
            <a href="#" className="text-[#007bff] decoration-none">
              Register for free
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
