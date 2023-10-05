import { Inter } from 'next/font/google';
import image1 from "../ui/images/gymname.png";
import Image from 'next/image';

function Rfooter() {
  return (
    <div className='bg-blend-multiply'>

      <div className="px-5 md:px-10">
        <div className="mx-auto w-full max-w-[1200px]"> {/* Adjusted max width */}
          <div className="py-8 md:py-10 lg:py-12"> {/* Adjusted padding */}
            <div className="flex-col flex items-center">
              <a href="#" className="mb-4 inline-block max-w-full text-black"> {/* Reduced margin here */}
                <Image src={image1} alt="" className="inline-block max-w-full" style={{ maxHeight: '20rem' }} />
              </a>
              <div className="text-center font-semibold max-w-[991px] mx-auto py-1"> {/* Adjusted max width and centering */}
                <a href="#" className="inline-block px-6 py-2 font-normal text-black transition hover:text-[#d6a701]">About</a>
                <a href="#" className="inline-block px-6 py-2 font-normal text-black transition hover:text-[#d6a701]">Builder</a>
                <a href="#" className="inline-block px-6 py-2 font-normal text-black transition hover:text-[#d6a701]">Workout videos</a>
                <a href="#" className="inline-block px-6 py-2 font-normal text-black transition hover:text-[#d6a701]">Support</a>
              </div>
              <div className="mb-2 border-b-2 border-gray-400 w-36"> {/* Adjusted height */}
              </div>
             
              <p className="max-w-[479px] mx-auto text-sm">© Copyright 2021. All rights reserved.</p> {/* Adjusted max width and centering */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rfooter;
