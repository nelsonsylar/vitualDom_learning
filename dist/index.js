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
  if(!isVnode(oldVnode)){
    //不是虚拟dom,转化为虚拟dom再做比较
    oldVnode= (0,_vnode__WEBPACK_IMPORTED_MODULE_0__.vnode)(oldVnode.getAttribute('id'),undefined,undefined,undefined,oldVnode)
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
  if(typeof vnode.text === 'string'){
    dom.append(vnode.text)
  }
  return dom
}

const isSameVnode=(oldVnode,newVnode)=>{
  return oldVnode.key===newVnode.key && oldVnode.sel === newVnode.sel
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


const vnode = (0,_self_snabbdom_h__WEBPACK_IMPORTED_MODULE_0__.h)("div", { }, 
  [
    (0,_self_snabbdom_h__WEBPACK_IMPORTED_MODULE_0__.h)("div", { style: { fontWeight: "bold" } }, "This is bold"),
    (0,_self_snabbdom_h__WEBPACK_IMPORTED_MODULE_0__.h)("div", { style: { fontWeight: "bold" } }, "hahaha"),
    (0,_self_snabbdom_h__WEBPACK_IMPORTED_MODULE_0__.h)("div", { style: { fontWeight: "bold" } }, "beautiful"),
  ],
);
const container = document.querySelector('#container')
;(0,_self_snabbdom_patch__WEBPACK_IMPORTED_MODULE_1__.default)(container,vnode)

})();

/******/ })()
;
//# sourceMappingURL=index.js.map