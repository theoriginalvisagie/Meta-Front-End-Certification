import '../App.css';
import image from '../images/Hero_image.jpg';

function Main(){
    return(
        <main className='main'>
            <div>
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>Description of food that the little lemon restaurant offers to its customers in a timely and quality way.</p>          
                <button className='button'>Reserve A Table</button>
            </div>
            <div>
                <img src={image} alt='Hero Section Image' />
            </div>
            
        </main>
    );
}

export default Main;