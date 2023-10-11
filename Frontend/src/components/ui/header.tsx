import { Inter } from 'next/font/google';
import image1 from "../ui/images/gymname.png";
import Image from 'next/image';

function RHeader() {
  return (
    <section className="bg-black py-10"> {/* Increased padding for better spacing */}
      <div className="max-w-screen-xl mx-auto px-4"> {/* Center content with max-width */}
        <div className="flex items-center justify-between">
          <div className="flex items-center"> {/* Center the logo and text */}
            <img
              className="rounded-full"
              src="https://ih1.redbubble.net/image.3440946030.3036/raf,750x1000,075,t,101010:01c5ca27c6.jpg"
              width="40"
              height="40"
            />
            <h1 className="text-white ml-2 text-2xl font-bold">Welcome to Gym Guardian</h1>
          </div>
          <p className="text-sm text-gray-400">
            T&amp;C &nbsp; Career &nbsp; Privacy &amp; Policy &nbsp; Developers
          </p>
        </div>
      </div>
    </section>
  );
}

export default RHeader;



