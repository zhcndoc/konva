[![NPM](https://nodei.co/npm/ink-docstrap.png?downloads=true)](https://nodei.co/npm/ink-docstrap/)

[![Dependency Status](https://david-dm.org/docstrap/docstrap.svg)](https://david-dm.org/docstrap/docstrap) [![devDependency Status](https://david-dm.org/docstrap/docstrap/dev-status.svg)](https://david-dm.org/docstrap/docstrap#info=devDependencies)

# DocStrap [![用 Grunt 构建](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

DocStrap 是基于 [Bootstrap](http://twitter.github.io/bootstrap/index.html) 的 [JSDoc3](http://usejsdoc.org/) 模板。
此外，它还包含了来自 [Bootswatch](http://bootswatch.com/) 的所有主题，为您的文档提供了丰富的外观和感觉选项，配合简单的搜索功能。另外，它在 conf.json 文件中添加了一些选项，提供了更多灵活性，便于根据您的需求调整模板。它还能美白您的牙齿。

## 特性 ##

* 右侧目录（TOC）用于页面导航
* 集成离线搜索
* 主题化
* 可自定义
* 语法高亮

### 它的样子 ###
以下是使用不同 Bootswatch 主题的该模板的示例：

+ [Cerulean](http://docstrap.github.io/docstrap/themes/cerulean)
+ [Cosmo](http://docstrap.github.io/docstrap/themes/cosmo)
+ [Cyborg](http://docstrap.github.io/docstrap/themes/cyborg)
+ [Flatly](http://docstrap.github.io/docstrap/themes/flatly)
+ [Journal](http://docstrap.github.io/docstrap/themes/journal)
+ [Lumen](http://docstrap.github.io/docstrap/themes/lumen)
+ [Paper](http://docstrap.github.io/docstrap/themes/paper)
+ [Readable](http://docstrap.github.io/docstrap/themes/readable)
+ [Sandstone](http://docstrap.github.io/docstrap/themes/sandstone)
+ [Simplex](http://docstrap.github.io/docstrap/themes/simplex)
+ [Slate](http://docstrap.github.io/docstrap/themes/slate)
+ [Spacelab](http://docstrap.github.io/docstrap/themes/spacelab)
+ [Superhero](http://docstrap.github.io/docstrap/themes/superhero)
+ [United](http://docstrap.github.io/docstrap/themes/united)
+ [Yeti](http://docstrap.github.io/docstrap/themes/yeti)

要更改主题，只需在 `conf.json` 文件中进行更改。有关详细信息，请参见下文。

## 哇，我想要这个！我该如何获取？ ##

如果您管理自己的 jsdoc 版本：

```bash
npm install ink-docstrap
```

使用 [grunt](http://gruntjs.com/) 时，请查看 [grunt-jsdoc](https://github.com/krampstudio/grunt-jsdoc)，您可以与 docstrap 一起使用。

### 命令行示例 ###

```bash
jsdoc -c path/to/conf.json -t ./node_modules/ink-docstrap/template -R README.md -r .
```

`-c` 设置配置，并且 docstrap 的 README 讨论了您可以在模板中放置的选项，这些选项是 docstrap 需要查找的。

`-t` 设置模板。此选项是您需要设置的，以便使用 docstrap 模板。

`-R` 设置一个 markdown 文件为文档的首页。

`-r` 告诉 jsdoc 递归运行。

`.` 表示从当前目录开始。

## 配置模板 ##

DocStrap 在模板/目录中附带一个 `conf.json` 文件。它就是一个普通的
[JSDoc 配置文件](http://usejsdoc.org/about-configuring-jsdoc.html)，但增加了以下新选项：

```javascript
"templates": {
	"systemName"            : "{string}",
	"footer"                : "{string}",
	"copyright"             :  "{string}",
	"includeDate"           : "{boolean}",
	"navType"               : "{vertical|inline}",
	"theme"                 : "{theme}",
	"linenums"              : "{boolean}",
	"collapseSymbols"       : "{boolean}",
	"inverseNav"            : "{boolean}",
	"outputSourceFiles"     : "{boolean}" ,
	"outputSourcePath"      : "{boolean}",
	"dateFormat"            : "{string}",
	"syntaxTheme"           : "{string}",
	"sort"					: "{boolean|string}",
	"search"                : "{boolean}" 
}
```
### 选项 ###

*   __systemName__
	文档系统的名称。此名称将在每个页面的标题中显示。
*   __footer__
	希望出现在每个页面底部的任何标记。此内容不会被处理，而是将其打印为您输入的内容。
*   __copyright__
	您可以在页脚下方和页面底部的 JSDoc 时间戳上方添加版权信息。
*   __includeDate__
	默认情况下，当前日期总是显示在生成的文档的页脚中。您可以通过设置此选项为 `false` 来省略当前日期。
*   __navType__
	模板使用顶级导航并带有下拉菜单以显示每个类别的内容。在大型系统中，这些下拉菜单可能变大到超出页面的范围。要宽展下拉菜单并垂直堆叠条目，请将此选项设置为 `"inline"`。否则，将其设置为 `"vertical"` 以使其成为常规的堆叠下拉菜单。
*   __theme__
	这是您希望使用的主题名称**小写**。有效选项有
	+ `cerulean`
	+ `cosmo`
	+ `cyborg`
	+ `flatly`
	+ `journal`
	+ `lumen`
	+ `paper`
	+ `readable`
	+ `sandstone`
	+ `simplex`
	+ `slate`
	+ `spacelab`
	+ `superhero`
	+ `united`
	+ `yeti`
*   __linenums__
	当为 true 时，源代码列表中将出现行号。如果您也
	[开启了这个选项](http://usejsdoc.org/about-configuring-jsdoc.html)。
*   __collapseSymbols__
	如果您的页面包含大量符号，可能会很容易在所有文本中迷失。如果将其设置为 `true`，页面中的所有符号将折叠其内容，这样您只会得到一个可以展开和折叠的符号列表。
*   __analytics__ 将 [Google Analytics](http://www.google.com/analytics) 代码添加到模板输出中， 
 _例如_ `"analytics":{"ua":"UA-XXXXX-XXX", "domain":"XXXX"}`
    * __ua__ Google Agent（请参阅 Google Analytics 帮助以了解详细信息）
    * __domain__ 被提供的域名。（请参阅 Google Analytics 帮助以了解详细信息）
*   __inverseNav__
	Bootstrap 导航栏有两种风格，常规和反向，反向通常具有更高的对比度。将此设置为 `true` 使用反向头部。
*   __outputSourceFiles__
	当为 true 时，系统将生成带有来自文档链接的源代码漂亮打印文件列表。
*	__outputSourcePath__
	当 `outputSourceFiles` 为 `false` 时，您仍然可能希望命名文件，即使没有与漂亮打印输出的链接。
	在 `outputSourceFiles` 为 `false` 时设置为 `true`。当 `outputSourceFiles` 为 `true` 时将优先于此设置。
*   __dateFormat__ 打印日期时使用的日期格式。它接受任何 [moment.js](http://momentjs.com/docs/#/displaying/format/) 理解的格式字符串。
*   __syntaxTheme__ 确定代码块使用的主题的字符串。默认值是 `"default"`。它可以是当前在 [sunlight 主题](https://github.com/tmont/sunlight/tree/master/src/themes) 中支持的任何值，目前只包括...嗯...`"default"` 和 `"dark"`，但至少如果您需要它就有了。
*  __sort__ 默认值为 true。指定 jsdoc 是否应排序数据或使用文件顺序。也可以是一个字符串，如果是，则直接传递给 jsdoc。默认字符串为 `"longname, version, since"`。
*  __search__ 默认情况下，模板包含一个快速搜索框。对于大型 API，搜索数据库可能负担太重。如果需要，您可以通过设置此选项为 false 来禁用此功能。 

## 语法高亮 ##

### 语言 ###

默认语言将是 JavaScript，但有几种指定语言的方法。

DocStrap 支持按照标准方式指定语言，例如：

```
```html
<html></html>
```

DocStrap 还引入了一种新的文档标签，可以出现在源代码的任何示例块中，或在任何 markdown 的封闭代码块中： `{@lang languageName}`，其中
_`language`_ 可以是 [Sunlight](http://sunlightjs.com/) 支持的任何语言。

在 doclet 中，标签添加在 `@example` 标签之后，如下所示：

`@example {@lang xml}`
`<div>这是有史以来最有趣的网站</div>`

以下是支持的语言。

* ActionScript
* bash
* C/C++
* C♯
* CSS
* Diff
* DOS batch
* Erlang
* Haskell
* httpd (Apache)
* Java
* JavaScript
* Lisp
* Lua
* MySQL
* nginx
* Objective-C
* Perl
* PHP
* PowerShell
* Python
* Ruby
* Scala
* T-SQL
* VB.NET
* XML (HTML)

### 示例标题 ###
如果您想给示例加上标题，请在示例前添加 HTML 标题，例如：

```
@example <caption>我的标题</caption>
{@lang xml}
<mycode></mycode>
```

## 自定义 DocStrap ##
没有一个模板可以满足所有需求，自定义模板是...好吧，没人喜欢的消遣，但您可能仍然需要这样做。
首先确保您已安装 [bower](https://github.com/bower/bower) 和 [grunt-cli](https://github.com/gruntjs/grunt-cli)。
使用 `git` 获取源代码或从 [github 下载 zip 文件。](https://github.com/docstrap/docstrap/archive/master.zip)并将其解压到某个位置。接下来的所有操作都在解压目录中完成。

接下来，准备环境：

    bower install

和

    npm install

完成后，您就拥有了修改模板所需的所有工具。模板像 Bootstrap 一样使用 [less](http://lesscss.org/)。
它的工作方式是 `./styles/main.less` 引入未编译的 bootstrap 文件，以便您可以访问所有需要的 bootstrap 混合，颜色等。该目录中还有两个文件，`variables.less`，`bootswatch.less`。这些是主题文件，您可以修改它们，但请记住，如果您应用新主题（见下文），这些文件将被覆盖。最好将更改保留在 `main.less` 文件中。

要编译对 `main.less` 及其加载的任何其他文件的更改，

	grunt less

生成的输出将放在 `./template/static/styles/site.<theme-name>.css` 中。下次创建文档时，它将包含新的 css 文件。

要将不同的模板应用到 `styles` 目录以进行修改，请打开模板目录中的 `conf.json`，并将 `theme` 选项更改为您希望的主题。然后

	grunt apply

新主题将出现在 `variables.less`，`bootswatch.less` 中。不要忘记使用 `grunt apply` 编译您的更改，以将该更改应用于模板。

**注意**，这些步骤并不是简单地更改主题所必需的，这只是为了修改主题。如果您只想更改主题，只需在 conf.json 中更新新主题并构建文档即可！

## 贡献 ##
是的！贡献！测试！分享您的想法！报告错误！

### 贡献者 ###

*非常*感谢所有贡献者。如果您的名字应该在这里，但没有，请告诉我们

* [marklagendijk](https://github.com/marklagendijk)
* [michaelward82](https://github.com/michaelward82)
* [kaustavdm](https://github.com/kaustavdm)
* [vmeurisse](https://github.com/vmeurisse)
* [bmathern](https://github.com/bmathern)
* [jrkim123us](https://github.com/jrkim123us)
* [shawke](https://github.com/shawke)
* [mar10](https://github.com/mar10)
* [mwcz](https://github.com/mwcz)
* [pocesar](https://github.com/pocesar)
* [hyperandroid](https://github.com/hyperandroid)
* [vmadman](https://github.com/vmadman)
* [whitelynx](https://github.com/whitelynx)
* [tswaters](https://github.com/tswaters)
* [lukeapage](https://github.com/lukeapage)
* [rcosnita](https://github.com/rcosnita)


## 历史 ##

## 1.3.0 ##

 * 更新依赖并更新 CSS
 * 修复成员的 TOC 标签
 * 在 markdown 的代码块中应用代码高亮
 * 添加禁用搜索的选项

## 1.2.1 ##

 * 更新用于搜索的 lunr 依赖

## 1.2.0 ##

 * 在可选参数周围添加方括号
 * 新选项 disablePackagePath，如果为 true，则使 docstrap 不将包和版本附加到输出路径
 * 允许在 package.json 中缺少版本

## 1.1.4 ##

 * 移除 pre/code 标签上难以阅读的橙色，使用深红色。移除白色背景，因为在黑色或白色上可读。

## 1.1.3 ##

 * 从 navOptions 获取排序选项，如文档所述
 * 来自 bootswatch 的调整

## 1.1.2 ##

 * 如果在 markdown 配置 `includeTags` 部分中配置，则允许示例标题包含 markdown。
 * 修复在只有一个源文件的项目中用作源 URL 的全路径
 * 允许用户更新默认模板布局文件

## 1.1.1 ##

 * Bootswatch 更新
 * 为了改善移动体验，为 HTML 添加视口 meta 标签

## 1.1.0 ##

 * 添加 includeDate 选项

## 1.0.5 ##

 * 针对锚链接的导航在 IE 中现在工作（稍有闪烁）
 * 链接到其他页面现在工作（在某些浏览器中略有闪烁）

## 1.0.4 ##

 * 搜索结果不再错误地包含在侧边导航栏
 * 教程现在获得与其他内容一致的页面标题
 * 改进了高亮的导航标题

## 1.0.3 ##

 * 下拉菜单太大会显示滚动条（1.0.1 的回归）

## 1.0.2 ##

 * 通过不查找“接口”来支持较旧的 jsdoc

## 1.0.1 ##

 * 调整侧边导航和下拉菜单以符合 bootswatch 风格
 * 使文档响应式

## 1.0.0 ##

 * 跟随 semver（初始开发已经结束）
 * 修正主题列表
 * 添加搜索
 * 移除 highlightTutorialCode 选项 - 它没有工作

## 0.5.4 ##

 * 修复代码示例底部的布局故障
 * 支持以正常方式为封闭代码块指定语言
 * 修复某些主题中的活动项目，缺少背景
 * 表格标记为表格
 * 依赖更新

## 0.5.3 ##

 * 移除重复的标题
 * 移除“索引”标题
 * 再次修复导航
 * 移除一些可疑的特性（现在的 pr 可以通过一些润色重新添加）

## 0.5.2 ##
重大更新__。 感谢 [tswaters](https://github.com/tswaters) 解决许多小问题并将代码库提升到 Bootstrap3。
确保在使用此版本之前运行最新版本的 JSDoc。

再次非常感谢 [tswaters](https://github.com/tswaters)。 确保向他表达感谢或赠送小费!!!!!

### v0.4.15 ###
* PR 问题 #76
* PR 问题 #77

### v0.4.14 ###
* 问题 #69

### v0.4.13 ###
* 问题 #68

### v0.4.11 ###
* 拉取请求 #59

### v0。4.8 ###
* 问题 #58

### v0.4.7 ###
* 问题 #57

### v0.4.5 ###
* 问题 #55
* 问题 #54
* 问题 #52
* 问题 #51
* 问题 #50
* 问题 #45
* 问题 #44

### v0.4.3 ###
* 问题 #46
* 问题 #46
* 问题 #47

### v0.4.1-1###
* 问题 #44
* 更新文档
* 问题 #43
* 问题 #42
* 问题 #34

### v0.4.0 ###
* 问题 #41
* 问题 #40
* 问题 #39
* 问题 #36
* 问题 #32

### v0.3.0 ###
* 修复页面顶部的导航
* 为示例 jsdoc 命令添加 -d 开关。
* 修复 README 中的拼写错误
* 改进搜索框的位置和样式
* 在 TOC 中添加动态快速搜索
* 修复行号样式问题

### v0.2.0 ###

* 添加跳转到源行号 - 固定标题时仍存在滚动问题
* 将语法高亮工具更改为 [sunlight](http://sunlightjs.com/)
* 修改输入的 bootswatch 文件以使字体调用没有协议。

### v0.1.0 ###
初始版本


## 声明 ##
如果您喜欢 DocStrap，请务必查看这些优秀的项目并支持它们！

[JSDoc3 受 Apache 许可证保护](https://github.com/jsdoc3/jsdoc/blob/master/LICENSE.md)

[Bootstrap 也是如此](https://github.com/twitter/bootstrap/blob/master/LICENSE)

[Bootswatch 也是如此](https://github.com/thomaspark/bootswatch/blob/gh-pages/LICENSE)

[TOC 受 MIT 许可证保护](https://github.com/jgallen23/toc/blob/master/LICENSE)

[Grunt 也是 MIT](https://github.com/gruntjs/grunt-cli/blob/master/LICENSE-MIT)

DocStrap [受 MIT 许可证保护。](https://github.com/docstrap/docstrap/blob/master/LICENSE.md)

[Sunlight 使用 WTFPL](http://sunlightjs.com/)

## 许可证 ##
DocStrap 版权 (c) 2012-2015 Terry Weiss & Contributors。保留所有权利。

特此免费授予任何获得本软件及相关文档文件（“软件”）副本的人员，无限制地处理本软件，包括但不限于使用、复制、修改、合并、出版、分发、再许可和/或销售本软件的副本，以及允许向其提供软件的人员这样做，前提是满足以下条件：

上述版权声明和本许可声明应包含在软件的所有副本或重要部分中。

本软件是“按原样”提供的，不附有任何类型的担保，明示或暗示，包括但不限于对适销性、特定用途适用性和非侵权的担保。在任何情况下，作者或版权持有人对因使用软件或其他交易中产生的任何索赔、损害或其他责任不承担责任，无论是在合同诉讼、侵权或其他方面。