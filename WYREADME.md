<!--
 * @Description: 
 * @Version: 
 * @Author: WangYue
 * @Date: 2019-11-05 15:38:29
 * @LastEditors: 
 * @LastEditTime : 2019-12-24 11:28:00
 -->
# sodiaoeditor 研究文档

当前使用SDE版本为v4.

## 一.功能解读

### （一）各模式之间的区别

- 设计模式
>   1. 工具栏可任意操作；
>   2. 编辑区开放，可编辑页眉页脚 ；
>   3. 信息录入控件可进行控件设置（ 数据配置、编辑、删除 ）；

- 编辑模式
>   1. 工具栏可任意操作；
>   2. 编辑区内容区开放，不可编辑页眉页脚；
>   3. 信息录入控件可进行录入，不能进行配置、编辑、删除;

- 严格模式
>   1. 工具栏不可操作；
>   2. 编辑区内容不可编辑；
>   3. 信息录入控件可进行录入；

- 只读模式
>   1. 工具栏不可操作
>   2. 编辑区内容不可编辑
>   3. 信息录入控件可进行录入 （单选框和复选框仍然能选择，应该为程序bug）

## 二.代码解读

### （一）模式
*["DESIGN", "EDITOR", "STRICT", "READONLY"]   四种模式*
>1. DESIGN   设计模式
>2. EDITOR   编辑模式
>3. STRICT   严格模式	
>4. READONLY 只读模式 


## 三.代码修改
### （一）sde-ie8-design.js
- 1.使设计模式情况下，表格可进行拉伸
> 26330行  <br/>
 将<br/>
 `
 t.options.isdesign && "BODY" === n.nodeName && n.setAttribute("contenteditable", !1),
 `
  <br/>
  改为 <br/>
  `
  t.options.isdesign && "BODY" === n.nodeName && n.setAttribute("contenteditable", !0),
  `

- 2.使高级打印渲染后,拿到高级打印的dom元素
> 24545行  <br/>
 将<br/>
 `
 e.resetedPrint && e.resetedPrint(e, this.cacheContent),
 `
  <br/>
  移到 <br/>
  `
  this.hideToast(300)
  `
  <br/>  前，即24551行

- 3.页眉页脚自定义编辑
> 24558行 e.prototype.render中 <br/>
添加<br/>

```
  if( e.cacheContent.querySelector('.sde-tmp-header') ){
    e.headerValue = e.cacheContent.querySelector('.sde-tmp-header');
    e.cacheContent.querySelector('.sde-tmp-header').remove();
  }
  if( e.cacheContent.querySelector('.sde-tmp-footer') ){
    e.footerValue = e.cacheContent.querySelector('.sde-tmp-footer');
    e.cacheContent.querySelector('.sde-tmp-footer').remove();
  }
```





### （二）sde-ie8-editor.js
- 1.切换模式  === 表格拉伸编辑同步设置
>   - ***A.*** changeDESIGN    切换设计模式     =====   25133行 <br/>
添加 <br/>
`
e[r.__private__].rootDom.setAttribute("contenteditable", !0);
`
>   - ***B.*** changeEDITOR      切换编辑模式      =====  25146行 <br/>
添加 <br/>
`
 e[r.__private__].rootDom.setAttribute("contenteditable", !0);
`
>   - ***C.*** changeSTRICT      切换严格模式      =====  25159行 <br/>
   添加 <br/> 
  `
  e[r.__private__].rootDom.setAttribute("contenteditable", !1);
  `
>   - ***D.*** changeREADONLY    切换只读模式      =====   25172行 <br/>
   添加 <br/>
   `
   e[r.__private__].rootDom.setAttribute("contenteditable", !1);
   `


- 2.修改编辑框底部显示区内容
> =====   20066 行 <br/>
`
s.innerHTML = e.footer ? " SDE v4" : "SDE v4",`<br/>
改为<br/>
`s.innerHTML = e.footer ? e.footer : "SDE v4",`


### （三）static/sdeEditor/dialogs
- 1.文本段  === 解决编辑框出现断层现象
>   =====   static/sdeEditor/dialogs/section/index  ===== 184行 <br/>
将 <br/>
`var domValue = UE.dom.domUtils.createElement(document, 'p', {
  class: 'sde-value',
  contenteditable: ($('#txtMODE').val() === "EDITOR"),
});
`
<br/>
改为<br/>
`
var domValue = UE.dom.domUtils.createElement(document, 'div', {
  class: 'sde-value',
  contenteditable: ($('#txtMODE').val() === "EDITOR"),
});
`










## 四.注解
> - 修订模式为简洁功能，不能满足实际使用
> - 其余功能没进入具体研究测试阶段









