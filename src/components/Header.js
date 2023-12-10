import { useEffect, useState } from 'react'
import { FaArrowDown } from 'react-icons/fa'
import { Typewriter, } from 'react-simple-typewriter'
import saif from '../assets/me.jpg'

const Header = () => {

    const [color, setColor] = useState('#red');


    useEffect(() => {
        setColor('#red');
        document.documentElement.style
            .setProperty('--textColor', color);
    }, [color]);

    const scrollPage = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    }



    const handleType = (count) => {
        // access word count number
        console.log(count)
    }


    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }
    return (
        <header data-aos="fade-up">
            {/* NavBar */}
            <div className="w-full">

                <div className="w-3/4 mx-auto">

                    <div className="h-28 mx-auto flex items-center font-bold text-3xl justify-between">
                        <div className="flex transition-all duration-1000 ease-in-out hover:bg-textColor hover:px-8 ">
                            <h1>Saif </h1>
                            <h1>Eddine</h1>
                            <h1>Dhifi.</h1>
                        </div>
                        <div>
                            <ul className="md:flex items-center text-lg font-normal hidden sm:hidden">
                                <li onClick={() => { scrollPage("Carrer") }} className="px-2  transition duration-700 ease-in-out hover:bg-textColor cursor-pointer rounded"> Carrer </li>
                                <li onClick={() => { scrollPage("Technologies") }} className="px-2  transition duration-700 ease-in-out hover:bg-textColor cursor-pointer rounded"> Technologies </li>
                                <li onClick={() => { scrollPage("Github") }} className="px-2  transition duration-700 ease-in-out hover:bg-textColor cursor-pointer rounded"> Github </li>
                                {/* <li className="px-2 "> 
                                    <input onChange={(e) => {
                                        setColor(e.target.value)
                                    }} type="color" />
                                </li> */}
                                <li onClick={() => { scrollPage("Contact") }} className="px-2">
                                    <button class="p-2 transition-all ease-in-out delay-150  border-mainColor bg-textColor rounded-md duration-300 hover:bg-mainColor hover:border-4 hover:border-textColor hover:text-textColor">
                                        Contact
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className="mt-24 grid sm:grid-cols-1 md:grid-cols-2 ">
                        <div className='flex flex-col justify-center'>
                            <h1 className="text-3xl font-bold">Saif Eddine Dhifi
                                <br></br>
                                <span className='text-textColor'> ( <Typewriter loop={5}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={100}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                    onLoopDone={handleDone}
                                    onType={handleType} words={['Software Engineer', 'DevOps Engineer', 'IT Consultant']} />)</span>
                            </h1>
                            <h2 className="text-xl font-light mt-8">👋 Hi, I’m Saif Eddine Dhifi 👀 <br></br>Highly motivated DevOps engineer with an experience in optimizing and managing IT infrastructure, enhancing automation, and ensuring the
reliability of mission‑critical applications. Excited to transition into a software engineering role, leveraging my technical expertise and problem‑
solving skills to develop robust, scalable, and innovative software solutions.
</h2>
                        </div>
                        <div >
                        <img src={saif} width={300} height={300} className='mx-auto rounded-full z-auto border-2 ' alt="saif" />
                        </div>
                    </div>



                </div>


            </div>
            <div onClick={() => {
                scrollPage("Carrer");
            }}>

                <h1 className='text-center mt-40'>
                    <FaArrowDown className='mx-auto' />
                </h1>
                <h1 className='text-center'>Scroll Down</h1>
            </div>



        </header>

    );
}

export default Header;