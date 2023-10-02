import styled from 'styled-components';
import {Link} from 'react-router-dom'
import '../styles/ILC.css'
/*const Container = styled.div`
  height: 7rem;
  background: #008080;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  margin: 1.5rem 0rem 1.5rem 0rem;
  border-radius: 0.3rem;
  display: flex;
`;

const Button = styled.button`
background: white;
padding: .5rem;
margin: 2rem;
border-radius: 0.3rem;
`;*/

const Announcement = () => {
  return (
    
    <div className='ilc'>
    <p>Currently we offer you a individual privat cours</p>
    <button><a href='/Tutors'></a>Choose cours and Tutor</button>

    </div>


    


   
  )
};

export default Announcement;