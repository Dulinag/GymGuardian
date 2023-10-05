import React from "react";



function videos() {
    return (
<div className="h-screen flex bg-gradient-to-r from-cyan-500 to-blue-500 items-center justify-center">
      
<div className="grid grid-cols-12 gap-2 gap-y-4 max-w-6xl">
  

  {/* Video 1 */}
  <div className="col-span-12 sm:col-span-6 md:col-span-3">
    <div className="w-full flex flex-col">
      <div className="relative">

        {/* Image Video */}
        <a href="#">
          <img src="data:image/jpeg;base64,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" className="w-96 h-55.5" />
        </a>

        <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">1:15</p>
      </div>

      <div className="flex flex-row mt-2 gap-2">

        {/* Profile Picture */}
        <a href="#">
          <img src="https://picsum.photos/seed/1/40/40" className="rounded-full max-h-10 max-w-10" />
        </a>

        {/* Description */}
        <div className="flex flex-col">
          <a href="#">
            <p className="text-gray-100 text-sm font-semibold">Mashle's Bench Press </p>
          </a>
          <a className="text-gray-400 text-xs mt-2 hover:text-gray-100" href="#"> Mashle </a>
          <p className="text-gray-400 text-xs mt-1">241K views . 3 years ago</p>
        </div>

      

      </div>
    </div>
  </div>

  <div className="col-span-12 sm:col-span-6 md:col-span-3">
<div className="w-full flex flex-col">
<div className="relative">

{/* Image Video */}
<a href="#">
  <img src="https://i.ytimg.com/vi/bh5mYz0-eMI/sddefault.jpg" className="w-96 h-40" />
</a>

<p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">1:15</p>
</div>

<div className="flex flex-row mt-2 gap-2">

{/* Profile Picture */}
<a href="#">
  <img src="https://picsum.photos/seed/4/40/40" className="rounded-full max-h-10 max-w-10" />
</a>

{/* Description */}
<div className="flex flex-col">
  <a href="#">
    <p className="text-gray-100 text-sm font-semibold">Dragon Ball Full Body Workout</p>
  </a>
  <a className="text-gray-400 text-xs mt-2 hover:text-gray-100" href="#"> Gohan </a>
  <p className="text-gray-400 text-xs mt-1">241K views . 3 years ago</p>
</div>

</div>
</div>
</div>

<div className="col-span-12 sm:col-span-6 md:col-span-3">
<div className="w-full flex flex-col">
<div className="relative">

{/* Image Video */}
<a href="#">
  <img src="https://i.ytimg.com/vi/cHx0rA4zpTU/maxresdefault.jpg" className="w-96 h-auto" />
</a>

<p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">1:15</p>
</div>

<div className="flex flex-row mt-2 gap-2">

{/* Profile Picture */}
<a href="#">
  <img src="https://picsum.photos/seed/88/40/40" className="rounded-full max-h-10 max-w-10" />
</a>

{/* Description */}
<div className="flex flex-col">
  <a href="#">
    <p className="text-gray-100 text-sm font-semibold">Baki'ss Back and Bicep Routine</p>
  </a>
  <a className="text-gray-400 text-xs mt-2 hover:text-gray-100" href="#"> BAKI </a>
  <p className="text-gray-400 text-xs mt-1">241K views . 3 years ago</p>
</div>

</div>
</div>
</div>

<div className="col-span-12 sm:col-span-6 md:col-span-3">
<div className="w-full flex flex-col">
<div className="relative">

{/* Image Video */}
<a href="#">
  <img src="https://sportshub.cbsistatic.com/i/2021/03/17/9005193c-fb51-49c7-9faf-a26ac0fdec31/one-punch-man-saitama-workout-1165528.jpg" className="w-96 h-auto" />
</a>

<p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">1:15</p>
</div>

<div className="flex flex-row mt-2 gap-2">

{/* Profile Picture */}
<a href="#">
  <img src="https://picsum.photos/seed/57/40/40" className="rounded-full max-h-10 max-w-10" />
</a>

{/* Description */}
<div className="flex flex-col">
  <a href="#">
    <p className="text-gray-100 text-sm font-semibold">Saitama's Routine</p>
  </a>
  <a className="text-gray-400 text-xs mt-2 hover:text-gray-100" href="#"> Saitama </a>
  <p className="text-gray-400 text-xs mt-1">241K views . 3 years ago</p>
</div>

</div>
</div>
</div>

 
</div>
</div>
    )};


    export default videos;