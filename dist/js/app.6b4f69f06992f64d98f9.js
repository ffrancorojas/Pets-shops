"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[143],{7072:(e,t,n)=>{var r={};n.r(r),n.d(r,{id1:()=>D,id10:()=>H,id11:()=>V,id12:()=>$,id13:()=>R,id14:()=>_,id15:()=>q,id16:()=>K,id17:()=>G,id18:()=>J,id19:()=>Q,id2:()=>I,id20:()=>X,id21:()=>Y,id22:()=>ee,id23:()=>te,id24:()=>ne,id3:()=>z,id4:()=>U,id5:()=>T,id6:()=>W,id7:()=>F,id8:()=>M,id9:()=>B});var a=n(7378),i=n(1542);function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i=[],l=!0,o=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);l=!0);}catch(e){o=!0,a=e}finally{try{l||null==n.return||n.return()}finally{if(o)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var c=a.createContext({cartList:[],setCartList:function(e){},petListurchased:[],setPetListCurchased:function(e){},visible:!0,setVisible:function(e){}}),u=function(e){var t=e.children,n=l(a.useState([]),2),r=n[0],i=n[1],o=l(a.useState(!0),2),u=o[0],s=o[1],m=l(a.useState([]),2),p=m[0],f=m[1];return a.createElement(c.Provider,{value:{cartList:r,setCartList:i,petListurchased:p,setPetListCurchased:f,visible:u,setVisible:s}},t)},s=n(373),m=n(9334),p=n(1602);const f=(0,s.Z)((()=>({container:{display:"flex",justifyContent:"space-between"},navigation:{listStyle:"none"},button:{width:"80px",margin:"0 8px",fontSize:"0.5rem"}}))),d=()=>{const{visible:e,setVisible:t}=a.useContext(c),n=f(),r=()=>{t(!e)};return a.createElement("div",{className:n.container},a.createElement("nav",null,a.createElement("ul",{className:n.navigation},a.createElement("li",null,a.createElement(p.rU,{to:"/dogs"},"Buy Dogs")),a.createElement("li",null,a.createElement(p.rU,{to:"/cats"},"Buy Cats")))),a.createElement("div",null,e?a.createElement(m.Z,{variant:"contained",size:"small",color:"primary",className:n.button,onClick:r},"Hide Cart"):a.createElement(m.Z,{variant:"contained",size:"small",color:"primary",className:n.button,onClick:r},"Show Cart")))};var g=n(1181),h=n(9499),y=n(3297),b=n(458),v=n(547),E=(0,s.Z)((function(){return{root:{width:"200px",margin:"12px","& span":{fontSize:"1rem"}},media:{height:0,paddingTop:"56.25%"},cart:{display:"flex",flexDirection:"column",width:100,height:100,margin:"6px"},title:{display:"flex",flexDirection:"row",alignItems:"center"},margin:{margin:"12px"}}})),j=function(e){var t=e.pet,n=a.useContext(c),r=n.cartList,i=n.setCartList,l=n.petListurchased,o=n.setPetListCurchased,u=E();return a.createElement(g.Z,{className:u.root},a.createElement("div",{className:u.title},a.createElement(v.Z,{"aria-label":"delete",className:u.margin,onClick:function(){var e=r.filter((function(e){return e!==t.id})),n=l.filter((function(e){return e.id!==t.id}));i(e),o(n)}},a.createElement(b.Z,null)),a.createElement(h.Z,{title:t.title})),a.createElement(y.Z,{className:u.media,image:t.picUrl,title:t.title}))},x=function(e){var t=e.petList;return a.createElement(a.Fragment,null,t.map((function(e){return a.createElement(j,{pet:e,key:e.id})})))},w=n(8559),O=(0,s.Z)((function(){return(0,w.Z)({button:{margin:"24px 0",fontSize:"0.5rem"}})})),C=function(){var e=a.useContext(c),t=(e.cartList,e.setCartList),n=(e.petListurchased,e.setPetListCurchased),r=O();return a.createElement(m.Z,{variant:"contained",color:"secondary",className:r.button,startIcon:a.createElement(b.Z,null),onClick:function(){t([]),n([])}},"Delete Cart")},S=(0,s.Z)((function(){return{cart:{display:"flex",flexDirection:"column",alignItems:"center",width:"35vw",height:"100vh",boxSizing:"border-box"},component:{display:"flex",flexWrap:"wrap"}}})),L=function(){var e=a.useContext(c).petListurchased,t=S();return a.createElement("div",{className:t.cart},a.createElement("h1",null,"Hello from Cart"),a.createElement(C,null),a.createElement("div",{className:t.component},a.createElement(x,{petList:e})))},A=function(){return a.createElement("div",null,a.createElement(L,null))};const P=(0,s.Z)((()=>({root:{display:"flex",flexDirection:"column"},container:{display:"flex"}}))),Z=({children:e})=>{const{visible:t}=a.useContext(c),n=P();return a.createElement("div",{className:n.root},a.createElement("header",null,a.createElement(d,null)),a.createElement("div",{className:n.container},a.createElement("main",null,e),t?a.createElement(A,null):a.createElement(a.Fragment,null)))};var N=n(6740),k="".concat("http://localhost:3000");const D=n.p+"./images/bulldog-ingles.jpg",I=n.p+"./images/caniche.jpg",z=n.p+"./images/chihuahua.jpg",U=n.p+"./images/Chow_Chow.jpg",T=n.p+"./images/doberman.jpg",W=n.p+"./images/husky-m.jpg",F=n.p+"./images/Labrador retriever.jpg",M=n.p+"./images/Pastor aleman.jpg",B=n.p+"./images/pomerania.jpg",H=n.p+"./images/Rottweiler.jpg",V=n.p+"./images/shih_tzu.jpg",$=n.p+"./images/Short-haired-Dachshund.jpg",R=n.p+"./images/Egyptian Mau.jpg",_=n.p+"./images/gato balinés.jpg",q=n.p+"./images/gato ragdoll.jpg",K=n.p+"./images/gato_esfinge.jpg",G=n.p+"./images/gato-bosque-de-Noruega.jpg",J=n.p+"./images/gato-devon-rex.jpg",Q=n.p+"./images/gato-exotico.jpg",X=n.p+"./images/gato-habana.jpg",Y=n.p+"./images/gato-himalayo.jpg",ee=n.p+"./images/gato-manx.jpg",te=n.p+"./images/gato-somalí.jpg",ne=n.p+"./images/oriental pelo corto.jpg";function re(e){return function(e){if(Array.isArray(e))return ae(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return ae(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ae(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ae(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var ie=(0,s.Z)((function(){return{root:{width:345,margin:"12px"},media:{height:0,paddingTop:"56.25%"},cart:{display:"flex",flexDirection:"column",width:100,height:100,margin:"6px"},title:{display:"flex",flexDirection:"row",alignItems:"center"}}}));console.log(r);var le=function(e){var t=e.pet,n=a.useContext(c),i=n.cartList,l=n.setCartList,o=n.petListurchased,u=n.setPetListCurchased,s=ie();return a.createElement(g.Z,{className:s.root,key:t.id},a.createElement("div",{className:s.title},a.createElement(h.Z,{title:t.title}),a.createElement("input",{type:"checkbox",checked:t.selected,onChange:function(){if(t.selected){var e=i.filter((function(e){return e!==t.id})),n=o.filter((function(e){return e.id!==t.id}));l(e),u(n)}else l([].concat(re(i),[t.id])),u([].concat(re(o),[t]))}}),a.createElement("span",null,"Buy")),a.createElement(y.Z,{className:s.media,image:r["id".concat(t.id)],title:t.title}))},oe=function(e){var t=e.petList;return a.createElement(a.Fragment,null,t.map((function(e){return a.createElement(le,{pet:e,key:e.id})})))};function ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ue(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(n),!0).forEach((function(t){se(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ce(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function se(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function me(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var pe=(0,s.Z)((function(){return{container:{display:"flex",flexWrap:"wrap",height:"max-content",borderRight:"3px solid black;"}}})),fe=function(){var e,t,n=a.useContext(c).cartList,r=(e=a.useState([]),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i=[],l=!0,o=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);l=!0);}catch(e){o=!0,a=e}finally{try{l||null==n.return||n.return()}finally{if(o)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return me(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?me(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=r[0],l=r[1],o=pe();return a.useEffect((function(){fetch("".concat(k,"/catsList")).then((function(e){return e.json()})).then((function(e){if(n.length>0){var t=e.map((function(e){return n.includes(e.id)?ue(ue({},e),{},{selected:!0}):e}));l(t)}else l(e)}))}),[n]),a.createElement("div",{className:o.container},a.createElement(oe,{petList:i}))},de=function(){return a.createElement(a.Fragment,null,a.createElement("h2",null,"Hello from Cat Shopping Cart"),a.createElement(fe,null))},ge="".concat("http://localhost:3000");function he(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ye(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?he(Object(n),!0).forEach((function(t){be(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):he(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function be(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ve(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Ee=(0,s.Z)((function(){return{container:{display:"flex",flexWrap:"wrap",height:"max-content",borderRight:"3px solid black;"}}})),je=function(){var e,t,n=a.useContext(c).cartList,r=(e=a.useState([]),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i=[],l=!0,o=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);l=!0);}catch(e){o=!0,a=e}finally{try{l||null==n.return||n.return()}finally{if(o)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return ve(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ve(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=r[0],l=r[1],o=Ee();return a.useEffect((function(){fetch("".concat(ge,"/dogsList")).then((function(e){return e.json()})).then((function(e){if(n.length>0){var t=e.map((function(e){return n.includes(e.id)?ye(ye({},e),{},{selected:!0}):e}));l(t)}else l(e)}))}),[n]),a.createElement("div",{className:o.container},a.createElement(oe,{petList:i}))},xe=function(){return a.createElement(a.Fragment,null,a.createElement("h2",null,"Hello from Dog Shopping Cart"),a.createElement(je,null))},we=function(){return a.createElement(u,null,a.createElement(p.VK,null,a.createElement(Z,null,a.createElement(N.Z5,null,a.createElement(N.AW,{path:"/",element:a.createElement(xe,null)}),a.createElement(N.AW,{path:"/dogs",element:a.createElement(xe,null)}),a.createElement(N.AW,{path:"/cats",element:a.createElement(de,null)})))))},Oe=function(){return a.createElement(we,null)};i.render(a.createElement("div",null,a.createElement(Oe,null)),document.getElementById("root"))}},e=>{var t=t=>e(e.s=t);e.O(0,[736],(()=>(t(6248),t(7072)))),e.O()}]);