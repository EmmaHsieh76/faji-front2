import{p as R,br as J,m as T,bW as Q,a as E,f as z,bO as O,g as w,l as F,aL as ee,q as ae,t as r,u as le,c as l,G as N,K as C,as as B,b as te,aH as ne,d as se,aO as ie,e as ce,aT as de,bN as oe,bt as ue,N as re,i as ve,bX as fe,aI as pe,j as me,k as ke,bY as be,D as he,aR as ye,aU as Ce,o as V,T as _,aN as Ve,bZ as Ie,b_ as Pe,W as v,r as f,U as ge,a7 as x,bH as D}from"./index-aa7f5d0f.js";import{m as Se,V as L}from"./VSlideGroup-b4257e37.js";const $=Symbol.for("vuetify:v-chip-group"),Ae=R({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:J},...Se(),...T(),...Q({selectedClass:"v-chip--selected"}),...E(),...z(),...O({variant:"tonal"})},"VChipGroup");w()({name:"VChipGroup",props:Ae(),emits:{"update:modelValue":e=>!0},setup(e,p){let{slots:c}=p;const{themeClasses:o}=F(e),{isSelected:t,select:m,next:k,prev:b,selected:h}=ee(e,$);return ae({VChip:{color:r(e,"color"),disabled:r(e,"disabled"),filter:r(e,"filter"),variant:r(e,"variant")}}),le(()=>{const y=L.filterProps(e);return l(L,N(y,{class:["v-chip-group",{"v-chip-group--column":e.column},o.value,e.class],style:e.style}),{default:()=>{var u;return[(u=c.default)==null?void 0:u.call(c,{isSelected:t,select:m,next:k,prev:b,selected:h.value})]}})}),{}}});const Ge=R({activeClass:String,appendAvatar:String,appendIcon:C,closable:Boolean,closeIcon:{type:C,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:C,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:B(),onClickOnce:B(),...te(),...T(),...ne(),...se(),...ie(),...ce(),...de(),...oe(),...E({tag:"span"}),...z(),...O({variant:"tonal"})},"VChip"),xe=w()({name:"VChip",directives:{Ripple:ue},props:Ge(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,p){let{attrs:c,emit:o,slots:t}=p;const{t:m}=re(),{borderClasses:k}=ve(e),{colorClasses:b,colorStyles:h,variantClasses:y}=fe(e),{densityClasses:u}=pe(e),{elevationClasses:K}=me(e),{roundedClasses:M}=ke(e),{sizeClasses:j}=be(e),{themeClasses:q}=F(e),I=he(e,"modelValue"),a=ye(e,$,!1),s=Ce(e,c),H=V(()=>e.link!==!1&&s.isLink.value),i=V(()=>!e.disabled&&e.link!==!1&&(!!a||e.link||s.isClickable.value)),U=V(()=>({"aria-label":m(e.closeLabel),onClick(n){n.stopPropagation(),I.value=!1,o("click:close",n)}}));function P(n){var d;o("click",n),i.value&&((d=s.navigate)==null||d.call(s,n),a==null||a.toggle())}function W(n){(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),P(n))}return()=>{const n=s.isLink.value?"a":e.tag,d=!!(e.appendIcon||e.appendAvatar),X=!!(d||t.append),Y=!!(t.close||e.closable),g=!!(t.filter||e.filter)&&a,S=!!(e.prependIcon||e.prependAvatar),Z=!!(S||t.prepend),A=!a||a.isSelected.value;return I.value&&_(l(n,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":i.value,"v-chip--filter":g,"v-chip--pill":e.pill},q.value,k.value,A?b.value:void 0,u.value,K.value,M.value,j.value,y.value,a==null?void 0:a.selectedClass.value,e.class],style:[A?h.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:s.href.value,tabindex:i.value?0:void 0,onClick:P,onKeydown:i.value&&!H.value&&W},{default:()=>{var G;return[Ie(i.value,"v-chip"),g&&l(Pe,{key:"filter"},{default:()=>[_(l("div",{class:"v-chip__filter"},[t.filter?l(f,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},t.filter):l(v,{key:"filter-icon",icon:e.filterIcon},null)]),[[ge,a.isSelected.value]])]}),Z&&l("div",{key:"prepend",class:"v-chip__prepend"},[t.prepend?l(f,{key:"prepend-defaults",disabled:!S,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},t.prepend):l(x,null,[e.prependIcon&&l(v,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&l(D,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),l("div",{class:"v-chip__content"},[((G=t.default)==null?void 0:G.call(t,{isSelected:a==null?void 0:a.isSelected.value,selectedClass:a==null?void 0:a.selectedClass.value,select:a==null?void 0:a.select,toggle:a==null?void 0:a.toggle,value:a==null?void 0:a.value.value,disabled:e.disabled}))??e.text]),X&&l("div",{key:"append",class:"v-chip__append"},[t.append?l(f,{key:"append-defaults",disabled:!d,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},t.append):l(x,null,[e.appendIcon&&l(v,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&l(D,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),Y&&l("button",N({key:"close",class:"v-chip__close",type:"button"},U.value),[t.close?l(f,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},t.close):l(v,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[Ve("ripple"),i.value&&e.ripple,null]])}}});export{xe as V};
