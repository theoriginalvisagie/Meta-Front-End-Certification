function Footer(){       
    const menuItems = ["Home","About","Menu","Reservations","Order Online","Login"];
    const contactItems = ["Address","Phone Number","Email"];
    const socialItems = [
        {
            href: "twitter.com",
            name: "Twitter"
        },
        {
            href: "facebook.com",
            name: "Facebook"
        },
        {
            href: "instagram.com",
            name: "Instagram"
        },
        {
            href: "pinterest.com",
            name: "Pinterest"
        }
    ];

    return(
        <footer>
            <img src="" alt=""></img>
            <h3>Doormat NAvigation</h3>
            <ul>
                {
                    menuItems.map((item)=>{
                        return(
                            <li><a href=''>{item}</a></li>
                        );
                    })
                }
            </ul>

            <h3>Contact</h3>
            <ul>
                {
                    contactItems.map((item)=>{
                        return(
                            <li>{item}</li>
                        );
                    })
                }
            </ul>

            <h3>Social Media</h3>
            <ul>
                {
                    socialItems.map((data,index)=>{
                        return(
                            <li><a href={data.href} target="_blank">{data.name}</a></li>
                        );
                    })
                }
            </ul>
        </footer>
    ); 
}

export default Footer;