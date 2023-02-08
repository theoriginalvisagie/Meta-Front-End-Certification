function Nav(){
    const menuItems = ["Home","About","Menu","Reservations","Order Online","Login"];
    return(
        <nav>
            <img src="" alt=""></img>
            <ul>
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