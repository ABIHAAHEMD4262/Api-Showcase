import React from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <div className="flex-col container mx-auto p-4 md:pl-[320px] md:mt-[180px]">
        <h1 className="text-4xl font-bold mb-6 text-blue-950">Welcome to the Data Grid Assignment</h1>
        <p className="mb-4 text-2xl text-blue-950">Choose a data fetching method:</p>
        <div className="space-y-4">
          <Link href="/ServerSide" legacyBehavior>
            <button className="h-[50px] mr-9 bg-blue-950 text-white px-4 py-2 rounded hover:bg-blue-600 ">
              Server-Side Data Fetching
            </button>
          </Link>
          <Link href="/ClientSide" legacyBehavior>
            <button className="bg-blue-950 h-[50px] text-white px-4 py-2 rounded hover:bg-green-600">
              Client-Side Data Fetching
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
