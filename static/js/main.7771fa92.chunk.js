(this["webpackJsonpreboot-app"]=this["webpackJsonpreboot-app"]||[]).push([[0],{106:function(e,t,n){e.exports=n.p+"static/media/timeline1.6afa5d22.svg"},107:function(e,t,n){e.exports=n.p+"static/media/timeline2.bb43d72a.svg"},110:function(e,t,n){e.exports={wrapper:"Segment_wrapper__UweXr"}},111:function(e,t,n){e.exports={slot:"Slot_slot__1cZxd"}},112:function(e,t,n){e.exports={wrapper:"Grid_wrapper__2TD0s"}},116:function(e,t,n){e.exports=n.p+"static/media/EditIcon.d5a0fa09.svg"},117:function(e,t,n){e.exports=n.p+"static/media/CloseIcon.40000a14.svg"},122:function(e,t,n){e.exports=n(177)},127:function(e,t,n){},128:function(e,t,n){},176:function(e,t,n){},177:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"benefits",(function(){return h})),n.d(r,"advantages",(function(){return y})),n.d(r,"problemSolvings",(function(){return g})),n.d(r,"desires",(function(){return _})),n.d(r,"solutions",(function(){return b})),n.d(r,"tasks",(function(){return k})),n.d(r,"problems",(function(){return w}));var a=n(0),i=n.n(a),c=n(12),o=n.n(c),l=(n(127),n(128),n(14)),s=n(51),u=function(e){return i.a.createElement("div",{className:s.wrapper},i.a.createElement("div",{className:s.left},e.children.slice(0,2)),i.a.createElement("div",{className:s.right},e.children.slice(2)))},d=n(48),p=n.n(d),m=n(41),f=n.n(m),v=function(e){var t=[f.a.button,e.isAccent?f.a.accent:f.a.regular,e.disabled&&f.a.disabled].join(" ");return i.a.createElement("div",{onClick:e.clickHandler,className:t},e.children)},E=n(5),h="benefits",y="advantages",g="problemSolvings",_="desires",b="solutions",k="tasks",w="problems",O=n(40),S={client:{header:"\u041a\u0442\u043e \u0432\u0430\u0448 \u043a\u043b\u0438\u0435\u043d\u0442",type:[_]},problems:{header:"\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u043a\u043b\u0438\u0435\u043d\u0442\u0430",type:[w]},idea:{header:"\u0412 \u0447\u0435\u043c \u0441\u0443\u0442\u044c \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430/\u0441\u0435\u0440\u0432\u0438\u0441\u0430/\u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438",type:[h,g]},advantages:{header:"\u0412\u0430\u0448\u0438 \u043a\u043e\u043d\u043a\u0443\u0440\u0435\u043d\u0442\u043d\u044b\u0435 \u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430",type:[y]},model:{header:"\u0411\u0438\u0437\u043d\u0435\u0441-\u043c\u043e\u0434\u0435\u043b\u044c",type:[]}},T="ADD_STICKER",j="DELETE_STICKER",N="CHANGE_STICKER_TYPE",x="CHANGE_STICKER_POSITION",A="CHANGE_STICKER_TEXT",C="START_STICKER_DRAGGING",D="STOP_STICKER_DRAGGING",I="OPEN_STICKER_EDITING_WINDOW",F="CLOSE_STICKER_EDITING_WINDOW",H="CHANGE_HOVER",M="CHANGE_FIELD",P="CHANGE_FIELD_TEXT",W="CHANGE_THEME";function G(e){return{type:j,id:e}}function R(e,t){return{type:P,field:e,text:t}}var L=n(23),B=n(106),K=n.n(B),V=n(107),X=n.n(V),q=Object(L.f)((function(e){return i.a.createElement("div",{style:{display:"flex",alignItems:"center",position:"relative"}},i.a.createElement("img",{style:{pointerEvents:"none"},src:"/"===e.match.path&&K.a||"/edit-form"===e.match.path&&X.a,alt:"timeline"}))})),U=Object(E.b)((function(e){return{disabled:function(){var t=function(t){if(!e.stickers.array.filter((function(e){return e.type===t})).length)return{v:!0}};for(var n in r){var a=t(n);if("object"===typeof a)return a.v}return!e.theme}(),stickers:e.stickers.array}}),(function(e){return{fillFields:function(t){for(var n in S){var r=S[n].type,a=[],i=!0,c=!1,o=void 0;try{for(var s,u=function(){var e=s.value;a.push.apply(a,Object(l.a)(t.filter((function(t){return t.type===e}))))},d=r[Symbol.iterator]();!(i=(s=d.next()).done);i=!0)u()}catch(m){c=!0,o=m}finally{try{i||null==d.return||d.return()}finally{if(c)throw o}}var p=a.map((function(e){return e.content})).join("\n");e(R(n,p))}}}}))((function(e){return i.a.createElement(u,null,i.a.createElement("img",{src:p.a,alt:"Logo"}),i.a.createElement(q,null),i.a.createElement(i.a.Fragment,null,i.a.createElement(v,{isAccent:!1,clickHandler:function(){alert("\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043e")}},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0447\u0435\u0440\u043d\u043e\u0432\u0438\u043a"),i.a.createElement(v,{isAccent:!0,disabled:e.disabled,clickHandler:function(){e.fillFields(e.stickers)}},i.a.createElement(O.b,{to:"/edit-form",style:{position:"absolute",height:"100%",width:"100%"}}),"\u0424\u043e\u0440\u043c\u0443\u043b\u0438\u0440\u043e\u0432\u043a\u0430 \u0438\u0434\u0435\u0438")))})),Z=n(8),z=n(30),J=n(71),Q={benefits:{color:"#BAE2E2",title:"\u0412 \u0447\u0435\u043c \u0432\u044b\u0433\u043e\u0434\u044b \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430",slots:4,helptext:i.a.createElement("div",null,"- \u0427\u0442\u043e \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442 \u043a\u043b\u0438\u0435\u043d\u0442?",i.a.createElement("br",null),"- \u041d\u0430 \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u043e\u043a\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044f \u0432\u0440\u0435\u043c\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438/\u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430/\u0431\u044e\u0434\u0436\u0435\u0442 \u0438 \u0442.\u0434.?")},advantages:{color:"#D5E9FA",title:"\u041e\u0442\u043b\u0438\u0447\u0438\u044f \u043e\u0442 \u043a\u043e\u043d\u043a\u0443\u0440\u0435\u043d\u0442\u043e\u0432",slots:4,helptext:i.a.createElement("div",null,"- \u0412 \u0447\u0435\u043c \u0437\u0430\u043a\u043b\u044e\u0447\u0430\u0435\u0442\u0441\u044f \u043a\u043e\u043d\u043a\u0443\u0440\u0435\u043d\u0442\u043d\u043e\u0435 \u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u043e \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430?",i.a.createElement("br",null),"- \u041a\u0430\u043a\u0438\u0435 \u0432\u044b\u0433\u043e\u0434\u044b \u043e\u043d \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0432 \u043e\u0442\u043b\u0438\u0447\u0438\u0435 \u043e\u0442 \u043a\u043e\u043d\u043a\u0443\u0440\u0435\u043d\u0442\u043e\u0432 ? ")},problemSolvings:{color:"#FFAA9F",title:"\u041a\u0430\u043a \u043f\u0440\u043e\u0434\u0443\u043a\u0442 \u0440\u0435\u0448\u0430\u0435\u0442 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0443",slots:8,helptext:i.a.createElement("div",null,"- \u0427\u0442\u043e \u0438\u043c\u0435\u043d\u043d\u043e \u0432\u044b \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u0435\u0442\u0435?",i.a.createElement("br",null),"- \u0412 \u0447\u0435\u043c \u0441\u0443\u0442\u044c \u0432\u0430\u0448\u0435\u0439 \u0438\u0434\u0435\u0438?")},desires:{color:"#FFE8DA",title:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043a\u043b\u0438\u0435\u043d\u0442\u0430",slots:4,helptext:i.a.createElement("div",null,"- \u041f\u0440\u043e\u0444\u0438\u043b\u044c \u0431\u0438\u0437\u043d\u0435\u0441\u0430?",i.a.createElement("br",null),"- \u0413\u0435\u043e\u0433\u0440\u0430\u0444\u0438\u044f?",i.a.createElement("br",null),"- \u0420\u0430\u0437\u043c\u0435\u0440 \u043a\u0430\u043c\u043f\u0430\u043d\u0438\u0438?",i.a.createElement("br",null),"- \u0412 \u0447\u0435\u043c \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0432\u0430\u0448\u0435\u0433\u043e \u043a\u043b\u0438\u0435\u043d\u0442\u0430?")},solutions:{color:"#E5E7FA",title:"\u041a\u0430\u043a \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u0440\u0435\u0448\u0430\u0435\u0442\u0441\u044f \u0441\u0435\u0439\u0447\u0430\u0441",slots:4,helptext:i.a.createElement("div",null,"- \u041a\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c \u0440\u0435\u0448\u0430\u044e\u0442 \u0441\u0435\u0439\u0447\u0430\u0441?",i.a.createElement("br",null),"- \u041a\u0430\u043a\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0440\u0435\u0448\u0435\u043d\u0438\u0439 \u043f\u0440\u043e\u0431\u043e\u0432\u0430\u043b\u0438?",i.a.createElement("br",null),'- \u0427\u0442\u043e \u043c\u0435\u0448\u0430\u0435\u0442 \u0440\u0435\u0448\u0438\u0442\u044c "\u0438\u0434\u0435\u0430\u043b\u044c\u043d\u043e" ?',i.a.createElement("br",null),"- \u041a\u0430\u043a\u0438\u0435 \u0432\u044b\u0433\u043e\u0434\u044b \u043a\u043b\u0438\u0435\u043d\u0442 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u043e\u0442 \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u0440\u0435\u0448\u0435\u043d\u0438\u044f?")},tasks:{color:"#FFC7A6",title:"\u041a\u0430\u043a\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438 \u0440\u0435\u0448\u0430\u0435\u0442 \u043a\u043b\u0438\u0435\u043d\u0442",slots:4,helptext:i.a.createElement("div",null,"- \u041a\u0430\u043a\u0438\u0435 \u0431\u0438\u0437\u043d\u0435\u0441-\u0437\u0430\u0434\u0430\u0447\u0438 \u0441\u0442\u043e\u044f\u0442 \u043f\u0435\u0440\u0435\u0434 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u043c?",i.a.createElement("br",null),"- \u0412 \u0447\u0435\u043c \u043a\u043b\u0438\u0435\u043d\u0442 \u0445\u043e\u0442\u0435\u043b \u0431\u044b \u0443\u043b\u0443\u0447\u0448\u0438\u0442\u044c \u0441\u0432\u043e\u0439 \u0441\u0435\u0440\u0432\u0438\u0441/\u043f\u0440\u043e\u0434\u0443\u043a\u0442?",i.a.createElement("br",null),"- \u0427\u0442\u043e \u043d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u0446\u0435\u043d\u043d\u043e \u0434\u043b\u044f \u043a\u043b\u0438\u0435\u043d\u0442\u0430  \u0441 \u0442\u043e\u0447\u043a\u0438 \u0437\u0440\u0435\u043d\u0438\u044f \u0434\u0435\u043d\u0435\u0433, \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0438 \u0443\u0441\u0438\u043b\u0438\u0439?")},problems:{color:"#A5AFFB",title:"\u041a\u0430\u043a\u0438\u0435 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u0432\u043e\u0437\u043d\u0438\u043a\u0430\u044e\u0442 \u0443 \u043a\u043b\u0438\u0435\u043d\u0442\u0430",slots:4,helptext:i.a.createElement("div",null,"- \u0427\u0442\u043e \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u043d\u0435 \u0443\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u0442 \u0432 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430\u0445/\u0441\u0435\u0440\u0432\u0438\u0441\u0430\u0445?",i.a.createElement("br",null),"- \u0421 \u043a\u0430\u043a\u0438\u043c\u0438  \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u044f\u043c\u0438/\u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430\u043c\u0438 \u0441\u0442\u0430\u043b\u043a\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043a\u043b\u0438\u0435\u043d\u0442?",i.a.createElement("br",null),"- \u041a\u0430\u043a\u0438\u0435 \u043f\u043e\u0442\u0435\u0440\u0438 \u0432\u043e\u0437\u043d\u0438\u043a\u0430\u044e\u0442 \u0447\u0430\u0449\u0435 \u0432\u0441\u0435\u0433\u043e ?",i.a.createElement("br",null),"- \u041a\u0430\u043a \u0432\u043e\u0437\u043d\u0438\u043a\u0430\u044e\u0442 \u044d\u0442\u0438 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b?",i.a.createElement("br",null),"- \u0427\u0442\u043e \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u0440\u0438\u0447\u0438\u043d\u043e\u0439? ")}},Y=function(e){var t=Object(z.c)({item:{id:e.id,type:e.type},begin:function(){e.startStickerDragging(e.id,e.type)},end:function(t,n){e.stopStickerDragging();var r=n.getDropResult();r&&"Slot"===r.type||r&&e.changeStickerType(e.id,r.type)}}),n=Object(Z.a)(t,2)[1];return i.a.createElement("div",{ref:n,style:{backgroundColor:Q[e.type].color,opacity:e.id===e.stickerDraggingId?.01:1},className:"".concat(J.wrapper," ").concat(J.stickerFonts),onClick:function(){e.openStickerEditingWindow(e.id,e.type)}},e.header,e.content&&"...")},$=Object(E.b)((function(e){return{stickerDraggingId:e.stickerDragging.id}}),(function(e){return{startStickerDragging:function(t,n){return e(function(e,t){return{type:C,id:e,stickerType:t}}(t,n))},stopStickerDragging:function(){return e({type:D})},deleteSticker:function(t){return e(G(t))},changeStickerType:function(t,n){return e(function(e,t){return{type:N,id:e,newType:t}}(t,n))},openStickerEditingWindow:function(t,n){return e(function(e,t){return{type:I,id:e,stickerType:t}}(t,n))}}}))(Y),ee=n(110),te=n.n(ee),ne=n(111),re=n.n(ne),ae=function(e){var t=Object(z.d)({accept:e.type,collect:function(e){return{isOver:!!e.isOver()}},drop:function(){return{type:"Slot",position:e.position}}}),n=Object(Z.a)(t,2),r=n[0].isOver,a=n[1],c=i.a.useState(!1),o=Object(Z.a)(c,2),l=o[0],s=o[1];return r&&!l?(s(!0),e.changeStickerPosition(e.id,e.position)):!r&&l&&s(!1),i.a.createElement("div",{ref:a,className:re.a.slot},e.children)},ie=Object(E.b)((function(e){return{id:e.stickerDragging.id}}),(function(e){return{changeStickerPosition:function(t,n){e(function(e,t){return{type:x,id:e,position:t}}(t,n))}}}))(ae),ce=n(112),oe=n.n(ce),le=n(120),se=(n(175),n(52)),ue=n.n(se),de=function(e){var t=Q[e.type].color,n={backgroundColor:[t]};return i.a.createElement("div",{className:ue.a.wrapper,onClick:function(){e.addSticker(e.type)},style:{borderColor:[t],visibility:e.isVisible?"visible":"hidden"}},i.a.createElement("div",{className:ue.a.horisontal,style:n}),i.a.createElement("div",{className:ue.a.vertical,style:n}))},pe=Object(E.b)((function(e,t){return{isVisible:e.hover===t.type}}),(function(e){return{addSticker:function(t){e(function(e){return{type:T,stickerType:e}}(t))}}}))(de),me=function(e){for(var t=[],n=0;n<e.children.length;n++)t.push(i.a.createElement(ie,{key:n,type:e.type,position:n,isActive:e.isActive},e.children[n]));return i.a.createElement(le.a,{style:{height:"15vw",width:"100%"}},i.a.createElement("div",{className:oe.a.wrapper},t,i.a.createElement(pe,{type:e.type})))},fe=function(e){var t=[];for(var n in r)t.push(r[n]);t=t.filter((function(t){return t!==e.type}));var a=Object(z.d)({accept:t,collect:function(e){return{isOver:!!e.isOver()}},drop:function(){return{type:e.type}}}),c=Object(Z.a)(a,2),o=c[0].isOver,l=c[1],s=e.stickers.sort((function(e,t){return e.position-t.position})).map((function(e){return i.a.createElement($,{key:e.id,header:e.header,content:e.content,position:e.position,id:e.id,type:e.type})}));return i.a.createElement("div",{className:te.a.wrapper,ref:l,onMouseLeave:function(){return e.changeHover("")},onMouseOver:function(){e.hover!==e.type&&e.changeHover(e.type)},style:{boxShadow:o?"inset 0 0 1px 3px "+Q[e.type].color:"none"}},e.isOnTop&&e.children,i.a.createElement(me,{type:e.type,slots:Q[e.type].slots},s),!e.isOnTop&&e.children)},ve=Object(E.b)((function(e,t){return{stickers:e.stickers.array.filter((function(e){return e.type===t.type})),hover:e.hover}}),(function(e){return{changeHover:function(t){e(function(e){return{type:H,hover:e}}(t))}}}))(fe),Ee=n(75),he=n.n(Ee),ye=n(76),ge=n(196),_e=n(118),be=n(195),ke=Object(E.b)((function(e){return{isStickerEditingActive:e.stickerEditingWindow.isActive}}))((function(e){var t=Object(_e.a)({overrides:{MuiTooltip:{tooltip:{fontSize:"1rem",opacity:1}}}});return i.a.createElement(be.a,{theme:t},e.isStickerEditingActive?i.a.createElement(ge.a,{title:Q[e.type].helptext,placement:"right"},i.a.createElement("div",{className:ye.icon})):i.a.createElement(ge.a,{title:Q[e.type].helptext},i.a.createElement("div",{className:ye.icon})))})),we=function(e){return i.a.createElement("div",{className:he.a.wrapper},i.a.createElement("div",{className:he.a.title},Q[e.type].title),i.a.createElement(ke,{type:e.type}))},Oe=n(25),Se=n.n(Oe),Te=(n(176),function(e){var t=i.a.useState(e.value),n=Object(Z.a)(t,2),r=n[0],a=n[1];return i.a.createElement("textarea",{placeholder:e.placeholder,value:r,onChange:function(t){a(t.target.value),e.onChange&&e.onChange(t.target.value)},maxLength:e.maxLength,disabled:e.disabled})}),je=function(e){return i.a.createElement("div",{className:Se.a.main},i.a.createElement("div",{className:Se.a["work-area-wrapper"]},i.a.createElement("div",{className:Se.a.title},"\u0412\u0410\u0428 \u041f\u0420\u041e\u0414\u0423\u041a\u0422"),i.a.createElement("div",{className:Se.a["work-area"]},e.children[0])),i.a.createElement("div",{className:Se.a["theme-field"]},i.a.createElement(Te,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0438\u0434\u0435\u0438",maxLength:42,value:e.theme,onChange:function(t){e.changeTheme(t)}})),i.a.createElement("div",{className:Se.a["work-area-wrapper"]},i.a.createElement("div",{className:Se.a.title},"\u0412\u0410\u0428 \u041a\u041b\u0418\u0415\u041d\u0422"),i.a.createElement("div",{className:Se.a["work-area"]},e.children[1])))},Ne=Object(E.b)((function(e){return{theme:e.theme}}),(function(e){return{changeTheme:function(t){e(function(e){return{type:W,theme:e}}(t))}}}))((function(e){var t=[{id:1,isOnTop:!0,type:h},{id:2,isOnTop:!0,type:y},{id:3,isOnTop:!1,type:g},{id:4,isOnTop:!0,type:_},{id:5,isOnTop:!0,type:w},{id:6,isOnTop:!1,type:b},{id:7,isOnTop:!1,type:k}].map((function(e,t){return i.a.createElement(ve,{key:e.type,type:e.type,isOnTop:e.isOnTop},i.a.createElement(we,{key:e.id,type:e.type}))}));return i.a.createElement(je,{theme:e.theme,changeTheme:e.changeTheme},t.slice(0,3),t.slice(3))})),xe=n(24),Ae=n.n(xe),Ce=function(e){var t=i.a.useState(e.sticker.header),n=Object(Z.a)(t,2),r=n[0],a=n[1],c=i.a.useState(e.sticker.content),o=Object(Z.a)(c,2),l=o[0],s=o[1];return i.a.createElement("div",{className:Ae.a.blur,onClick:function(e){e.stopPropagation()}},i.a.createElement("div",{className:Ae.a.wrapper},i.a.createElement("div",{className:Ae.a.title},Q[e.sticker.type].title,i.a.createElement(ke,{type:e.sticker.type})),i.a.createElement("div",{className:Ae.a.textareaContainer},i.a.createElement("strong",null,"\u0422\u0435\u043c\u0430 \u0441\u0442\u0438\u043a\u0435\u0440\u0430"),i.a.createElement("textarea",{maxLength:"37",className:Ae.a.stickerTittle,placeholder:"\u041a\u0440\u0430\u0442\u043a\u043e \u0441\u0444\u043e\u0440\u043c\u0443\u043b\u0438\u0440\u0443\u0439\u0442\u0435 \u0442\u0435\u043c\u0443 \u0441\u0442\u0438\u043a\u0435\u0440\u0430. \u0422\u0435\u043c\u0430 \u0431\u0443\u0434\u0435\u0442 \u0432\u0438\u0434\u043d\u0430 \u043d\u0430 \u0448\u0430\u0431\u043b\u043e\u043d\u0435",value:r,onChange:function(e){return a(e.target.value)}})),i.a.createElement("div",{className:Ae.a.textareaContainer},i.a.createElement("strong",null,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),i.a.createElement("textarea",{maxLength:"337",className:Ae.a.stickerDescription,placeholder:"\u0421\u0444\u043e\u0440\u043c\u0443\u043b\u0438\u0440\u0443\u0439\u0442\u0435 \u0441\u0432\u043e\u0438 \u043c\u044b\u0441\u043b\u0438",value:l,onChange:function(e){return s(e.target.value)}})),i.a.createElement("div",{className:Ae.a.footer},i.a.createElement(v,{isAccent:!1,clickHandler:e.closeWindow},"\u041e\u0442\u043c\u0435\u043d\u0430"),i.a.createElement(v,{isAccent:!0,clickHandler:function(){e.closeWindow(),e.changeStickerText(e.sticker.id,r,l)}},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")),i.a.createElement("div",{className:Ae.a.delete,onClick:function(){e.closeWindow(),e.deleteSticker(e.sticker.id)}})))},De=Object(E.b)((function(e){return{sticker:e.stickers.array.filter((function(t){return t.id===e.stickerEditingWindow.id}))[0],isActive:e.stickerEditingWindow.isActive}}),(function(e){return{closeWindow:function(){return e({type:F})},changeStickerText:function(t,n,r){return e(function(e,t,n){return{type:A,id:e,header:t,content:n}}(t,n,r))},deleteSticker:function(t){return e(G(t))}}}))(Ce),Ie=Object(E.b)((function(e){return{isStickerEditingActive:e.stickerEditingWindow.isActive}}))((function(e){return i.a.createElement("div",{style:{height:"100%",display:"flex",flexDirection:"column"}},i.a.createElement(U,null),i.a.createElement(Ne,null),e.isStickerEditingActive&&i.a.createElement(De,null))})),Fe=function(e){return i.a.createElement(u,null,i.a.createElement("img",{src:p.a,alt:"Logo"}),i.a.createElement(q,null),i.a.createElement(v,{isAccent:!0,clickHandler:function(){alert("\u041f\u043e\u0434\u0430\u043d\u043e")}},"\u041f\u043e\u0434\u0430\u0442\u044c \u0438\u0434\u0435\u044e"))},He=n(26),Me=n.n(He),Pe=n(42),We=n.n(Pe),Ge=n(77),Re=function(e){var t=i.a.useState(e.children[0]),n=Object(Z.a)(t,2),r=n[0],a=n[1],c=e.children.map((function(e){var t=[We.a.radio,r===e&&We.a.checked].join(" ");return i.a.createElement(Ge.RadioButton,{key:e,value:e,className:t},S[e].header)})),o=[We.a.wrapper,e.disabled&&We.a.disabled].join(" ");return i.a.createElement("div",{className:o},i.a.createElement(Ge.RadioGroup,{name:e.name,selectedValue:r,onChange:function(t){e.changeHandler&&e.changeHandler(t),a(t)}},c))},Le=n(116),Be=n.n(Le),Ke=n(117),Ve=n.n(Ke),Xe=function(e){var t=e.value,n=i.a.useState(!1),r=Object(Z.a)(n,2),a=r[0],c=r[1],o=i.a.createElement("div",{className:Me.a["edit-window"]},i.a.createElement(Te,{value:t,onChange:function(t){return e.changeFieldText(e.currentField,t)}}),i.a.createElement("div",{className:Me.a["edit-button"],style:{backgroundImage:"url(".concat(Ve.a,")")},onClick:function(){c(!1)}}));return i.a.createElement("div",{className:Me.a.main},i.a.createElement(Re,{name:"form-fields",changeHandler:e.changeField,disabled:a},"client","problems","idea","advantages","model"),i.a.createElement("div",{className:Me.a.wrapper},i.a.createElement("span",{className:Me.a.tip},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0442\u0432\u043e\u0435\u0439 \u0438\u0434\u0435\u0438 \u0431\u044b\u043b\u043e \u0441\u043e\u0431\u0440\u0430\u043d\u043e \u0438 \u0441\u0432\u0435\u0434\u0435\u043d\u043e \u043d\u0438\u0436\u0435. \u0422\u044b \u043c\u043e\u0436\u0435\u0448\u044c \u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0444\u043e\u0440\u043c\u0443\u043b\u0438\u0440\u043e\u0432\u043a\u0443 \u0438\u0434\u0435\u0438 \u0442\u0430\u043a\u043e\u0439 \u0438\u043b\u0438 \u043e\u0442\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u0447\u0442\u043e\u0431\u044b \u0434\u043e\u043d\u0435\u0441\u0442\u0438 \u0441\u0443\u0442\u044c \u0438 \u0446\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u0442\u0432\u043e\u0435\u0439 \u0438\u0434\u0435\u0438."),i.a.createElement("strong",{className:Me.a.theme},e.theme),i.a.createElement("div",{className:Me.a["edit-form"],style:{overflow:a?"hidden":"auto"}},i.a.createElement("div",{className:Me.a["edit-button"],style:{backgroundImage:"url(".concat(Be.a,")")},onClick:function(){c(!0)}}),t,a&&o)))},qe=Object(E.b)((function(e){return{value:e.fieldValues[e.currentField],currentField:e.currentField,theme:e.theme}}),(function(e){return{changeField:function(t){e(function(e){return{type:M,field:e}}(t))},changeFieldText:function(t,n){e(R(t,n))}}}))(Xe),Ue=function(e){return i.a.createElement("div",{style:{height:"100%",display:"flex",flexDirection:"column"}},i.a.createElement(Fe,null),i.a.createElement(qe,null))};var Ze=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(L.c,null,i.a.createElement(L.a,{path:"/",exact:!0,component:Ie}),i.a.createElement(L.a,{path:"/edit-form",exact:!0,component:Ue})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ze=n(32),Je=n(7);function Qe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ye(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Qe(n,!0).forEach((function(t){Object(Je.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qe(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var $e,et={array:[],currentId:0},tt={isActive:!1,id:-1,type:""},nt={isActive:!1,id:-1,type:""};function rt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function at(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?rt(n,!0).forEach((function(t){Object(Je.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):rt(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var it=($e={},Object(Je.a)($e,"client",""),Object(Je.a)($e,"problems",""),Object(Je.a)($e,"idea",""),Object(Je.a)($e,"advantages",""),Object(Je.a)($e,"model",""),$e),ct=Object(ze.c)(Object(ze.b)({stickers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:et,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:var n=[0].concat(Object(l.a)(e.array.filter((function(e){return e.type===t.stickerType})).map((function(e){return e.position})))),r={header:"",content:"",position:Math.max.apply(Math,Object(l.a)(n))+1,id:e.currentId+1,type:t.stickerType};return Ye({},e,{currentId:e.currentId+1,array:[].concat(Object(l.a)(e.array),[r])});case j:return Ye({},e,{array:Object(l.a)(e.array.filter((function(e){return e.id!==t.id})))});case N:var a=e.array.filter((function(e){return e.type===t.newType})).length;return Ye({},e,{array:Object(l.a)(e.array.map((function(e){return e.id===t.id&&(e.type=t.newType,e.position=a),e})))});case x:var i=e.array.filter((function(e){return e.id===t.id}))[0],c=!!(i.position<t.position),o=e.array.filter((function(e){return e.type===i.type}));return o=o.map((function(e){return e.id===t.id&&(e.position=c?t.position+.5:t.position-.5),e})).sort((function(e,t){return e.position-t.position})).map((function(e,t){return e.position=t,e})),Ye({},e,{array:[].concat(Object(l.a)(e.array.filter((function(e){return e.type!==i.type}))),Object(l.a)(o))});case A:return Ye({},e,{array:Object(l.a)(e.array.map((function(e){return e.id===t.id&&(e.header=t.header,e.content=t.content),e})))});default:return e}},stickerDragging:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return{id:t.id,type:t.stickerType,isActive:!0};case D:return tt;default:return e}},stickerEditingWindow:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return{type:t.stickerType,isActive:!0,id:t.id};case F:return nt;default:return e}},hover:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H:return t.hover;default:return e}},currentField:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"client",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return t.field;default:return e}},fieldValues:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:it,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return at({},e,Object(Je.a)({},t.field,t.text));default:return e}},theme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W:return t.theme;default:return e}}}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),ot=n(119);o.a.render(i.a.createElement(E.a,{store:ct},i.a.createElement(O.a,null,i.a.createElement(z.b,{backend:ot.a},i.a.createElement(Ze,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},24:function(e,t,n){e.exports={wrapper:"StickerEditingWindow_wrapper__2JUSW",blur:"StickerEditingWindow_blur__2TCsA",title:"StickerEditingWindow_title__3jRwn",textareaContainer:"StickerEditingWindow_textareaContainer__3VBxH",stickerTittle:"StickerEditingWindow_stickerTittle__Q2VuL",stickerDescription:"StickerEditingWindow_stickerDescription__VK2ZU",footer:"StickerEditingWindow_footer__1-5Gw",delete:"StickerEditingWindow_delete___X8or"}},25:function(e,t,n){e.exports={main:"MainArea_main__RgGdS","work-area":"MainArea_work-area__26qNz","work-area-wrapper":"MainArea_work-area-wrapper__1Qwqm",title:"MainArea_title__2rqa5","theme-field":"MainArea_theme-field__5T1q0"}},26:function(e,t,n){e.exports={main:"MainArea_main__1dxkX",wrapper:"MainArea_wrapper__1_MyM",tip:"MainArea_tip__VTIuR","edit-form":"MainArea_edit-form__3pKoi","edit-button":"MainArea_edit-button__HqGcb","edit-window":"MainArea_edit-window__2u1t8",theme:"MainArea_theme__CqSee"}},41:function(e,t,n){e.exports={button:"Button_button__BvvFw",disabled:"Button_disabled__2LK2D",accent:"Button_accent__1lcfN",regular:"Button_regular__EcidX"}},42:function(e,t,n){e.exports={wrapper:"SideMenu_wrapper__3-6Ff",radio:"SideMenu_radio__1pifv",checked:"SideMenu_checked__2p8ld",disabled:"SideMenu_disabled__3DGF-"}},48:function(e,t,n){e.exports=n.p+"static/media/Logo.b40c2faf.svg"},51:function(e,t,n){e.exports={wrapper:"Header_wrapper__agfE8",left:"Header_left__3ZTaK",right:"Header_right__28Phs"}},52:function(e,t,n){e.exports={wrapper:"AddButton_wrapper__36ZMP",horisontal:"AddButton_horisontal__3q24E",vertical:"AddButton_vertical__3v3G8"}},71:function(e,t,n){e.exports={wrapper:"Sticker_wrapper__2_giU",stickerFonts:"Sticker_stickerFonts__SZbfw"}},75:function(e,t,n){e.exports={wrapper:"SegmentHeader_wrapper__3nz3h",title:"SegmentHeader_title__2k4R0"}},76:function(e,t,n){e.exports={icon:"HelpIcon_icon__3mCFN","MuiTooltip-popper":"HelpIcon_MuiTooltip-popper__1mBoP"}}},[[122,1,2]]]);
//# sourceMappingURL=main.7771fa92.chunk.js.map