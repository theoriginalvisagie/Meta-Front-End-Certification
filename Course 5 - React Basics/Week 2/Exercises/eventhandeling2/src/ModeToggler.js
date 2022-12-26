function ModeToggler(){
    let darkModeOn = true;
    const darkMode = <h1>Dark Mode Is On.</h1>
    const lightMode = <h1>Light Mode Is On.</h1>

    function handleClick(){
        darkModeOn = !darkModeOn;

        if(darkModeOn == true){
            console.log("Dark Mode Is On.");
        }else{
            console.log("Light Mode Is On.");
        }
    }

    return(
        <div>
            {darkModeOn ? darkMode : lightMode}
            <button onClick={handleClick}>
                Click Me
            </button>
        </div>
    );
}

export default ModeToggler;