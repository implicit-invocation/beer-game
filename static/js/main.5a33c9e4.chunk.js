(this["webpackJsonpbalancing-game"]=this["webpackJsonpbalancing-game"]||[]).push([[0],{27:function(e,t,n){e.exports=n(65)},29:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var r=n(3),o=n.n(r),a=n(2),i=n(5),l=(n(29),n(1)),y=n(18),c=n.n(y),u=n(0),d=(new u.b2Vec2(0,0),function(e,t,n,r,o,a){e.draw(t,n-.75*a,r-2.3*a,1.5*a,5.3*a,.75*a,2.3*a,o)}),f=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,a=new u.b2BodyDef;a.type=u.b2BodyType.b2_dynamicBody,a.position.Set(t,n);var i=e.CreateBody(a),l=new u.b2PolygonShape;l.SetAsBox(.3*r,.3*r,new u.b2Vec2(0,-2*r));var y=new u.b2PolygonShape;y.Set([new u.b2Vec2(-.3*r,-1.7*r),new u.b2Vec2(.3*r,-1.7*r),new u.b2Vec2(.75*r,.5*r),new u.b2Vec2(-.75*r,.5*r)]);var c=new u.b2PolygonShape;return c.SetAsBox(.75*r,1.2*r,new u.b2Vec2(0,1.75*r)),i.CreateFixture(l,o),i.CreateFixture(y,o),i.CreateFixture(c,o),i};(function(){var e=Object(i.a)(o.a.mark((function e(){var t,n,r,i,y,v,b,s,h,w,p,g,x,S,B,m,P,j,C,G,O,V,k,A,F,I,D,E,M,T,_,L,R,J,H,U,W,q;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.getElementById("main"),n=document.getElementById("info"),r=document.getElementById("overlay"),i=Object(l.i)(t),y=Object(a.a)(i,2),v=y[0],b=y[1],s=10/b*v,h=10,w=t.getContext("webgl"),e.next=8,Object(l.h)(w,"./art/bg.jpg");case 8:return p=e.sent,e.next=11,Object(l.h)(w,"./art/disk.png");case 11:return g=e.sent,e.next=14,Object(l.h)(w,"./art/can-1.png");case 14:return x=e.sent,e.next=17,Object(l.h)(w,"./art/can-2.png");case 17:return S=e.sent,e.next=20,Object(l.h)(w,"./art/bottle.png");case 20:B=e.sent,m=new u.b2World(new u.b2Vec2(0,10)),c()(w),P=Object(l.c)(w),j=Object(l.e)(s,h,v,b),C=new l.a(t),G=function(e,t,n,r,o){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,i=new u.b2BodyDef;i.type=u.b2BodyType.b2_dynamicBody,i.position.Set(t,n);var l=e.CreateBody(i),y=new u.b2PolygonShape;return y.SetAsBox(r/2,o/2,new u.b2Vec2(0,0),0),l.CreateFixture(y,a),l},O=function(e,t,n,r){var o=new u.b2BodyDef;o.type=u.b2BodyType.b2_dynamicBody,o.position.Set(t,n);for(var a=e.CreateBody(o),i=new u.b2PolygonShape,l=[],y=0;y<12;y++){var c=new u.b2Vec2(0,r);c.SelfRotate(Math.PI/6*y),l.push(c)}return i.Set(l,12),a.CreateFixture(i,1),a},.2,k=function(e,t,n,r,o){var a=new u.b2BodyDef;a.type=u.b2BodyType.b2_kinematicBody,a.position.Set(t,n);var i=e.CreateBody(a),l=new u.b2PolygonShape;return l.SetAsBox(r/2,o/2,new u.b2Vec2(0,0),0),i.CreateFixture(l,1),i}(m,s/2,2*h/3,V=3*s/4,.2),A=Math.PI/4,F=Math.PI,1.2,.6,.3,.4,I=!0,D=[],E=[],M=[],T=0,_=F,L=function(){I=!1,T=0,_=F;var e=!0,t=!1,n=void 0;try{for(var r,o=D[Symbol.iterator]();!(e=(r=o.next()).done);e=!0){var a=r.value;m.DestroyBody(a)}}catch(S){t=!0,n=S}finally{try{e||null==o.return||o.return()}finally{if(t)throw n}}D.length=0;var i=!0,l=!1,y=void 0;try{for(var c,u=E[Symbol.iterator]();!(i=(c=u.next()).done);i=!0){var d=c.value;m.DestroyBody(d)}}catch(S){l=!0,y=S}finally{try{i||null==u.return||u.return()}finally{if(l)throw y}}E.length=0;var v=!0,b=!1,w=void 0;try{for(var p,g=M[Symbol.iterator]();!(v=(p=g.next()).done);v=!0){var x=p.value;m.DestroyBody(x)}}catch(S){b=!0,w=S}finally{try{v||null==g.return||g.return()}finally{if(b)throw w}}M.length=0,k.SetAngle(0),D.push(O(m,s/2,h/2,.3)),E.push(G(m,s/3+.1,h/2,.6,1.2,3)),M.push(f(m,2*s/3-.1,h/2,.4,3))},R=function(){L(),r.style.display="none"},r.addEventListener("click",(function(){R()})),L(),J=new l.b(0,0),H=new l.b(0,0),U=window.devicePixelRatio||1,C.addEventListener("touchStart",(function(e,t){e*=U,t*=U,J.set(e,t),j.unprojectVector2(H,J),_=H.x<s/2?-F:F})),document.addEventListener("keydown",(function(e){65===e.which?_=-F:68===e.which?_=F:82===e.which&&I&&R()})),w.clearColor(0,0,0,1),W=function(e){if(w.clear(w.COLOR_BUFFER_BIT),!I){var t=!0,n=!1,o=void 0;try{for(var a,i=D[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){if(a.value.GetPosition().y>=h){I=!0;break}}}catch(oe){n=!0,o=oe}finally{try{t||null==i.return||i.return()}finally{if(n)throw o}}var l=!0,y=!1,c=void 0;try{for(var u,f=E[Symbol.iterator]();!(l=(u=f.next()).done);l=!0){if(u.value.GetPosition().y>=h){I=!0;break}}}catch(oe){y=!0,c=oe}finally{try{l||null==f.return||f.return()}finally{if(y)throw c}}var v=!0,b=!1,C=void 0;try{for(var G,O=M[Symbol.iterator]();!(v=(G=O.next()).done);v=!0){if(G.value.GetPosition().y>=h){I=!0;break}}}catch(oe){b=!0,C=oe}finally{try{v||null==O.return||O.return()}finally{if(b)throw C}}I&&(r.style.display="flex")}I||(T+=_*e,T=Math.max(T,-A),T=Math.min(T,A),k.SetAngularVelocity(T),m.Step(e,8,3)),P.setProjection(j.combined),P.begin(),P.draw(p,0,0,s,h),P.draw(g,k.GetPosition().x-V/2,k.GetPosition().y-.1,V,.2,V/2,.1,k.GetAngle());var F=!0,L=!1,R=void 0;try{for(var J,H=D[Symbol.iterator]();!(F=(J=H.next()).done);F=!0){var U=J.value,W=U.GetPosition();P.draw(x,W.x-.3,W.y-.3,.6,.6,.3,.3,U.GetAngle())}}catch(oe){L=!0,R=oe}finally{try{F||null==H.return||H.return()}finally{if(L)throw R}}var q=!0,z=!1,K=void 0;try{for(var N,Q=E[Symbol.iterator]();!(q=(N=Q.next()).done);q=!0){var X=N.value,Y=X.GetPosition();P.draw(S,Y.x-.3,Y.y-.6,.6,1.2,.3,.6,X.GetAngle())}}catch(oe){z=!0,K=oe}finally{try{q||null==Q.return||Q.return()}finally{if(z)throw K}}var Z=!0,$=!1,ee=void 0;try{for(var te,ne=M[Symbol.iterator]();!(Z=(te=ne.next()).done);Z=!0){var re=te.value;d(P,B,re.GetPosition().x,re.GetPosition().y,re.GetAngle(),.4)}}catch(oe){$=!0,ee=oe}finally{try{Z||null==ne.return||ne.return()}finally{if($)throw ee}}P.end()},q=Object(l.d)(W),setInterval((function(){return n.innerHTML="FPS: ".concat(Math.round(q.getFps()))}),1e3);case 57:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}},[[27,1,2]]]);
//# sourceMappingURL=main.5a33c9e4.chunk.js.map