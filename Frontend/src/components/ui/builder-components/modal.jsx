import React from 'react'
import 'tailwindcss/tailwind.css'
import {
    DialogFooter,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
   
  } from "@/components/ui/dialog"
  import { Button } from "@/components/ui/button"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"



function Modal({activeMuscleGroup, onClose}) {
    let [modalContent, setModalContent] = React.useState({
        setNumbers: 0,
        setInfo:[]
    })
    

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
  
    <DialogContent style={{backgroundColor:"white"}}>
        <DialogHeader className='m-1.5'>
            <DialogTitle >Set details for {activeMuscleGroup ? activeMuscleGroup : ""}</DialogTitle>
        </DialogHeader>
        
        <DialogDescription>
        { 
        modalContent.setNumbers > 0 ?
      
            <>
            {
              modalContent.setInfo.map((item, i) => {
                return(
                  <span key={item.id} className='flex flex-wrap'>
                    <p>Set Number: {item.id}</p>
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
                  </span>
                )
              })}
              
            </>
              
              :
            <>
              Add sets
              
            </>
              
      }
        </DialogDescription>
        
      <DialogFooter>
        <Button onClick={addSetAmount}>Add Set</Button>
        <Button onClick={close}>Submit Working Set List</Button>
      </DialogFooter>
    </DialogContent>
 
  )
}

export default Modal