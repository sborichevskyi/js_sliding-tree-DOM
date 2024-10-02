document.querySelectorAll("li:has(ul)").forEach(function(e){var t=e.childNodes[0],l=document.createElement("span");l.textContent=t.textContent,t.replaceWith(l),l.addEventListener("click",function(t){var l=e.querySelector("ul");if(l){var n="block"===l.style.display;l.style.display=n?"none":"block"}t.stopPropagation()})});
//# sourceMappingURL=index.f10fe27e.js.map
