import Lottie from 'lottie-react'
import React from 'react'

import four from "../../../../image/one.json"
import three from "../../../../image/two.json"
import two from "../../../../image/three.json"
import one from "../../../../image/four.json"

const Steps = () => {
  return (
    <>
       <div className=' grid  justify-center'>
            <h1 className=' text-3xl lg:text-4xl font-extrabold'>STEPS PROCESS</h1>
        </div>
        
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">

        <div className="text-center ">
            <div>
            <Lottie className='h-20 2-20'  animationData={one}></Lottie>
            </div>

          <h6 className="text-xl font-bold text-deep-purple-accent-400 mb-2">
            Initial Assessment
          </h6>
          <p className=" text-xs  font-medium">You are Requested to Apply for an Assessment. </p>
        </div>

        <div className="text-center ">
        <div>
            <Lottie className='h-20 2-20'  animationData={two}></Lottie>
            </div>
          <h6 className="text-xl font-bold text-deep-purple-accent-400 mb-2">
            Invited to Meet
          </h6>
          <p className=" text-xs  font-medium ">You are Invited to our Office for a Prompt Meeting and we will Move Forward if your Assessment Report is Positive. </p>
        </div>

        <div className="text-center">
        <div>
            <Lottie className='h-20 2-20'  animationData={three}></Lottie>
            </div>
          <h6 className="text-xl font-bold text-deep-purple-accent-400 mb-2">
            Document Preparation
          </h6>
          <p className=" text-xs  font-medium ">We will Provide A List of Document. </p>
        </div>

        <div className="text-center ">
        <div>
            <Lottie className='h-20 2-20'  animationData={four}></Lottie>
            </div>
          <h6 className="text-xl font-bold text-deep-purple-accent-400 mb-2">
            Application Procedure
          </h6>
          <p className=" text-xs  font-medium ">Guide you to Apply to your Desired University and Ensure a Smmoth Journy Throughout the Process.</p>
        </div>

      </div>
    </div>


    
    </>
  )
}

export default Steps