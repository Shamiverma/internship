import React from 'react';
import { Link } from 'react-router-dom';
import { todo2 } from '../../assets/todo2.jpg';
const Landing = () => {
  return (
    <div className='here'>
      <div className='intro-text'>
        <h1>
          <span className='tagline'>Organize work and life with Todo App</span> <br />
          <span className='tagline2'>Your tasks, your way</span>
        </h1>
         <p>
          type just anything into the task field and TodoList <br />
          on-of-its-kind natural language recognition will instantly fill your
          to-do-list
        </p>
        <Link className="btn red" to="/register">
          Register Now!
        </Link>
        <Link className="btn blue" to="/login">
          Login
        </Link>


      </div>
      <div className=''>
        <img src={todo2} alt='To Do Illustration' />

      </div>
    </div>
  );
};

export default Landing;