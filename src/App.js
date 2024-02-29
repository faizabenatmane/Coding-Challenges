
import './App.css';
import React, { useState, useEffect } from 'react';
import gdg from './images/gdg.png';
import devfest from './images/devfest.png';

import { ReactTyped as Typed }  from 'react-typed'; 


function App() {



  return (    
    <div className="bg-gray-100 min-h-screen" >
      <div className="bg-blue-500 text-white  flex">
        <img className='w-20 h-20 ml-5' src={gdg} alt="gdg"/>
        <h1 className="text-3xl font-bold ml-5 mt-5 ">GDG-Les-Rosiers</h1>
      </div>

      <div  className="text-center bg-black ">
        <img className='w-screen' src={devfest} alt="devfest"/>
        <div className='text-white'>
        <div className='mt-8'>
         <Typed
          className='md:text-2xl sm:text-xl text-white font-bold md:pl-4 pl-2 font-mono '
          strings={['Secure your spot today and prepare to be amazed!']}
            typeSpeed={50}
            backSpeed={50}
            loop
          />
          </div>
          <div>
           <div className='flex justify-center'><img className='w-20' src='https://i.pinimg.com/originals/d6/5c/a1/d65ca16c2bb104e2fb0d52dbbadda6da.jpg'/> <p className='text-xl mt-6'>March 15-17, 2024</p></div>
           <div className='flex justify-center '> <img  className='w-10 ml-5'src='https://i.pinimg.com/originals/9e/e5/fb/9ee5fbb0c90d66eea8445d13527cb635.jpg' /> <p className='text-xl ml-5'>9:00 AM - 6:00 PM</p></div>
           <div className='flex justify-center mt-5'> <img  className='w-10 ml-5'src='https://i.pinimg.com/736x/e1/81/b7/e181b7cb6dec98c4d8efb94cfa77471c.jpg' /> <p className='text-xl ml-5'>Algeria,Blida</p></div>
          
          </div>

         <p   className='mt-10 ml-60 '> <a href="registration" className="text-white font-bold hover:border-blue-500 hover:bg-white hover:border-2 hover:text-blue-500 bg-blue-500 p-2  rounded-full border-2 border-blue-500"> Register Now</a></p>
         </div>
      </div>

      <section className="container mx-auto mt-8 px-4">
        <div id="animatedElement" className=  "bg-white p-6 rounded-lg shadow-md capitalize text-xl  left-0 transition-transform duration-1000 ease-in-out" >
          
          <div className='flex justify-center'>
          <h1 className="text-4xl font-bold mb-4 text-center">What is DevFest ? </h1>
          <a className='w-10 ml-3 hover:-translate-y-1' href="https://www.youtube.com/watch?v=Gou_5qTPzwI&t=8s" ><img src='https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/DF23-Bevy-EventThumb-Blue_fBOGa0e.png'/> </a>
           </div>
          <p className="text-gray-700 text-center mt-5 leading-10">DevFest short for “Developer Festival” is a community-led developer conference organized by Google Developer Groups (GDG) around the world. It brings together developers, technologists, students, and professionals to learn, share knowledge, and network around Google technologies and other emerging technologies.</p>
        </div>
      </section>

      <section className="container mx-auto mt-8 px-4 ">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl  mb-4">Event Highlights: key highlights and activities planned for the event, such as keynote sessions, workshops, networking opportunities, and more.</h2>         
        </div>
      </section>
     
     


      
      <footer className="bg-blue-500 text-white py-4 mt-8">

      <ul className="flex gap-4 justify-center">
            <li className='w-10 hover:scale-110'><a href="https://www.linkedin.com/in/gdg-les-rosiers-485b20297/" ><img src='https://companieslogo.com/img/orig/linkedin-2c3012a9.png?t=1700798504'/> </a></li>
            <li className='w-10 hover:scale-110'><a href="https://www.facebook.com/gdglesrosiers/" > <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/300px-Facebook_icon_2013.svg.png"  /> </a></li> 
            <li className='w-10 hover:scale-110'><a href="https://www.instagram.com/gdg_les_rosiers/" > <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/800px-Instagram_logo_2022.svg.png'/></a></li>
          </ul>

          <p className='ml-5'><strong>Email:</strong> gdg.les.rosiers@gmail.com</p>
          <p className='ml-5'><strong>Phone:</strong> +1 (123) 456-7890</p>
        <p className='text-center'>&copy; 2024 GDG-Les-Rosiers. All rights reserved.</p>
      </footer>
    </div>

  );
 
}

export default App;
