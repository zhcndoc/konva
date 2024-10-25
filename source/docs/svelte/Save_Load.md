title: 使用 Svelte 和 Konva 保存和加载画布
layout: svelte_page

---

原生 Konva 有特殊机制可以使用 `node.toJSON()` 和 `node.create(json)` 函数来保存/加载整个画布阶段 [(查看演示)](/docs/data_and_serialization/Simple_Load.html)。

在使用 svelte-konva 时，不推荐这种方法。在 svelte-konva 中，你应该保存应用的状态，这也类似于所需的完整阶段数据。因此，无需保存任何 Konva 内部结构和节点。

该演示从 localstorage 以 JSON 形式保存和检索数据，但你可以自由选择任何你喜欢的保存方式。

<iframe src="https://codesandbox.io/p/sandbox/github/konvajs/site/tree/master/svelte-demos/save_load?file=/src/App.svelte" style="width:100%; height:800px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>