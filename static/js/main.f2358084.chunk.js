(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(7),r=n.n(c),i=(n(14),n(5)),s=n(8),l=n(1),d=n(2),u=n(4),h=n(3),m=(n(15),function(e){var t=e.form,n=e.children;return o.a.createElement("main",{className:"todo-list-template"},o.a.createElement("div",{className:"title"},"To do List"),o.a.createElement("section",{className:"form-wrapper"},t),o.a.createElement("section",{className:"todos-wrapper"},n))}),v=(n(16),function(e){var t=e.value,n=e.onChange,a=e.onCreate,c=e.onKeyPress;return o.a.createElement("div",{className:"form"},o.a.createElement("input",{value:t,onChange:n,onKeyPress:c}),o.a.createElement("div",{className:"create-button",onClick:a},"\ucd94\uac00"))}),p=(n(17),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return this.props.checked!==e.checked}},{key:"render",value:function(){var e=this.props,t=e.text,n=e.checked,a=e.id,c=e.onToggle,r=e.onRemove;return o.a.createElement("div",{className:"todo-item",onClick:function(){return c(a)}},o.a.createElement("div",{className:"remove",onClick:function(e){e.stopPropagation(),r(a)}},"\xd7"),o.a.createElement("div",{className:"todo-text ".concat(n&&"checked")},o.a.createElement("div",null,t)),n&&o.a.createElement("div",{className:"check-mark"},"\u2713"))}}]),n}(a.Component)),f=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return this.props.todos!==e.todos}},{key:"render",value:function(){var e=this.props,t=e.todos,n=e.onToggle,a=e.onRemove,c=t.map((function(e){var t=e.id,c=e.text,r=e.checked;return o.a.createElement(p,{id:t,text:c,checked:r,onToggle:n,onRemove:a,key:t})}));return o.a.createElement("div",null,c)}}]),n}(a.Component),k=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).id=3,e.state={input:"",todos:[{id:0,text:"Node.js, NPM",checked:!1},{id:1,text:"package.json",checked:!0},{id:2,text:"React Setup",checked:!1}]},e.handleChange=function(t){e.setState({input:t.target.value})},e.handleCreate=function(){var t=e.state,n=t.input,a=t.todos;e.setState({input:"",todos:a.concat({id:e.id++,text:n,checked:!1})})},e.handleKeyPress=function(t){"Enter"===t.key&&e.handleCreate()},e.handleToggle=function(t){var n=e.state.todos,a=n.findIndex((function(e){return e.id===t})),o=n[a],c=Object(s.a)(n);c[a]=Object(i.a)(Object(i.a)({},o),{},{checked:!o.checked}),e.setState({todos:c})},e.handleRemove=function(t){var n=e.state.todos;e.setState({todos:n.filter((function(e){return e.id!==t}))})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.input,n=e.todos,a=this.handleChange,c=this.handleCreate,r=this.handleKeyPress,i=this.handleToggle,s=this.handleRemove;return o.a.createElement(m,{form:o.a.createElement(v,{value:t,onKeyPress:r,onChange:a,onCreate:c})},o.a.createElement(f,{todos:n,onToggle:i,onRemove:s}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.f2358084.chunk.js.map