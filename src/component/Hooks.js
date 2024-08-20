// import React, { Component } from "react";
// import { useState } from "react";

// export default class Hooks extends Component {
//   render() {
//     const [name, setName] = useState({
//       okey: "Sattar",
//       Hello: "Hello",
//       // count: 0,
//     });
//     const handleOneClick = () => {
//       setName((pre) => {
//         return { ...pre, okey: "Alam", Hello: "Hi" };
//       });
//     };

//     const [count, setCount] = useState(0);
//     const handleNext = () => {
//       setCount((fel) => fel + 1);
//     };
//     return (
//       <>
//         <div className="text-center">
//           <h1>
//             {name.Hello} Md {name.okey}
//           </h1>
//           <h3>How are you</h3>
//           {/* <h2>Counter :{name.count}</h2> */}
//           <button onClick={handleOneClick} className="btn btn-primary">
//             Next
//           </button>
//         </div>
//         <div className="text-center">
//           <h1>Counter:{count}</h1>
//           <button onClick={handleNext}>Next</button>
//         </div>
//       </>
//     );
//   }
// }
import React, { useState, useEffect, useRef } from "react";
export default function Hooks() {
  // const [name, setName] = useState({
  //   okey: "Sattar",
  //   Hello: "Hello",
  //   // count: 0,
  // });
  // const handleOneClick = () => {
  //   setName((pre) => {
  //     return { ...pre, okey: "Alam", Hello: "Hi" };
  //   });
  // };

  // // const [count, setCount] = useState(0);
  // // const handleNext = () => {
  // //   setCount(count + 1);
  // // };
  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount((count) => count + 1);
  //   }, 3000);
  // }, []);
  // const [value, setValue] = useState(0);
  // const count = useRef(0);
  // useEffect(() => {
  //   count.current = count.current + 1;
  // });
  return (
    <>
      {/* <div className="text-center">
        <button
          onClick={() => {
            setValue((prev) => prev - 1);
          }}
        >
          -1
        </button>
        <h1>{value}</h1>
        <button
          onClick={() => {
            setValue((prev) => prev + 1);
          }}
        >
          +1
        </button>
        <h1>Render Count:{count.current}</h1>
      </div> */}
      {/* <div className="text-center">
        <h1>
          {name.Hello} Md {name.okey}
        </h1>
        <h3>How are you</h3>
        {/* <h2>Counter :{name.count}</h2> */}

      {/* <button onClick={handleOneClick} className="btn btn-primary"> */}
      {/* Next */}
      {/* </button> */}
      {/* // </div> */}

      {/* <div className="text-center">
        <h1>Counter:{count}</h1>
        <button onClick={handleNext} className="btn btn-primary">
          Next
        </button>
      </div> */}
      {/* // <div className="text-center"> */}
      {/* <h1>I've rendered {count} times!</h1> */}
      {/* </div> */}
    </>
  );
}
