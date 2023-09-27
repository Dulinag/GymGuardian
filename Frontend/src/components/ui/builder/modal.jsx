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
    console.log(modalContent)

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
              reps: 0,
              weight: 0,
              notes: null
            }
          ]
        }
        setModalContent(modalState)
      }
  

  return (
  
    <DialogContent>
        <DialogHeader className='m-5'>
            <DialogTitle >Set details for {activeMuscleGroup ? activeMuscleGroup : ""}</DialogTitle>
        </DialogHeader>
        
        <DialogDescription>
        { 
        modalContent.setNumbers > 0 ?
      
            <>
            {
              modalContent.setInfo.map((item) => {
                return(
                  <span key={item.id} className='flex flex-wrap'>
                    <p>Set Number: {item.id}</p>
                    <Label htmlFor="reps">Reps</Label>
                    <Input type='number' id="reps"></Input>
                    <Label htmlFor="weight">Weight</Label>
                    <Input type='number' id="weight" step="5" min="0"></Input>
                  </span>
                )
              })}
              
           
              
            </>
              
              :
            <>
              <p>Add more sets</p>
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