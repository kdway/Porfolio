
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin: 2rem 2rem;
`;




const Books = () => {
    return(
        <Container>
                  
                  
        <div className="card" style={{width:'18rem', margin:'0.2rem'}}>
           <img className='atomic h-100' src="https://libromaniacs.com/wp-content/uploads/2021/08/atomic-habits-book-club-questions-1024x768.jpg" className="card-img-top" alt="..."/>
             <div className="card-body">
               <h5 className="card-title">Atomic Habbits</h5>
               <h5 className="card-title">James Clear</h5>
                  <p className="card-text" style={{fontSize:'1.2rem'}}>You can effectively improve your learning strategie and to be succefully!</p>
            </div>
   
          <div className="card-body">
             <a href="#" className="card-link">Read for free as PDF</a>
             <a href="https://www.amazon.fr/Atomic-Habits-Proven-Build-Break/dp/0735211299" className="card-link">Buy Book</a>
          </div>
      </div>


      <div className="card" style={{width:'18rem', margin:'0.4rem'}}>
           <img src="https://static-01.daraz.com.bd/p/ed7109b24b81ddc2acf4919582f9bf89.jpg" className="card-img-top" alt="..."/>
             
             <div className="card-body">
               <h5 className="card-title">Deep Work: Rules for Focused Success in a Distracted World Hardcover </h5>
               <h5 className="card-title">Carl Newport</h5>
                  <p className="card-text" style={{fontSize:'1.2rem'}}>You can effectively improve your learning strategie and to be succefully!</p>
            </div>
   
          <div className="card-body">
             <a href="https://d-pdf.com/electronic-book/280" className="card-link">Read for free as PDF</a>
             <a href="https://www.amazon.com/Deep-Work-Focused-Success-Distracted/dp/1455586692" className="card-link">Buy Book</a>
          </div>
      </div>


      <div className="card" style={{width:'18rem'}}>
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1nN-Lrjbna_fJqGP-xcL7thZIfYgCor3WqjLQQXw3j7AJ5fBsxuX8tAulPtka7J9TZmA&usqp=CAU" className="card-img-top" alt="..."/>
             <div className="card-body">
               <h5 className="card-title">Atomic Habbits</h5>
               <h5 className="card-title">James Clear</h5>
                  <p className="card-text" style={{fontSize:'1.2rem'}}>You can effectively improve your learning strategie and to be succefully!</p>
            </div>
   
          <div className="card-body">
             <a href="#" className="card-link">Read for free as PDF</a>
             <a href="https://www.amazon.fr/Atomic-Habits-Proven-Build-Break/dp/0735211299" className="card-link">Buy Book</a>
          </div>
      </div>


        </Container>
       
  
       
       
       



    )
}
export default Books