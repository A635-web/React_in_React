// const heading=React.createElement("div",{id:"parent"},
//     React.createElement("div",{id:"child"},
//         [React.createElement("h1",{},"I am an h1 tag"),
//         React.createElement("h2",{},"I am in h2 tag"), 
//         ]
//     )
    
   
    
// );
// console.log(heading);
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
import React from "react";
import ReactDOM from "react-dom";
const heading=React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"I am an h1 tag"),
        React.createElement("h2",{},"I am in h2 tag"), 
        ]
    )
    
   
    
);
console.log(heading);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);