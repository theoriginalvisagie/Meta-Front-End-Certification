// function Btn(){
//     const clickHandler = () => console.log("Clicked");
//     <button onClick={clickHandler}>Click Me</button>
// }

// export default Btn;

function Btn(){
    const clickHandler = () => console.log("Mouse Over");
    <button onMouseOver={clickHandler}>Click Me</button>
}

export default Btn;