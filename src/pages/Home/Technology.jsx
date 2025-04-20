import React from "react";
import html from "../../assets/tech/html.webp";
import css from "../../assets/tech/css.webp";
import javascript from "../../assets/tech/javascript.webp";
import bootstrap from "../../assets/tech/bootstrap.webp";
import django from "../../assets/tech/django.webp";
import firebase from "../../assets/tech/firebase.webp";
import java from "../../assets/tech/java.webp";
import mongodb from "../../assets/tech/mongodb.webp";
import nodejs from "../../assets/tech/nodejs.webp";
import postgress from "../../assets/tech/postgress.webp";
import typescript from "../../assets/tech/typescript.webp";
import react from "../../assets/tech/react.webp";
import googleAnalytics from "../../assets/tech/googleanalytics.png";
import mailchimp from "../../assets/tech/mailchimp.png";
import figma from "../../assets/tech/figma.png";
import python from "../../assets/tech/python.png";
import mysql from "../../assets/tech/mysql.png";
import flutter from "../../assets/tech/flutter.webp";
import android from "../../assets/tech/android.png";
import reactNative from "../../assets/tech/reactnative.png";
import dotnet from "../../assets/tech/dotnet.png";
const techStack = {
  frontend: [
    { name: "HTML", image: html },
    { name: "CSS", image: css },
    { name: "JavaScript", image: javascript },
    { name: "React", image: react },
    { name: "Bootstrap", image: bootstrap },
    { name: "TypeScript", image: typescript },
    { name: "Figma", image: figma },
  ],
  backend: [
    { name: "Node.js", image: nodejs },
    { name: "Django", image: django },
    { name: "Java", image: java },
    { name: "Python", image: python },
    { name: ".Net", image: dotnet },
  ],
  databases: [
    { name: "MongoDB", image: mongodb },
    { name: "PostgreSQL", image: postgress },
    { name: "MySQL", image: mysql },
    { name: "Firebase", image: firebase },
  ],
  appdevelopment: [
    { name: "Flutter", image: flutter },
    { name: "React Native", image: reactNative },
    { name: "Android SDK", image: android },
  ],
  digitalMarketing: [
    { name: "Google Analytics", image: googleAnalytics },
    { name: "Mailchimp", image: mailchimp },
  ],
};

const Technology = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl text-gray-900 poppins-bold text-center mb-4">
        Our Tech Stack
      </h1>
      <p className="text-gray-500 text-center poppins-light tracking-wider mb-12 max-w-3xl mx-auto">
        From front-end interfaces to scalable back-end systems and mobile apps,
        our toolkit empowers us to build seamless digital experiences.
      </p>

      {Object.entries(techStack).map(([category, techs], idx) => (
        <section key={idx} className="mb-16 text-center">
          <h2 className="text-3xl text-gray-800 poppins-semibold mb-8 capitalize">
            {category === "appdevelopment"
              ? "App Development"
              : category.replace(/([a-z])([A-Z])/g, "$1 $2")}
          </h2>

          <div className="flex flex-wrap justify-center gap-8">
            {techs.map((tech, i) => (
              <div
                key={i}
                className="w-24 h-24 flex flex-col items-center justify-center"
              >
                <img
                  src={tech.image}
                  alt={`${tech.name} logo`}
                  title={tech.name}
                  className="object-contain w-16 h-16 mb-2"
                  loading="lazy"
                />
                <p className="text-sm text-gray-600 poppins-light">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Technology;
