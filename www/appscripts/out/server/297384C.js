goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__6168__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__6168 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6169__i = 0, G__6169__a = new Array(arguments.length -  0);
while (G__6169__i < G__6169__a.length) {G__6169__a[G__6169__i] = arguments[G__6169__i + 0]; ++G__6169__i;}
  args = new cljs.core.IndexedSeq(G__6169__a,0);
} 
return G__6168__delegate.call(this,args);};
G__6168.cljs$lang$maxFixedArity = 0;
G__6168.cljs$lang$applyTo = (function (arglist__6170){
var args = cljs.core.seq(arglist__6170);
return G__6168__delegate(args);
});
G__6168.cljs$core$IFn$_invoke$arity$variadic = G__6168__delegate;
return G__6168;
})()
;
});
