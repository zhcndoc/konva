# HTML5 Canvas 桌面和移动设备事件支持教程

---

_注意：这个演示可能已经过时，因为现代浏览器支持指针事件。你也可以在 Konva 中使用指针事件。查看 [指针事件演示](/docs/events/Pointer_Events.html)。但如果你不想使用指针事件，请继续阅读..._

为了为使用 Konva 的桌面和移动应用程序的形状添加事件处理程序，我们可以使用 `on()` 方法并传入成对的事件。
例如，为了在桌面和移动应用程序上触发 `mousedown` 事件，我们可以使用 `"mousedown touchstart"` 事件对来覆盖这两种媒介。
为了在桌面和移动应用程序上触发 `mouseup` 事件，我们可以使用 `"mouseup touchend"` 事件对。
我们还可以使用 `"dblclick dbltap"` 事件对来绑定适用于桌面和移动设备的双击事件。

说明：在桌面或移动设备上，对圆形进行 mousedown、mouseup、touchstart 或 touchend 操作，以观察相同的功能。

{% iframe /downloads/code/events/Desktop_and_Mobile.html %}

{% include_code Konva Desktop_and_Mobile Demo events/Desktop_and_Mobile.html %}