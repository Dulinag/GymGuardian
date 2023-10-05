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
  const workoutData = Workouts
    const [isOpen, setIsOpen] = React.useState(false)
    const [state, setState] = React.useState({
        workoutData: null,
        activeMuscleGroup: null,
        updateOccurred: false
    })

  
 
    console.log(isOpen)

    const selectExercise = (group) => {
        setState({
            ...state,
            activeMuscleGroup: group,
            updateOccurred: false
        })
    }

    const checkModalState = React.useCallback((data) => {
      console.log(data, "modal")
      setState({
        ...state,
        workoutData: data,
        updateOccurred: true
      });
    }, []);

//Im grabbing the state from my modal once I submit my changes, I need a useEffect to check that the workoutData 
//has changed from my modal and store that state and render a table with the data.  The problem is 
//getting the state submitted to persist even tho on each open of the modal I need to start fresh
//my guess would be to add to seperate state using useEffect and have that data accumulate in a array of objects
      



  return (
    <div className='container mx-auto mt-8 p-8 h-auto w-full border border-black'>
        <h1 className="text-4xl font-bold mb-4">Builder</h1>
        <p className="text-lg mb-5">Select a body part to begin</p>
        <div className='container flex justify-evenly mt-5 border border-black'>
        <Dialog >
            {
                workoutData.map((item) => {
                    return (
                       
                        <Accordion key={item.id}
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
                      
                            <Modal activeMuscleGroup={state.activeMuscleGroup} onClose={checkModalState} />
                         
                            
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                     
                    )
                })
                
            }
             </Dialog>
        </div>
      

    </div>

    
  )
}

export default Builder
