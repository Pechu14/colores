import React from "react";
import { useRef } from "react";
import Boxcolor from "./BoxColor";


const colors = ["red", "green", "pink", "yellow", "purple", "white", "blue", "aqua", "olive"];

function MyForm() {
  
  const inputRef = useRef(null);
  const boxRefs = useRef([]);

  const handleInputChange = () => {
    const inputValue = inputRef.current.value;

    boxRefs.current.forEach((boxRef, index) =>{
      const color = colors[index];
      const box = boxRef;

      if(box) {
        if (inputValue === "") {
          box.style.backgroundColor = "transparent";
          box.children[0].textContent = `No soy ese color`;
        }else if (color === inputValue){
          box.style.backgroundColor = color;
          box.children[0].textContent = `¡Soy ${color}!`;

        }else{
          box.children[0].textContent = `¡ No soy ${inputValue} color!`
        }
      }
    });
  }

  return (
    <>
    <div className="container">
      <input
      type="text"
      placeholder="inserta color"
      ref={inputRef}
      onChange={handleInputChange}
      />
       <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {colors.map((color, index) => (
          <Boxcolor
            key={color}
            color={color}
            ref={(elemento) => (boxRefs.current[index] = elemento)}
          />
        ))}
      </div>
    </div>
     
    </>
  );
}

export default MyForm;
