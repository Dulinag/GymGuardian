import { Inter } from 'next/font/google';
import image1 from "../ui/images/gymname.png";
import Image from 'next/image';
import Link from 'next/link';


interface Background {
    color: string;
    image: string;
  }
  
function CalenderComp() {
  return (
   <>
   


<div className="flex flex-col items-center justify-center min-h-screen px-6 bg-gray-900">
    <h1 className="text-2xl font-bold text-center text-white">Click To Add Workouts</h1>
    <p className="flex items-end mt-2 text-base text-center text-gray-400 gap-x-2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-red-500 shrink-0">
        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
      </svg>
    </p>
    
    <div className="grid w-full max-w-xl grid-cols-7 gap-6 mx-auto mt-6">
      <p className="flex items-center justify-center h-16 text-blue-300">Sa</p>
      <p className="flex items-center justify-center h-16 text-blue-300">Fr</p>
      <p className="flex items-center justify-center h-16 text-blue-300">Th</p>
      <p className="flex items-center justify-center h-16 text-blue-300">We</p>
      <p className="flex items-center justify-center h-16 text-blue-300">Tu</p>
      <p className="flex items-center justify-center h-16 text-blue-300">Mo</p>
      <p className="flex items-center justify-center h-16 text-blue-300">Su</p>
    </div>

    <div className="grid w-full max-w-xl grid-cols-7 gap-6 mx-auto">
      <div className="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
        <div className="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">1</div>
      </div>

      <div className="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
        <div className="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">2</div>
      </div>

      <div className="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
        <div className="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">3</div>
      </div>

      <div className="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
        <div className="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">4</div>
      </div>

      <div className="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
        <div className="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">5</div>
      </div>

      <div className="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
        <div className="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">6</div>
      </div>

      <div className="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
        <div className="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">7</div>
      </div>

      <div className="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
        <div className="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">8</div>
      </div>

      <div className="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
        <div className="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">9</div>
      </div>

      <div className="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
        <div className="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">10</div>
      </div>

      <div className="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
        <div className="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">11</div>
      </div>

      <div className="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
        <div className="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">12</div>
      </div>

      <div className="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
        <div className="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">13</div>
      </div>

      <div className="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
        <div className="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">14</div>
      </div>

      <div className="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
        <div className="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">15</div>
      </div>

      <div className="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
        <div className="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">16</div>
      </div>

      <div className="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
        <div className="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">17</div>
      </div>

      <div className="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
        <div className="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">18</div>
      </div>

      <div className="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
        <div className="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">19</div>
      </div>

      <div className="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
        <div className="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">20</div>
      </div>

      <div className="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
        <div className="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">21</div>
      </div>

      <div className="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
        <div className="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">22</div>
      </div>

      <div className="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
        <div className="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">23</div>
      </div>

      <div className="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
        <div className="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">24</div>
      </div>

      <div className="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
        <div className="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">25</div>
      </div>

      <div className="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
        <div className="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">26</div>
      </div>

            <div className="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
        <div className="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">27</div>
      </div>

      <div className="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
        <div className="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">28</div>
      </div>

      <div className="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
        <div className="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">29</div>
      </div>

      <div className="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
        <div className="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">30</div>
      </div>

      <div className="relative w-full h-12 cursor-pointer hover:scale-110 box bg-gradient after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:transition-opacity after:duration-500 hover:bg-white">
        <div className="absolute inset-[3px] z-20 flex items-center justify-center bg-gray-900 text-white">31</div>
      </div>
    </div>
</div>

   
   
   
   
   
   
   
   </>
  );
}

export default CalenderComp;



