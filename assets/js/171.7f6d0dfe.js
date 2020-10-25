(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{602:function(a,t,s){"use strict";s.r(t);var n=s(0),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"store"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#store"}},[a._v("#")]),a._v(" Store "),s("Badge",{attrs:{text:"Class",type:"class"}})],1),a._v(" "),s("section",{staticClass:"symbol-info"},[s("table",{staticClass:"is-full-width"},[s("tbody",[s("tr",[s("th",[a._v("Module")]),s("td",[s("div",{staticClass:"lang-typescript"},[s("span",{staticClass:"token keyword"},[a._v("import")]),a._v(" { Store } "),s("span",{staticClass:"token keyword"},[a._v("from")]),a._v(" "),s("span",{staticClass:"token string"},[a._v('"@tsed/core"')])])])]),s("tr",[s("th",[a._v("Source")]),s("td",[s("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v6.0.1/packages/core/src/class/Store.ts#L0-L0"}},[a._v("/packages/core/src/class/Store.ts")])])])])])]),a._v(" "),s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[a._v("#")]),a._v(" Overview")]),a._v(" "),s("div",{staticClass:"language-typescript"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" Store "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" "),s("a",{pre:!0,attrs:{href:"/api/core/class/Metadata.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[a._v("Metadata")])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n"),s("div",{pre:!0,attrs:{class:"language- extra-class"}},[s("pre",[s("code",[a._v('<span class="token keyword">constructor</span><span class="token punctuation">(</span>args<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n/**\n * Return the size of the collection.\n * @returns <span class="token punctuation">{</span><span class="token keyword">number</span><span class="token punctuation">}</span>\n */\nget <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">number</span><span class="token punctuation">;</span>\n/**\n * Create or get a Store <span class="token keyword">from</span> args <span class="token punctuation">{</span>target + methodName + descriptor<span class="token punctuation">}</span>\n * @param args\n * @returns <span class="token punctuation">{</span>Store<span class="token punctuation">}</span>\n */\n<span class="token keyword">static</span> <span class="token keyword">from</span><span class="token punctuation">(</span>...args<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span> Store<span class="token punctuation">;</span>\n/**\n * Create store on the method.\n * @param target\n * @param <span class="token punctuation">{</span><span class="token keyword">string</span><span class="token punctuation">}</span> propertyKey\n * @returns <span class="token punctuation">{</span>Store<span class="token punctuation">}</span>\n */\n<span class="token keyword">static</span> <span class="token function">fromMethod</span><span class="token punctuation">(</span>target<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">,</span> propertyKey<span class="token punctuation">:</span> <span class="token keyword">string</span> | symbol<span class="token punctuation">)</span><span class="token punctuation">:</span> Store<span class="token punctuation">;</span>\n/**\n * The <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> method returns a specified element <span class="token keyword">from</span> a Map object.\n * @param key <a href="/api/schema/decorators/common/Required.html"><span class="token">Required</span></a>. The key of the element to return <span class="token keyword">from</span> the Map object.\n * @returns <span class="token punctuation">{</span>T<span class="token punctuation">}</span> <a href="/api/schema/decorators/operations/Returns.html"><span class="token">Returns</span></a> the element associated with the specified key or undefined if the key can\'t be found in the Map object.\n */\nget&lt;T<span class="token punctuation"> = </span><span class="token keyword">any</span>&gt;<span class="token punctuation">(</span>key<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">)</span><span class="token punctuation">:</span> T<span class="token punctuation">;</span>\n/**\n * The <span class="token function">has</span><span class="token punctuation">(</span><span class="token punctuation">)</span> method returns a <span class="token keyword">boolean</span> indicating whether an element with the specified key exists or not.\n * @param key\n * @returns <span class="token punctuation">{</span><span class="token keyword">boolean</span><span class="token punctuation">}</span>\n */\n<span class="token function">has</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">boolean</span><span class="token punctuation">;</span>\n/**\n * The <span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span> method adds or updates an element with a specified key and value to a Map object.\n * @param key <a href="/api/schema/decorators/common/Required.html"><span class="token">Required</span></a>. The key of the element to add to the Map object.\n * @param metadata <a href="/api/schema/decorators/common/Required.html"><span class="token">Required</span></a>. The value of the element to add to the Map object.\n * @returns <span class="token punctuation">{</span><a href="/api/core/class/Registry.html"><span class="token">Registry</span></a><span class="token punctuation">}</span>\n */\n<span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">,</span> metadata<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">)</span><span class="token punctuation">:</span> Store<span class="token punctuation">;</span>\n/**\n * The <span class="token function">entries</span><span class="token punctuation">(</span><span class="token punctuation">)</span> method returns a new Iterator object that contains the <span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span> pairs for each element in the Map object in insertion order.\n * @returns <span class="token punctuation">{</span>IterableIterator<span class="token punctuation">}</span> A new Map iterator object.\n */\n<span class="token function">entries</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> IterableIterator&lt;<span class="token punctuation">[</span><span class="token keyword">string</span><span class="token punctuation">,</span> <span class="token keyword">any</span><span class="token punctuation">]</span>&gt;<span class="token punctuation">;</span>\n/**\n * The <span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span> method returns a new Iterator object that contains the keys for each element in the Map object in insertion order.\n * @returns <span class="token punctuation">{</span>IterableIterator<span class="token punctuation">}</span> A new Map iterator object.\n */\n<span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> IterableIterator&lt;<span class="token keyword">string</span>&gt;<span class="token punctuation">;</span>\n/**\n * The <span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> method removes all elements <span class="token keyword">from</span> a Map object.\n */\n<span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n/**\n * The <span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span> method removes the specified element <span class="token keyword">from</span> a Map object.\n * @param key <a href="/api/schema/decorators/common/Required.html"><span class="token">Required</span></a>. The key of the element to remove <span class="token keyword">from</span> the Map object.\n * @returns <span class="token punctuation">{</span><span class="token keyword">boolean</span><span class="token punctuation">}</span> <a href="/api/schema/decorators/operations/Returns.html"><span class="token">Returns</span></a> true if an element in the Map object existed and has been removed<span class="token punctuation">,</span> or false if the element does not exist.\n */\n<span class="token function">delete</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">boolean</span><span class="token punctuation">;</span>\n/**\n * The <span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">)</span> method executes a provided function once per each key/value pair in the Map object<span class="token punctuation">,</span> in insertion order.\n *\n * @param callbackfn Function to execute for each element.\n * @param thisArg <a href="/api/di/decorators/Value.html"><span class="token">Value</span></a> to use <span class="token keyword">as</span> this when executing callback.\n * @description\n * The forEach method executes the provided callback once for each key of the map which actually exist. It is not invoked for keys which have been deleted. However<span class="token punctuation">,</span> it is executed for values which are present but have the value undefined.\n * callback is invoked with three arguments<span class="token punctuation">:</span>\n *\n * * the element value\n * * the element key\n * * the Map object being traversed\n *\n * If a thisArg parameter is provided to forEach<span class="token punctuation">,</span> it will be passed to callback when invoked<span class="token punctuation">,</span> for use <span class="token keyword">as</span> its this value.  Otherwise<span class="token punctuation">,</span> the value undefined will be passed for use <span class="token keyword">as</span> its this value.  The this value ultimately observable by callback is determined according to the usual rules for determining the this seen by a function.\n *\n * Each value is visited once<span class="token punctuation">,</span> except in the case when it was deleted and re-added before forEach has finished. callback is not invoked for values deleted before being visited. New values added before forEach has finished will be visited.\n * forEach executes the callback function once for each element in the Map object<span class="token punctuation">;</span> it does not return a value.\n *\n */\n<span class="token function">forEach</span><span class="token punctuation">(</span>callbackfn<span class="token punctuation">:</span> <span class="token punctuation">(</span>value<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">,</span> map<span class="token punctuation">:</span> Map&lt;<span class="token keyword">string</span><span class="token punctuation">,</span> <span class="token keyword">any</span>&gt;<span class="token punctuation">)</span> =&gt; <span class="token keyword">void</span><span class="token punctuation">,</span> thisArg?<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n/**\n * The <span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span> method returns a new Iterator object that contains the values for each element in the Map object in insertion order.\n * @returns <span class="token punctuation">{</span>IterableIterator<span class="token punctuation">}</span> A new Map iterator object.\n */\n<span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> IterableIterator&lt;<span class="token keyword">any</span>&gt;<span class="token punctuation">;</span>\n/**\n * Merge given value with existing value.\n * @param key\n * @param value\n * @param inverse Change the merge order. <a href="/api/common/mvc/decorators/method/Get.html"><span class="token">Get</span></a> the existing value and apply over given value\n * @returns <span class="token punctuation">{</span>Store<span class="token punctuation">}</span>\n */\n<span class="token function">merge</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">,</span> inverse?<span class="token punctuation">:</span> <span class="token keyword">boolean</span><span class="token punctuation">)</span><span class="token punctuation">:</span> Store<span class="token punctuation">;</span>\n/**\n * Store all keys contains in the options object.\n * @param options\n * @param args\n */\n<span class="token function">storeValues</span><span class="token punctuation">(</span>options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">[</span>key<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n/**\n *\n * @param key\n * @param args\n * @<span class="token keyword">private</span>\n */\n')])])]),s("p",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")])])])])]),s("p"),a._v(" "),s("h2",{attrs:{id:"members"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#members"}},[a._v("#")]),a._v(" Members")]),a._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[a._v("get "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")])])])])]),a._v(" "),s("p",[a._v("Return the size of the collection.")])]),s("hr"),a._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("...args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("a",{pre:!0,attrs:{href:"/api/core/class/Store.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[a._v("Store")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")])])])])]),a._v(" "),s("p",[a._v("Create or get a Store from args {target + methodName + descriptor}")])]),s("hr"),a._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("fromMethod")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" propertyKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("string")]),a._v(" | symbol"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("a",{pre:!0,attrs:{href:"/api/core/class/Store.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[a._v("Store")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")])])])])]),a._v(" "),s("p",[a._v("Create store on the method.")])]),s("hr"),a._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[a._v("get<T"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(" = ")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("any")]),a._v(">"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" T"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")])])])])]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("Param")]),a._v(" "),s("th",[a._v("Type")]),a._v(" "),s("th",[a._v("Description")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("key")]),a._v(" "),s("td",[s("code",[a._v("any")])]),a._v(" "),s("td",[a._v("Required. The key of the element to return from the Map object.")])])])]),a._v(" "),s("p",[a._v("The get() method returns a specified element from a Map object.")])]),s("hr"),a._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("has")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")])])])])]),a._v(" "),s("p",[a._v("The has() method returns a boolean indicating whether an element with the specified key exists or not.")])]),s("hr"),a._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" metadata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("a",{pre:!0,attrs:{href:"/api/core/class/Store.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[a._v("Store")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")])])])])]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("Param")]),a._v(" "),s("th",[a._v("Type")]),a._v(" "),s("th",[a._v("Description")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("key")]),a._v(" "),s("td",[s("code",[a._v("any")])]),a._v(" "),s("td",[a._v("Required. The key of the element to add to the Map object.  metadata")])])])]),a._v(" "),s("p",[a._v("The set() method adds or updates an element with a specified key and value to a Map object.")])]),s("hr"),a._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("entries")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" IterableIterator<"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(">"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")])])])])]),a._v(" "),s("p",[a._v("The entries() method returns a new Iterator object that contains the [key, value] pairs for each element in the Map object in insertion order.")])]),s("hr"),a._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("keys")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" IterableIterator<"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("string")]),a._v(">"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")])])])])]),a._v(" "),s("p",[a._v("The keys() method returns a new Iterator object that contains the keys for each element in the Map object in insertion order.")])]),s("hr"),a._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("clear")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")])])])])]),a._v(" "),s("p",[a._v("The clear() method removes all elements from a Map object.")])]),s("hr"),a._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("delete")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")])])])])]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("Param")]),a._v(" "),s("th",[a._v("Type")]),a._v(" "),s("th",[a._v("Description")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("key")]),a._v(" "),s("td",[s("code",[a._v("string")])]),a._v(" "),s("td",[a._v("Required. The key of the element to remove from the Map object.")])])])]),a._v(" "),s("p",[a._v("The delete() method removes the specified element from a Map object.")])]),s("hr"),a._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("forEach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("callbackfn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" map"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" Map<"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("any")]),a._v(">"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" => "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" thisArg?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")])])])])]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("Param")]),a._v(" "),s("th",[a._v("Type")]),a._v(" "),s("th",[a._v("Description")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("callbackfn")]),a._v(" "),s("td",[s("code",[a._v("(value: any")])]),a._v(" "),s("td",[a._v("Function to execute for each element.  thisArg")])])])]),a._v(" "),s("p",[a._v("The forEach() method executes a provided function once per each key/value pair in the Map object, in insertion order.")]),a._v(" "),s("p",[a._v("The forEach method executes the provided callback once for each key of the map which actually exist. It is not invoked for keys which have been deleted. However, it is executed for values which are present but have the value undefined.\ncallback is invoked with three arguments:")]),a._v(" "),s("ul",[s("li",[a._v("the element value")]),a._v(" "),s("li",[a._v("the element key")]),a._v(" "),s("li",[a._v("the Map object being traversed")])]),a._v(" "),s("p",[a._v("If a thisArg parameter is provided to forEach, it will be passed to callback when invoked, for use as its this value.  Otherwise, the value undefined will be passed for use as its this value.  The this value ultimately observable by callback is determined according to the usual rules for determining the this seen by a function.")]),a._v(" "),s("p",[a._v("Each value is visited once, except in the case when it was deleted and re-added before forEach has finished. callback is not invoked for values deleted before being visited. New values added before forEach has finished will be visited.\nforEach executes the callback function once for each element in the Map object; it does not return a value.")])]),s("hr"),a._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("values")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" IterableIterator<"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("any")]),a._v(">"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")])])])])]),a._v(" "),s("p",[a._v("The values() method returns a new Iterator object that contains the values for each element in the Map object in insertion order.")])]),s("hr"),a._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("merge")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" inverse?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("a",{pre:!0,attrs:{href:"/api/core/class/Store.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[a._v("Store")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")])])])])]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("Param")]),a._v(" "),s("th",[a._v("Type")]),a._v(" "),s("th",[a._v("Description")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("inverse")]),a._v(" "),s("td",[s("code",[a._v("boolean")])]),a._v(" "),s("td",[a._v("Optional. Change the merge order. Get the existing value and apply over given value")])])])]),a._v(" "),s("p",[a._v("Merge given value with existing value.")])]),s("hr"),a._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("storeValues")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")])])])])]),a._v(" "),s("p",[a._v("Store all keys contains in the options object.")])])])}),[],!1,null,null,null);t.default=e.exports}}]);