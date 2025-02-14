import about from "../assets/assets/About.jpg";
const About = () => {
  return (
    <div className="border-u border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl" >About
            <span className="text-neutral-500"> Me</span> </h1>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex item-center justify-center">
                    <img src={about} alt="about"/>
                    </div></div>
            </div>
        
    </div>
    
  )
}

export default About