!function(e){var t={};function n(r){if(t[r])return t[r].exports;var u=t[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,n),u.l=!0,u.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)n.d(r,u,function(t){return e[t]}.bind(null,u));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t){e.exports=require("react")},function(e,t,n){"use strict";function r(e){return function(){var t=e.apply(this,arguments);return new Promise((function(e,n){return function r(u,o){try{var a=t[u](o),i=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(i).then((function(e){r("next",e)}),(function(e){r("throw",e)}));e(i)}("next")}))}}Object.defineProperty(t,"__esModule",{value:!0});var u=t.FETCH_USERS="FETCH_USERS",o=(t.fetchUsers=function(){return e=r(regeneratorRuntime.mark((function e(t,n,r){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.get("/users");case 2:o=e.sent,t({type:u,payload:o});case 4:case"end":return e.stop()}}),e,void 0)}))),function(t,n,r){return e.apply(this,arguments)};var e},t.FETCH_CURRENT_USER="FETCH_CURRENT_USER"),a=(t.fetchCurrentUser=function(){return e=r(regeneratorRuntime.mark((function e(t,n,r){var u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.get("/current_user");case 2:u=e.sent,t({type:o,payload:u});case 4:case"end":return e.stop()}}),e,void 0)}))),function(t,n,r){return e.apply(this,arguments)};var e},t.FETCH_ADMINS="FETCH_ADMINS");t.fetchAdmins=function(){return e=r(regeneratorRuntime.mark((function e(t,n,r){var u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.get("/admins");case 2:u=e.sent,t({type:a,payload:u});case 4:case"end":return e.stop()}}),e,void 0)}))),function(t,n,r){return e.apply(this,arguments)};var e}},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("react-router-config")},function(e,t){e.exports=require("react-helmet")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=l(n(12)),o=l(n(14)),a=l(n(15)),i=l(n(16)),c=l(n(18));function l(e){return e&&e.__esModule?e:{default:e}}t.default=[r({},u.default,{routes:[r({},o.default,{path:"/",exact:!0}),r({},a.default,{path:"/users"}),r({},i.default,{path:"/admin"}),r({},c.default)]})]},function(e,t){e.exports=require("redux")},function(e,t,n){"use strict";n(9);var r=l(n(10)),u=n(4),o=l(n(11)),a=l(n(6)),i=l(n(19)),c=l(n(22));function l(e){return e&&e.__esModule?e:{default:e}}var f,s,d=(0,r.default)();d.use("/api",(0,o.default)("http://react-ssr-api.herokuapp.com",{proxyReqOptDecorator:function(e){return e.headers["x-forwarded-host"]="localhost:3000",e}})),d.use(r.default.static("public")),d.get("*",(f=regeneratorRuntime.mark((function e(t,n){var r,o,l,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,c.default)(t),o=(0,u.matchRoutes)(a.default,t.path).map((function(e){var t=e.route;return t.loadData?t.loadData(r):null})).map((function(e){if(e)return new Promise((function(t,n){e.then(t).catch(t)}))})),e.next=4,Promise.all(o);case 4:l={},f=(0,i.default)(t,r,l),l.url&&n.redirect(301,l.url),l.notFound&&n.status(404),n.send(f);case 9:case"end":return e.stop()}}),e,void 0)})),s=function(){var e=f.apply(this,arguments);return new Promise((function(t,n){return function r(u,o){try{var a=e[u](o),i=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(i).then((function(e){r("next",e)}),(function(e){r("throw",e)}));t(i)}("next")}))},function(e,t){return s.apply(this,arguments)}));var p=process.env.PORT||3e3;d.listen(p,(function(){return console.log("Listening on port "+p)}))},function(e,t){e.exports=require("babel-polyfill")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("express-http-proxy")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(0)),u=n(4),o=i(n(13)),a=n(1);function i(e){return e&&e.__esModule?e:{default:e}}t.default={component:function(e){var t=e.route;return r.default.createElement("div",null,r.default.createElement(o.default,null),r.default.createElement("div",{className:"contentBox"},(0,u.renderRoutes)(t.routes)))},loadData:function(e){return(0,e.dispatch)((0,a.fetchCurrentUser)())}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,u=n(0),o=(r=u)&&r.__esModule?r:{default:r},a=n(2),i=n(3);t.default=(0,a.connect)((function(e){return{auth:e.auth}}))((function(e){var t=e.auth?o.default.createElement("a",{href:"/api/logout"},"Logout"):o.default.createElement("a",{href:"/api/auth/google"},"Login");return o.default.createElement("header",{className:"header"},o.default.createElement(i.Link,{to:"/",className:"logo"},"React SSR"),o.default.createElement("div",{className:"navs"},o.default.createElement(i.Link,{to:"/users"},"Users"),o.default.createElement(i.Link,{to:"/admin"},"Admin"),t))}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,u=n(0),o=(r=u)&&r.__esModule?r:{default:r},a=n(5);t.default={component:function(){return o.default.createElement("div",null,o.default.createElement(a.Helmet,null,o.default.createElement("title",null,"SSR React App")),o.default.createElement("div",null,"I'm the BEST home component"),o.default.createElement("button",{onClick:function(){return console.log("Press me clicked!!")}},"Press me!"))}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),a=(r=o)&&r.__esModule?r:{default:r},i=n(2),c=n(1),l=n(3),f=n(5);function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p=function(e){function t(){return s(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),u(t,[{key:"componentDidMount",value:function(){this.props.users.length>0||this.props.fetchUsers()}},{key:"renderUsers",value:function(){return this.props.users.map((function(e){return a.default.createElement("li",{key:e.id},e.name)}))}},{key:"render",value:function(){return a.default.createElement("div",null,a.default.createElement(f.Helmet,null,a.default.createElement("title",null,"Users List | SSR React App")),"Here's a big list of users:",a.default.createElement("ul",null,this.renderUsers()),a.default.createElement(l.Link,{to:"/"},"Back to home"))}}]),t}(o.Component);t.default={loadData:function(e){return(0,e.dispatch)((0,c.fetchUsers)())},component:(0,i.connect)((function(e){return{users:e.users}}),{fetchUsers:c.fetchUsers})(p)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),o=f(u),a=n(2),i=n(1),c=n(3),l=f(n(17));function f(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p=function(e){function t(){return s(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.props.admins.length>0||this.props.fetchAdmins()}},{key:"renderAdmins",value:function(){return this.props.admins.map((function(e){return o.default.createElement("li",{key:e.id},e.name)}))}},{key:"render",value:function(){return o.default.createElement("div",null,o.default.createElement("h3",null,"Protected list of admins"),o.default.createElement("ul",null,this.renderAdmins()),o.default.createElement(c.Link,{to:"/"},"Back to home"))}}]),t}(u.Component);t.default={component:(0,a.connect)((function(e){return{admins:e.admins}}),{fetchAdmins:i.fetchAdmins})((0,l.default)(p)),loadData:function(e){return(0,e.dispatch)((0,i.fetchAdmins)())}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),a=(r=o)&&r.__esModule?r:{default:r},i=n(2),c=n(3);function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}t.default=function(e){var t=function(t){function n(){return l(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,t),u(n,[{key:"render",value:function(){switch(this.props.auth){case!1:return a.default.createElement(c.Redirect,{to:"/"});case null:return a.default.createElement("div",null,"Loading");default:return a.default.createElement(e,this.props)}}}]),n}(o.Component);return(0,i.connect)((function(e){return{auth:e.auth}}))(t)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,u=n(0),o=(r=u)&&r.__esModule?r:{default:r};t.default={component:function(e){var t=e.staticContext,n=void 0===t?{}:t;return console.log(n),n.notFound=!0,o.default.createElement("h2",null,"OOPS, Page not found.")}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(n(0)),u=n(20),o=n(3),a=n(2),i=n(4),c=n(5),l=s(n(21)),f=s(n(6));function s(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t,n){var s=(0,u.renderToString)(r.default.createElement(a.Provider,{store:t},r.default.createElement(o.StaticRouter,{location:e.path,context:n},r.default.createElement("div",null,(0,i.renderRoutes)(f.default)))));return"<!DOCTYPE html>\n    <html>\n        <head>\n            "+c.Helmet.renderStatic().title.toString()+'\n            <link rel="stylesheet" href="css/style.css" />\n        </head>\n        <body>\n            <div id="root">'+s+"</div>\n            <script>\n                window.INITIAL_STATE = "+(0,l.default)(t.getState())+'\n            <\/script>\n            <script src="bundle.js"><\/script>\n        </body>\n    </html>'}},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("serialize-javascript")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(7),u=i(n(23)),o=i(n(24)),a=i(n(28));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=a.default.create({baseURL:"http://react-ssr-api.herokuapp.com/",headers:{cookie:e.get("cookie")||""}});return(0,r.createStore)(o.default,{},(0,r.applyMiddleware)(u.default.withExtraArgument(t)))}},function(e,t){e.exports=require("redux-thunk")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(7),u=i(n(25)),o=i(n(26)),a=i(n(27));function i(e){return e&&e.__esModule?e:{default:e}}t.default=(0,r.combineReducers)({users:u.default,auth:o.default,admins:a.default})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1],n=t.type,u=t.payload;switch(n){case r.FETCH_USERS:return u.data;default:return e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments[1];switch(t.type){case r.FETCH_CURRENT_USER:return t.payload.data||!1;default:return e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1],n=t.type,u=t.payload;switch(n){case r.FETCH_ADMINS:return u.data;default:return e}}},function(e,t){e.exports=require("axios")}]);