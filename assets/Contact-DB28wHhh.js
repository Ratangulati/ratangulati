import{r as de,j as M}from"./index-BrZUcVzy.js";import{E as Be,a as Ge,b as Ye}from"./constants-BvORooUw.js";class me{constructor(t=0,e="Network Error"){this.status=t,this.text=e}}const Je=()=>{if(!(typeof localStorage>"u"))return{get:r=>Promise.resolve(localStorage.getItem(r)),set:(r,t)=>Promise.resolve(localStorage.setItem(r,t)),remove:r=>Promise.resolve(localStorage.removeItem(r))}},S={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:Je()},Pe=r=>r?typeof r=="string"?{publicKey:r}:r.toString()==="[object Object]"?r:{}:{},We=(r,t="https://api.emailjs.com")=>{if(!r)return;const e=Pe(r);S.publicKey=e.publicKey,S.blockHeadless=e.blockHeadless,S.storageProvider=e.storageProvider,S.blockList=e.blockList,S.limitRate=e.limitRate,S.origin=e.origin||t},De=async(r,t,e={})=>{const l=await fetch(S.origin+r,{method:"POST",headers:e,body:t}),v=await l.text(),a=new me(l.status,v);if(l.ok)return a;throw a},Ee=(r,t,e)=>{if(!r||typeof r!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!e||typeof e!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},$e=r=>{if(r&&r.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},Re=r=>r.webdriver||!r.languages||r.languages.length===0,Ce=()=>new me(451,"Unavailable For Headless Browser"),Xe=(r,t)=>{if(!Array.isArray(r))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},Ze=r=>{var t;return!((t=r.list)!=null&&t.length)||!r.watchVariable},Qe=(r,t)=>r instanceof FormData?r.get(t):r[t],Oe=(r,t)=>{if(Ze(r))return!1;Xe(r.list,r.watchVariable);const e=Qe(t,r.watchVariable);return typeof e!="string"?!1:r.list.includes(e)},Ae=()=>new me(403,"Forbidden"),er=(r,t)=>{if(typeof r!="number"||r<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a string"},rr=async(r,t,e)=>{const l=Number(await e.get(r)||0);return t-Date.now()+l},He=async(r,t,e)=>{if(!t.throttle||!e)return!1;er(t.throttle,t.id);const l=t.id||r;return await rr(l,t.throttle,e)>0?!0:(await e.set(l,Date.now().toString()),!1)},qe=()=>new me(429,"Too Many Requests"),tr=async(r,t,e,l)=>{const v=Pe(l),a=v.publicKey||S.publicKey,b=v.blockHeadless||S.blockHeadless,y=S.storageProvider||v.storageProvider,k={...S.blockList,...v.blockList},x={...S.limitRate,...v.limitRate};return b&&Re(navigator)?Promise.reject(Ce()):(Ee(a,r,t),$e(e),e&&Oe(k,e)?Promise.reject(Ae()):await He(location.pathname,x,y)?Promise.reject(qe()):De("/api/v1.0/email/send",JSON.stringify({lib_version:"4.3.3",user_id:a,service_id:r,template_id:t,template_params:e}),{"Content-type":"application/json"}))},ar=r=>{if(!r||r.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},or=r=>typeof r=="string"?document.querySelector(r):r,sr=async(r,t,e,l)=>{const v=Pe(l),a=v.publicKey||S.publicKey,b=v.blockHeadless||S.blockHeadless,y=S.storageProvider||v.storageProvider,k={...S.blockList,...v.blockList},x={...S.limitRate,...v.limitRate};if(b&&Re(navigator))return Promise.reject(Ce());const j=or(e);Ee(a,r,t),ar(j);const c=new FormData(j);return Oe(k,c)?Promise.reject(Ae()):await He(location.pathname,x,y)?Promise.reject(qe()):(c.append("lib_version","4.3.3"),c.append("service_id",r),c.append("template_id",t),c.append("user_id",a),De("/api/v1.0/email/send-form",c))},nr={init:We,send:tr,sendForm:sr,EmailJSResponseStatus:me};var Ie={},ke={};Object.defineProperty(ke,"__esModule",{value:!0});ke.makeNoise2D=void 0;var ue=(3-Math.sqrt(3))/6,Me=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[1,0],[-1,0],[0,1],[0,-1],[0,1],[0,-1]];function ir(r){r===void 0&&(r=Math.random);for(var t=new Uint8Array(256),e=0;e<256;e++)t[e]=e;for(var l,v,e=255;e>0;e--)l=Math.floor((e+1)*r()),v=t[e],t[e]=t[l],t[l]=v;for(var a=new Uint8Array(512),b=new Uint8Array(512),e=0;e<512;e++)a[e]=t[e&255],b[e]=a[e]%12;return function(y,k){var x=(y+k)*.5*(Math.sqrt(3)-1),j=Math.floor(y+x),c=Math.floor(k+x),E=(j+c)*ue,U=j-E,V=c-E,T=y-U,N=k-V,W=T>N?1:0,i=T>N?0:1,s=T-W+ue,h=N-i+ue,d=T-1+2*ue,n=N-1+2*ue,u=j&255,m=c&255,w=Me[b[u+a[m]]],p=Me[b[u+W+a[m+i]]],_=Me[b[u+1+a[m+1]]],L=.5-T*T-N*N,K=L<0?0:Math.pow(L,4)*(w[0]*T+w[1]*N),I=.5-s*s-h*h,B=I<0?0:Math.pow(I,4)*(p[0]*s+p[1]*h),z=.5-d*d-n*n,G=z<0?0:Math.pow(z,4)*(_[0]*d+_[1]*n);return 70.14805770653952*(K+B+G)}}ke.makeNoise2D=ir;var xe={};Object.defineProperty(xe,"__esModule",{value:!0});xe.makeNoise3D=void 0;var J=1/6,ye=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,-1],[0,1,-1],[0,-1,-1]];function lr(r){r===void 0&&(r=Math.random);for(var t=new Uint8Array(256),e=0;e<256;e++)t[e]=e;for(var l,v,e=255;e>0;e--)l=Math.floor((e+1)*r()),v=t[e],t[e]=t[l],t[l]=v;for(var a=new Uint8Array(512),b=new Uint8Array(512),e=0;e<512;e++)a[e]=t[e&255],b[e]=a[e]%12;return function(y,k,x){var j=(y+k+x)/3,c=Math.floor(y+j),E=Math.floor(k+j),U=Math.floor(x+j),V=(c+E+U)*J,T=c-V,N=E-V,W=U-V,i=y-T,s=k-N,h=x-W,d,n,u,m,w,p;i>=s?s>=h?(d=m=w=1,n=u=p=0):i>=h?(d=m=p=1,n=u=w=0):(u=m=p=1,d=n=w=0):s<h?(u=w=p=1,d=n=m=0):i<h?(n=w=p=1,d=u=m=0):(n=m=w=1,d=u=p=0);var _=i-d+J,L=s-n+J,K=h-u+J,I=i-m+2*J,B=s-w+2*J,z=h-p+2*J,G=i-1+3*J,oe=s-1+3*J,$=h-1+3*J,R=c&255,X=E&255,Z=U&255,Q=ye[b[R+a[X+a[Z]]]],o=ye[b[R+d+a[X+n+a[Z+u]]]],f=ye[b[R+m+a[X+w+a[Z+p]]]],g=ye[b[R+1+a[X+1+a[Z+1]]]],D=.5-i*i-s*s-h*h,C=D<0?0:Math.pow(D,4)*(Q[0]*i+Q[1]*s+Q[2]*h),O=.5-_*_-L*L-K*K,q=O<0?0:Math.pow(O,4)*(o[0]*_+o[1]*L+o[2]*K),A=.5-I*I-B*B-z*z,Y=A<0?0:Math.pow(A,4)*(f[0]*I+f[1]*B+f[2]*z),H=.5-G*G-oe*oe-$*$,F=H<0?0:Math.pow(H,4)*(g[0]*G+g[1]*oe+g[2]*$);return 94.68493150681972*(C+q+Y+F)}}xe.makeNoise3D=lr;var je={};Object.defineProperty(je,"__esModule",{value:!0});je.makeNoise4D=void 0;var P=(5-Math.sqrt(5))/20,fe=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]];function cr(r){r===void 0&&(r=Math.random);for(var t=new Uint8Array(256),e=0;e<256;e++)t[e]=e;for(var l,v,e=255;e>0;e--)l=Math.floor((e+1)*r()),v=t[e],t[e]=t[l],t[l]=v;for(var a=new Uint8Array(512),b=new Uint8Array(512),e=0;e<512;e++)a[e]=t[e&255],b[e]=a[e]%12;return function(y,k,x,j){var c=(y+k+x+j)*(Math.sqrt(5)-1)/4,E=Math.floor(y+c),U=Math.floor(k+c),V=Math.floor(x+c),T=Math.floor(j+c),N=(E+U+V+T)*P,W=E-N,i=U-N,s=V-N,h=T-N,d=y-W,n=k-i,u=x-s,m=j-h,w=0,p=0,_=0,L=0;d>n?w++:p++,d>u?w++:_++,d>m?w++:L++,n>u?p++:_++,n>m?p++:L++,u>m?_++:L++;var K=w>=3?1:0,I=p>=3?1:0,B=_>=3?1:0,z=L>=3?1:0,G=w>=2?1:0,oe=p>=2?1:0,$=_>=2?1:0,R=L>=2?1:0,X=w>=1?1:0,Z=p>=1?1:0,Q=_>=1?1:0,o=L>=1?1:0,f=d-K+P,g=n-I+P,D=u-B+P,C=m-z+P,O=d-G+2*P,q=n-oe+2*P,A=u-$+2*P,Y=m-R+2*P,H=d-X+3*P,F=n-Z+3*P,ee=u-Q+3*P,ie=m-o+3*P,le=d-1+4*P,re=n-1+4*P,ce=u-1+4*P,ve=m-1+4*P,te=E&255,ae=U&255,se=V&255,ne=T&255,he=fe[a[te+a[ae+a[se+a[ne]]]]%32],pe=fe[a[te+K+a[ae+I+a[se+B+a[ne+z]]]]%32],ge=fe[a[te+G+a[ae+oe+a[se+$+a[ne+R]]]]%32],be=fe[a[te+X+a[ae+Z+a[se+Q+a[ne+o]]]]%32],we=fe[a[te+1+a[ae+1+a[se+1+a[ne+1]]]]%32],Se=.5-d*d-n*n-u*u-m*m,ze=Se<0?0:Math.pow(Se,4)*(he[0]*d+he[1]*n+he[2]*u+he[3]*m),Ne=.5-f*f-g*g-D*D-C*C,Fe=Ne<0?0:Math.pow(Ne,4)*(pe[0]*f+pe[1]*g+pe[2]*D+pe[3]*C),_e=.5-O*O-q*q-A*A-Y*Y,Ue=_e<0?0:Math.pow(_e,4)*(ge[0]*O+ge[1]*q+ge[2]*A+ge[3]*Y),Le=.5-H*H-F*F-ee*ee-ie*ie,Ve=Le<0?0:Math.pow(Le,4)*(be[0]*H+be[1]*F+be[2]*ee+be[3]*ie),Te=.5-le*le-re*re-ce*ce-ve*ve,Ke=Te<0?0:Math.pow(Te,4)*(we[0]*le+we[1]*re+we[2]*ce+we[3]*ve);return 72.37855765153665*(ze+Fe+Ue+Ve+Ke)}}je.makeNoise4D=cr;(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.makeNoise4D=r.makeNoise3D=r.makeNoise2D=void 0;var t=ke;Object.defineProperty(r,"makeNoise2D",{enumerable:!0,get:function(){return t.makeNoise2D}});var e=xe;Object.defineProperty(r,"makeNoise3D",{enumerable:!0,get:function(){return e.makeNoise3D}});var l=je;Object.defineProperty(r,"makeNoise4D",{enumerable:!0,get:function(){return l.makeNoise4D}})})(Ie);function vr(){const N="hsla(260,40%,5%,1)";let W,i,s,h,d,n,u;function m(){w(),p(),K(),$()}function w(){W=document.querySelector(".content--canvas"),i={a:document.createElement("canvas"),b:document.createElement("canvas")},i.b.style=`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    `,W.appendChild(i.b),s={a:i.a.getContext("2d"),b:i.b.getContext("2d")},h=[]}function p(){const{innerWidth:o,innerHeight:f}=window;i.a.width=o,i.a.height=f,s.a.drawImage(i.b,0,0),i.b.width=o,i.b.height=f,s.b.drawImage(i.a,0,0),h[0]=.5*i.a.width,h[1]=.5*i.a.height}function _(o){let f,g,D,C,O,q,A,Y,H;f=R(i.a.width),g=h[1]+X(100),D=0,C=0,O=0,q=50+R(150),A=.1+R(2),Y=1+R(4),H=220+R(100),n.set([f,g,D,C,O,q,A,Y,H],o)}function L(){let o;for(o=0;o<6300;o+=9)I(o)}function K(){d=0,u=Ie.makeNoise3D(),n=new Float32Array(6300);let o;for(o=0;o<6300;o+=9)_(o)}function I(o){let f=1+o,g=2+o,D=3+o,C=4+o,O=5+o,q=6+o,A=7+o,Y=8+o,H,F,ee,ie,le,re,ce,ve,te,ae,se,ne;F=n[o],ee=n[f],H=u(F*.00125,ee*.00125,d*5e-4)*8*Math.PI*2,ie=Q(n[g],Math.cos(H),.5),le=Q(n[D],Math.sin(H),.5),re=n[C],ce=n[O],ve=n[q],te=F+ie*ve,ae=ee+le*ve,se=n[A],ne=n[Y],B(F,ee,te,ae,re,ce,se,ne),re++,n[o]=te,n[f]=ae,n[g]=ie,n[D]=le,n[C]=re,(z(F,ee)||re>ce)&&_(o)}function B(o,f,g,D,C,O,q,A){s.a.save(),s.a.lineCap="round",s.a.lineWidth=q,s.a.strokeStyle=`hsla(${A},100%,60%,${Z(C,O)})`,s.a.beginPath(),s.a.moveTo(o,f),s.a.lineTo(g,D),s.a.stroke(),s.a.closePath(),s.a.restore()}function z(o,f){return o>i.a.width||o<0||f>i.a.height||f<0}function G(){s.b.save(),s.b.filter="blur(8px) brightness(200%)",s.b.globalCompositeOperation="lighter",s.b.drawImage(i.a,0,0),s.b.restore(),s.b.save(),s.b.filter="blur(4px) brightness(200%)",s.b.globalCompositeOperation="lighter",s.b.drawImage(i.a,0,0),s.b.restore()}function oe(){s.b.save(),s.b.globalCompositeOperation="lighter",s.b.drawImage(i.a,0,0),s.b.restore()}function $(){d++,s.a.clearRect(0,0,i.a.width,i.a.height),s.b.fillStyle=N,s.b.fillRect(0,0,i.a.width,i.a.height),L(),G(),oe(),window.requestAnimationFrame($)}function R(o){return Math.random()*o}function X(o){return o-Math.random()*o*2}function Z(o,f){let g=.5*f;return Math.abs((o+g)%f-g)/g}function Q(o,f,g){return o+g*(f-o)}return window.addEventListener("resize",p),m}const fr=()=>{const[r,t]=de.useState(""),[e,l]=de.useState(""),[v,a]=de.useState(""),[b,y]=de.useState(!1),[k,x]=de.useState(null);de.useEffect(()=>{vr()()},[]);const j=async c=>{c.preventDefault(),y(!0);try{await nr.send(Be,Ge,{name:r,email:e,message:v},Ye),x("success"),t(""),l(""),a("")}catch(E){console.error("Error sending email:",E),x("error")}y(!1)};return M.jsxs("div",{className:"relative bg-gray-900 min-h-screen flex items-center justify-center px-4",children:[M.jsx("div",{className:"content--canvas absolute top-0 left-0 w-full h-full"}),M.jsxs("div",{className:"max-w-md w-full space-y-8 relative z-10",children:[M.jsx("div",{children:M.jsx("h2",{className:"mt-6 text-center text-3xl font-extrabold text-white",children:"Contact Me"})}),M.jsxs("form",{className:"mt-8 space-y-6",onSubmit:j,children:[M.jsxs("div",{className:"rounded-md shadow-sm -space-y-px",children:[M.jsx("div",{children:M.jsx("input",{type:"text",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Name",value:r,onChange:c=>t(c.target.value)})}),M.jsx("div",{children:M.jsx("input",{type:"email",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Email address",value:e,onChange:c=>l(c.target.value)})}),M.jsx("div",{children:M.jsx("textarea",{required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Message",rows:"4",value:v,onChange:c=>a(c.target.value)})})]}),M.jsx("div",{children:M.jsx("button",{type:"submit",disabled:b,className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:b?"Sending...":"Send Message"})})]}),k==="success"&&M.jsx("p",{className:"mt-2 text-center text-sm text-green-600",children:"Message sent successfully!"}),k==="error"&&M.jsx("p",{className:"mt-2 text-center text-sm text-red-600",children:"Error sending message. Please try again."})]})]})};export{fr as default};