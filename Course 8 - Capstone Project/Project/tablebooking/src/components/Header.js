import Logo_small from '../images/Logo_small.png';
import '../App.css';

function Header(){
    return(
        <header className='header'>
            <meta name="description" content="The Best Restaurant to ever exist."/>
            <meta name="og:title" content="Extraordinary Food"/>
            <meta name="og:description" content="The Best Restaurant to ever exist."/>
            <meta name="og:image" content={Logo_small}/>
        </header>
    );
}

export default Header;