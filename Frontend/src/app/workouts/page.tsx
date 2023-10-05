import { Button } from "@/components/ui/button"
import 'tailwindcss/tailwind.css'
import Link from 'next/link'
import Videos from "../../components/ui/videos"

export default function Workouts() {


  
  return (

    <>
  <div className="pb-30px h-full bg-gradient-to-r from-cyan-500 to-blue-500">
    <div className="mb-50-">
      <h1 className="container mx-auto py-4 flex justify-evenly text-4xl font-bold mb-4">Welcome to Gym Guardian</h1>
      <p className="container mx-auto py-4 flex justify-evenly text-lg">View Our Sponsored Workouts</p>
     
      <div className="flex justify-center">
    
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

    <p className="italic hover:not-italic mt-10 container mx-auto py-4 flex justify-evenly text-lg">Scroll Down to Start building muscle and add these to your workouts!</p>


    <Videos/>

    {/* <div className='flex justify-center mt-20'>
        <Button size={'lg'}>        <ScrollDownButton />
</Button>

      </div> */}


  


   


</div>


  </>
  )
}
