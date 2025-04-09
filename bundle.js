var X=Object.create;var O=Object.defineProperty;var ee=Object.getOwnPropertyDescriptor;var te=Object.getOwnPropertyNames;var oe=Object.getPrototypeOf,ne=Object.prototype.hasOwnProperty;var E=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var ie=(t,e,o,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of te(e))!ne.call(t,i)&&i!==o&&O(t,i,{get:()=>e[i],enumerable:!(n=ee(e,i))||n.enumerable});return t};var m=(t,e,o)=>(o=t!=null?X(oe(t)):{},ie(e||!t||!t.__esModule?O(o,"default",{value:t,enumerable:!0}):o,t));var b=E(($e,F)=>{var V=t=>{let e=[],o=n=>{Array.isArray(n)?n.forEach(o):n!=null&&n!==!1&&e.push(n)};return o(t),e},se=(t,e={},...o)=>{if(o=V(o),typeof t=="function")return t({...e,children:o.join("")});{let n=o[0]?`>${o.join("")}</${t}>`:"/>";return`<${t} ${Object.keys(e).map(i=>`${i}="${e[i]}"`).join(" ")}${n}`}},re=t=>[...V(t.children)].join(""),ce={createElement:se,Fragment:re};F.exports=ce});var N=E((ke,H)=>{var{createCanvas:ae}=require("canvas");function le(t,e="Arial",o=16){let i=ae(200,50).getContext("2d");return i.font=`${o}px ${e}`,i.measureText(t).width}H.exports=le});var L=E((Ee,q)=>{var fe={titles:{contact:{en:"Contact Info:",es:"Informaci\xF3n de cont\xE1cto:"},profile:{en:"Profile",es:"Perfil:"},experience:{en:"Experience:",es:"Experiencia:"},skills:{en:"Skills:",es:"Habilidades:"},education:{en:"Education:",es:"Educaci\xF3n:"}},labels:{phone:{en:"Phone:",es:"Tel\xE9fono:"},email:{en:"Email:",es:"Correo electr\xF3nico:"},address:{en:"Address:",es:"Direcci\xF3n:"},skills:{en:"Skills:",es:"Habilidades:"},profile:{en:"Profile:",es:"Perfil:"},experience:{en:"Experience:",es:"Experiencia:"},education:{en:"Education:",es:"Educaci\xF3n:"}}};q.exports=fe});var G=E((We,U)=>{function f(t,e){let o=new RegExp(`<${e}>([\\s\\S]*?)</${e}>`),n=t.match(o);if(!n)throw new Error(`Missing <${e}>`);return n[1].trim()}function me(t,e){let o=new RegExp(`<${e}>([\\s\\S]*?)</${e}>`,"g"),n=[...t.matchAll(o)];if(n.length===0)throw new Error(`Missing <${e}>`);return n.map(i=>i[1].trim())}function he(t){let e=f(t,"head"),o=f(t,"body");return{head:{language:f(e,"language"),color:f(e,"color"),font:f(e,"font")},body:{name:f(o,"name"),website:f(o,"website"),contact:{email:f(o,"email"),phone:f(o,"phone"),address:f(o,"address")},skills:me(o,"skill"),profile:f(o,"profile"),experience:f(o,"experience"),education:f(o,"education")}}}var ye=t=>{try{return he(t)}catch(e){console.error("Error:",e.message)}};U.exports=ye});var K=m(b()),A=m(require("fs"));var v=m(b());var g=m(b()),P=m(N()),_=({width:t,height:e,x:o,y:n,color:i,children:s})=>g.default.createElement(g.default.Fragment,null,g.default.createElement("rect",{x:o,y:n,width:t,height:e,stroke:i,fill:"none","stroke-width":"3"}),s),y=({x:t,y:e,size:o,color:n,family:i,children:s,bold:r})=>g.default.createElement("text",{x:t,y:e,"font-family":i,"font-size":o,fill:n,"font-weight":r?"bold":"normal"},s),S=({x:t,y:e,family:o,width:n,size:i,color:s,children:r,spacing:d})=>{let h=r.split(" "),c=[],l=[];for(let u of h){let p=l.concat(u).join(" ");(0,P.default)(p,o,i)>n&&(c.push(l.join(" ")),l.length=0),l.push(u)}return c.push(l),g.default.createElement("text",{x:t,y:e,"font-family":o,"font-size":i,fill:s},c.map(u=>g.default.createElement("tspan",{x:t,dy:d},u)))};var a=m(b()),T=m(L());var I=({children:t,x:e,y:o,family:n})=>a.default.createElement(y,{x:e,y:o,size:18,family:n,color:"white",bold:!0},t),M=({label:t,value:e,x:o,y:n,family:i})=>a.default.createElement("text",{x:o,y:n},a.default.createElement("tspan",{x:o,dy:0,"font-family":i,"font-size":16,fill:"white","font-weight":"bold"},t),a.default.createElement("tspan",{x:o,dy:20,"font-family":i,"font-size":16,fill:"white"},e)),pe=({width:t,height:e,x:o,y:n,color:i,children:s})=>a.default.createElement(a.default.Fragment,null,a.default.createElement("rect",{x:o,y:n,width:t,height:e,fill:i}),s),j=80,de=({width:t,height:e,x:o,y:n,color:i,language:s,family:r,contact:d,skills:h})=>{let c=o+10,l=n+50;return a.default.createElement(pe,{width:t,height:e,x:o,y:n,color:i},a.default.createElement(I,{x:c,y:l,family:r},T.default.titles.contact[s]),a.default.createElement(M,{label:T.default.labels.email[s],value:d.email,x:c,y:l+j*1,family:r}),a.default.createElement(M,{label:T.default.labels.address[s],value:d.address,x:c,y:l+j*2,family:r}),a.default.createElement(M,{label:T.default.labels.phone[s],value:d.phone,x:c,y:l+j*3,family:r}),a.default.createElement(I,{x:c,y:e/2,family:r},T.default.titles.skills[s]),a.default.createElement("text",{x:c,y:e/2+30,"font-family":r,"font-size":16,fill:"white"},h.map(u=>a.default.createElement("tspan",{x:c,dy:30,"font-family":r,"font-size":16,fill:"white"},u))))},J=de;var x=m(b());var z=m(L()),B=50,xe=({width:t,height:e,x:o,y:n,color:i,family:s,language:r,name:d,profile:h,experience:c,website:l,education:u})=>{let p=o+20,w=n+40,$=w+150,k=e/2,C=e-e/8;return x.default.createElement(x.default.Fragment,null,x.default.createElement(y,{x:p,y:w,size:30,family:s,color:i,bold:!0},d),x.default.createElement(y,{x:p,y:w+40,size:25,family:s,color:"black"},l),x.default.createElement(y,{x:p,y:$,size:25,family:s,color:i,bold:!0},z.default.titles.profile[r]),x.default.createElement(S,{x:p,y:$+B,family:s,width:t-40,size:20,color:"black",spacing:30},h),x.default.createElement(y,{x:p,y:k,size:25,family:s,color:i,bold:!0},z.default.titles.experience[r]),x.default.createElement(S,{x:p,y:k+B,family:s,width:t-40,size:20,color:"black",spacing:30},c),x.default.createElement(y,{x:p,y:C,size:25,family:s,color:i,bold:!0},z.default.titles.education[r]),x.default.createElement(S,{x:p,y:C+B,family:s,width:t-40,size:20,color:"black",spacing:30},u))},R=xe;var ue=({width:t=816,height:e=1056,head:o,body:n})=>{let[s,r]=[t-100,e-100],[d,h]=[50,50],[c,l]=[s/3,r],[u,p]=[d,h],[w,$]=[s-c,r],[k,C]=[d+c,h];return'<?xml version="1.0" encoding="UTF-8" standalone="no"?>'+v.default.createElement("svg",{width:t,height:e,xmlns:"http://www.w3.org/2000/svg",version:"1.1"},v.default.createElement(_,{width:s,height:r,x:d,y:h,color:o.color},v.default.createElement(J,{width:c,height:l,x:u,y:p,color:o.color,family:o.family,language:o.language,contact:n.contact,skills:n.skills}),v.default.createElement(R,{width:w,height:$,x:k,y:C,color:o.color,family:o.family,language:o.language,name:n.name,profile:n.profile,experience:n.experience,website:n.website,education:n.education})))},D=ue;var Q=require("child_process"),Z=m(G()),W=require("path"),[Ve,Fe,ge,we]=process.argv,be=A.default.readFileSync(W.resolve(process.cwd(),ge),"utf-8"),Y=W.resolve(process.cwd(),"temp.svg"),Te=W.resolve(process.cwd(),we);try{let t=(0,Z.default)(be);A.default.writeFileSync(Y,K.default.createElement(D,{head:t.head,body:t.body}),"utf-8"),(0,Q.execSync)(`rsvg-convert ${Y} -f pdf -o ${Te}`),A.default.unlinkSync(Y)}catch(t){console.log("CV-Creator error:"),console.log(t.message)}
