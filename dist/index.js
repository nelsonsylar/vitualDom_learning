/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/self-snabbdom/h.js":
/*!********************************!*\
  !*** ./src/self-snabbdom/h.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var _vnode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vnode */ "./src/self-snabbdom/vnode.js");

function h(sel,data,children){
  let childrentpl=[]
  if(arguments.length!==3){
    throw new Error('只支持3个参数')
  }
  
  if(typeof children ==='string'){
    let text = children
    return (0,_vnode__WEBPACK_IMPORTED_MODULE_0__.vnode)(sel,data,undefined,text,undefined)
  }
  if(Array.isArray(children)){
    for(const child in children){
      childrentpl.push(children[child])
    }
    return (0,_vnode__WEBPACK_IMPORTED_MODULE_0__.vnode)(sel,data,childrentpl,undefined,undefined)
  }else if(typeof children === 'object'){
    return (0,_vnode__WEBPACK_IMPORTED_MODULE_0__.vnode)(sel,data,[children],undefined,undefined)
  }
}

/***/ }),

/***/ "./src/self-snabbdom/patch.js":
/*!************************************!*\
  !*** ./src/self-snabbdom/patch.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vnode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vnode */ "./src/self-snabbdom/vnode.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((oldVnode,newVnode)=>{
  console.log(oldVnode,newVnode)
  let newNodeElm
  if(!isVnode(oldVnode)){
    //不是虚拟dom,转化为虚拟dom再做比较
    oldVnode= (0,_vnode__WEBPACK_IMPORTED_MODULE_0__.vnode)(oldVnode.tagName.toLowerCase(),{},[],undefined,oldVnode)
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
});

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


/***/ }),

/***/ "./src/self-snabbdom/vnode.js":
/*!************************************!*\
  !*** ./src/self-snabbdom/vnode.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vnode": () => (/* binding */ vnode)
/* harmony export */ });
function vnode(sel, data, children, text, elm){
  const key = data === undefined ? undefined : data.key;
  return {sel, data, children, text, elm, key}
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _self_snabbdom_h__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./self-snabbdom/h */ "./src/self-snabbdom/h.js");
/* harmony import */ var _self_snabbdom_patch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./self-snabbdom/patch */ "./src/self-snabbdom/patch.js");


let vnode =(0,_self_snabbdom_h__WEBPACK_IMPORTED_MODULE_0__.h)('ul',{},
    [
      (0,_self_snabbdom_h__WEBPACK_IMPORTED_MODULE_0__.h)("li", { key:'A'  }, "A"),
      (0,_self_snabbdom_h__WEBPACK_IMPORTED_MODULE_0__.h)("li", { key:'B' }, "B"),
      (0,_self_snabbdom_h__WEBPACK_IMPORTED_MODULE_0__.h)("li", { key:'C' }, "C"),
    ],
  )


const btn = document.getElementById('btn')
btn.onclick=()=>{
  let newVnode = (0,_self_snabbdom_h__WEBPACK_IMPORTED_MODULE_0__.h)('ul',{},
    [
      (0,_self_snabbdom_h__WEBPACK_IMPORTED_MODULE_0__.h)("li", { key:'A'  }, "A"),
      (0,_self_snabbdom_h__WEBPACK_IMPORTED_MODULE_0__.h)("li", { key:'B' }, "B"),
      (0,_self_snabbdom_h__WEBPACK_IMPORTED_MODULE_0__.h)("li", { key:'S' }, "S"),
      (0,_self_snabbdom_h__WEBPACK_IMPORTED_MODULE_0__.h)("li", { key:'C' }, "C"),
      (0,_self_snabbdom_h__WEBPACK_IMPORTED_MODULE_0__.h)("li", { key:'D' }, "D"),
    ],
  )
  ;(0,_self_snabbdom_patch__WEBPACK_IMPORTED_MODULE_1__.default)(vnode,newVnode)
}
const container = document.querySelector('#container')
vnode = (0,_self_snabbdom_patch__WEBPACK_IMPORTED_MODULE_1__.default)(container,vnode)

})();

/******/ })()
;
//# sourceMappingURL=index.js.map