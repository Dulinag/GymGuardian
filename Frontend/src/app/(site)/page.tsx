"use client"


import { Button } from "@/components/ui/button"
import 'tailwindcss/tailwind.css'
import Link from 'next/link'
import ScrollLink from "@/components/ui/ScrollLink"

export default function Home() {


  
  return (

    <>

    
  <div className="pb-30px h-full bg-gradient-to-r from-cyan-500 to-blue-500 pb-60">
    <div className="mb-50">
      <p className="italic hover:not-italic container mx-auto py-4 flex justify-evenly text-lg">Start building, tracking and recording all your workouts!</p>
     
      <div className="flex justify-center">
      <img
    src="https://img.freepik.com/premium-photo/muscular-back-gym-anime-style_783299-1774.jpg"
    className=" content-center text-lg h-auto max-w-sm rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
  alt="" />
  </div>
  <div className="pt-20 container mx-auto py-4 flex justify-evenly">


  <Link href="/">
      <Button size={'lg'}>  Home    </Button>
    </Link>
  
    <Link href="/builder">
      <Button size={'lg'}>Build New Workout</Button>
    </Link>
    
    <Button size={'lg'}>View All Workouts</Button>

    <Link href = "/videos">
    <Button size={'lg'}>View Our Workouts Video</Button>

</Link>

<Link href="/calender">
      <Button size={'lg'}>  Calender    </Button>
    </Link>




    </div>
    </div>



  


   


</div>
<div>  
  
<ScrollLink className=" text-6xl justify-evenly  bg-gradient-to-r from-cyan-500 to-blue-500 flex btn bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" href="#section-1">
⬇
          </ScrollLink>
</div>
  </>
  )
}
