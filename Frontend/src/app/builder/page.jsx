"use client"
import React from 'react'
import 'tailwindcss/tailwind.css'
import {Workouts} from '../../../data/WorkoutData.js'
import { Button } from "@/components/ui/button"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import Modal from '../../components/ui/builder/modal.jsx'
  

  //seperate the state to make it leaner, look into useMemo

function Builder() {
    const [state, setState] = React.useState({
        workoutData: Workouts,
        activeMuscleGroup: "",
        setNumbers: 0
    })

  
 
    console.log(state)

    const selectExercise = (group) => {


        setState({
            ...state,
            activeMuscleGroup: group
        })
    }


      

console.log(state.activeMuscleGroup)

  return (
    <div className='container mx-auto mt-8 p-8 h-auto w-full border border-black'>
        <h1 className="text-4xl font-bold mb-4">Builder</h1>
        <p className="text-lg mb-5">Select a body part to begin</p>
        <div className='container flex justify-evenly mt-5 border border-black'>
            {
                state.workoutData.map((item) => {
                    return (
                        <Dialog key={item.id}>
                        <Accordion 
                            type="single" 
                            collapsible
                        >
                        <AccordionItem value="item-1">
                          <AccordionTrigger className='font-bold'>{item.muscle_group}</AccordionTrigger>
                          <AccordionContent className='flex flex-col'>
                            {item.exercises.map((item) =>{
                                return (
                                <p key={item}>
                                    <DialogTrigger className='hover hover:underline' onClick={() => selectExercise(item)} >
                                        {item}
                                    </DialogTrigger>
                                </p>
                                   
                                    
                                )
                            })}
                            <Modal activeMuscleGroup={state.activeMuscleGroup}/>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                      </Dialog>
                    )
                })
            }
        </div>
       <div>

       </div>
    </div>
  )
}

export default Builder