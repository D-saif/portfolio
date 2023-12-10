const Carrer = () => {
    return (
        <div className="w-3/4 mx-auto mt-16" id="Carrer" data-aos="fade-up">
            <h1 className="text-4xl font-bold">My Carrer</h1>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 mt-8">

                <div className="flex flex-row ">
                    <div className="h-80 w-1 bg-white mr-5"></div>
                    <div>
                        <div className="mt-8">
                            <span className="text-textColor font-bold">2022 - 2024</span>
                            <h1 className="font-bold">High school of engineering and technology (ESGITECH)</h1>
                            <h2>MASTER’S DEGREES iN COMPUTER SCiENCE</h2>
                        </div>
                        <div className="mt-8">
                            <span className="text-textColor font-bold">2019 - 2022</span>
                            <h1 className="font-bold">Higher Institute Of Computer Science(ISI Ariana)</h1>
                            <h2>BACHELOR’S DEGREE iN COMPUTER SCiENCE</h2>
                        </div>
                      
                    </div>
                </div>
                <div className="flex flex-row sm:mt-8 md:mt-0">
                    <div className="h-80 w-1 bg-white mr-5"></div>
                    <div>


                        <div className="mt-8">
                            <span className="text-textColor font-bold">Sep 2022 - Present</span>
                            <h1 className="font-bold">EY Tunisia</h1>
                            <h2>IT Consultant</h2>
                        </div>
                        <div className="mt-8">
                            <span className="text-textColor font-bold">Oct 2021 - Jun 2022</span>
                            <h1 className="font-bold">InfraPlus</h1>
                            <h2>DevOps Intern</h2>
                        </div>
                        
                    </div>
                </div>

            </div>


        </div>
    );
}

export default Carrer;