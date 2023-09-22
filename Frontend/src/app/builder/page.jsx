"use client"
import React from 'react'
import 'tailwindcss/tailwind.css'
import {Workouts} from '../../../data/WorkoutData.js'
import { Button } from "@/components/ui/button"

function Builder() {
    const [state, setState] = React.useState({
        workoutData: Workouts,
        activeMuscleGroup: "",

    })
 
    const setMuscleGroup = (group) => {
        console.log(group)
        
        setState({
            ...state,
            activeMuscleGroup: group
        })
    }

    console.log(state.activeMuscleGroup.exercises)
  return (
    <div className='container mx-auto mt-8 p-8 h-auto'>
        <h1 className="text-4xl font-bold mb-4">Builder</h1>
        <p className="text-lg mb-5">Select a body part to begin</p>
        <div className='container flex justify-evenly mt-5'>
            {
                state.workoutData.map((item) => {
                    return (
                        <Button 
                            className="mt-5" 
                            key={item.id}
                            size={"lg"}
                            onClick={() => setMuscleGroup(item)}
                        >
                            {item.muscle_group}
                        </Button>
                    )
                })
            }
        </div>
       <div>
        {
            state.activeMuscleGroup == "" ? null :
            state.activeMuscleGroup.exercises.map((lift) =>{
               return (<p>{lift}</p>) 
               
            }) 
        }
       </div>
    </div>
  )
}

export default Builder