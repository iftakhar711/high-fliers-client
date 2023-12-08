import React, { useEffect } from 'react'
import Lottie from 'lottie-react'
import education from "../../image/aboutus.json"

const AboutUs = () => {

  useEffect(()=>{
    document.title = "HFGE | ABOUT"
  },[])

  return (

<>
<div className=' grid  justify-center '>
      <h1 className=' text-3xl lg:text-5xl font-medium'>ABOUT US</h1>
       <span className=' border-b-2 mt-4 hover:border-sky-700 duration-200  '></span>
    </div>

<div className="container my-16 mx-auto md:px-6">
 
  <section className="mb-32">
    
    <div className="container mx-auto text-center lg:text-left xl:px-32">
      <div className=" grid items-center lg:grid-cols-2">
        <div className="mb-12 lg:mb-0">
          <div
            className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14">
            {/* <h2 className="mb-8 text-3xl font-bold"></h2> */}
            <p className="mb-8 pb-2 text-neutral-500 dark:text-neutral-300 lg:pb-0 text-justify">
             <span className=' text-xl font-semibold text-sky-600 '>How do we make a difference- <br /></span>

              We are a professional student consulting firm, dedicated to providing the best solutions to students seeking higher study abroad. We strive to create opportunities for students because we believe everyone should have access to quality higher education. <br /> <br />

              With many of our streams directly linking to the permanent residence route, we help you not only get your student visa application sorted, but also ensure better career, as opposed to just your studies. It has started its journey since 2004 and ever since it has worked with several students with a 99% success rate. Every year thousands of students apply in the top universities all over the country but due to lack of expertise fail to get admission in the desired universities. Thus, we are here with our expert team to help you, and provide total guidance throughout your journey of studying abroad with scholarships. We are extremely professional when it comes to our responsibilities. But we deal with our clients with utmost individuality and care in order to enhance transparency of our processing and keep them involved throughout the whole journey.
            </p>

            {/* <div className="mx-auto mb-8 flex flex-col md:flex-row md:justify-around lg:justify-between">
              <p className="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0">
                
                Best team
              </p>

              <p className="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0">
                
                Best quality
              </p>

              <p className="mx-auto mb-2 flex items-center md:mx-0 lg:mb-0">
                
                Best experience
              </p>
            </div> */}

            {/* <p className="mb-0 text-neutral-500 dark:text-neutral-300">
              In ac turpis justo. Vivamus auctor quam vitae odio feugiat
              pulvinar. Sed semper ligula sed lorem tincidunt dignissim. Nam
              sed cursus lectus. Proin non rutrum magna. Proin gravida,
              justo et imperdiet tristique, turpis nisi viverra est, nec
              posuere ex arcu sit amet erat. Sed a dictum sem. Duis pretium
              condimentum nulla, ut aliquet erat auctor sed. Aenean
              facilisis neque id ligula maximus scelerisque. Nunc sed velit
              rhoncus, interdum dolor at, lacinia lacus. Proin eleifend
              viverra posuere. Ut commodo risus lacus, ac scelerisque quam
              aliquam dictum. Etiam dignissim pulvinar eros eget auctor.
              Quisque congue turpis quis libero ullamcorper imperdiet.
              Vivamus a orci maximus, dignissim ligula a, congue dui. Morbi
              et lectus sit amet neque luctus viverra.
            </p> */}
          </div>
        </div>

        <div>
        <Lottie animationData={education}  className=" rounded-lg shadow-lg dark:shadow-black/20"></Lottie>
            
        </div>
      </div>
    </div>
    
  </section>

</div>

</>

  )
}

export default AboutUs