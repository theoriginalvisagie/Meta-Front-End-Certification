import '../App.css';

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
        <footer className='footer'>
            <div>
                <img src="" alt=""></img>
            </div>
            
            <div className="footerItems">
                <h3>Doormat Navigation</h3>
                <ul>
                    {
                        menuItems.map((item)=>{
                            return(
                                <li><a href=''>{item}</a></li>
                            );
                        })
                    }
                </ul>
            </div>
            
            <div className="footerItems">
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
            </div>

            <div className="footerItems">
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
            </div>
        </footer>
    ); 
}

export default Footer;