
import React, { useState } from "react";
import NewsLatterBox from "../components/NewsLatterBox";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Login submitted:", { email, password });
  };

  return (
    <div className=" pb-[130px] pt-5 flex flex-col justify-center items-center gap-y-10">
      <div className="w-[400px] flex flex-col justify-center items-center gap-y-10 bg-white p-6 ">
        <div className="flex items-center gap-2 text-[#414141]">
          <p className="font-semibold text-2xl ">Login</p>
          <p className="w-8 md:w-11 h-[2px] bg-[#414141]" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 flex flex-col w-full ">
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300  focus:outline-none focus:ring-1 focus:ring-[black]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="password"
              className="w-full px-4 py-2 border border-gray-300  focus:outline-none focus:ring-1 focus:ring-[black]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex justify-between text-sm  ">
            <a href="#" className="text-[#414141] hover:underline">
              Forgot your password?
            </a>
            <Link to={"/register"}>
            <a href="#" className="text-[#414141] hover:underline">
              Create account
            </a>
            </Link>
          </div>

          <button
            type="submit"
            className="flex self-center w-[150px] py-2 px-12 bg-[black] text-white   hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[black] transition duration-200 ease-in-out"
          >
            Sign in
          </button>
        </form>
      </div>
      <NewsLatterBox />
    </div>
  );
};

export default Login;
