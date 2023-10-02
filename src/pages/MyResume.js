import {SiXdadevelopers} from 'react-icons/si'
import {FaFacebook ,FaInstagram,FaPinterest } from 'react-icons/fa'
import {PiBagFill} from 'react-icons/pi'
import {RxLinkedinLogo } from 'react-icons/rx'
import {MdMarkEmailRead} from 'react-icons/md'
import{BiStreetView} from 'react-icons/bi'
import {SlStar } from 'react-icons/si'
import {GiSkills} from 'react-icons/gi'
import {TbPointFilled} from 'react-icons/tb'
import {MdLanguage} from 'react-icons/md'
import styled from 'styled-components'
import '../styles/MyResume.css'


const SocialContainer = styled.div`
  display: flex;
  margin-top: 2.1rem;
  gap: 8px;
  svg {
    font-size: 24px;
    cursor: pointer;
    transition: opacity 0.2s;
    &:hover {
      opacity: 0.6;
    }
  }
`;

 const Language  = styled.h4`
margin-top: 2.1rem;
font-size: 0.8rem;
`;


const Title = styled.h3`
margin-top; 20px;
font-size: 24px;
`;

const Skills = styled.h4`
margin-top: 2.1rem;
font-size: 0.8rem;
`;
const MyResume = () =>
{


    
    return(
        <>

        <div className="container">
            <div className='row'>
            <div className="col-md-4 Personal-data mb-5">
                <img className='profile-foto' src='/foto-profile.jpg'></img>
              <h2> Kais Dakhli</h2>
              <h3><MdMarkEmailRead />  kaisdakhli@yahoo.fr</h3>
              <h3><BiStreetView />  Tunis</h3>
              <SocialContainer>
                <a style={{color:'black'}}href='https://www.linkedin.com/in/kais-dakhli-155246132'><RxLinkedinLogo /></a>
                <FaFacebook />
                <FaInstagram />
                <FaPinterest />
              </SocialContainer>

              <Language>
              <h3><MdLanguage /> Language</h3>
                <h3> <span style={{color:'mediumvioletred'}}>German </span></h3>
                <h3><span style={{color:'mediumvioletred'}}>Englisch  </span></h3>
                <h3><span style={{color:'mediumvioletred'}} >Frensch  </span></h3>
              </Language>
              <Skills>
              <h3><GiSkills /> Computer  and Dev Skills</h3>
                <h3> <span style={{color:'mediumvioletred'}}>-ReactJs/ NextJs </span></h3>
                <h3><span style={{color:'mediumvioletred'}}>-Framworks: Express js /Node js / MongooDB/ Bootstrap ect</span></h3>
                <h3><span style={{color:'mediumvioletred'}} >-I'm be able to troubleshoot many Comptur Issues, both Hard-ware and soft </span></h3>
              </Skills>
              
             
             
            </div>

            <div className="col-md-8 Personal-data">
              <p><span style={{fontSize:'2.8rem'}}>I'm a Web Developper Fullstack Js Junior</span></p>
              <p class="card-text"><small class="text-body-secondary" style={{fontSize:'1.4rem'}}> I'm a Fullstack JS Junior Developper and I have many experience in Digital Marketing Field. I had been worked as IT Technical Support and Customer Service Representative.</small></p>

              <p class="card-text"><small class="text-body-secondary" style={{fontSize:'1.4rem'}}>I usually explore  my IT Knowledge and Developpement Skills Both Framworks and Library.</small></p>
            
              <div className='Experiences'>
       
                   <h3 style={{fontSize:'2rem', marginLeft:'0.2rem', marginTop:'0.2rem'}}><PiBagFill />   Experiences: </h3>
                   <p class="card-text"><small class="text" style={{fontSize:'1.4rem'}}> Customer service representative G/E</small></p>
                   <p class="card-text"><small class="text" style={{fontSize:'1.4rem'}}> Transcom worlwide UPS logistic field </small></p>
                   
                   <p class="card-text"><small class="text-body-secondary" style={{fontSize:'1.3rem'}}> I should be able to play a pivotal role in ensuring exceptional customer service and satisfaction. You will be the primary point of contact for customers, assisting them with inquiries, resolving issues, and facilitating seamless shipping and delivery experiences </small></p>
                    <h3 className='skills mt-2'>< GiSkills/>Lerned skills</h3>
                    <p class="card-text"><small class="text-body-secondary" style={{fontSize:'1.4rem'}}><TbPointFilled />Investigate and resolve shipment issues, including tracking discrepancies, delays, and damages.</small></p>
                    <p class="card-text"><small class="text-body-secondary" style={{fontSize:'1.4rem'}}><TbPointFilled />Educate customers on value-added services, such as insurance, tracking, and delivery options..</small></p>
                    <p class="card-text"><small class="text-body-secondary" style={{fontSize:'1.4rem'}}><TbPointFilled /> Maintain customer confidentiality and protect sensitive information.</small></p>
                   


                    <p class="card-text"><small class="text" style={{fontSize:'1.4rem'}}> Technical support representative G/E</small></p>
                   <p class="card-text"><small class="text" style={{fontSize:'1.4rem'}}> HP inc. Tunisia </small></p>
                   
                   <p class="card-text"><small class="text-body-secondary" style={{fontSize:'1.4rem'}}> I should be able to serve as the first point of contact for customers seeking assistance with HP products and services. Your primary responsibility will be to provide technical support, troubleshoot issues, and deliver exceptional customer service to resolve inquiries efficiently </small></p>
                    <h3 className='skills mt-2'>< GiSkills/>Lerned skills</h3>
                    <p class="card-text"><small class="text-body-secondary" style={{fontSize:'1.4rem'}}><TbPointFilled />Diagnose and troubleshoot technical issues related to HP products, including computers, printers, software, and accessories.</small></p>
                    <p class="card-text"><small class="text-body-secondary" style={{fontSize:'1.4rem'}}><TbPointFilled />Analyze and resolve technical problems by providing step-by-step instructions, identifying software or hardware issues, and recommending solutions.</small></p>
                    <p class="card-text"><small class="text-body-secondary" style={{fontSize:'1.rem'}}><TbPointFilled /> Maintain customer confidentiality and protect sensitive information.</small></p>
             
             </div>
            
            
            </div>

            </div>
         

       


        
     
       </div> 
        
        </>
 

    )
}
export default MyResume