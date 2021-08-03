import {vnode} from './vnode'
export default (oldVnode,newVnode)=>{
  console.log(oldVnode,newVnode)
  let newNodeElm
  if(!isVnode(oldVnode)){
    //不是虚拟dom,转化为虚拟dom再做比较
    oldVnode= vnode(oldVnode.tagName.toLowerCase(),{},[],undefined,oldVnode)
  }
  if(isSameVnode(oldVnode,newVnode)){
    //是相同的vnode,进行递归比较后替换
    newNodeElm=patchSameVnode(oldVnode,newVnode)
  }else{
    //不是相同vnode,暴力删除替换
    newNodeElm = createElm(newVnode)
    if(oldVnode.elm.parentNode && newNodeElm){
      oldVnode.elm.parentNode.insertBefore(newNodeElm,oldVnode.elm)
    }
    oldVnode.elm.parentNode.removeChild(oldVnode.elm)
  }
  return newVnode
}

const isVnode = (vnode)=>{
  if(vnode && typeof vnode.sel ==='string') return true
}

const createElm=(vnode)=>{
  const dom = document.createElement(vnode.sel)
  if(Array.isArray(vnode.children)){
    vnode.children.forEach(child => {
      const childDom = createElm(child)
      dom.appendChild(childDom)
    });
  }
  if(typeof vnode.text === 'string' &&( vnode.children === undefined || vnode.children.length ===0 )){
    dom.innerText=vnode.text
  }
  vnode.elm = dom
  return vnode.elm
}

const isSameVnode=(oldVnode,newVnode)=>{
  return oldVnode.key===newVnode.key && oldVnode.sel === newVnode.sel
}

const patchSameVnode  = (oldVnode,newVnode)=>{
  if(!Object.is(oldVnode,newVnode)){
    if(newVnode.text!=undefined && (newVnode.children===undefined || newVnode.children.length ===0 )){
      //newVnode没有children
      if(newVnode.text !== oldVnode.text){
        oldVnode.elm.innerText = newVnode.text
      }
    } else{
      //newVnode有children且oldVnode有children
      let un=0
      if(oldVnode.children!==undefined && oldVnode.children.length >0){
        newVnode.children.forEach((newChild,i)=>{
          const sameNode = oldVnode.children.find(oldChild=>newChild.key===oldChild.key && newChild.sel===oldChild.sel)
          if(!sameNode){
            let dom = createElm(newChild)
            newChild.elm = dom
            if(un < oldVnode.children.length){
              oldVnode.elm.insertBefore(dom,oldVnode.children[un].elm)
            }else{
              oldVnode.elm.appendChild(dom)
            }
          }else{
            un++
          }
        })
      }else{
        //oldVnode没有children且newVnode有children
        oldVnode.elm.innerText=''
        for(const key in newVnode.children){
          const childDom = createElm(newVnode.children[key])
          oldVnode.elm.appendChild(childDom)
        }
      }
    }
    newVnode.elm = oldVnode.elm
    return newVnode
  }
}
