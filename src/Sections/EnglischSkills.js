
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: center;
margin-top: 3.5rem;

`;
// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 0.8em;
  text-align: center;
  color: rgb(90, 90, 90);
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 2.5em;
  background: #00000;
  margin: 5vh;
  border-radius: 0.4vh;
  margin-bottom: 12vh;
  box-shadow: 2px 2px lightblue;
`;
const Button = styled.div`
padding: 0.8vh;
margin: 08vh 2vh 2vh 1.1vh;
box-shadow: 0.2vh 0.1vh rgb(180, 180, 180);
cursor: pointer;
background: #319795;
border-radius: 0.3vh;

`;
const EnglischSkills= () =>{
    return(
        
        
 <Container>

<Wrapper>

  <Title style={{fontSize:'2.5vh',}}>Englisch Grammar Present Tenses</Title>
  <Title>Our support team is just a click away</Title>
  <Button><span style={{fontSize:'3.2vh', marginLeft:'6.8vh',color:'white'}}>Join cours</span></Button>
</Wrapper>

<Wrapper>

  <Title style={{fontSize:'2.5vh'}}>Englisch Grammar Passt Tenses</Title>
  <Title>Our support team is just a click away</Title>
  <Button><span style={{fontSize:'3.2vh', marginLeft:'6.8vh',color:'white'}}>Join cours</span></Button>
</Wrapper>

<Wrapper>

  <Title style={{fontSize:'2.5vh'}}>Englisch Grammar Futur Tenses</Title>
  <Title>Our support team is just a click away</Title>
  <Button><span style={{fontSize:'3.2vh', marginLeft:'6.8vh',color:'white'}}>Join cours</span></Button>
</Wrapper>


<Wrapper>

  <Title style={{fontSize:'2.5vh'}}>Englisch Grammar Phrasal Verbs</Title>
  <Title>Our support team is just a click away</Title>
  <Button><span style={{fontSize:'3.2vh', marginLeft:'6.8vh',color:'white'}}>Join cours</span></Button>
</Wrapper>


<Wrapper>

  <Title style={{fontSize:'2.5vh'}}>Englisch Grammar propositional verbs</Title>
  <Title>Our support team is just a click away</Title>
  <Button><span style={{fontSize:'3.2vh', marginLeft:'6.8vh',color:'white'}}>Join cours</span></Button>
</Wrapper>

</Container>
        



    )
}
export default EnglischSkills