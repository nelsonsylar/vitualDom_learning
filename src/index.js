import {h} from './self-snabbdom/h'
import patch from './self-snabbdom/patch'
let vnode =h('ul',{},
    [
      h("li", { key:'A'  }, "A"),
      h("li", { key:'B' }, "B"),
      h("li", { key:'C' }, "C"),
    ],
  )


const btn = document.getElementById('btn')
btn.onclick=()=>{
  let newVnode = h('ul',{},
    [
      h("li", { key:'A'  }, "A"),
      h("li", { key:'B' }, "B"),
      h("li", { key:'S' }, "S"),
      h("li", { key:'C' }, "C"),
      h("li", { key:'D' }, "D"),
    ],
  )
  patch(vnode,newVnode)
}
const container = document.querySelector('#container')
vnode = patch(container,vnode)
