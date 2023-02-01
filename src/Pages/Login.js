const Login = () => {
  return (
    <>
   hellow 
   
   </>
   );
};
export default Login;



import React, { useState } from "react";

const InputExample = () => {
  const [inputValues, setInputValues] = useState({
    input1: "",
    input2: "",
    input3: "",
  });

  const handleInputChange = (event) => {
    setInputValues({
      ...inputValues,
      [event.target.id]: event.target.value,
    });
  };

  const inputArray = [
    { id: "input1", label: "Input 1" },
    { id: "input2", label: "Input 2" },
    { id: "input3", label: "Input 3" },
  ];

  return (
    <>
      {inputArray.map((input) => (
        <div key={input.id}>
          <label htmlFor={input.id}>{input.label}:</label>
          <input
            type="text"
            id={input.id}
            value={inputValues[input.id]}
            onChange={handleInputChange}
          />
        </div>
      ))}
    </>
  );
};

export default InputExample;
