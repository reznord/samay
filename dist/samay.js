!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Samay=t():e.Samay=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){var r=n(1);e.exports=r},function(e,t){function n(e){const t=/(\d{4})(\d{2})(\d{2})/g.exec(e);if(t){return`${[t[1],t[2],t[3]].join("-")}T00:00:00+05:30`}return e}function r(e){const t=/(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})/g.exec(e);if(t){return`${[t[1],t[2],t[3]].join("-")}T${[t[4],t[5]].join(":")}:00+05:30`}return e}function i(e){const t=/(\d{2})-(\d{2})-(\d{4})\s(\d{2}):(\d{2}):(\d{2})/g.exec(e);if(t){return`${[t[3],t[2],t[1]].join("-")}T${[t[4],t[5],t[6]].join(":")}+05:30`}return e}function a(e){const t=/(\w{3}),\s(\d{2})\s(\w{3}),\s(\d{4})/g.exec(e);if(t){const e=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"].indexOf(t[3].toLowerCase());return`${[t[4],y(e+1),t[2]].join("-")}T00:00:00+05:30`}return e}function o(e){const t=/(\d{2})\/(\d{2})\/(\d{4})/g.exec(e);if(t){return`${[t[3],t[2],t[1]].join("-")}T00:00:00+05:30`}return e}function u(e){const t=/(\w{3})\s(\w{2}),\s(\d{4})/g.exec(e);if(t){const e=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"].indexOf(t[1].toLowerCase());return`${[t[3],y(e+1),t[2]].join("-")}T00:00:00+05:30`}return e}function s(e){const t=/(\d{4})-(\d{2})-(\d{2})\s(\d{2}):(\d{2}):(\d{2})/g.exec(e);if(t){return`${[t[1],t[2],t[3]].join("-")}T${[t[4],t[5],t[6]].join(":")}+05:30`}return e}function c(e,t){const n={days:d.bind(this),hour:D.bind(this),seconds:l.bind(this)};return b.call(this,n[t](e))}function d(e){const t=864e5*(e||0),n=+this.inputDate;return new Date(+n-t)}function D(e){const t=36e5*(e||0),n=+this.inputDate;return new Date(+n-t)}function Y(e,t){const n={days:p.bind(this),hour:f.bind(this),seconds:l.bind(this)};return b.call(this,n[t](e))}function f(e){const t=36e5*(e||0),n=+this.inputDate;return new Date(+n+t)}function p(e){const t=864e5*(e||0),n=+this.inputDate;return new Date(+n+t)}function l(e){var t=1e3*e,n=+this.inputDate;return new Date(+n+t)}function M(e,t={}){const n=["January","February","March","April","May","June","July","August","September","October","November","December"][e]||"";return t.length?n.substr(0,t.length):n}function y(e){return e<10?`0${e}`:e}function h(e){const t=this.inputDate,n=t.getDate(),r=t.getMonth(),i=t.getDay(),a=t.getFullYear(),o=a%100,u=t.getHours(),s=u%12+(u/12==0||u/12==1?12:0),c=t.getMinutes(),d=t.getSeconds(),D=u>=12;return(e||"").replace("mm",y(c)).replace("ss",y(d)).replace("hh",y(s)).replace("HH",y(u)).replace("h",s).replace("H",u).replace("A",D?"PM":"AM").replace("ddd",function(e,t={}){const n=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e]||"";return t.length?n.substr(0,t.length):n}(i,{length:3})).replace("DD",function(e){return y(e)}(n)).replace("MMMM",M(r)).replace("MMM",M(r,{length:3})).replace("MM",function(e){return y(e+1)}(r)).replace("yyyy",a).replace("YYYY",a).replace("yy",y(o)).replace("YY",y(o)).replace("Do",function(e){const t=e%10,n=e%100;return 1===t&&11!==n?`${e}st`:2===t&&12!==n?`${e}nd`:3===t&&13!==n?`${e}rd`:`${e}th`}(n))}function m(e){const t=this.inputDate;let n;return e instanceof Date&&(n=e),e&&e.samayInstance&&(n=e.originalDate),+t>+n}function g(){const e=this.inputDate;return new Date(e.getFullYear(),e.getMonth()+1,0).getDate()}function _(e){const t=e-this.inputDate.getDay();return Y.call(this,t,"days")}function b(e,t){const d=b.FORMATS,D={[d.DD_MM_YYYY_HH_mm_ss]:i,[d.YYYYMMDDHHmm]:r,[d.YYYYMMDD]:n,[d.ddd_DD_MMM_YYYY]:a,[d.DD_MM_YYYY]:o,[d.MMM_DD_YYYY]:u,[d.YYYY_MM_DD_HH_mm_ss]:s};if(e instanceof Date)this.inputDate=e;else if(e&&D[t]){const n=function(e){try{var t=e.split("T");return t[0].split("-"),t[1].replace("+05:30","").split(":"),new Date(e)}catch(t){return new Date(e)}}(D[t](e));this.inputDate=new Date(n)}else e&&!D[t]?this.inputDate=new Date(e):e||(this.inputDate=new Date);if(this.inputDate===b.INVALID)throw new w("INVALID DATE - Exception Occurred in constructor");return{samayInstance:!0,originalDate:this.inputDate,format:h.bind(this),add:Y.bind(this),subtract:c.bind(this),isAfter:m.bind(this),getDaysInMonth:g.bind(this),day:_.bind(this)}}function w(e){this.message=e,this.name="Samay Exception"}b.INVALID="Invalid Date",b.FORMATS={DD_MM_YYYY_HH_mm_ss:"DD-MM-YYYY HH:mm:ss",YYYYMMDDHHmm:"YYYYMMDDHHmm",YYYYMMDD:"YYYYMMDD",ddd_DD_MMM_YYYY:"ddd, DD MMM, YYYY",DD_MM_YYYY:"DD/MM/YYYY",MMM_DD_YYYY:"MMM DD, YYYY",YYYY_MM_DD_HH_mm_ss:"YYYY-MM-DD HH:mm:ss"},e.exports={samay:function(){return b.apply({},arguments)},parseDate:n,parseDateTime:r,parseDateTime2:i,isPastDate:function(e,t){const r=n(e),i=t?n(t):new Date(currentDateTime);return new Date(i).getTime()>new Date(r).getTime()},addDays:function(e,t){const n=864e5*(t||0),r=new Date(e);return new Date(+r+n)},getDayName:function(e,t={}){const n=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date(e).getDay()]||"";return t.short?n.substr(0,3):n}}}])});