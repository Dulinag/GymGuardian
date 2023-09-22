import { Button } from "@/components/ui/button"
import 'tailwindcss/tailwind.css'

export default function Home() {
  return (
  <>
  
  <div className="container mx-auto mt-8 p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to Gym Guardian</h1>
      <p className="text-lg">Start building, tracking and recording all your workouts!</p>
      
  </div>
  <div className="container mx-auto py-4 flex justify-evenly">
    <Button size={'lg'}>Build New Workout</Button>
    <Button size={'lg'}>View All Workouts</Button>
  </div>
    
  
  </>
  )
}
