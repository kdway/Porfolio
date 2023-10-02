import Quiz11 from '../components/Quiz11'
import styled from 'styled-components';
import ILC from '../Sections/ILC'
import '../styles/Quiz.css'
const Section = styled.section`
display: flex;
flex-direction: row;
justify-content: space-between;

margin: 5px;
`;



const EnQuiz1 = () =>{
    return(
        <>
         
<div className='Title'
style=
{{
    textAlign:'center',
    marginTop: '3.1rem',
    marginLeft: '4rem',
    marginRight: '4rem'

}}

>
<h3 className='Score-interepted'
style={{
    fontSize:'2.2rem',
    marginBottom: '2.5rem'
}}

>How are the scores interpreted?</h3>
<p className='Level'
style={{
    fontSize:'1.3rem',
    marginBottom: '2.5rem',
   
}}

> If you have taken Test 1A or 1B, and 2A and 2B, add
together the scores to give a total out of 80. – A
score of 0–40 points indicates your level of English
is <span style={{textDecorationLine:'underline'}}> Elementary.</span></p>


<p className='level-indicate' 
style={{  
    fontSize:'1.4rem',
    marginBottom: '2.5rem'
    }}>
        A score of 41–80 points indicates your level of English is
        <span style={{textDecorationLine:'underline'}}> Pre-intermediate</span>.
</p> 


<p className='level-indicate1'
style={{  
    fontSize:'1.4rem',
    marginBottom: '2.5rem'
    }}>

    If you have taken Test 2A or 2B, and 3A and 3B, add
together the scores to give a total out of 80. – A
score of 0–40 points indicates your level of English
is Pre-intermediate.

</p>


<p className='level-indicate2'
style={{  
    fontSize:'1.4rem',
    marginBottom: '2.5rem'
    }}>
    A score of 41–80 points indicates your level of English is <span style={{textDecorationLine:'underline'}}>Intermediate</span>

</p>

</div>


<div className='Quiz'>
  
<a href='/Quiz11'><span>
   English Intermediate Level Test 
  <h3>Test Level 1</h3>
  </span></a>

  <a href='/Quiz12'><span>
   English Intermediate Level Test 
  <h3>Test Level 2</h3>
  </span></a>









</div>
        
        </>

    )
}

export default EnQuiz1