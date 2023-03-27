(function(){"use strict";var t={5360:function(t,e,o){var n=o(144),r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("link",{attrs:{rel:"preconnect",href:"https://fonts.googleapis.com"}}),e("link",{attrs:{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:""}}),e("link",{attrs:{href:"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap",rel:"stylesheet"}}),t._m(0),e("todo-summary"),e("todo-list"),e("new-todo"),e("app-description")],1)},s=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"page-heading"},[e("h1",{attrs:{id:"title"}},[t._v("Welcome to")]),e("h2",{attrs:{id:"description"}},[t._v("Daily-Does-It Tracker App")])])}],a=function(){var t=this,e=t._self._c;return e("section",{staticClass:"todo-list"},[e("h1",{staticClass:"todo-title"},[t._v("My Daily Routine")]),e("ul",t._l(t.$store.state.todos,(function(o){return e("li",{key:o.name,class:{"todo-completed":o.done}},[e("input",{attrs:{type:"checkbox"},domProps:{checked:o.done},on:{click:function(e){return t.checkTodoBox(o)}}}),e("span",{class:{completed:o.done}},[t._v(t._s(o.name))])])})),0)])},i=[],l={methods:{checkTodoBox(t){this.$store.commit("FLIP_DONE",t)}}},c=l,d=o(1001),u=(0,d.Z)(c,a,i,!1,null,null,null),p=u.exports,m=function(){var t=this,e=t._self._c;return e("section",{staticClass:"new-todo"},[e("form",{on:{submit:function(e){return e.preventDefault(),t.saveTodo.apply(null,arguments)}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodo.name,expression:"newTodo.name"}],staticClass:"name",attrs:{type:"text",placeholder:"Name"},domProps:{value:t.newTodo.name},on:{input:function(e){e.target.composing||t.$set(t.newTodo,"name",e.target.value)}}}),e("select",{directives:[{name:"model",rawName:"v-model",value:t.newTodo.category,expression:"newTodo.category"}],staticClass:"name",on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.newTodo,"category",e.target.multiple?o:o[0])}}},[e("option",{attrs:{value:""}},[t._v("--- Select a category ---")]),e("option",{attrs:{value:"Home"}},[t._v("Home")]),e("option",{attrs:{value:"Work"}},[t._v("Work")])]),e("button",{staticClass:"add"},[t._v("Add")])])])},f=[],h={data(){return{newTodo:{name:"",category:"",done:!1}}},methods:{saveTodo(){this.newTodo.done=!1,this.$store.commit("ADD_NEW_TODO",this.newTodo),this.newTodo={name:"",category:"",done:!1}}}},v=h,_=(0,d.Z)(v,m,f,!1,null,null,null),g=_.exports,y=function(){var t=this,e=t._self._c;return e("section",{staticClass:"todo-summary"},[e("div",[e("h3",[t._v("Home")]),e("p",[t._v(t._s(t.completedHomeTodos)+" / "+t._s(t.totalHomeTodos))])]),e("div",[e("h3",[t._v("Work")]),e("p",[t._v(t._s(t.completedWorkTodos)+" / "+t._s(t.totalWorkTodos))])])])},k=[],T={computed:{totalHomeTodos(){return this.$store.state.todos.filter((t=>"Home"===t.category)).length},completedHomeTodos(){return this.$store.state.todos.filter((t=>!0===t.done&&"Home"===t.category)).length},totalWorkTodos(){return this.$store.state.todos.filter((t=>"Work"===t.category)).length},completedWorkTodos(){return this.$store.state.todos.filter((t=>!0===t.done&&"Work"===t.category)).length}}},w=T,b=(0,d.Z)(w,y,k,!1,null,null,null),x=b.exports,O=function(){var t=this;t._self._c;return t._m(0)},D=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"description-container"},[e("h3",[t._v("Getting Started:")]),e("p",[t._v("Before you start: Each To-Do list task is categorized into one of two different categories, 'Work' and 'Home'. You'll want to make sure you select this when adding your task.")]),e("ol",[e("li",[t._v("Start by writing in your desired task in the name field.")]),e("li",[t._v("Select the category the task would fall under")]),e("li",[t._v("Add it to the list by clicking Add.")]),e("li",[t._v("Mark the task completed by checking the box next to it.")]),e("li",[t._v("Repeat as needed and that's it! You're on your way to increased productivity!")])]),e("p",[t._v("The Home and Work boxes will update each time you add/remove a task to aid in tracking your daily goals.")]),e("p",[t._v("*The To-Do list tasks are reset each time the page is refreshed.*")])])}],W={},H=W,C=(0,d.Z)(H,O,D,!1,null,null,null),P=C.exports,Z={name:"app",components:{TodoList:p,NewTodo:g,TodoSummary:x,AppDescription:P}},$=Z,A=(0,d.Z)($,r,s,!1,null,null,null),N=A.exports,j=(o(7658),o(629));n.ZP.use(j.ZP);var E=new j.ZP.Store({state:{todos:[{name:"Go for a morning run",done:!1,category:"Home"}]},mutations:{ADD_NEW_TODO(t,e){t.todos.push(e)},FLIP_DONE(t,e){e.done=!e.done}},actions:{},modules:{}});n.ZP.config.productionTip=!1,new n.ZP({store:E,render:t=>t(N)}).$mount("#app")}},e={};function o(n){var r=e[n];if(void 0!==r)return r.exports;var s=e[n]={exports:{}};return t[n](s,s.exports,o),s.exports}o.m=t,function(){var t=[];o.O=function(e,n,r,s){if(!n){var a=1/0;for(d=0;d<t.length;d++){n=t[d][0],r=t[d][1],s=t[d][2];for(var i=!0,l=0;l<n.length;l++)(!1&s||a>=s)&&Object.keys(o.O).every((function(t){return o.O[t](n[l])}))?n.splice(l--,1):(i=!1,s<a&&(a=s));if(i){t.splice(d--,1);var c=r();void 0!==c&&(e=c)}}return e}s=s||0;for(var d=t.length;d>0&&t[d-1][2]>s;d--)t[d]=t[d-1];t[d]=[n,r,s]}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var r,s,a=n[0],i=n[1],l=n[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(r in i)o.o(i,r)&&(o.m[r]=i[r]);if(l)var d=l(o)}for(e&&e(n);c<a.length;c++)s=a[c],o.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return o.O(d)},n=self["webpackChunkvue_todo_list"]=self["webpackChunkvue_todo_list"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(5360)}));n=o.O(n)})();
//# sourceMappingURL=app.889c710e.js.map