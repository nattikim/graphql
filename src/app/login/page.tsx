"use client";

import React, { FormEvent, useEffect, useState } from "react";
import { login } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const jwtToken = localStorage.getItem("jwtToken");
    if (jwtToken) {
      router.push("/");
    }
  }, []);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const jwtToken = await login(username, password);

      localStorage.setItem("jwtToken", jwtToken);
      window.location.href = "/";
    } catch (error) {
      console.log(error);
      setError("Invalid credentials.");
    }
  };

  return (
    <div className="z-10 m-auto">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold">Login</h1>
          <p className="py-6">Check your Grit:lab progress.</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl backdrop-blur-3xl">
          <div className="card-body">
            <form onSubmit={(e) => handleLogin(e)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base-content">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered text-base-content"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  required
                />
              </div>
              <div className="form-control mb-1">
                <label className="label">
                  <span className="label-text text-base-content">Password</span>
                </label>
                <input
                  type={"password"}
                  placeholder="password"
                  className="input input-bordered text-base-content"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
              </div>
              {error ? (
                <div className="form-control">
                  <label className="label p-0">
                    <span className="text-error">{error}</span>
                  </label>
                </div>
              ) : (
                <br />
              )}
              <div className="form-control mt-6">
                <button type={"submit"} className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
