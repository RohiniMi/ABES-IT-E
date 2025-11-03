{/* <div id="outer">
    <div id="inner1">
        <span id="message">Hello React Learners(React)</span>
        <span> </span>
    </div>
    <div id="inner2">
        <span id="message">Hello React Learners(React)</span>
    </div>
    <div id="inner3">
        <span id="message">Hello React Learners(React)</span>
    </div>
</div> */}
const spanData1 = "this is span data";
const spanData2 = "this is span data 2";
const reactElement2 = <div id="inner2">Inner div 2</div>
const reactElement = <div id="outer" style={ {height:"200px",width:"200px",backgroundColor:"beige"}}>
    <div id="inner">
        <span className="span-1">
            {spanData1}
        </span>
        <span className="span-2">
            {spanData2}
        </span>
    </div>
    {reactElement2}
</div>

// const heading = React.createElement("div", { id: "outer" },
//     [React.createElement("div", { id: "inner1" }, [
//         React.createElement("span", { id: "span1" }, "span1"),
//         React.createElement("span", { id: "span2" }, "span2")
//     ]),
//     React.createElement("div", { id: "inner2" }, [
//         React.createElement("span", { id: "span1" }, "span1"),
//         React.createElement("span", { id: "span2" }, "span2")
//     ]),
//     React.createElement("div", { id: "inner3" }, [
//         React.createElement("span", { id: "span1" }, "span1"),
//         React.createElement("span", { id: "span2" }, "span2")
//     ])
//     ]
// )
// console.log(typeof heading);

// const heading = <div id="outer">
//     <div id="inner1">
//         <span id="message">Hello React Learners(React)</span>
//         <span id="message">Hello React Learners(React)</span>
//     </div>
//     <div id="inner2">
//         <span id="message">Hello React Learners(React)</span>
//          <span id="message">Hello React Learners(React)</span>
//     </div>
//     <div id="inner3">
//         <span id="message">Hello React Learners(React)</span>
//          <span id="message">Hello React Learners(React)</span>
//     </div>
// </div>

// const heading = React.createElement("div", { id: "outer" },
//     [React.createElement("div", { id: "inner1" },
//         [React.createElement("span", { id: "heading" },
//             "hello React Learners(React1)"), React.createElement("span", { id: "heading" },
//                 "hello React Learners(React2)")]
//     ),
//     React.createElement("div", { id: "inner2" },
//         [React.createElement("span", { id: "heading" },
//             "hello React Learners(React1)"), React.createElement("span", { id: "heading" },
//                 "hello React Learners(React2)")]
//     ),
//     React.createElement("div", { id: "inner3" },
//         [React.createElement("span", { id: "heading" },
//             "hello React Learners(React1)"), React.createElement("span", { id: "heading" },
//                 "hello React Learners(React2)")]
//     )]
// )

// const heading = React.createElement("h1", 
//     { id: "heading", abc: "xyz" },
//     "Hello React Learners(React)");
// console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root2"))
root.render(reactElement);