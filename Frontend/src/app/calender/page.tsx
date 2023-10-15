"use client"


import { Button } from "@/components/ui/button"
import 'tailwindcss/tailwind.css'
import Link from 'next/link'
import ScrollLink from "@/components/ui/ScrollLink"
import CalenderComp from "@/components/ui/calender"

export default function Calender() {


  
  return (

    <>

    
  <div className=" text-4xl font-bold flex justify-center h-full bg-black text-white">
 


Welcome to Our Calender Feature
  




</div>

<CalenderComp/>


  </>
  )
}
