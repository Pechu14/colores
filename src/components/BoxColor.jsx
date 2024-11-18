import React, { forwardRef} from "react";

const Boxcolor = forwardRef(( { color} , ref) => {
  return(
    <div
     ref={ref}
     className={`box ${color}`}
     style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "200px",
      height: "200px",
      borderWidth: "1px",
      borderStyle: "solid",
      color: "white",
    }}
    >
      <p>No soy ese color</p>
      <p></p>

    </div>
  );
});

export default Boxcolor;
