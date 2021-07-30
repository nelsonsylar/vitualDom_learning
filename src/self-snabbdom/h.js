import {vnode} from './vnode'
export function h(sel,data,children){
  let childrentpl=[]
  if(arguments.length!==3){
    throw new Error('只支持3个参数')
  }
  
  if(typeof children ==='string'){
    let text = children
    return vnode(sel,data,undefined,text,undefined)
  }
  if(Array.isArray(children)){
    for(const child in children){
      childrentpl.push(children[child])
    }
    return vnode(sel,data,childrentpl,undefined,undefined)
  }else if(typeof children === 'object'){
    return vnode(sel,data,[children],undefined,undefined)
  }
}