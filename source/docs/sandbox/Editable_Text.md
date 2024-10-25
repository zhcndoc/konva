title: HTML5 画布中的文本编辑与 Konva
layout: demo_page
---

用户不能直接编辑 `Konva.Text` 内容，原因有很多 [原因](https://www.w3.org/TR/2dcontext/#best-practices)。实际上，画布 API 并不为此目的而设计。
可以在画布上模拟文本编辑（通过绘制闪烁的光标、模拟选择等）。
Konva 并不支持这种情况。我们建议在画布外部使用原生 DOM 元素（如 `input` 或 `textarea`）来编辑用户输入。

在这里，我们将创建两个演示。基本演示用于理解技术的概念。更复杂的演示则用于覆盖更多边缘案例的真实应用。

如果您想启用完整的富文本编辑功能，请参见 [富文本演示](/docs/sandbox/Rich_Text.html)。

使用说明：双击文本以进行编辑。输入一些内容。按下回车键。

简单演示：

{% iframe /downloads/code/sandbox/Editable_Text.html %}

<details><summary>显示简单演示的源代码！</summary>
<p>
{% include_code Konva Editable text Demo sandbox/Editable_Text.html %} 
</p>
</details>

复杂演示：

{% iframe /downloads/code/sandbox/Complex_Editable_Text.html %}

<details><summary>显示复杂演示的源代码！</summary>
<p>
{% include_code Canvas Complex Text Demo sandbox/Complex_Editable_Text.html %} 
</p>
</details>