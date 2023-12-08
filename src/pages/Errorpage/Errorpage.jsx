import Lottie from 'lottie-react'
import error from "../../image/error404.json"
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const Errorpage = () => {

  useEffect(()=>{
    document.title = "HFGE | ERRORPAGE"
  },[])

  return (
    <>
    <div className='grid mx-auto  h-[500px] w-[500px]'>
        <Lottie animationData={error}></Lottie>
    </div>
    <div className='grid justify-center'>
<Link to="/" className='  text-sky-500 py-2 px-3 rounded-md font-bold' >Go Back To Home Page</Link>
    </div>
    </>
  )
}

export default Errorpage