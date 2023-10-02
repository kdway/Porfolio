

import styled from 'styled-components'
import '../styles/contact.css'
const Container = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;

`;

const Contact = () =>{
    return(
        
<div className='container'>

<h2 className="h1-responsive text-center my-4">ContactMe</h2>

<p className="text-center w-responsive mx-auto mb-5 mt-5 ms-5" style={{fontSize:'20px'}}>Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
    a matter of hours to help you.</p>

<div className="col-md-8">

  
  
        <form id="contact-form" name="contact-form" action="mail.php" method="POST">


        

          
                <div className="col-md-8">
                <label for="name" className="">Your name</label>
                    <div className="md-form mb-0">
                        <input type="text" id="name" name="name" className="form-control" placeholder='....'/>
                       
                    </div>
                </div>
         

                
                <div className="col-md-8">
                <label for="email" className="">Your email</label>
                    <div className="md-form mb-0">
                        <input type="text" id="email" name="email" className="form-control"placeholder='....'/>
                       
                    </div>
                </div>
                




            <div className="row">
                <div className="col-md-8">
                <label for="subject" className="">Subject</label>
                    <div className="md-form mb-0">
                        <input type="text" id="subject" name="subject" className="form-control" placeholder='....'/>
                       
                    </div>
                </div>
            </div>



            <div className="row">

              
                <div className="col-md-8">
                <label for="message">Your message</label>
                    <div className="md-form">
                        <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea" placeholder='type text...'></textarea>
                       
                    </div>

                </div>
            </div>
 

        </form>

        <div className="text-center text-md-left mb-5">
            <a className="btn btn-primary mt-5" style={{weight:'4.5rem'}} onclick="document.getElementById('contact-form').submit();">Send</a>
        </div>
        <div className="status"></div>




    {/*<div className="col-md-3 text-center">
        <ul className="list-unstyled mb-0">
            <li><i className="fas fa-map-marker-alt fa-1x"></i>
                <p>kaisdakhli@yahoo.fr</p>
            </li>

            <li><i className="fas fa-phone mt-4 fa-1x"></i>
                <p>+216 52168516</p>
            </li>

            <li><i className="fas fa-envelope mt-4 fa-1x"></i>
                <p>Tunis, Tunisia</p>
            </li>
        </ul>
    </div>*/}


</div>


</div>

  
   

        
        

    )
}
export default Contact