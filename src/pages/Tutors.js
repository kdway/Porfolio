 
 import styled from'styled-components'
 import {FaChalkboardTeacher} from 'react-icons/fa'
 const Container = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: center;

 `;

 const Item = styled.div`
 margin: 1.5rem;
 box-shadow: 2px 2px rgb(220,220,220);
 `;
 const Item1 = styled.div`
 margin: 1.5rem;
 box-shadow: 2px 2px rgb(220,220,220);
 `;
 const Item2 = styled.div`
 margin: 1.5rem;
 box-shadow: 2px 2px rgb(220,220,220);
 `;

 
 const Foto = styled.div`
 font-size: 3.5rem;
 margin-left: 2rem;
 `;

 
 const Title = styled.h3`
 `;

 
 const Experiences = styled.p`
 `;

 const Tutor = () =>{
    return(
        <Container>
        <Item>
            <Foto><FaChalkboardTeacher /></Foto> <Title>Computer Sciences</Title>
           
            <Experiences>Self-taught full stack developer. Helped over thousands of clients to build their small to large scale websites. I love building high performance and scalable websites. Over the past few years, I...</Experiences>
        </Item>
        <Item1>
            <Foto><FaChalkboardTeacher /></Foto>
            <Title>Englisch Level A to Advanced</Title>
            <Experiences>Self-taught full stack developer. Helped over thousands of clients to build their small to large scale websites. I love building high performance and scalable websites. Over the past few years, I...</Experiences>
        </Item1>
        <Item2>
            <Foto><FaChalkboardTeacher /></Foto>
            <Title>Web Developpement Fullstack</Title>
            <Experiences>Self-taught full stack developer. Helped over thousands of clients to build their small to large scale websites. I love building high performance and scalable websites. Over the past few years, I...</Experiences>
        </Item2>

        </Container>
 

    )
 }
 export default Tutor