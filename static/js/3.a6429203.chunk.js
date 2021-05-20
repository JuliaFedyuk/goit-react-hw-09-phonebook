(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[3],{86:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(31);function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,c=!1,o=void 0;try{for(var a,i=t[Symbol.iterator]();!(r=(a=i.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(u){c=!0,o=u}finally{try{r||null==i.return||i.return()}finally{if(c)throw o}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},88:function(t,e,n){},89:function(t,e,n){},90:function(t,e,n){},94:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function i(t){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){return!e||"object"!==i(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=a(t);if(e){var c=a(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return u(this,n)}}n.r(e);var s=n(0),f=n(8),b=n(32),p=(n(88),n(1));function j(){var t=Object(f.b)();Object(s.useEffect)((function(){t(b.b.fetchContacts())}),[t]);var e=Object(f.c)(b.d.getfilterContacts),n=Object(f.c)(b.d.getLoading);return Object(p.jsxs)(p.Fragment,{children:[n&&Object(p.jsx)("h1",{children:"Loading..."}),Object(p.jsx)("ul",{className:"contact_list",children:e.map((function(e){var n=e.id,r=e.name,c=e.number;return Object(p.jsxs)("li",{className:"contact_item",children:[Object(p.jsxs)("p",{className:"contact_info",children:[r,": ",c]}),Object(p.jsx)("button",{className:"add_button",type:"button",onClick:function(){return t(b.b.deleteContact(n))},children:"Delete"})]},n)}))})]})}var d=n(86);n(89);function m(){var t=Object(f.b)(),e=Object(s.useState)(""),n=Object(d.a)(e,2),r=n[0],c=n[1],o=Object(s.useState)(""),a=Object(d.a)(o,2),i=a[0],u=a[1],l=Object(f.c)(b.d.getItems),j=Object(s.useCallback)((function(e){e.preventDefault(),l.map((function(t){return t.name.toLowerCase()})).includes(r.toLowerCase())?alert("".concat(r," is already in contacts")):t(b.b.addContact({name:r,number:i})),c(""),u("")}),[r,i,t,l]);return Object(p.jsxs)("form",{className:"form",onSubmit:j,children:[Object(p.jsxs)("label",{className:"input_label",children:["Name",Object(p.jsx)("input",{className:"contactform_input",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:r,onChange:function(t){c(t.target.value)}})]}),Object(p.jsxs)("label",{className:"input_label",children:["Number",Object(p.jsx)("input",{className:"contactform_input",type:"tel",name:"number",pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:i,onChange:function(t){u(t.target.value)}})]}),Object(p.jsx)("button",{className:"submit_button",type:"submit",children:"Add contact"})]})}n(90);function y(){var t=Object(f.b)(),e=Object(f.c)(b.d.getFilter);return Object(p.jsx)("div",{className:"filterWrapper",children:Object(p.jsxs)("label",{className:"filter_label",children:["Find contacts by name",Object(p.jsx)("input",{className:"filter_input",type:"text",value:e,onChange:function(e){return t(Object(b.a)(e.target.value))}})]})})}var h=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}(u,t);var e,n,a,i=l(u);function u(){return r(this,u),i.apply(this,arguments)}return e=u,(n=[{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(m,{}),Object(p.jsx)(y,{}),Object(p.jsx)(j,{})]})}}])&&c(e.prototype,n),a&&c(e,a),u}(s.Component);e.default=h}}]);
//# sourceMappingURL=3.a6429203.chunk.js.map