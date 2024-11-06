import "./App.css";

function App() {
  function handleClick() {
    alert("I am Clicked");
  }

  function handleMouseOver() {
    alert("Mouse Over of paragraph");
  }

  function handleInputChange(e) {
    console.log("value till now:", e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // i am write custom behavior down
    alert("Form Submit Done");
  }

  return (
    <>
      <button onClick={handleClick} style={{padding:"10px"}}>Click Me</button>

      <p onMouseOver={handleMouseOver} style={{border:"1px solid black", margin:"20px",padding:"10px"}}> This is paragraph</p>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange}/>
        <button>Submit</button>
      </form>


        <button
                // this is immediate invoke
          // onClick={alert("this is immediate invoketion")}

          onClick={() => alert("i am clicked")}
          style={{ marginTop: "20px", padding: "10px" }}
        >
          Click This Button
        </button>
    </>
  );
}

export default App;
