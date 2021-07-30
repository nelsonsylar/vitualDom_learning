import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  h,
} from "snabbdom";

const patch = init([
  // Init patch function with chosen modules
  classModule, // makes it easy to toggle classes
  propsModule, // for setting properties on DOM elements
  styleModule, // handles styling on elements with support for animations
  eventListenersModule, // attaches event listeners
]);

const container = document.getElementById("container");
const btn = document.createElement('button')
btn.innerText='change'
document.body.appendChild(btn)
btn.onclick=()=>{
  const newVnode = h(
    "div#container.two.classes",
    { on: { click: ()=>{} } },
    [
      h(
        "span",
        { style: { fontWeight: "normal", fontStyle: "italic" } },
        "this is changed"
      ),
      " text",
      h("a", { props: { href: "/bar" } }, "haha!"),
    ]
  );
  // Second `patch` invocation
  patch(vnode, newVnode); // Snabbdom efficiently updates the old view to the new state
}
const vnode = h("div#container.two.classes", { }, [
  h("span", { style: { fontWeight: "bold" } }, "This is bold"),
  h("a", { props: { href: "/foo" } }, "I'll take you places!"),
]);
console.log(vnode)
// Patch into empty DOM element – this modifies the DOM as a side effect
patch(container, vnode);

