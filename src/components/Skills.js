import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section id="projects">
      <h2>My Skills</h2>
      <div className="projects-list">
        <div className="project-item">
          <h3>Data Structure and Algorithms</h3>
          <p>Data Structures and Algorithms (DSA) is a fundamental part of Computer Science that teaches you how to think and solve complex problems systematically.</p>
        </div>
        <div className="project-item">
          <h3>Java Programming</h3>
          <p>Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.</p>
        </div>
        <div className="project-item">
          <h3>JavaScript</h3>
          <p>JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard. ... It is dynamic type, prototype-based object-oriented programming language</p>
        </div>
        <div className="project-item">
          <h3>SQL</h3>
          <p>Structured query language (SQL) is a standard language for database creation and manipulation. MySQL is a relational database program that uses SQL queries</p>
        </div>
        <div className="project-item">
          <h3>C Programming</h3>
          <p>C is a general-purpose programming language. It was created in the 1970s by Dennis Ritchie and remains very widely used and influential.</p>
        </div>
        <div className="project-item">
          <h3>React js and Node js </h3>
          <p>React js is one of the most famous JavaScript library for frontend development . Node js is the run time enviroment to run javascript everywher  this is primarily use for backend development</p>
        </div>
        
      </div>
    </section>
  );
};

export default Skills;
