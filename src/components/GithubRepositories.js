import axios from "axios";
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { useEffect, useState } from "react";


const GithubRepositories = () => {


    const [repositories, setRepositories] = useState([]);
    const [showMore, setShowMore] = useState(false);



    useEffect(() => {
        const response = axios.get("https://api.github.com/users/D-saif/repos");
        response.then(response => {
            setRepositories(response.data);

        }
        );
    }, []);



    return (
        <div className="w-3/4 mx-auto mt-16 pb-16" id="Github" data-aos="fade-up">
            <h1 className="text-4xl font-bold"> Latest Github Repositories
            <span className="mx-2 text-xl text-textColor underline">
                <a href="https://github.com/D-saif">View More</a>
            </span>


            </h1>

            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-8">
                {/* show only 10 repositories  */}
                {repositories.slice(0, 8).map(repository => (
                    <a href={repository.html_url} target="_blank">

                    <div className="border-2 w-60 h-36 flex flex-col items-center justify-center hover:bg-[#4F725E] transition-all duration-300">
                        <h1> {repository.name} </h1>
                    </div>
                    </a>
                ))}
            </div>



            {/* show more repositories  */}
            {showMore && (
                <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-8">
                    {repositories.slice(8, 20).map(repository => (
                        <div className="border-2 w-60 h-36 flex flex-col items-center justify-center hover:bg-[#4F725E] transition-all duration-300">
                            <h1> {repository.name} </h1>
                        </div>
                    ))}
                </div>
            )}

            <div className="flex flex-col items-center mt-8">

                <button className="w-64 h-12 border-2 " onClick={() => setShowMore(!showMore)}>
                    {showMore === false &&
                        <FaArrowDown className='mx-auto' />
                    }
                    {showMore &&
                        <FaArrowUp className='mx-auto' />
                    }
                </button>
            </div>
        </div>
    );
};

export default GithubRepositories;

