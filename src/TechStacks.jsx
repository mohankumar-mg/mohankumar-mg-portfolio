import React from "react";
import Html from "./assets/Front_End/html.png";
import Css from "./assets/Front_End/css.jpg";
import Js from "./assets/Front_End/js.png";
import Bootstrap from "./assets/Front_End/bootstrap.png";
import Tailwind from "./assets/Front_End/tailwind.png";
import Angular from "./assets/Front_End/angular.png";
import ReactImage from "./assets/Front_End/react.png";
import ReactNative from "./assets/Front_End/react-native.png";
import ThreeJs from "./assets/Front_End/threejs.png";
import NextJs from "./assets/Front_End/nextjs.png";
import Node from "./assets/Back_End/nodejs.png";
import Express from "./assets/Back_End/expressjs.png";
import Ts from "./assets/Back_End/ts.png";
import Django from "./assets/Back_End/django.png";
import MongoDB from "./assets/Database/mongodb.gif";
import Mongoose from "./assets/Database/mongoose.png";
import MySQL from "./assets/Database/mysql.png";
import PostgreSQL from "./assets/Database/postgresql.jpeg";
import PacketTracer from "./assets/Networking_and_CyberSecurity/packettracer.png";
import Kali from "./assets/OS/kalilinux.png";
import Ubuntu from "./assets/OS/ubuntu.png";
import Windows from "./assets/OS/windows.png";
import Git from "./assets/Other_Tools/git.png";
import GitHub from "./assets/Other_Tools/github.png";
import C from "./assets/Programming_Langs/cprogramming.jpeg";
import Java from "./assets/Programming_Langs/java.png";
import Python from "./assets/Programming_Langs/python.png";
import Canva from "./assets/Designing/canva.jpeg";
import Figma from "./assets/Designing/figma.png";
import StarUML from "./assets/Designing/staruml.png";

function TechStacks() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-10">
      <h1 className="text-4xl custom:text-3xl font-extrabold text-center text-[#3C5B6F] dark:text-white mb-10">
        Tech Stacks Known...
      </h1>

      {/* Frontend */}
      <div className="mb-12">
        <h2 className="text-2xl custom:text-2xl font-bold mb-6 text-center dark:text-[#dcdcdc]">Frontend</h2>
        <div className="grid grid-cols-2 custom:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-[50px]">
          <ImageCard src={Html} alt="HTML" />
          <ImageCard src={Css} alt="CSS" />
          <ImageCard src={Js} alt="JavaScript" />
          <ImageCard src={Bootstrap} alt="Bootstrap" />
          <ImageCard src={Tailwind} alt="Tailwind CSS" />
          <ImageCard src={Angular} alt="Angular" />
          <ImageCard src={ReactImage} alt="React" />
          <ImageCard src={ReactNative} alt="React Native" />
          <ImageCard src={NextJs} alt="Next.Js" />
          <ImageCard src={ThreeJs} alt="Three.js" />
        </div>
      </div>

      {/* Backend */}
      <div className="mb-12">
        <h2 className="text-2xl custom:text-2xl font-bold mb-6 text-center dark:text-[#dcdcdc]">Backend</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 ">
          <ImageCard src={Node} alt="Node.js" />
          <ImageCard src={Express} alt="Express.js" />
          <ImageCard src={Ts} alt="TypeScript" />
          <ImageCard src={Django} alt="Django" />
        </div>
      </div>

      {/* Database */}
      <div className="mb-12">
        <h2 className="text-2xl custom:text-2xl font-bold mb-6 text-center dark:text-[#dcdcdc]">Database</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          <ImageCard src={MongoDB} alt="MongoDB" />
          <ImageCard src={Mongoose} alt="Mongoose" />
          <ImageCard src={MySQL} alt="MySQL" />
          <ImageCard src={PostgreSQL} alt="PostgreSQL" />
        </div>
      </div>

      {/* Networking & CyberSecurity */}
      <div className="mb-12">
        <h2 className="text-2xl custom:text-2xl font-bold mb-6 text-center dark:text-[#dcdcdc]">
          Networking & CyberSecurity
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
          <ImageCard src={PacketTracer} alt="PacketTracer" />
        </div>
      </div>

      {/* Programming Languages */}
      <div className="mb-12">
        <h2 className="text-2xl custom:text-2xl font-bold mb-6 text-center dark:text-[#dcdcdc]">
          Programming Languages
        </h2>
        <div className="grid custom:grid-cols-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <ImageCard src={C} alt="C" />
          <ImageCard src={Java} alt="Java" />
          <ImageCard src={Python} alt="Python" />
        </div>
      </div>

      {/* Operating Systems */}
      <div className="mb-12">
        <h2 className="text-2xl custom:text-2xl font-bold mb-6 text-center dark:text-[#dcdcdc]">
          Operating Systems
        </h2>
        <div className="grid custom:grid-cols-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <ImageCard src={Kali} alt="Kali Linux" />
          <ImageCard src={Ubuntu} alt="Ubuntu" />
          <ImageCard src={Windows} alt="Windows" />
        </div>
      </div>

      {/* UI/UX & Designing Tools */}
      <div className="mb-12">
        <h2 className="text-2xl custom:text-2xl font-bold mb-6 text-center dark:text-[#dcdcdc]">
          UI/UX & Designing Tools
        </h2>
        <div className="grid custom:grid-cols-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <ImageCard src={Canva} alt="Canva" />
          <ImageCard src={Figma} alt="Figma" />
          <ImageCard src={StarUML} alt="StarUML" />
        </div>
      </div>

      {/* Other Tools */}
      <div className="mb-12">
        <h2 className="text-2xl custom:text-2xl font-bold mb-6 text-center dark:text-[#dcdcdc]">Other Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <ImageCard src={Git} alt="Git" />
          <ImageCard src={GitHub} alt="GitHub" />
        </div>
      </div>
    </div>
  );
}

function ImageCard({ src, alt }) {
  return (
    <div className="flex justify-center hover:drop-shadow-2xl drop-shadow-xl">
      <img
        src={src}
        alt={alt}
        className="h-auto custom:max-h-12 md:max-h-32 rounded-md mb-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
      />
    </div>
  );
}

export default TechStacks;
