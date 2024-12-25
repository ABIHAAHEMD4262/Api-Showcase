import React from "react";
import Link from "next/link";
const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-950 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white font-bold text-3xl ">APIShowcase</h1>
        <ul className="flex space-x-4 text-white">
        <li><Link href="#" className="hover:text-gray-400">Home</Link></li>
          <li><Link href="/ClientSide" className="hover:text-gray-400">Client Side</Link></li>
          <li><Link href="/ServerSide" className="hover:text-gray-400">Server Side</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
