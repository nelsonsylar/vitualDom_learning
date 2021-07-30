import {h} from './self-snabbdom/h'
import patch from './self-snabbdom/patch'
const vnode = h("div", { }, 
  [
    h("div", { style: { fontWeight: "bold" } }, "This is bold"),
    h("div", { style: { fontWeight: "bold" } }, "hahaha"),
    h("div", { style: { fontWeight: "bold" } }, "beautiful"),
  ],
);
const container = document.querySelector('#container')
patch(container,vnode)
