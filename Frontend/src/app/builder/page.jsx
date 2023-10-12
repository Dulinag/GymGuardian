"use client"
import React from 'react'
import 'tailwindcss/tailwind.css'
import {Workouts} from '../../../data/WorkoutData.js'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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
  const [tableState, setTableState] = React.useState([])
  let [exerciseBuilder, setExerciseBuilder] = React.useState({
    setNumbers: 0,
    setInfo:[]
  })

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

  const addSetAmount = () => {

    let setAmount = exerciseBuilder.setNumbers
    let modalState = {
      setNumbers: ++setAmount,
      setInfo:[
        ...exerciseBuilder.setInfo,
        {
          id: ++setAmount,
          exercise: state.activeMuscleGroup,
          reps: 0,
          weight: 0,
          notes: null
        }
      ]
    }
    setExerciseBuilder(modalState)
  }

  const removeSet = (item) => {
    let {id} = item

    let setInfo = exerciseBuilder.setInfo
    let setAmount = exerciseBuilder.setNumbers -1
    
    
    let newSetInfo = setInfo.filter((set) => set.id !== id)
    let builderState = {
      setNumbers: setAmount,
      setInfo: newSetInfo
    }

    setExerciseBuilder(builderState)
  
  }

  const handleInputChange = (e, index) => {
    let {name, value} = e.target

    let tableState = exerciseBuilder.setInfo

    tableState[index][name] = value

    setExerciseBuilder({
      ...exerciseBuilder,
      setInfo: tableState
    })

  }

  const addToTable = (activeExercise) => {
    
    let {setInfo} = exerciseBuilder
    console.log(setInfo)

    let exerciseTable = [
      ...tableState,
      {
        id: tableState.length,
        exerciseName: activeExercise,
        listOfExercises: setInfo
      }
    ]

    setTableState(exerciseTable)
    
    
  }
    

//Im grabbing the state from my modal once I submit my changes, I need a useEffect to check that the workoutData 
//has changed from my modal and store that state and render a table with the data.  The problem is 
//getting the state submitted to persist even tho on each open of the modal I need to start fresh
//my guess would be to add to seperate state using useEffect and have that data accumulate in a array of objects
      



  return (
    <div className='container w-full h-auto p-8 mx-auto mt-8 border border-black'>
        <h1 className="mb-4 text-4xl font-bold">Builder</h1>
        <p className="mb-5 text-lg">Select a body part to begin</p>
        <div className='container flex mt-5 border border-black justify-evenly'>
            {
              workoutData.map((item) => {
                return (
                    <Accordion key={item.id}
                        type="single" 
                        collapsible
                    >
                    <AccordionItem value="item-1">
                      <AccordionTrigger className='font-bold'>{item.muscle_group}</AccordionTrigger>
                      {/* <AccordionContent className=''> */}
                  
                           {item.exercises.map((item) =>{
                            return (
                            <AccordionContent 
                              key={item} 
                              
                              className='flex flex-col hover hover:underline' 
                              onClick={() =>{ 
                              
                                selectExercise(item);
                              }}
                              style={{ cursor: 'pointer' }}
                            >
                                {item}
                            </AccordionContent>
                                  
                            )
                        })}  
                 
                       
                      {/* </AccordionContent> */}
                    </AccordionItem>
                  </Accordion>
                  
                )
              })
                
            }
        </div>
     {
      state.activeMuscleGroup ? 
      <div className="flex flex-col flex-wrap h-auto p-5 m-5 border border-black justify-evenly">
        <span className='flex justify-evenly'>
          {state.activeMuscleGroup}
          <Button onClick={addSetAmount} size="sm">Add Set</Button>
          <Button onClick={() => addToTable(state.activeMuscleGroup)} size="sm">Save to Workout</Button>
        </span>
        
        
          {
            exerciseBuilder.setNumbers > 0 ? 
            exerciseBuilder.setInfo.map((item, i) => {
                return(
                  <span key={item.id} className='flex flex-wrap'>
                    <p>Set Number: {i+1}</p>
                    <Label htmlFor="reps">Reps</Label>
                    <Input 
                      type='number' 
                      id="reps" 
                      name="reps" 
                      min="0"
                      onChange={(e) => handleInputChange(e, i)}
                    >
                      </Input>
                    <Label htmlFor="weight">Weight</Label>
                    <Input 
                      type='number' 
                      id="weight" 
                      step="5"
                      min="0" 
                      name="weight" 
                      onChange={(e) => handleInputChange(e, i)}
                    ></Input>
                    <Button onClick={() => removeSet(item)}>X</Button>
                  </span>
                )
              })
            :
            null
          }
        
      </div>
      :
      null
     }

     {
      tableState.length < 1 ? null :
      tableState.map((item) => {
        console.log(item)
        return(
          <div key={item.id} className='flex flex-wrap'>
            <h1>{item.exerciseName}</h1>
            {
              item.listOfExercises.map((set) => {
                return(
                <span key={set.id}>
                  <p >{set.id}</p>
                  <p >{set.reps}</p>
                  <p>{set.weight}</p>
                </span>
                )
                
              })
            }
          </div>
        )
      })
     }

    </div>

    
  )
}

export default Builder
