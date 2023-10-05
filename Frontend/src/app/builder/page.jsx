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

  import Table from '@/components/ui/builder-components/table.jsx'
  

  //seperate the state to make it leaner, look into useMemo

function Builder() {
  const workoutData = Workouts
    // const [isOpen, setIsOpen] = React.useState(false)
    const [state, setState] = React.useState({
        workoutData: null,
        activeMuscleGroup: null,
        exercises: null
    })
  const [tableState, setTableState] = React.useState(null)

  
 
    

    const selectExercise = (group) => {
      let exerciseList = state.exercises ? [...state.exercises, group] : group
      console.log(state)
        setState({
            ...state,
            activeMuscleGroup: group,
            exercises: [
              exerciseList
            ]
        })
    }

console.log(state)


    const checkModalState = React.useCallback((data) => {
      console.log(data, "modal")
      setState({
        ...state,
        workoutData: data,
        updateOccurred: true
      });

      addToTable()
    }, []);

    const addToTable = () => {
      setTableState(workoutData)
      console.log(workoutData)
    }
    console.log(tableState)

//Im grabbing the state from my modal once I submit my changes, I need a useEffect to check that the workoutData 
//has changed from my modal and store that state and render a table with the data.  The problem is 
//getting the state submitted to persist even tho on each open of the modal I need to start fresh
//my guess would be to add to seperate state using useEffect and have that data accumulate in a array of objects
      



  return (
    <div className='container mx-auto mt-8 p-8 h-auto w-full border border-black'>
        <h1 className="text-4xl font-bold mb-4">Builder</h1>
        <p className="text-lg mb-5">Select a body part to begin</p>
        <div className='container flex justify-evenly mt-5 border border-black'>
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
                        <ul>
                           {item.exercises.map((item) =>{
                            return (
                            <li 
                              key={item} 
                              className='hover hover:underline' 
                              onClick={() => selectExercise(item)}
                              style={{ cursor: 'pointer' }}
                            >
                                {item}
                            </li>
                                  
                            )
                        })}  
                        </ul>
                       
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  
                )
              })
                
            }
        </div>
     <div>
      {/* {
        state.exercises ? state.exercises.map((item) => {
          return (
            <div>
              <h1>{item}</h1>
              <Table activeState={state} onClose={checkModalState}/>
            </div>
          )
        
          

        })
        :
        null
      } */}
      
     </div>

    </div>

    
  )
}

export default Builder
