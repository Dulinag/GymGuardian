import React from 'react'
import 'tailwindcss/tailwind.css'
import {
    
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
   
  } from "@/components/ui/dialog"
  import { Button } from "@/components/ui/button"


function Modal({activeMuscleGroup}) {
    console.log(activeMuscleGroup)
    let [modalContent, setModalContent] = React.useState({
        setNumbers: 0
    })

    const addSetAmount = () => {
        let setAmount = modalContent.setNumbers
  
        console.log(setAmount)
        setModalContent({
            ...modalContent,
            setNumbers: ++setAmount
        })
      }
  
      const resetState = () => {
        let setAmount = 0
        console.log(setAmount, "reset")
        setModalContent({
          ...modalContent,
          setNumbers: setAmount
        })
      }
  

  return (
    <div>
    <DialogContent>
        <DialogHeader className='m-5'>
            <DialogTitle >Fill out your set details for {activeMuscleGroup ? activeMuscleGroup : ""}</DialogTitle>
        <DialogDescription>
            <Button onClick={() => addSetAmount()}>Add Set</Button>
            <Button onClick={() => resetState()}>Reset Set Amount</Button>
        </DialogDescription>
        </DialogHeader>
    </DialogContent>
        
    </div>
  )
}

export default Modal