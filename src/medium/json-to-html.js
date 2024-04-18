const json = {
  type: "div",
  props: { id: "hello", class: "foo" },
  children: [
    { type: "h1", children: "HELLO" },
    {
      type: "p",
      children: [{ type: "span", props: { class: "bar" }, children: "World" }],
    },
  ],
};

function JSONtoHTML(htmlMeta) {
  if (typeof htmlMeta === "string" || !htmlMeta) {
    return htmlMeta;
  }

  const rootElement = document.createElement(htmlMeta.type);

  for (let key in json.props) {
    rootElement.setAttribute(key, json.props[key]);
  }

  if (Array.isArray(htmlMeta.children)) {
    for (let child of htmlMeta.children) {
      rootElement.appendChild(JSONtoHTML(child));
    }
  } else if (typeof htmlMeta.children === "string") {
    rootElement.innerText = htmlMeta.children;
  }

  return rootElement;
}

// document.getElementById("root").appendChild(JSONtoHTML(json));

// Output: <div id="hello" class="foo">
//   <h1>HELLO</h1>
//   <p>
//     <span class="bar">World</span>
//   </p>
// </div>;
