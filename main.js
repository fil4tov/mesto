/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,r(o.key),o)}}function r(e){var r=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===t(r)?r:String(r)}const n=function(){function t(e){var n,o,i,a=e.data,u=e.userId,c=e.templateSelector,l=e.handleImageClick,s=e.handleOpenConfirm,f=e.handleLikeCard;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,i=function(t,e){return t.target===e},(o=r(o="_checkTarget"))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i,this.cardId=a._id,this._name=a.name,this._src=a.link,this._likes=a.likes,this._ownerId=a.owner._id,this._userId=u,this._isLiked=!1,this._templateSelector=c,this._handleImageClick=l,this._handleOpenConfirm=s,this._handleLikeCard=f}var n,o;return n=t,(o=[{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._buttonLike=this._element.querySelector(".card__like-button"),this._buttonDelete=this._element.querySelector(".card__delete-button"),this._cardImage=this._element.querySelector(".card__photo"),this._cardLikes=this._element.querySelector(".card__likes"),this._cardLocation=this._element.querySelector(".card__location"),this._setListeners(),this._cardLocation.textContent=this._name,this._cardLikes.textContent=this._likes.length,this._cardImage.src=this._src,this._cardImage.alt=this._name,this._ownerId!==this._userId&&this._buttonDelete.classList.add("card__delete-button_hidden"),this._isLikedByMe()&&(this._buttonLike.classList.add("card__like-button_active"),this._isLiked=!0),this._element}},{key:"updateCard",value:function(t){var e=t.likes,r=t.link,n=t.name;this._name=n,this._src=r,this._likes=e,this._updateLikes()}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"toggleButtonLikeState",value:function(t){this._buttonLike.disabled=t}},{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(!0)}},{key:"_isLikedByMe",value:function(){var t=this;return this._likes.some((function(e){return e._id===t._userId}))}},{key:"_handleClickLikeButton",value:function(){this._handleLikeCard(this.cardId,this._isLiked),this._buttonLike.classList.toggle("card__like-button_active")}},{key:"_handleClickDeleteButton",value:function(){this._handleOpenConfirm(this.cardId)}},{key:"_updateLikes",value:function(){this._isLiked=this._isLikedByMe(),this._cardLikes.textContent=this._likes.length}},{key:"_setListeners",value:function(){var t=this;this._element.addEventListener("click",(function(e){t._checkTarget(e,t._buttonLike)&&t._handleClickLikeButton(),t._checkTarget(e,t._buttonDelete)&&t._handleClickDeleteButton(),t._handleImageClick&&t._checkTarget(e,t._cardImage)&&t._handleImageClick({name:t._name,link:t._src})}))}}])&&e(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),t}();function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==o(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===o(i)?i:String(i)),n)}var i}var u=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inputErrorClass=e.inputErrorClass,this._form=r,this._inputList=this._form.querySelectorAll(this._inputSelector),this._button=this._form.querySelector(this._submitButtonSelector)}var e,r;return e=t,(r=[{key:"enableValidation",value:function(){this._setListeners(),this._toggleSubmitButton()}},{key:"forceValidateForm",value:function(){var t=this;this._inputList.forEach((function(e){t._validateForm(e)}))}},{key:"disableSubmitButton",value:function(){this._button.disabled=!0}},{key:"_setListeners",value:function(){var t=this;this._inputList.forEach((function(e){e.addEventListener("input",(function(e){var r=e.target;t._validateForm(r)}))}))}},{key:"_validateForm",value:function(t){this._validateInput(t),this._toggleSubmitButton()}},{key:"_validateInput",value:function(t){var e=this._checkInputValidity(t);this._toggleInputError(e,t)}},{key:"_checkInputValidity",value:function(t){return t.validity.valid}},{key:"_toggleInputError",value:function(t,e){var r=this._form.querySelector(".".concat(e.name,"-error"));t?(r.textContent="",e.classList.remove(this._inputErrorClass)):(r.textContent=e.validationMessage,e.classList.add(this._inputErrorClass))}},{key:"_toggleSubmitButton",value:function(){this._button.disabled=!this._isFormValid(this._inputList)}},{key:"_isFormValid",value:function(){var t,e=this;return(t=this._inputList,function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).every((function(t){return e._checkInputValidity(t)}))}}])&&a(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();const c=u;function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,y(n.key),n)}}function f(t,e,r){return e&&s(t.prototype,e),r&&s(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function p(t,e,r){return(e=y(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function y(t){var e=function(t,e){if("object"!==l(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===l(e)?e:String(e)}const h=f((function t(e,r){var n=this,o=e.items,i=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,"render",(function(){n._items.forEach((function(t){n._renderer(t)}))})),p(this,"addItem",(function(t){n._container.prepend(t)})),this._items=o,this._renderer=i,this._container=r}));function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function m(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,v(n.key),n)}}function v(t){var e=function(t,e){if("object"!==d(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===d(e)?e:String(e)}const b=function(){function t(e){var r,n,o,i=this,a=e.popupSelector,u=e.openedClass,c=e.buttonCloseSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=function(t){"Escape"===t.key&&i.close()},(n=v(n="_closeOnEsc"))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,this._popupSelector=a,this._openedClass=u,this._buttonCloseSelector=c,this._popup=document.querySelector(".".concat(this._popupSelector))}var e,r;return e=t,(r=[{key:"open",value:function(){this._popup.classList.add(this._openedClass),document.addEventListener("keydown",this._closeOnEsc)}},{key:"close",value:function(){this._popup.classList.remove(this._openedClass),document.removeEventListener("keydown",this._closeOnEsc)}},{key:"activateListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){e.stopPropagation(),(e.target.classList.contains(t._popupSelector)||e.target.classList.contains(t._buttonCloseSelector))&&t.close()}))}}])&&m(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function g(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,O(n.key),n)}}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=L(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},S.apply(this,arguments)}function w(t,e){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},w(t,e)}function k(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function L(t){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},L(t)}function O(t){var e=function(t,e){if("object"!==_(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==_(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===_(e)?e:String(e)}const j=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&w(t,e)}(a,t);var e,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=L(n);if(o){var r=L(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===_(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return k(t)}(this,t)});function a(t){var e,r,n,o,u=t.baseConfig,c=t.handleSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),r=k(e=i.call(this,u)),o=function(){var t={};return e._inputList.forEach((function(e){t[e.name]=e.value})),t},(n=O(n="_getInputValues"))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,e._handleSubmit=c,e._form=e._popup.querySelector("form"),e._buttonSubmit=e._form.querySelector("button"),e._inputList=e._form.querySelectorAll("input"),e}return e=a,(r=[{key:"activateListeners",value:function(){var t=this;this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleSubmit(t._getInputValues())})),S(L(a.prototype),"activateListeners",this).call(this)}},{key:"close",value:function(){this._form.reset(),S(L(a.prototype),"close",this).call(this)}},{key:"setLoading",value:function(t,e){t?(this._buttonSubmit.textContent=e,this._buttonSubmit.disabled=!0):(this._buttonSubmit.textContent=e,this._buttonSubmit.disabled=!1)}}])&&g(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),a}(b);function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function P(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,x(n.key),n)}}function C(t,e,r){return e&&P(t.prototype,e),r&&P(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function I(t,e,r){return(e=x(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function x(t){var e=function(t,e){if("object"!==E(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==E(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===E(e)?e:String(e)}const T=C((function t(e){var r=this,n=e.userNameSelector,o=e.userInfoSelector,i=e.userAvatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),I(this,"getUserInfo",(function(){return{name:r._name.textContent,about:r._about.textContent,avatar:r._avatar.src}})),I(this,"getUserId",(function(){return r._id})),I(this,"setUserInfo",(function(t){var e=t.name,n=t.about,o=t.avatar,i=t._id;r._name.textContent=e,r._about.textContent=n,r._avatar.src=o,r._id=i})),this._name=document.querySelector(".".concat(n)),this._about=document.querySelector(".".concat(o)),this._avatar=document.querySelector(".".concat(i)),this._id=""}));function B(t){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(t)}function q(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==B(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==B(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===B(o)?o:String(o)),n)}var o}function A(){return A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=R(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},A.apply(this,arguments)}function U(t,e){return U=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},U(t,e)}function R(t){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},R(t)}const D=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&U(t,e)}(a,t);var e,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=R(n);if(o){var r=R(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===B(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t){var e,r=t.baseConfig,n=t.imageSelector,o=t.locationSelector;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,r))._image=document.querySelector(".".concat(n)),e._location=document.querySelector(".".concat(o)),e}return e=a,(r=[{key:"open",value:function(t){var e=t.name,r=t.link;A(R(a.prototype),"open",this).call(this),this._image.src=r,this._image.alt=e,this._location.textContent=e}},{key:"close",value:function(){A(R(a.prototype),"close",this).call(this),this._image.src="",this._image.alt="",this._location.textContent=""}}])&&q(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),a}(b);function F(t){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F(t)}function N(){N=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),u=new O(o||[]);return n(a,"_invoke",{value:S(t,r,u)}),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f={};function p(){}function y(){}function h(){}var d={};c(d,i,(function(){return this}));var m=Object.getPrototypeOf,v=m&&m(m(j([])));v&&v!==e&&r.call(v,i)&&(d=v);var b=h.prototype=p.prototype=Object.create(d);function _(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function g(t,e){function o(n,i,a,u){var c=s(t[n],t,i);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==F(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,a,u)}),(function(t){o("throw",t,a,u)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return o("throw",t,a,u)}))}u(c.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function S(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=w(a,r);if(u){if(u===f)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=s(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function w(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function j(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:E}}function E(){return{value:void 0,done:!0}}return y.prototype=h,n(b,"constructor",{value:h,configurable:!0}),n(h,"constructor",{value:y,configurable:!0}),y.displayName=c(h,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,c(t,u,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},_(g.prototype),c(g.prototype,a,(function(){return this})),t.AsyncIterator=g,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new g(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(b),c(b,u,"Generator"),c(b,i,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function V(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function G(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){V(i,n,o,a,u,"next",t)}function u(t){V(i,n,o,a,u,"throw",t)}a(void 0)}))}}function M(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,Y(n.key),n)}}function W(t,e,r){return e&&M(t.prototype,e),r&&M(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function H(t,e,r){return(e=Y(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Y(t){var e=function(t,e){if("object"!==F(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==F(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===F(e)?e:String(e)}const $=W((function t(e){var r=this,n=e.baseUrl,o=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),H(this,"_fetch",function(){var t=G(N().mark((function t(e,n){var o;return N().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(r._baseUrl,"/").concat(e),{method:n,headers:r._headers});case 2:return o=t.sent,t.abrupt("return",o.ok?o.json():Promise.reject("Ошибка: ".concat(o.status)));case 4:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()),H(this,"_fetchWithBody",function(){var t=G(N().mark((function t(e,n,o){var i;return N().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(r._baseUrl,"/").concat(e),{method:n,headers:r._headers,body:JSON.stringify(o)});case 2:return i=t.sent,t.abrupt("return",i.ok?i.json():Promise.reject("Ошибка: ".concat(i.status)));case 4:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}()),H(this,"getUserInfo",G(N().mark((function t(){return N().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r._fetch("users/me","GET");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))),H(this,"getInitialCards",G(N().mark((function t(){return N().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r._fetch("cards","GET");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))),H(this,"updateUserInfo",function(){var t=G(N().mark((function t(e){return N().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r._fetchWithBody("users/me","PATCH",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),H(this,"addCard",function(){var t=G(N().mark((function t(e){return N().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r._fetchWithBody("cards","POST",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),H(this,"deleteCard",function(){var t=G(N().mark((function t(e){return N().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r._fetch("cards/".concat(e),"DELETE");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),H(this,"toggleLike",function(){var t=G(N().mark((function t(e,n){return N().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r._fetch("cards/".concat(e,"/likes"),n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()),H(this,"updateAvatar",function(){var t=G(N().mark((function t(e){return N().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r._fetchWithBody("users/me/avatar","PATCH",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),this._baseUrl=n,this._headers=o}));var z=document.querySelectorAll(".popup__form"),J=document.querySelector(".gallery"),K={openBtn:document.querySelector(".profile__edit-button"),nameInput:document.querySelector(".popup__input_type_name"),descriptionInput:document.querySelector(".popup__input_type_about")},Q={openBtn:document.querySelector(".profile__add-button")},X={idInput:document.querySelector(".popup__input_type_card-id")},Z={openBtn:document.querySelector(".profile__avatar-container")},tt={openedClass:"popup_opened",buttonCloseSelector:"popup__close"},et={},rt={},nt=[];function ot(t){return ot="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ot(t)}function it(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function at(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?it(Object(r),!0).forEach((function(e){ut(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):it(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function ut(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==ot(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==ot(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===ot(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function ct(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var lt=function(t){var e=new n({data:t,templateSelector:"#card",handleImageClick:function(t){return vt.open(t)},handleOpenConfirm:function(t){return ft(t)},handleLikeCard:function(t,e){return pt(t,e)},userId:ht.getUserId()});return nt.push(e),e.generateCard()},st=function(t){return nt.find((function(e){return e.cardId===t}))},ft=function(t){rt.confirm.open(),X.idInput.value=t},pt=function(t,e){var r=st(t);r.toggleButtonLikeState(!0),yt.toggleLike(t,e?"DELETE":"PUT").then((function(t){r.updateCard(t)})).catch(console.log).finally((function(){r.toggleButtonLikeState(!1)}))},yt=new $({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-64/",headers:{authorization:"94314ba6-acbc-4ef4-a856-49bf0d843156","Content-Type":"application/json"}});Promise.all([yt.getInitialCards(),yt.getUserInfo()]).then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,u=[],c=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(e,r)||function(t,e){if(t){if("string"==typeof t)return ct(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?ct(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];ht.setUserInfo(i),o.reverse().forEach((function(t){dt.addItem(lt(t))}))})).catch(console.log);var ht=new T({userNameSelector:"profile__name",userInfoSelector:"profile__description",userAvatarSelector:"profile__avatar"}),dt=new h({items:[],renderer:function(t){dt.addItem(lt(t))}},J);[{name:"edit",selector:"popup_type_edit",callback:function(t){var e=t.name,r=t.about;rt.edit.setLoading(!0,"Сохранение..."),yt.updateUserInfo({name:e,about:r}).then((function(t){return ht.setUserInfo(t)})).catch(console.log).finally((function(){rt.edit.setLoading(!1,"Сохранить"),rt.edit.close()}))}},{name:"add",selector:"popup_type_add",callback:function(t){var e=t.place,r=t.link;rt.add.setLoading(!0,"Создание..."),yt.addCard({name:e,link:r}).then((function(t){dt.addItem(lt(t))})).catch(console.log).finally((function(){rt.add.setLoading(!1,"Создать"),rt.add.close()})),et["add-card"].disableSubmitButton()}},{name:"confirm",selector:"popup_type_confirm-delete",callback:function(t){var e=t.id;rt.confirm.setLoading(!0,"Удаление..."),yt.deleteCard(e).then((function(){st(e).deleteCard(),function(t){var e=nt.findIndex((function(e){return e.cardId===t}));nt.splice(e,1)}(e)})).catch(console.log).finally((function(){rt.confirm.setLoading(!1,"Да"),rt.confirm.close()}))}},{name:"avatar",selector:"popup_type_avatar",callback:function(t){rt.avatar.setLoading(!0,"Сохранение..."),yt.updateAvatar(t).then((function(t){ht.setUserInfo(t)})).catch(console.log).finally((function(){rt.avatar.setLoading(!1,"Сохранить"),rt.avatar.close(),et["change-avatar"].disableSubmitButton()}))}}].forEach((function(t){var e=new j({baseConfig:at(at({},tt),{},{popupSelector:t.selector}),handleSubmit:t.callback});e.activateListeners(),rt[t.name]=e}));var mt,vt=new D({baseConfig:at(at({},tt),{},{popupSelector:"popup_type_image"}),imageSelector:"popup__full-screen-image",locationSelector:"popup__location"});vt.activateListeners(),K.openBtn.addEventListener("click",(function(){rt.edit.open();var t=ht.getUserInfo(),e=t.name,r=t.about;K.nameInput.value=e,K.descriptionInput.value=r,et["edit-description"].forceValidateForm()})),Q.openBtn.addEventListener("click",(function(){return rt.add.open()})),Z.openBtn.addEventListener("click",(function(){return rt.avatar.open()})),mt={inputSelector:".popup__input",submitButtonSelector:".popup__save",inputErrorClass:"popup__input_type_error"},z.forEach((function(t){var e=new c(mt,t),r=t.getAttribute("name");et[r]=e,e.enableValidation()}))})();