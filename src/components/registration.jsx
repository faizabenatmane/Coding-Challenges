//rafce
import React ,{useState}from 'react'
//import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';//icons from react
//import {Link} from 'react-router-dom';//to use links (quick links)

const registration = () => {
  return (
    <div className=' justify-between px-3 text-white'>
       <h1 className='w-full text-3xl font-bold text-[#00df9a]'>navbar</h1>  
       <ul className='flex '> {/* flex make them horizontaly ,hidden male them invisible*/ }
          <li className='p-4'>Registration</li> {/* padding=4 */ }
          <li className='p-4'>First Name</li>
          <li className='p-4'>Last name</li>
          <li className='p-4'></li>
       </ul>
       <div>
        <AiOutlineMenu/> {/*menu icon*/}
       </div>
    </div>
  
  )
}

export default registration