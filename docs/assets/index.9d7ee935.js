import{S as e,P as n,W as r,T as o,M as i,a as t}from"./vendor.11c129de.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&n(e)})).observe(document,{childList:!0,subtree:!0})}function n(e){if(e.ep)return;e.ep=!0;const n=function(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?n.credentials="include":"anonymous"===e.crossorigin?n.credentials="omit":n.credentials="same-origin",n}(e);fetch(e.href,n)}}();const s=new e,c=new n(75,window.innerWidth/window.innerHeight,.1,1e3),d=new r({canvas:document.querySelector("#background")});d.setPixelRatio(window.devicePixelRatio),d.setSize(window.innerWidth,window.innerHeight),c.position.setZ(30),d.render(s,c);const a=new t(new o(10,3,16,100),new i({color:16737095,wireframe:!0}));s.add(a),function e(){requestAnimationFrame(e),a.rotation.x+=.01,a.rotation.y+=.005,a.rotation.z+=.01,d.render(s,c)}();