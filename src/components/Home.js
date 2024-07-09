import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home">
      <h1>Welcome to My Portfolio</h1>
      <p>Hi, My Name is Aditya Srivastava , an MCA Student.</p>
      <img className='photo' src={`${process.env.PUBLIC_URL}/Aditya psit.jpg`} alt="Aditya PSIT" />
    </section>
  );
};

export default Home;
