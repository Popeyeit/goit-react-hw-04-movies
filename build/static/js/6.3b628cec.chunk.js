(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[6],{31:function(t,e,n){"use strict";var a=n(36),r=n(37),i=n(42),c=n(40),o=n(0),u=n.n(o);e.a=function(t){return function(e){Object(i.a)(o,e);var n=Object(c.a)(o);function o(){var t;Object(a.a)(this,o);for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return(t=n.call.apply(n,[this].concat(r))).state={loader:!0},t.toggleLoader=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];t.setState({loader:e})},t}return Object(r.a)(o,[{key:"render",value:function(){var e=this.state.loader;return u.a.createElement(t,Object.assign({},this.props,{loader:e,toggleLoader:this.toggleLoader}))}}]),o}(o.Component)}},32:function(t,e,n){"use strict";n.d(e,"d",(function(){return c})),n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return u})),n.d(e,"c",(function(){return l})),n.d(e,"e",(function(){return s}));var a=n(38),r=n.n(a),i="4bf164d0225fdac087b5879f3d35c0c9",c=function(){return r.a.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(i))},o=function(t){return r.a.get("https://api.themoviedb.org/3/movie/".concat(t,"}?api_key=").concat(i,"&language=en-US"))},u=function(t){return r.a.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(i))},l=function(t){return r.a.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(i,"&language=en-US&page=1&query=").concat(t,"&include_adult=false"))},s=function(t){return r.a.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"))}},34:function(t,e,n){"use strict";var a=n(0),r=n.n(a),i=n(7),c=n(35),o=n.n(c);e.a=function(t){var e=t.movies,n=t.location;return r.a.createElement("ul",{className:o.a.list}," ",e.map((function(t){return r.a.createElement("li",{key:t.id,className:o.a.item},r.a.createElement(i.b,{className:o.a.link,to:{pathname:"movies/".concat(t.id),state:{from:n}}}," ",t.title," ")," ")}))," ")}},35:function(t,e,n){t.exports={list:"ListMovies_list__3YbWs",item:"ListMovies_item__1oLn8",link:"ListMovies_link__3_qnS"}},86:function(t,e,n){"use strict";n.r(e);var a=n(33),r=n(0),i=n.n(r),c=n(1),o=n(34),u=n(31),l=n(32);e.default=Object(u.a)((function(t){var e=t.loader,n=t.toggleLoader,u=Object(c.h)(),s=Object(r.useState)([]),d=Object(a.a)(s,2),f=d[0],g=d[1],m=Object(r.useState)(null),v=Object(a.a)(m,2),p=v[0],h=v[1];Object(r.useEffect)((function(){b()}),[]);var b=function(){Object(l.d)().then((function(t){g(t.data.results)})).catch((function(t){return h(t)})).finally((function(){return n(!1)}))};return i.a.createElement("div",null," ",e&&i.a.createElement("p",null," Loading... ")," ",!e&&!p&&i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null," Trending today ")," ",i.a.createElement(o.a,{location:u,movies:f})," ")," ",p&&i.a.createElement("h2",null," OOOPS something went wrong, try again later ")," ")}))}}]);
//# sourceMappingURL=6.3b628cec.chunk.js.map