!function(n){"use strict";function e(){function n(n){var t=[];return n.$dependencies&&n.$dependencies.forEach(function(n){t.push(e.getInstance(n))}),t.forEach(function(e){n=n.bind(this,e)}),new n}var e=this,t={};e.registerSingleton=function(n,e){if(t.hasOwnProperty(n))throw new Error('The dependency "'+n+'" is already registered.');"object"==typeof e?t[n]={constructor:void 0,instance:e}:t[n]={constructor:e,instance:void 0}},e.resolve=function(n,t){var o=[];n.forEach(function(n){o.push(e.getInstance(n))}),t.apply(this,o)},e.getInstance=function(e){var o=t[e];if(void 0===o)throw new Error('Unknown dependency "'+e+'".');return o.instance||(o.instance=n(o.constructor)),o.instance}}n.iocClass=e,n.ioc=new e}(window),function(n){"use strict";function e(){var n=this;n.addChangeListener=function(){},n.removeChangeListener=function(){},n.getTodoItems=function(){return[{key:1,value:"task1"},{key:2,value:"task2"}]}}n.registerSingleton("TodoStore",e)}(ioc),function(n,e){"use strict";function t(e){function t(){this.setState(o())}function o(){return{todoItems:e.getTodoItems()}}var i={};return i.getInitialState=function(){return o()},i.componentDidMount=function(){e.addChangeListener(t)},i.componentWillUnmount=function(){e.removeChangeListener(t)},i.render=function(){return n.createElement("div",null,this.state.todoItems.map(function(e){return n.createElement("li",null,e.value)}))},n.createClass(i)}e.registerSingleton("TodoApp",t),t.$dependencies=["TodoStore"]}(React,ioc),function(n,e){"use strict";e.resolve(["TodoApp"],function(e){n.render(n.createElement(e,null),document.getElementById("root"))})}(React,ioc);