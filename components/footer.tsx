import React from "react";
import { BiMusic } from "react-icons/bi";
import { BsHeart } from "react-icons/bs";
import { CiCoffeeCup } from "react-icons/ci";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2024 <span className="font-semibold">Suryakant Thakur</span>. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold"> Made with lots of 🍵 + ❤️ + 🎵 in India.</span> 
      </p>
    </footer>
  );
}