import react,{useState} from "react";

const Home = () => {
  const[number,setNumber]= useState(0);
  const substract = () =>setNumber(number-1);

  return (
    <>
      <div className="w-full h-screen flex flex-col items-center gap-20 mt-8  ">
        
        <button onClick={() => setNumber(number + 1)} 
        className="bg-green-800 p-2 text-white rounded-lg">
          Increase number
          </button>
          <span className="text-4xl">{number}</span>
        <button onClick={substract}
        className="bg-red-800 p-2 text-white rounded-lg">
          Decrease number
          </button>
      </div>
    </>
  );
};

export default Home;