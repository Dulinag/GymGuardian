import React from 'react'
import 'tailwindcss/tailwind.css'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


function Table({activeState, onClose}) {
    let [exerciseBuilder, setexerciseBuilder] = React.useState({
        setNumbers: 0,
        setInfo:[]
    })

    let {workoutData, activeMuscleGroup} = activeState
    

    const close = () => {
      
      setModalContent({
        ...modalContent,
        setNumbers: 0,
        setInfo:[]
      }) 
      onClose(modalContent)
    }

    const addSetAmount = () => {

        let setAmount = modalContent.setNumbers
        let modalState = {
          setNumbers: ++setAmount,
          setInfo:[
            ...modalContent.setInfo,
            {
              id: setAmount,
              exercise: activeMuscleGroup,
              reps: 0,
              weight: 0,
              notes: null
            }
          ]
        }
        setModalContent(modalState)
      }

    const handleInputChange = (e, index) => {
      let {name, value} = e.target

      let modalState = modalContent.setInfo

      modalState[index][name] = value

      setModalContent({
        ...modalContent,
        setInfo: modalState
      })

    }
    // console.log(modalContent)

  

  return (
  
    <div style={{backgroundColor:"white"}}>
        <header className='m-1.5'>
            <title >Set details for {activeMuscleGroup ? activeMuscleGroup : ""}</title>
        </header>
        
        <div>
        { 
        modalContent.setNumbers > 0 ?
      
            <>
            {
              modalContent.setInfo.map((item, i) => {
                return(
                  <span key={item.id} className='flex flex-wrap w-full'>
                    <p>Set Number: {item.id}</p>
                    <Label htmlFor="reps">Reps</Label>
                    <Input 
                      type='number' 
                      id="reps" 
                      name="reps" 
                      min="0"
                      className="w-1/5 p-2"
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
                      className="w-1/4 p-2" 
                      onChange={(e) => handleInputChange(e, i)}
                    ></Input>
                    
                  </span>
                )
              })}
              
            </>
              
              :
            <>
              Add sets
            </>
              
      }
        </div>
        
      <footer>
        <Button onClick={addSetAmount}>Add Set</Button>
        <Button onClick={close}>Submit Working Set List</Button>
      </footer>
    </div>
 
  )
}

export default Table