
import styled from 'styled-components';
import '../styles/Home.css'
import ILC from '../Sections/ILC'
import {MdOutlineDeveloperMode} from 'react-icons/md'
const Input= styled.image`
font-size: 70px;

`;

const Section = styled.div`
background: #E0FFFF;
margin: -14px 12px 10px 0px;
padding: 0px;
width: 100%;
height: 25rem;
`;

const Title = styled.h3`
color: #E0FFFF; 
font-size: 40px;

font-family: 'Poppins', sans-serif;

`;


const Home = () =>{
    return(
        <>
{/*nnnnnnnnnnn*/}      
    
<div className='container mt-5'>
    <div className='row'>


        <div className='col h-75'>
          <div class="card mb-3">
  <div class="row g-0 col-profile">
    <div className="col-md-4">
    <img className='profil-foto' src='/foto-profile.jpg'></img>
    <Input><MdOutlineDeveloperMode /></Input>
    
    </div>
    <div class="col-md-6">
      <div class="card-body">
        <h5 class="card-title text-body-white">KAIS DAKHLI</h5>
        <hr></hr>
        <p class="card-text">Fullstack JS Developper </p>
        <p class="card-text"><small class="text-body-secondary">Hello Everyone!</small></p>
       
        
      </div>


    
    </div>

    <div className='Job-experieces'>
        <p class="card-text"><small class="text-body-secondary"> I'm a Fullstack JS Junior Developper and I have many experience in Digital Marketing Field</small></p>
        <p class="card-text"><small class="text-body-secondary">I had been worked as IT Technical Support and Customer Service Representative</small></p>
</div>
  </div>
</div>

 </div>
          <div className='col-md-8'>
          <div className="card" style={{backgroundColor:'paleturquoise', width:'100%'}}>
  <h5 className="card-header">SUGGESTION</h5>
  <div className="card-body">
    <h3 className="card-title">FUTUR E-LEARNING PLATFORM</h3>
    <p className="card-text">WE SUPPORT YOU TO BE SUCCESSFULLY</p>
    <a href="/Cours" className="btn btn-light"><span style={{color:'black'}}>Choose Free Probe Cours</span></a>
  </div>
</div>
 {/*project decription*/}
 <div className='project-description'>
  <h3>PROJECT GOALS</h3>
        <p class="card-text">
          <small class="text-body-secondary">
          The Digital Futur E-learning platform <span style={{color:'cyan', fontSize:'22px'}}>UpgradeAnyWaySkills </span> has the potential to bridge language barriers, empower learners, and facilitate cross-cultural communication in an increasingly globalized world. This project aligns with the growing demand for effective and accessible language and IT knoaledge and promises to transform the way people learn and interact with languages and IT Skills.
          
           </small></p>
        
</div>


  {/*project decription*/}



          </div>

          

        </div>

      </div>

        <div className='training shadow-lg'>
          <h2 className='cs' style={{textAlign:'center'}}>Certainly, here are some simplified customer satisfaction skills</h2>
        <p  style={{marginLeft:'1.8rem',marginTop:'-0.1rem'}}>Effective communication is crucial for improving business outcomes and fostering positive relationships with customers, clients, employees, and stakeholders. Here are some key communication skills that can significantly benefit your business:</p>
            
     

        <h3 style={{marginLeft:'1.8rem',marginTop:'1rem'}}>Active Listening</h3>
        <p style={{marginLeft:'1.8rem',marginTop:'-0.1rem'}}>Pay close attention to what others are saying without interrupting. Show empathy and understanding by nodding, making eye contact, and asking clarifying questions. This helps build rapport and ensures you fully understand the other person's perspective.</p>
        

        <h3 style={{marginLeft:'1.8rem',marginTop:'1rem'}}>Clear and Concise Messaging</h3>
        <p style={{marginLeft:'1.8rem',marginTop:'-0.1rem'}}>Avoid jargon and use simple, straightforward language to convey your ideas. Ensure that your messages are easily understandable by a diverse audience</p>
       
        <h3 style={{marginLeft:'1.8rem',marginTop:'1rem'}}>Effective Writing</h3>
        <p style={{marginLeft:'1.8rem',marginTop:'-0.1rem'}}>Develop strong written communication skills for emails, reports, and other written materials. Write with clarity, structure your content logically, and proofread carefully to eliminate errors.</p>
       
        <h3 style={{marginLeft:'1.8rem',marginTop:'1rem'}}>Nonverbal Communication</h3>
        <p style={{marginLeft:'1.8rem',marginTop:'-0.1rem'}}>Be mindful of your body language, facial expressions, and tone of voice. These nonverbal cues can convey as much or more information than your words, so ensure they align with your intended message..</p>
       
        <h3 style={{marginLeft:'1.8rem',marginTop:'1rem'}}>Empathy</h3>
        <p style={{marginLeft:'1.8rem',marginTop:'-0.1rem'}}> Understand and appreciate the emotions and perspectives of others. Empathetic communication can help you build trust, resolve conflicts, and provide better customer service..</p>
       
        <h3 style={{marginLeft:'1.8rem',marginTop:'1rem'}}>Adaptability</h3>
        <p style={{marginLeft:'1.8rem',marginTop:'-0.1rem'}}> Tailor your communication style to the needs and preferences of your audience. Some people prefer written communication, while others prefer face-to-face meetings or phone calls..</p>
        </div>


        </>
 
    )
}

export default Home