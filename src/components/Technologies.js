import { NextjsOriginal } from "devicons-react";
import {  FaCss3, FaDocker,  FaGithubAlt, FaHtml5, FaJava, FaJenkins, FaJs, FaNodeJs, FaPhp, FaPython, FaReact, FaVuejs } from "react-icons/fa";
import { SiAndroid, SiDjango, SiFlask, SiFlutter, SiTailwindcss, SiXamarin, SiTerraform, SiCsharp, SiAzuredevops, SiAnsible } from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";

const Technologies = () => {
  return (
    <div className="w-3/4 mx-auto mt-16 pb-16" id="Technologies">
      <h1 className="text-4xl font-bold" data-aos="fade-up"> Technologies </h1>

      <h1 className="text-xl mt-8"> Programming languages </h1>
      <div data-aos="fade-up" className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-8">

        <div className="border-2 w-60 h-36 flex flex-col items-center justify-center hover:bg-green-700 transition-all duration-300">
          <FaNodeJs className="text-7xl mb-3" />
          <h1> Node JS </h1>
        </div>
        <div className="border-2 w-60 h-36 flex flex-col items-center justify-center hover:bg-amber-700 transition-all duration-300">
          <FaJava className="text-7xl mb-3" />
          <h1> JAVA </h1>
        </div>
        <div className="border-2 w-60 h-36 flex flex-col items-center justify-center hover:bg-amber-700 transition-all duration-300">
          <SiCsharp className="text-7xl mb-3" />
          <h1> Csharp </h1>
        </div>
      </div>

      <h1 className="text-xl mt-8"> Devops </h1>
      <div data-aos="fade-up" className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-8">
        <div className="border-2 w-60 h-36 flex flex-col items-center justify-center hover:bg-blue-500 transition-all duration-300">
          <FaDocker className="text-7xl mb-3" />
          <h1> Docker </h1>
        </div>
        <div className="border-2 w-60 h-36 flex flex-col items-center justify-center hover:bg-blue-900 transition-all duration-300">
          <FaGithubAlt className="text-7xl mb-3" />
          <h1> Github Actions </h1>
        </div>
        <div className="border-2 w-60 h-36 flex flex-col items-center justify-center hover:bg-blue-500 transition-all duration-300">
          <SiAzuredevops className="text-7xl mb-3" />
          <h1> AzureDevops </h1>
        </div>
        <div className="border-2 w-60 h-36 flex flex-col items-center justify-center hover:bg-purple-900 transition-all duration-300">
          <SiTerraform className="text-7xl mb-3" />
          <h1> Terraform </h1>
        </div>
        <div className="border-2 w-60 h-36 flex flex-col items-center justify-center hover:bg-orange-200 transition-all duration-300">
          <SiAnsible className="text-7xl mb-3" />
          <h1> Ansible </h1>
        </div>
      </div>

      <h1 className="text-xl mt-8" data-aos="fade-up"> Front End </h1>
      <div data-aos="fade-up" className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-8">
        <div className="border-2 w-60 h-36 flex flex-col items-center justify-center hover:bg-orange-500 transition-all duration-300">
          <FaHtml5 className="text-7xl mb-3" />
          <h1> HTML 5 </h1>
        </div>
        <div className="border-2 w-60 h-36 flex flex-col items-center justify-center hover:bg-blue-500 transition-all duration-300">
          <FaCss3 className="text-7xl mb-3" />
          <h1> CSS 3 </h1>
        </div>
        <div className="border-2 w-60 h-36 flex flex-col items-center justify-center hover:bg-yellow-500 transition-all duration-300">
          <FaJs className="text-7xl mb-3" />
          <h1> JAVASCRIPT </h1>
        </div>
     
        
      </div>
      
      


    </div>
  );
};

export default Technologies;
