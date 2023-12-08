import Lottie from 'lottie-react'
import soon from "../../image/coming.json"
import { useEffect } from 'react'

const Comingsoon = () => {

  useEffect(()=>{
    document.title = "HFGE | COMMING"
  },[])

  return (
    <div className=' m-10'>
        <Lottie animationData={soon}></Lottie>
    </div>
  )
}

export default Comingsoon