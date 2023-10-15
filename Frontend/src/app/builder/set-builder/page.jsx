"use client"

import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useSearchParams  } from "next/navigation";

function SetBuilder() {

    const searchParams = useSearchParams();
    const search = searchParams.get('exercise')
    console.log(search);
    
    let [exerciseBuilder, setExerciseBuilder] = React.useState({
        setNumbers: 0,
        setInfo:[]
      })

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

  return (
    <div className="flex flex-col flex-wrap h-auto p-5 m-5 border border-black justify-evenly">
    {/* <span className='flex justify-evenly'>
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
      } */}
    
  </div>
  )
}

export default SetBuilder