    const heading=React.createElement(
        "div",
        {id:"parent"},
        React.createElement(
        "div",{id:"child"},
        [
        React.createElement("h1",{id:"heading"},"hello world react"),
        React.createElement("h2",{id:"heading"},"hello world h1 react"),
        React.createElement("h1",{id:"heading"},"hello world h3react"),
        React.createElement("h1",{id:"heading"},"hello world react")
      ],
      React.createElement("div",
      {id:"child2"},[
        
        React.createElement("h1",{id:"heading1"},"hello world react"),
        React.createElement("h2",{id:"heading1"},"hello world h1 react"),
        React.createElement("h1",{id:"heading1"},"hello world h3react"),
        React.createElement("h1",{id:"heading1"},"hello world react")
      ]
      )
      )
    );

    const root=ReactDOM.createRoot(document.getElementById("root"));

    root.render(heading);


    // const heading = React.createElement(
    //   "div",
    //   { id: "parent" },
    //   React.createElement(
    //     "div",
    //     { id: "child" },
    //     [
    //       React.createElement("h1", { id: "heading1" }, "Hello World React"),
    //       React.createElement("h2", { id: "heading2" }, "Hello World H2 React"),
    //       React.createElement("h3", { id: "heading3" }, "Hello World H3 React"),
    //       React.createElement("h4", { id: "heading4" }, "Hello World H4 React")
    //     ]
    //   )
    // );
    
    // const root = ReactDOM.createRoot(document.getElementById("root"));
    // root.render(heading);
    