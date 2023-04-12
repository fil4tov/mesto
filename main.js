/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,r(o.key),o)}}function r(e){var r=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===t(r)?r:String(r)}const n=function(){function t(e){var n,o,i,a=e.data,u=e.userId,c=e.templateSelector,l=e.handleImageClick,s=e.handleOpenConfirm,f=e.handleLikeCard;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,i=function(t,e){return t.target===e},(o=r(o="_checkTarget"))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i,this.cardId=a._id,this._userId=u,this._ownerId=a.owner._id,this._name=a.name,this._src=a.link,this._likes=a.likes,this._isLiked=!1,this._templateSelector=c,this._handleImageClick=l,this._handleOpenConfirm=s,this._handleLikeCard=f}var n,o;return n=t,(o=[{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._buttonLike=this._element.querySelector(".card__like-button"),this._buttonDelete=this._element.querySelector(".card__delete-button"),this._cardImage=this._element.querySelector(".card__photo"),this._cardLikes=this._element.querySelector(".card__likes"),this._cardLocation=this._element.querySelector(".card__location"),this._setListeners(),this._cardLocation.textContent=this._name,this._cardLikes.textContent=this._likes.length,this._cardImage.src=this._src,this._cardImage.alt=this._name,this._ownerId!==this._userId&&this._buttonDelete.classList.add("card__delete-button_hidden"),this._toggleStateButtonLike(),this._element}},{key:"toggleLike",value:function(t){var e=t.likes;this._likes=e,this._cardLikes.textContent=this._likes.length,this._toggleStateButtonLike()}},{key:"toggleDisableButtonLike",value:function(t){this._buttonLike.disabled=t}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_toggleStateButtonLike",value:function(){this._isLiked=this._isLikedByMe(),this._isLiked?this._buttonLike.classList.add("card__like-button_active"):this._buttonLike.classList.remove("card__like-button_active")}},{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(!0)}},{key:"_isLikedByMe",value:function(){var t=this;return this._likes.some((function(e){return e._id===t._userId}))}},{key:"_handleClickButtonLike",value:function(){this._handleLikeCard(this.cardId,this._isLiked)}},{key:"_handleClickButtonDelete",value:function(){this._handleOpenConfirm(this.cardId)}},{key:"_setListeners",value:function(){var t=this;this._element.addEventListener("click",(function(e){t._checkTarget(e,t._buttonLike)&&t._handleClickButtonLike(),t._checkTarget(e,t._buttonDelete)&&t._handleClickButtonDelete(),t._handleImageClick&&t._checkTarget(e,t._cardImage)&&t._handleImageClick({name:t._name,link:t._src})}))}}])&&e(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),t}();function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==o(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===o(i)?i:String(i)),n)}var i}const a=function(){function t(e){var r=e.text,n=e.templateSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._text=r,this._templateSelector=n}var e,r;return e=t,(r=[{key:"generateBlock",value:function(){return this._element=this._getTemplate(),this._element.querySelector(".error-block__title").textContent=this._text,this._element}},{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".error-block").cloneNode(!0)}}])&&i(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,f(n.key),n)}}function l(t,e,r){return e&&c(t.prototype,e),r&&c(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function s(t,e,r){return(e=f(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function f(t){var e=function(t,e){if("object"!==u(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===u(e)?e:String(e)}const p=l((function t(e,r){var n=this,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,"render",(function(t){t.forEach((function(t){n._renderer(t)}))})),s(this,"addItem",(function(t){n._container.prepend(t)})),s(this,"clearSection",(function(){n._container.innerHTML=""})),this._renderer=o,this._container=r}));function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function h(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,m(n.key),n)}}function d(t,e,r){return e&&h(t.prototype,e),r&&h(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function b(t,e,r){return(e=m(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function m(t){var e=function(t,e){if("object"!==y(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===y(e)?e:String(e)}const v=d((function t(e){var r=this,n=e.userNameSelector,o=e.userInfoSelector,i=e.userAvatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),b(this,"getUserInfo",(function(){return{name:r._name.textContent,about:r._about.textContent,avatar:r._avatar.src}})),b(this,"getUserId",(function(){return r._id})),b(this,"setUserInfo",(function(t){var e=t.name,n=t.about,o=t.avatar,i=t._id;r._name.textContent=e,r._about.textContent=n,r._avatar.src=o,r._id=i})),this._name=document.querySelector(".".concat(n)),this._about=document.querySelector(".".concat(o)),this._avatar=document.querySelector(".".concat(i)),this._id=""}));function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function S(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==_(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==_(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===_(o)?o:String(o)),n)}var o}var w=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inputErrorClass=e.inputErrorClass,this._form=r,this._inputList=this._form.querySelectorAll(this._inputSelector),this._button=this._form.querySelector(this._submitButtonSelector)}var e,r;return e=t,(r=[{key:"enableValidation",value:function(){this._setListeners(),this._toggleSubmitButton()}},{key:"forceValidateForm",value:function(){var t=this;this._inputList.forEach((function(e){t._validateForm(e)}))}},{key:"disableSubmitButton",value:function(){this._button.disabled=!0}},{key:"_setListeners",value:function(){var t=this;this._inputList.forEach((function(e){e.addEventListener("input",(function(e){var r=e.target;t._validateForm(r)}))}))}},{key:"_validateForm",value:function(t){this._validateInput(t),this._toggleSubmitButton()}},{key:"_validateInput",value:function(t){var e=this._checkInputValidity(t);this._toggleInputError(e,t)}},{key:"_checkInputValidity",value:function(t){return t.validity.valid}},{key:"_toggleInputError",value:function(t,e){var r=this._form.querySelector(".".concat(e.name,"-error"));t?(r.textContent="",e.classList.remove(this._inputErrorClass)):(r.textContent=e.validationMessage,e.classList.add(this._inputErrorClass))}},{key:"_toggleSubmitButton",value:function(){this._button.disabled=!this._isFormValid(this._inputList)}},{key:"_isFormValid",value:function(){var t,e=this;return(t=this._inputList,function(t){if(Array.isArray(t))return g(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return g(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?g(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).every((function(t){return e._checkInputValidity(t)}))}}])&&S(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();const k=w;function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function j(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,L(n.key),n)}}function L(t){var e=function(t,e){if("object"!==O(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==O(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===O(e)?e:String(e)}const P=function(){function t(e){var r,n,o,i=this,a=e.popupSelector,u=e.openedClass,c=e.buttonCloseSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=function(t){"Escape"===t.key&&i.close()},(n=L(n="_closeOnEsc"))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,this._popupSelector=a,this._openedClass=u,this._buttonCloseSelector=c,this._popup=document.querySelector(".".concat(this._popupSelector))}var e,r;return e=t,(r=[{key:"open",value:function(){this._popup.classList.add(this._openedClass),document.addEventListener("keydown",this._closeOnEsc)}},{key:"close",value:function(){this._popup.classList.remove(this._openedClass),document.removeEventListener("keydown",this._closeOnEsc)}},{key:"activateListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){e.stopPropagation(),(e.target.classList.contains(t._popupSelector)||e.target.classList.contains(t._buttonCloseSelector))&&t.close()}))}}])&&j(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function C(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,q(n.key),n)}}function x(){return x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=B(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},x.apply(this,arguments)}function I(t,e){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},I(t,e)}function T(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function B(t){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},B(t)}function q(t){var e=function(t,e){if("object"!==E(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==E(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===E(e)?e:String(e)}const R=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&I(t,e)}(a,t);var e,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=B(n);if(o){var r=B(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===E(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return T(t)}(this,t)});function a(t){var e,r,n,o,u=t.baseConfig,c=t.handleSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),r=T(e=i.call(this,u)),o=function(){var t={};return e._inputList.forEach((function(e){t[e.name]=e.value})),t},(n=q(n="_getInputValues"))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,e._handleSubmit=c,e._form=e._popup.querySelector("form"),e._buttonSubmit=e._form.querySelector("button"),e._inputList=e._form.querySelectorAll("input"),e}return e=a,(r=[{key:"activateListeners",value:function(){var t=this;this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleSubmit(t._getInputValues())})),x(B(a.prototype),"activateListeners",this).call(this)}},{key:"close",value:function(){this._form.reset(),x(B(a.prototype),"close",this).call(this)}},{key:"setLoading",value:function(t,e){t?(this._buttonSubmit.textContent=e,this._buttonSubmit.disabled=!0):(this._buttonSubmit.textContent=e,this._buttonSubmit.disabled=!1)}}])&&C(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),a}(P);function A(t){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(t)}function D(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==A(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==A(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===A(o)?o:String(o)),n)}var o}function U(){return U="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=F(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},U.apply(this,arguments)}function N(t,e){return N=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},N(t,e)}function F(t){return F=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},F(t)}const V=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&N(t,e)}(a,t);var e,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=F(n);if(o){var r=F(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===A(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t){var e,r=t.baseConfig,n=t.imageSelector,o=t.locationSelector;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,r))._image=e._popup.querySelector(".".concat(n)),e._location=e._popup.querySelector(".".concat(o)),e}return e=a,(r=[{key:"open",value:function(t){var e=t.name,r=t.link;U(F(a.prototype),"open",this).call(this),this._image.src=r,this._image.alt=e,this._location.textContent=e}},{key:"close",value:function(){U(F(a.prototype),"close",this).call(this),this._image.src="",this._image.alt="",this._location.textContent=""}}])&&D(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),a}(P);function G(t){return G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},G(t)}function M(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==G(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==G(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===G(o)?o:String(o)),n)}var o}function W(){return W="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Y(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},W.apply(this,arguments)}function H(t,e){return H=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},H(t,e)}function Y(t){return Y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Y(t)}const $=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&H(t,e)}(a,t);var e,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=Y(n);if(o){var r=Y(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===G(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t){var e,r=t.baseConfig,n=t.handleSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,r))._handleSubmit=n,e._form=e._popup.querySelector("form"),e._buttonSubmit=e._form.querySelector("button"),e}return e=a,(r=[{key:"open",value:function(t,e){this._card=e,this._id=t,W(Y(a.prototype),"open",this).call(this)}},{key:"activateListeners",value:function(){var t=this;W(Y(a.prototype),"activateListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleSubmit(t._id,t._card)}))}},{key:"setLoading",value:function(t,e){t?(this._buttonSubmit.textContent=e,this._buttonSubmit.disabled=!0):(this._buttonSubmit.textContent=e,this._buttonSubmit.disabled=!1)}}])&&M(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),a}(P);function z(t){return z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},z(t)}function J(){J=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),u=new j(o||[]);return n(a,"_invoke",{value:S(t,r,u)}),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f={};function p(){}function y(){}function h(){}var d={};c(d,i,(function(){return this}));var b=Object.getPrototypeOf,m=b&&b(b(L([])));m&&m!==e&&r.call(m,i)&&(d=m);var v=h.prototype=p.prototype=Object.create(d);function _(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function g(t,e){function o(n,i,a,u){var c=s(t[n],t,i);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==z(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,a,u)}),(function(t){o("throw",t,a,u)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return o("throw",t,a,u)}))}u(c.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function S(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=w(a,r);if(u){if(u===f)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=s(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function w(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function L(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return y.prototype=h,n(v,"constructor",{value:h,configurable:!0}),n(h,"constructor",{value:y,configurable:!0}),y.displayName=c(h,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,c(t,u,"GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},_(g.prototype),c(g.prototype,a,(function(){return this})),t.AsyncIterator=g,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new g(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(v),c(v,u,"Generator"),c(v,i,(function(){return this})),c(v,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=L,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function K(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function Q(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){K(i,n,o,a,u,"next",t)}function u(t){K(i,n,o,a,u,"throw",t)}a(void 0)}))}}function X(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,et(n.key),n)}}function Z(t,e,r){return e&&X(t.prototype,e),r&&X(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function tt(t,e,r){return(e=et(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function et(t){var e=function(t,e){if("object"!==z(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==z(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===z(e)?e:String(e)}const rt=Z((function t(e){var r=this,n=e.baseUrl,o=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),tt(this,"_fetch",function(){var t=Q(J().mark((function t(e,n){var o;return J().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(r._baseUrl,"/").concat(e),{method:n,headers:r._headers});case 2:return o=t.sent,t.abrupt("return",o.ok?o.json():Promise.reject("Ошибка: ".concat(o.status)));case 4:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()),tt(this,"_fetchWithBody",function(){var t=Q(J().mark((function t(e,n,o){var i;return J().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(r._baseUrl,"/").concat(e),{method:n,headers:r._headers,body:JSON.stringify(o)});case 2:return i=t.sent,t.abrupt("return",i.ok?i.json():Promise.reject("Ошибка: ".concat(i.status)));case 4:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}()),tt(this,"getUserInfo",Q(J().mark((function t(){return J().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r._fetch("users/me","GET");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))),tt(this,"getInitialCards",Q(J().mark((function t(){return J().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r._fetch("cards","GET");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))),tt(this,"updateUserInfo",function(){var t=Q(J().mark((function t(e){return J().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r._fetchWithBody("users/me","PATCH",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),tt(this,"addCard",function(){var t=Q(J().mark((function t(e){return J().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r._fetchWithBody("cards","POST",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),tt(this,"deleteCard",function(){var t=Q(J().mark((function t(e){return J().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r._fetch("cards/".concat(e),"DELETE");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),tt(this,"toggleLike",function(){var t=Q(J().mark((function t(e,n){return J().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r._fetch("cards/".concat(e,"/likes"),n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()),tt(this,"updateAvatar",function(){var t=Q(J().mark((function t(e){return J().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r._fetchWithBody("users/me/avatar","PATCH",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),this._baseUrl=n,this._headers=o}));var nt=document.querySelectorAll(".popup__form"),ot=document.querySelector(".gallery"),it=document.querySelector(".main"),at={openBtn:document.querySelector(".profile__edit-button"),nameInput:document.querySelector(".popup__input_type_name"),descriptionInput:document.querySelector(".popup__input_type_about")},ut={openBtn:document.querySelector(".profile__add-button")},ct={openBtn:document.querySelector(".profile__avatar-container")},lt={openedClass:"popup_opened",buttonCloseSelector:"popup__close"},st={},ft={};function pt(t){return pt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},pt(t)}function yt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function ht(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?yt(Object(r),!0).forEach((function(e){dt(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):yt(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function dt(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==pt(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==pt(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===pt(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function bt(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var mt=function(t){var e=new n({data:t,templateSelector:"#card",handleImageClick:function(t){return kt.open(t)},handleOpenConfirm:function(t){return jt.open(t,e)},handleLikeCard:function(t,r){return vt(t,r,e)},userId:gt.getUserId()});return e.generateCard()},vt=function(t,e,r){r.toggleDisableButtonLike(!0),_t.toggleLike(t,e?"DELETE":"PUT").then((function(t){r.toggleLike(t)})).catch(console.log).finally((function(){r.toggleDisableButtonLike(!1)}))},_t=new rt({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-64/",headers:{authorization:"94314ba6-acbc-4ef4-a856-49bf0d843156","Content-Type":"application/json"}});Promise.all([_t.getInitialCards(),_t.getUserInfo()]).then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,u=[],c=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(e,r)||function(t,e){if(t){if("string"==typeof t)return bt(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?bt(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1],a=i.name,u=i.about,c=i.avatar,l=i._id;gt.setUserInfo({name:a,about:u,avatar:c,_id:l}),St.render(o.reverse())})).catch((function(t){var e;wt.clearSection(),wt.addItem((e="Не удалось загрузить приложение\n".concat(t),new a({text:e,templateSelector:"#error-block"}).generateBlock()))}));var gt=new v({userNameSelector:"profile__name",userInfoSelector:"profile__description",userAvatarSelector:"profile__avatar"}),St=new p({renderer:function(t){St.addItem(mt(t))}},ot),wt=new p({},it);[{name:"edit",selector:"popup_type_edit",callback:function(t){var e=t.name,r=t.about;ft.edit.setLoading(!0,"Сохранение..."),_t.updateUserInfo({name:e,about:r}).then((function(t){gt.setUserInfo(t),ft.edit.close()})).catch(console.log).finally((function(){ft.edit.setLoading(!1,"Сохранить")}))}},{name:"add",selector:"popup_type_add",callback:function(t){var e=t.place,r=t.link;ft.add.setLoading(!0,"Создание..."),_t.addCard({name:e,link:r}).then((function(t){St.addItem(mt(t)),ft.add.close()})).catch(console.log).finally((function(){ft.add.setLoading(!1,"Создать")}))}},{name:"avatar",selector:"popup_type_avatar",callback:function(t){ft.avatar.setLoading(!0,"Сохранение..."),_t.updateAvatar(t).then((function(t){gt.setUserInfo(t),ft.avatar.close()})).catch(console.log).finally((function(){ft.avatar.setLoading(!1,"Сохранить")}))}}].forEach((function(t){var e=new R({baseConfig:ht(ht({},lt),{},{popupSelector:t.selector}),handleSubmit:t.callback});e.activateListeners(),ft[t.name]=e}));var kt=new V({baseConfig:ht(ht({},lt),{},{popupSelector:"popup_type_image"}),imageSelector:"popup__full-screen-image",locationSelector:"popup__location"});kt.activateListeners();var Ot,jt=new $({baseConfig:ht(ht({},lt),{},{popupSelector:"popup_type_confirm-delete"}),handleSubmit:function(t,e){jt.setLoading(!0,"Удаление..."),_t.deleteCard(t).then((function(){e.deleteCard(),jt.close()})).catch(console.log).finally((function(){jt.setLoading(!1,"Да")}))}});jt.activateListeners(),at.openBtn.addEventListener("click",(function(){ft.edit.open();var t=gt.getUserInfo(),e=t.name,r=t.about;at.nameInput.value=e,at.descriptionInput.value=r,st["edit-description"].forceValidateForm()})),ut.openBtn.addEventListener("click",(function(){ft.add.open(),st["add-card"].disableSubmitButton()})),ct.openBtn.addEventListener("click",(function(){ft.avatar.open(),st["change-avatar"].disableSubmitButton()})),Ot={inputSelector:".popup__input",submitButtonSelector:".popup__submit",inputErrorClass:"popup__input_type_error"},nt.forEach((function(t){var e=new k(Ot,t),r=t.getAttribute("name");st[r]=e,e.enableValidation()}))})();