import {vnode} from './vnode'
export default (oldVnode,newVnode)=>{
  console.log(oldVnode,newVnode)
  if(!isVnode(oldVnode)){
    //不是虚拟dom,转化为虚拟dom再做比较
    oldVnode= vnode(oldVnode.getAttribute('id'),undefined,undefined,undefined,oldVnode)
  }
  if(isSameVnode(oldVnode,newVnode)){
    //是相同的vnode,进行递归比较后替换
    console.log('是相同的vnode')
  }else{
    //不是相同vnode,暴力删除替换
    console.log('不是相同dom')
    const node = createElm(newVnode)
    document.body.appendChild(node)
  }
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
  if(typeof vnode.text === 'string'){
    dom.append(vnode.text)
  }
  return dom
}

const isSameVnode=(oldVnode,newVnode)=>{
  return oldVnode.key===newVnode.key && oldVnode.sel === newVnode.sel
}