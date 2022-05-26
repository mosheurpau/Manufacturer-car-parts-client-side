import React from "react";

const Membership = () => {
  return (
    <div
      className="hero h-96"
      style={{
        backgroundImage: "url(https://i.ibb.co/wdxkgxz/newsletter-bg.webp)",
      }}
    >
      <div className="hero-overlay bg-opacity-0"></div>
      <div className="hero-content text-center text-neutral-content">
        <div>
          <h1 className="mb-10 text-2xl md:text-5xl text-white font-bold">
            GET INSTANT DISCOUNT FOR MEMBERSHIP
          </h1>
          <p className="mb-10 text-1xl text-white font-bold">
            Subscribe our newsletter and all latest news of our latest product,
            promotion and offers
          </p>
          <div className="flex align-center justify-center">
            <div className="form-control">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Search…"
                  className="input input-bordered"
                />
                <button className="btn btn-square">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
