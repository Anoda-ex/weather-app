(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{22:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(14),s=a.n(n),i=a(6),r=(a(22),a(3)),l=a(2),o=a(1);var j=Object(l.f)((function(e){var t=Object(c.useState)(null),a=Object(r.a)(t,2),n=a[0],s=a[1],i=Object(c.useState)(null),l=Object(r.a)(i,2),j=l[0],d=l[1],u=Object(c.useState)(null),h=Object(r.a)(u,2),b=h[0],m=h[1];return Object(c.useEffect)((function(){fetch("cities.json").then((function(e){return e.json()})).then((function(e){s(e)}))}),[]),Object(o.jsxs)("div",{className:"selector",children:[Object(o.jsx)("input",{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0433\u043e\u0440\u043e\u0434\u0430(\u0431\u043e\u043b\u044c\u0448\u0435 2 \u0431\u0443\u043a\u0432)",className:"selector__search",onFocus:function(){m(!0)},onChange:function(e){var t=e.target.value,a=[];t.length>2&&n&&n.forEach((function(e){e.toLowerCase().match(t.toLowerCase())&&a.push(e)})),d(a)}}),(null===j||void 0===j?void 0:j.length)>0&&b&&Object(o.jsx)("ul",{className:"selector__cities-list",children:j.map((function(t){return Object(o.jsx)("li",{className:"selector__cities-item",onClick:function(){!function(t){fetch("http://api.openweathermap.org/geo/1.0/direct?q=".concat(t,"&limit=1&appid=b4f88a6f724b0b945af35f393ab4d22a")).then((function(e){return e.json()})).then((function(t){e.history.push(e.location.pathname+"?lon="+t[0].lon+"&lat="+t[0].lat)})).catch((function(e){console.log(e)})),m(!1),e.close()}(t)},children:t})}))})]})}));function d(){return Object(o.jsx)("div",{className:"page-message",children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"})}var u=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],h=["January","February","March","April","May","June","July","August","September","October","November","December"],b=a(17),m=function(e){var t=new URLSearchParams(e),a=t.get("lat"),c=t.get("lon");return a&&c?{lat:a,lon:c}:null},f=function(e){return new Promise((function(t,a){var c=m(e);c?fetch("http://api.openweathermap.org/geo/1.0/reverse?lat=".concat(c.lat,"&lon=").concat(c.lon,"&appid=b4f88a6f724b0b945af35f393ab4d22a")).then((function(e){return e.json()})).then((function(e){t(e[0].name)})):a("\u043e\u0448\u0438\u0431\u043a\u0430")}))},p=function(e,t){return new Promise((function(a,c){var n=m(e);n?fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(n.lat,"&lon=").concat(n.lon,"&units=metric&exclude=minutely,alerts,hourly&appid=b4f88a6f724b0b945af35f393ab4d22a")).then((function(e){return e.json()})).then((function(e){if("day"==t&&a(e.current),"week"==t){var c=Object(b.a)(e.daily);c.splice(0,1),a(c)}})):c("\u043e\u0448\u0438\u0431\u043a\u0430")}))};function O(){return Object(o.jsx)("div",{className:"page-message",children:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d \u0433\u043e\u0440\u043e\u0434"})}var _=Object(l.f)((function(e){var t=Object(c.useState)(null),a=Object(r.a)(t,2),n=a[0],s=a[1],i=Object(c.useState)(null),l=Object(r.a)(i,2),j=l[0],d=l[1],b=Object(c.useState)(!1),m=Object(r.a)(b,2),_=m[0],v=m[1];if(Object(c.useEffect)((function(){v(!0),f(e.location.search).then((function(e){d(e)})),p(e.location.search,"day").then((function(e){s(e)})).finally((function(){v(!1)}))}),[e.location.search]),_)return Object(o.jsx)("div",{className:"page-message",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."});if(!n)return Object(o.jsx)(O,{});var x=function(e){var t=new Date(1e3*e);return[u[t.getDay()],t.getDate(),h[t.getMonth()],t.getFullYear()].join(" ")}(n.dt);return Object(o.jsx)("div",{className:"day",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("div",{className:"day__city-name",children:j}),Object(o.jsxs)("div",{className:"day__main-wrapper",children:[Object(o.jsx)("img",{className:"day__image",src:"http://openweathermap.org/img/wn/".concat(n.weather[0].icon,".png"),alt:""}),Object(o.jsxs)("div",{className:"day__temp",children:[Math.round(n.temp),"\xb0C"]})]}),Object(o.jsxs)("div",{className:"day__sub-wrapper",children:[Object(o.jsxs)("div",{className:"day__sub-info",children:["humidity ",n.humidity,"%"]}),Object(o.jsxs)("div",{className:"day__sub-info",children:["feels like ",Math.round(n.feels_like),"\xb0C"]})]}),Object(o.jsx)("div",{className:"day__date",children:x}),Object(o.jsx)("div",{className:"day__description",children:n.weather[0].description})]})})}));var v=Object(l.f)((function(e){var t=Object(c.useState)(null),a=Object(r.a)(t,2),n=a[0],s=a[1],i=Object(c.useState)(!1),l=Object(r.a)(i,2),j=(l[0],l[1]),d=Object(c.useState)(!1),b=Object(r.a)(d,2),m=b[0],_=b[1];return Object(c.useEffect)((function(){_(!0),f(e.location.search).then((function(e){j(e)})),p(e.location.search,"week").then((function(e){s(e)})).finally((function(){_(!1)}))}),[e.location.search]),console.log(n),m?Object(o.jsx)("div",{className:"page-message",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}):n?Object(o.jsx)("div",{className:"week",children:n.map((function(e){var t=function(e){var t=new Date(1e3*e);return[u[t.getDay()],t.getDate(),h[t.getMonth()]]}(e.dt);return Object(o.jsxs)("div",{className:"week__card",children:[Object(o.jsxs)("div",{className:"week__date-wrapper",children:[Object(o.jsx)("div",{className:"week__day",children:t[0]}),Object(o.jsx)("div",{className:"week__date",children:t[1]}),Object(o.jsx)("div",{className:"week__month",children:t[2]})]}),Object(o.jsx)("img",{className:"day__image",src:"http://openweathermap.org/img/wn/".concat(e.weather[0].icon,"@2x.png"),alt:""}),Object(o.jsx)("div",{className:"week__temp-description",children:e.weather[0].description}),Object(o.jsxs)("div",{className:"week__temp-wrapper",children:[Object(o.jsxs)("div",{className:"week__temp-column",children:[Object(o.jsx)("div",{className:"week__temp-value",children:Math.floor(e.temp.min)}),Object(o.jsx)("div",{className:"week__temp-title",children:"min"})]}),Object(o.jsxs)("div",{className:"week__temp-column",children:[Object(o.jsx)("div",{className:"week__temp-value",children:Math.floor(e.temp.max)}),Object(o.jsx)("div",{className:"week__temp-title",children:"max"})]})]})]})}))}):Object(o.jsx)(O,{})}));var x=Object(l.f)((function(e){var t=Object(c.useState)(null),a=Object(r.a)(t,2),n=a[0],s=a[1],l=Object(c.useState)(!0),d=Object(r.a)(l,2),u=d[0],h=d[1];return Object(c.useEffect)((function(){f(e.location.search).then((function(e){s(e)}),(function(e){console.log("error",e)}))}),[e.location.search]),Object(o.jsxs)("header",{className:"header",children:[Object(o.jsxs)("div",{className:"header__wrapper",children:[Object(o.jsxs)("div",{className:"header__city",onClick:function(){h(!u)},children:[n?"\u0421\u043c\u0435\u043d\u0438\u0442\u044c \u0433\u043e\u0440\u043e\u0434":"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0433\u043e\u0440\u043e\u0434"," "]}),Object(o.jsxs)("div",{className:"header__links",children:[Object(o.jsx)(i.b,{className:"header__link",to:"/week"+e.location.search,children:"\u041f\u043e\u0433\u043e\u0434\u0430 \u043d\u0430 \u043d\u0435\u0434\u0435\u043b\u044e"}),Object(o.jsx)(i.b,{className:"header__link",to:"/day"+e.location.search,children:"\u041f\u043e\u0433\u043e\u0434\u0430 \u043d\u0430 \u0434\u0435\u043d\u044c"})]})]}),u&&Object(o.jsx)(j,{close:function(){h(!1)}})]})}));var w=Object(l.f)((function(e){return Object(o.jsxs)("div",{className:"app",children:[Object(o.jsx)(x,{}),Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{path:"/week",component:v}),Object(o.jsx)(l.a,{path:"/day",component:_}),Object(o.jsx)(l.a,{path:"",component:d})]})]})}));s.a.render(Object(o.jsx)(i.a,{basename:"/weather-app",children:Object(o.jsx)(w,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.0e2cec9c.chunk.js.map