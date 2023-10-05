import { Button } from "@/components/ui/button"
import 'tailwindcss/tailwind.css'
import Link from 'next/link'

import ScrollDownButton from '../components/ui/scrollToBottom';
export default function Home() {


  
  return (

    <>
  <div className="pb-30px h-full bg-gradient-to-r from-cyan-500 to-blue-500">
    <div className="mb-50-">
      <h1 className="container mx-auto py-4 flex justify-evenly text-4xl font-bold mb-4">Welcome to Gym Guardian</h1>
      <p className="container mx-auto py-4 flex justify-evenly text-lg">Start building, tracking and recording all your workouts!</p>
     
      <div className="flex justify-center">
      <img
    src="https://img.freepik.com/premium-photo/muscular-back-gym-anime-style_783299-1774.jpg"
    className=" content-center text-lg h-auto max-w-sm rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
  alt="" />
  </div>
  <div className="container mx-auto py-4 flex justify-evenly">
  
    <Link href="/builder">
      <Button size={'lg'}>Build New Workout</Button>
    </Link>
    
    <Button size={'lg'}>View All Workouts</Button>

<Link href = "/workouts">
    <Button size={'lg'}>View Our Workouts Video</Button>
</Link>




    </div>
    </div>
    {/* <div className='flex justify-center mt-20'>
        <Button size={'lg'}>        <ScrollDownButton />
</Button>

      </div> */}


  


   


</div>


  </>
  )
}
