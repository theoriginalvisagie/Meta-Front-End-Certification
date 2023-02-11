import '../App.css';
import Logo from '../images/Logo_small.png';

function Nav(){
    const menuItems = ["Home","About","Menu","Reservations","Order Online","Login"];
    return(
        <nav className='nav'>
            <img src={Logo} alt="Little Lemon Logo" id="navLogo"></img>
            <ul className="menuItems">
                {
                    menuItems.map((item)=>{
                        return(
                            <li><a href=''>{item}</a></li>
                        );
                    })
                }
            </ul>
        </nav>
    );
}

export default Nav;