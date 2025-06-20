const App = () => {
    const changeText = () => {
        document.querySelector("h1").textContent = "New heading";
    }
  return (
    <>
      <h1> Shami </h1>
      
      <p>hello shami</p>
      <button onClick={changeText}>click me</button> 
    </>
  );
  
};

export default App;
