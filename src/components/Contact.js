const Contact = () => {
    return (
        <div className="w-3/4 mx-auto mt-16" id="Contact" data-aos="fade-up">
            <h1 className="text-4xl font-bold">Contact</h1>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 mt-8">


                <div className="flex flex-row sm:my-8 md:my-0">
                    <div className="h-60 w-1 bg-white mr-5"></div>
                    <div>
                        <div>
                            <span className="text-textColor font-bold">Email</span>
                            <h1 className="font-bold">
                                <a href="mailto:ghaythbenabid0@gmail.com" className="hover:text-textColor">
                                    <span className="text-white">dhifisaif.23@gmail.com</span>
                                </a>
                            </h1>



                            <span className="text-textColor font-bold">Phone</span>
                            <h1 className="font-bold">
                                <a href="tel:+21626872804" className="hover:text-textColor">
                                    <span className="text-white">+216 56 547 094</span>
                                </a>
                            </h1>

                            <span className="text-textColor font-bold">Address</span>
                            <h1 className="font-bold">
                                <a href="https://www.google.com" className="hover:text-textColor">
                                    <span className="text-white">Tunis, Tunisia</span>
                                </a>
                            </h1>

                            {/* linkedin */}
                            <span className="text-textColor font-bold">Linkedin</span>
                            <h1 className="font-bold">
                                <a href="https://www.linkedin.com/in/saif-eddine-dhifi/" className="hover:text-textColor">
                                    <span className="text-white flex justify-items-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16"> <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/> </svg> <span className="px-2">Saif Eddine Dhifi</span> </span>
                                </a>
                            </h1>




                        </div>


                    </div>
                </div>



            </div>


        </div >
    );
}

export default Contact;