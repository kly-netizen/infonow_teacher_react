(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{1150:function(e,t,a){"use strict";a.r(t),a.d(t,"TeacherTests",function(){return i});var r=a(0),n=a.n(r),s=a(62),o=a(393),l=a(172),c=a(178),i=function(e){var t=e.teacherTestsLoading,a=function(){e.getTeacherTests()};return Object(r.useEffect)(function(){a()},[]),n.a.createElement("div",null,n.a.createElement(o.a,{tests:e.tests,isTeacher:!0,fetchTests:a,onSelect:function(t){e.history.push({pathname:"/tests/".concat(t.testId),state:{test:t}})},onNewTest:function(){e.history.push({pathname:"add-new-test"})},onEditTest:function(t){e.history.push({pathname:"/edit-test/".concat(t.testId),state:{test:t}})},isReloading:t,onBack:e.onBack}))},u={getTeacherTests:c.h};t.default=Object(l.j)(Object(s.b)(function(e){var t=e.Tests;return{tests:t.tests,teacherTestsLoading:t.teacherTestsLoading,teacherTestsError:t.teacherTestsError}},u)(i))},165:function(e,t,a){"use strict";var r=a(46),n=a(0),s=a.n(n),o=a(60),l=a.n(o),c=a(201),i=(a(169),function(e){var t,a=e.children,o=e.blocking,c=e.loader,i=e.className,u=e.tag,d=e.overlayColor,m=u;return s.a.createElement(m,{className:l()("ui-loader",(t={},Object(r.a)(t,i,i),Object(r.a)(t,"show",o),t))},a,o?s.a.createElement(n.Fragment,null,s.a.createElement("div",Object.assign({className:"overlay"},o&&d?{style:{backgroundColor:d}}:{})),s.a.createElement("div",{className:"loader"},c)):null)});t.a=i,i.defaultProps={tag:"div",blocking:!1,loader:s.a.createElement(c.a,{color:"primary"})}},169:function(e,t,a){},170:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var r=a(0),n=a.n(r),s=a(173),o=a.n(s),l=a(64),c=a.n(l),i=function(e){var t="DD/MM/yyyy hh:mmA";return e.type&&("date"===e.type&&(t="DD/MM/yyyy"),"time"===e.type&&(t="hh:mmA")),n.a.createElement(n.a.Fragment,null,e.dateTime?o.a.utc(e.dateTime).local().format(e.format||t):e.invalidValueText)};i.propTypes={dateTime:c.a.string,invalidValueText:c.a.string}},190:function(e,t,a){"use strict";var r=a(0),n=a.n(r),s=(a(60),a(165)),o=a(277),l=a(275),c=a(198),i=a(199);t.a=function(e){var t=e.title,a=e.isReloading,u=e.onReload,d=e.children;console.log(e);var m=a?s.a:r.Fragment;return n.a.createElement(m,e.isReloading?{blocking:a}:{},n.a.createElement(l.a,{className:e.className},n.a.createElement(c.a,null,n.a.createElement(i.a,{tag:"h4"},t),u&&n.a.createElement("div",{className:"action-icons"},n.a.createElement(o.a,{className:"cursor-pointer",size:15,onClick:function(){return u()}}))),d))}},191:function(e,t,a){},198:function(e,t,a){"use strict";var r=a(21),n=a(28),s=a(0),o=a.n(s),l=a(14),c=a.n(l),i=a(58),u=a.n(i),d=a(51),m={tag:d.tagPropType,className:c.a.string,cssModule:c.a.object},p=function(e){var t=e.className,a=e.cssModule,s=e.tag,l=Object(n.a)(e,["className","cssModule","tag"]),c=Object(d.mapToCssModules)(u()(t,"card-header"),a);return o.a.createElement(s,Object(r.a)({},l,{className:c}))};p.propTypes=m,p.defaultProps={tag:"div"},t.a=p},199:function(e,t,a){"use strict";var r=a(21),n=a(28),s=a(0),o=a.n(s),l=a(14),c=a.n(l),i=a(58),u=a.n(i),d=a(51),m={tag:d.tagPropType,className:c.a.string,cssModule:c.a.object},p=function(e){var t=e.className,a=e.cssModule,s=e.tag,l=Object(n.a)(e,["className","cssModule","tag"]),c=Object(d.mapToCssModules)(u()(t,"card-title"),a);return o.a.createElement(s,Object(r.a)({},l,{className:c}))};p.propTypes=m,p.defaultProps={tag:"div"},t.a=p},201:function(e,t,a){"use strict";var r=a(21),n=a(28),s=a(0),o=a.n(s),l=a(14),c=a.n(l),i=a(58),u=a.n(i),d=a(51),m={tag:d.tagPropType,type:c.a.string,size:c.a.string,color:c.a.string,className:c.a.string,cssModule:c.a.object,children:c.a.string},p=function(e){var t=e.className,a=e.cssModule,s=e.type,l=e.size,c=e.color,i=e.children,m=e.tag,p=Object(n.a)(e,["className","cssModule","type","size","color","children","tag"]),f=Object(d.mapToCssModules)(u()(t,!!l&&"spinner-"+s+"-"+l,"spinner-"+s,!!c&&"text-"+c),a);return o.a.createElement(m,Object(r.a)({role:"status"},p,{className:f}),i&&o.a.createElement("span",{className:Object(d.mapToCssModules)("sr-only",a)},i))};p.propTypes=m,p.defaultProps={tag:"div",type:"border",children:"Loading..."},t.a=p},229:function(e,t,a){"use strict";var r=a(21),n=a(28),s=a(0),o=a.n(s),l=a(14),c=a.n(l),i=a(58),u=a.n(i),d=a(51),m={className:c.a.string,cssModule:c.a.object,size:c.a.string,bordered:c.a.bool,borderless:c.a.bool,striped:c.a.bool,dark:c.a.bool,hover:c.a.bool,responsive:c.a.oneOfType([c.a.bool,c.a.string]),tag:d.tagPropType,responsiveTag:d.tagPropType,innerRef:c.a.oneOfType([c.a.func,c.a.string,c.a.object])},p=function(e){var t=e.className,a=e.cssModule,s=e.size,l=e.bordered,c=e.borderless,i=e.striped,m=e.dark,p=e.hover,f=e.responsive,g=e.tag,b=e.responsiveTag,v=e.innerRef,h=Object(n.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),y=Object(d.mapToCssModules)(u()(t,"table",!!s&&"table-"+s,!!l&&"table-bordered",!!c&&"table-borderless",!!i&&"table-striped",!!m&&"table-dark",!!p&&"table-hover"),a),T=o.a.createElement(g,Object(r.a)({},h,{ref:v,className:y}));if(f){var E=Object(d.mapToCssModules)(!0===f?"table-responsive":"table-responsive-"+f,a);return o.a.createElement(b,{className:E},T)}return T};p.propTypes=m,p.defaultProps={tag:"table",responsiveTag:"div"},t.a=p},245:function(e,t,a){"use strict";var r=a(0),n=a.n(r),s=a(16),o=a.n(s);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=Object(r.forwardRef)(function(e,t){var a=e.color,r=void 0===a?"currentColor":a,s=e.size,o=void 0===s?24:s,i=c(e,["color","size"]);return n.a.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),n.a.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),n.a.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))});i.propTypes={color:o.a.string,size:o.a.oneOfType([o.a.string,o.a.number])},i.displayName="Plus",t.a=i},277:function(e,t,a){"use strict";var r=a(0),n=a.n(r),s=a(16),o=a.n(s);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=Object(r.forwardRef)(function(e,t){var a=e.color,r=void 0===a?"currentColor":a,s=e.size,o=void 0===s?24:s,i=c(e,["color","size"]);return n.a.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),n.a.createElement("polyline",{points:"23 4 23 10 17 10"}),n.a.createElement("path",{d:"M20.49 15a9 9 0 1 1-2.12-9.36L23 10"}))});i.propTypes={color:o.a.string,size:o.a.oneOfType([o.a.string,o.a.number])},i.displayName="RotateCw",t.a=i},393:function(e,t,a){"use strict";var r=a(0),n=a.n(r),s=a(276),o=a(229),l=a(170),c=a(190),i=a(156),u=a(245);a(191);t.a=function(e){var t=e.tests,a=e.isTeacher,r=e.fetchTests,d=e.isReloading;return n.a.createElement(c.a,{className:"p-0 test-list",title:"Tests",onReload:r,isReloading:d},a&&n.a.createElement("div",{className:"text-right"},n.a.createElement(i.a.Ripple,{className:"btn-header",outline:!0,color:"primary",onClick:function(){e.onNewTest&&e.onNewTest()}},n.a.createElement(u.a,{size:14}),n.a.createElement("span",{className:"align-middle ml-25"},"Add New Test"))),n.a.createElement(s.a,null,n.a.createElement(o.a,{responsive:!0,hover:!0},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"#"),n.a.createElement("th",null,"Title"),n.a.createElement("th",null,"Created At"),n.a.createElement("th",null,"Time Limit"),n.a.createElement("th",null,"Total Marks"))),n.a.createElement("tbody",null,t&&t.map(function(t,a){return n.a.createElement("tr",{key:t.testId,onClick:function(){return a=t,void(e.onSelect&&e.onSelect(a));var a}},n.a.createElement("td",null,a+1),n.a.createElement("td",null,n.a.createElement("span",{className:"align-middle font-weight-bold"},t.title)),n.a.createElement("td",null,n.a.createElement(l.a,{dateTime:t.createdAt,type:"dateTime"})),n.a.createElement("td",null,t.timeLimit/60," mins"),n.a.createElement("td",null,t.totalMarks))})))))}}}]);
//# sourceMappingURL=29.a334870c.chunk.js.map