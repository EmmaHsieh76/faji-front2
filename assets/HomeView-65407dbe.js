import{m as D,V,a as b,b as _}from"./VWindowItem-c4656cfa.js";import{p as P,K as L,g as k,D as R,N as U,x as p,z as f,A as T,u as I,c as r,a7 as x,r as S,J as N,G as u,ah as A,v as W,ai as $,V as y,a2 as g,a4 as C,a5 as F,a3 as z,a8 as M}from"./index-01659c9d.js";import"./ssrBoot-1626bf63.js";const q=P({color:String,cycle:Boolean,delimiterIcon:{type:L,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:e=>Number(e)>0},progress:[Boolean,String],verticalDelimiters:[Boolean,String],...D({continuous:!0,mandatory:"force",showArrows:!0})},"VCarousel"),E=k()({name:"VCarousel",props:q(),emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:t}=s;const a=R(e,"modelValue"),{t:i}=U(),l=p();let c=-1;f(a,m),f(()=>e.interval,m),f(()=>e.cycle,d=>{d?m():window.clearTimeout(c)}),T(h);function h(){!e.cycle||!l.value||(c=window.setTimeout(l.value.group.next,+e.interval>0?+e.interval:6e3))}function m(){window.clearTimeout(c),window.requestAnimationFrame(h)}return I(()=>{const d=V.filterProps(e);return r(V,u({ref:l},d,{modelValue:a.value,"onUpdate:modelValue":v=>a.value=v,class:["v-carousel",{"v-carousel--hide-delimiter-background":e.hideDelimiterBackground,"v-carousel--vertical-delimiters":e.verticalDelimiters},e.class],style:[{height:W(e.height)},e.style]}),{default:t.default,additional:v=>{let{group:o}=v;return r(x,null,[!e.hideDelimiters&&r("div",{class:"v-carousel__controls",style:{left:e.verticalDelimiters==="left"&&e.verticalDelimiters?0:"auto",right:e.verticalDelimiters==="right"?0:"auto"}},[o.items.value.length>0&&r(S,{defaults:{VBtn:{color:e.color,icon:e.delimiterIcon,size:"x-small",variant:"text"}},scoped:!0},{default:()=>[o.items.value.map((n,B)=>{const w={id:`carousel-item-${n.id}`,"aria-label":i("$vuetify.carousel.ariaLabel.delimiter",B+1,o.items.value.length),class:["v-carousel__controls__item",o.isSelected(n.id)&&"v-btn--active"],onClick:()=>o.select(n.id,!0)};return t.item?t.item({props:w,item:n}):r(N,u(n,w),null)})]})]),e.progress&&r(A,{class:"v-carousel__progress",color:typeof e.progress=="string"?e.progress:void 0,modelValue:(o.getItemIndex(a.value)+1)/o.items.value.length*100},null)])},prev:t.prev,next:t.next})}),{}}}),G=P({...$(),...b()},"VCarouselItem"),H=k()({name:"VCarouselItem",inheritAttrs:!1,props:G(),setup(e,s){let{slots:t,attrs:a}=s;I(()=>{const i=y.filterProps(e),l=_.filterProps(e);return r(_,u({class:"v-carousel-item"},l),{default:()=>[r(y,u(a,i),t)]})})}}),O={__name:"HomeView",setup(e){const s=p([{src:new URL(""+new URL("Carousel-5-a95ab3c1.png",import.meta.url).href,self.location).href},{src:new URL(""+new URL("Carousel-6-8772141f.png",import.meta.url).href,self.location).href},{src:new URL(""+new URL("Carousel-7-ceec5a43.png",import.meta.url).href,self.location).href}]);return(t,a)=>(g(),C(E,{cycle:"","hide-delimiter-background":"","show-arrows":"hover",height:"calc(100vh - 284px)"},{default:F(()=>[(g(!0),z(x,null,M(s.value,(i,l)=>(g(),C(H,{key:l,src:i.src,cover:""},null,8,["src"]))),128))]),_:1}))}};export{O as default};
