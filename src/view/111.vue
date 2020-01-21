<!--
 * @Description: 
 * @Version: 
 * @Author: WangYue
 * @Date: 2019-11-13 14:57:39
 * @LastEditors: 
 * @LastEditTime: 2019-11-18 14:21:27
 -->
<template>
  <div>

    <div contenteditable="false" class="sde-tmp-root" style="">
      <div contenteditable="false" class="sde-tmp-header">
        <div contenteditable="true" title="页眉" class="sde-tmp-header-value" style="display: block;"></div>
      </div>
      <div contenteditable="false" class="sde-tmp-content">
        <div contenteditable="true" class="sde-tmp-content-value">
          <table data-sort="sortDisabled" class="sde-table">
            <tbody>
              <tr class="firstRow">
                <td valign="top" rowspan="1" colspan="2"
                  style="word-break: break-all; border-width: 1px; border-style: solid; border-color: black;;border-left:1px solid black;;;border-right:1px solid black;;;border-top:1px solid black;;;border-bottom:1px solid black;;;;">
                  姓名：&nbsp;<span contenteditable="false" id="name" sde-type="text" sde-right="."
                    sde-model="%7B%22desc%22%3A%22%22%2C%22required%22%3A1%2C%22strictverify%22%3A0%2C%22notdel%22%3A0%2C%22verify%22%3A%22%22%2C%22mode%22%3A%22EDITOR%22%7D"
                    class="sde-ctrl" sde-isloadasyncdata="false"><span contenteditable="true" sde-left="[" sde-right="]"
                      _backups="" class="sde-value"></span></span>​&nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; 年龄：&nbsp;<span contenteditable="false" id="age"
                    sde-type="text" sde-right="."
                    sde-model="%7B%22desc%22%3A%22%22%2C%22required%22%3A0%2C%22strictverify%22%3A0%2C%22notdel%22%3A0%2C%22verify%22%3A%22%22%2C%22mode%22%3A%22EDITOR%22%7D"
                    class="sde-ctrl" sde-isloadasyncdata="false"><span contenteditable="true" sde-left="[" sde-right="]"
                      _backups="" class="sde-value"></span></span>​&nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;民族：<span contenteditable="false" id="minzu"
                    sde-type="text" sde-right="."
                    sde-model="%7B%22desc%22%3A%22%22%2C%22required%22%3A0%2C%22strictverify%22%3A0%2C%22notdel%22%3A0%2C%22verify%22%3A%22%22%2C%22mode%22%3A%22EDITOR%22%7D"
                    class="sde-ctrl" sde-isloadasyncdata="false"><span contenteditable="true" sde-left="[" sde-right="]"
                      _backups="" class="sde-value"></span></span>​&nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; 身份证号：<span contenteditable="false" id="idCard"
                    sde-type="text" sde-right="."
                    sde-model="%7B%22desc%22%3A%22%22%2C%22required%22%3A0%2C%22strictverify%22%3A0%2C%22notdel%22%3A0%2C%22verify%22%3A%22%22%2C%22mode%22%3A%22EDITOR%22%7D"
                    class="sde-ctrl" sde-isloadasyncdata="false"><span contenteditable="true" sde-left="[" sde-right="]"
                      _backups="44444444444444444" class="sde-value">444444444444444444</span></span>​&nbsp;
                  &nbsp;&nbsp;</td>
              </tr>
              <tr>
                <td valign="top" rowspan="1" colspan="2"
                  style="word-break: break-all; border-width: 1px; border-style: solid; border-color: rgb(255, 255, 255) black black;;border-left:1px solid black;;;border-right:1px solid black;;;border-bottom:1px solid black;;;;">
                  通讯地址：<span contenteditable="false" id="address" sde-type="text" sde-right="."
                    sde-model="%7B%22desc%22%3A%22%22%2C%22required%22%3A0%2C%22strictverify%22%3A0%2C%22notdel%22%3A0%2C%22verify%22%3A%22%22%2C%22mode%22%3A%22EDITOR%22%7D"
                    class="sde-ctrl" sde-isloadasyncdata="false"><span contenteditable="true" sde-left="[" sde-right="]"
                      _backups="" class="sde-value"></span></span>​</td>
              </tr>
              <tr>
                <td valign="top" height="44" width="83.33333333333331"
                  style="word-break: break-all; border-width: 1px; border-style: solid; border-color: rgb(255, 255, 255) rgb(255, 255, 255) black black;;border-left:1px solid black;;;border-right:1px solid black;;;;;border-bottom:1px solid black;;;;">
                  主诉</td>
                <td valign="top" height="44" width="597"
                  style="border-width: 1px; border-style: solid; border-color: rgb(255, 255, 255) black black rgb(255, 255, 255);;border-right:1px solid black;;;border-bottom:1px solid black;;;;">
                  <span class="sde-ctrl" contenteditable="false" id="zs" sde-type="text" sde-right="."
                    sde-model="%7B%22desc%22%3A%22%22%2C%22required%22%3A0%2C%22strictverify%22%3A0%2C%22notdel%22%3A0%2C%22verify%22%3A%22%22%2C%22mode%22%3A%22EDITOR%22%7D"
                    sde-isloadasyncdata="false"><span class="sde-value" contenteditable="true" sde-left="["
                      sde-right="]" _backups=""></span></span>​</td>
              </tr>
              <tr>
                <td valign="top" height="101" width="83.33333333333331"
                  style="word-break: break-all; border-width: 1px; border-style: solid; border-color: rgb(255, 255, 255) rgb(255, 255, 255) black black;;border-left:1px solid black;;;border-right:1px solid black;;;;;border-bottom:1px solid black;;;;">
                  现病史</td>
                <td valign="top" height="101" width="622"
                  style="border-width: 1px; border-style: solid; border-color: rgb(255, 255, 255) black black rgb(255, 255, 255); word-break: break-all;">
                  <div contenteditable="false" id="xbs" sde-type="section"
                    sde-model="%7B%22desc%22%3A%22%22%2C%22notdel%22%3A0%2C%22mode%22%3A%22EDITOR%22%2C%22originalmode%22%3A%22EDITOR%22%7D"
                    class="sde-ctrl sde-section" sde-isloadasyncdata="false">
                    <p contenteditable="true" class="sde-value"><span class="sde-ctrl" contenteditable="false" id="xbs"
                        sde-type="text" sde-right="."
                        sde-model="%7B%22desc%22%3A%22%22%2C%22required%22%3A0%2C%22strictverify%22%3A0%2C%22notdel%22%3A0%2C%22verify%22%3A%22%22%2C%22mode%22%3A%22EDITOR%22%7D"
                        sde-isloadasyncdata="false"><span class="sde-value" contenteditable="true" sde-left="["
                          sde-right="]" _backups="ddsfafaafafaf">ddsfafaafaf阿芙</span></span>​</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td valign="top" width="81.33333333333333" height="72"
                  style="word-break: break-all; border-width: 1px; border-style: solid; border-color: rgb(255, 255, 255) rgb(255, 255, 255) black black;;border-left:1px solid black;;;border-right:1px solid black;;;;;border-bottom:1px solid black;;;;">
                  既往病史</td>
                <td valign="top" width="627" height="72"
                  style="border-width: 1px; border-style: solid; border-color: rgb(255, 255, 255) black black rgb(255, 255, 255); word-break: break-all;;border-right:1px solid black;;;border-bottom:1px solid black;;;;">
                  肝炎：<span contenteditable="false" id="gy" sde-type="radio" sde-right="."
                    sde-model="%7B%22desc%22%3A%22%E6%97%A0%22%2C%22required%22%3A1%2C%22notdel%22%3A0%2C%22mode%22%3A%22EDITOR%22%2C%22bindingdata%22%3A%5B%7B%22value%22%3A%22%E6%97%A0%22%2C%22label%22%3A%22%E6%97%A0%22%2C%22selected%22%3A0%7D%2C%7B%22value%22%3A%22%E6%9C%89%22%2C%22label%22%3A%22%E6%9C%89%22%2C%22selected%22%3A0%7D%5D%2C%22remotedata%22%3Anull%7D"
                    sde-value="%7B%22value%22%3A%22%E6%97%A0%22%2C%22label%22%3A%22%E6%97%A0%22%2C%22selected%22%3A0%7D"
                    sde-isloadasyncdata="true"
                    bindingdata="[{&quot;value&quot;:&quot;无&quot;,&quot;label&quot;:&quot;无&quot;,&quot;selected&quot;:0},{&quot;value&quot;:&quot;有&quot;,&quot;label&quot;:&quot;有&quot;,&quot;selected&quot;:0}]"
                    sde-updatetime="2019-11-18T03:36:04.983Z" class="sde-ctrl"><span contenteditable="true" sde-left="["
                      sde-right="]" title="无" class="sde-value"><label contenteditable="false"><input
                          name="radio_840153f9" type="radio"
                          value="%7B%22value%22%3A%22%E6%97%A0%22%2C%22label%22%3A%22%E6%97%A0%22%2C%22selected%22%3A0%7D"
                          checked="checked">无</label><label contenteditable="false"><input name="radio_840153f9"
                          type="radio"
                          value="%7B%22value%22%3A%22%E6%9C%89%22%2C%22label%22%3A%22%E6%9C%89%22%2C%22selected%22%3A0%7D">有</label></span></span>​&nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 结核：<span contenteditable="false" id="jh" sde-type="radio"
                    sde-right="."
                    sde-model="%7B%22desc%22%3A%22%22%2C%22required%22%3A0%2C%22notdel%22%3A0%2C%22mode%22%3A%22EDITOR%22%2C%22bindingdata%22%3A%5B%7B%22value%22%3A%22%E6%97%A0%22%2C%22label%22%3A%22%E6%97%A0%22%2C%22selected%22%3A0%7D%2C%7B%22value%22%3A%22%E6%9C%89%22%2C%22label%22%3A%22%E6%9C%89%22%2C%22selected%22%3A0%7D%5D%2C%22remotedata%22%3Anull%7D"
                    sde-value="" sde-isloadasyncdata="true"
                    bindingdata="[{&quot;value&quot;:&quot;无&quot;,&quot;label&quot;:&quot;无&quot;,&quot;selected&quot;:0},{&quot;value&quot;:&quot;有&quot;,&quot;label&quot;:&quot;有&quot;,&quot;selected&quot;:0}]"
                    sde-updatetime="2019-11-18T03:36:04.983Z" class="sde-ctrl"><span contenteditable="true" sde-left="["
                      sde-right="]" class="sde-value"><label contenteditable="false"><input name="radio_01baf5a2"
                          type="radio"
                          value="%7B%22value%22%3A%22%E6%97%A0%22%2C%22label%22%3A%22%E6%97%A0%22%2C%22selected%22%3A0%7D">无</label><label
                        contenteditable="false"><input name="radio_01baf5a2" type="radio"
                          value="%7B%22value%22%3A%22%E6%9C%89%22%2C%22label%22%3A%22%E6%9C%89%22%2C%22selected%22%3A0%7D">有</label></span></span>​
                  <p><br></p>
                  <p></p>
                  <p>&nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p>
                  <p>&nbsp;肾脏疾病：&nbsp;<span class="sde-ctrl" contenteditable="false" id="szjb" sde-type="radio"
                      sde-right="."
                      sde-model="%7B%22desc%22%3A%22%22%2C%22required%22%3A0%2C%22notdel%22%3A0%2C%22mode%22%3A%22EDITOR%22%2C%22bindingdata%22%3A%5B%7B%22value%22%3A%22%E6%97%A0%22%2C%22label%22%3A%22%E6%97%A0%22%2C%22selected%22%3A0%7D%2C%7B%22value%22%3A%22%E6%9C%89%22%2C%22label%22%3A%22%E6%9C%89%22%2C%22selected%22%3A0%7D%5D%2C%22remotedata%22%3Anull%7D"
                      sde-value="" sde-isloadasyncdata="true"
                      bindingdata="[{&quot;value&quot;:&quot;无&quot;,&quot;label&quot;:&quot;无&quot;,&quot;selected&quot;:0},{&quot;value&quot;:&quot;有&quot;,&quot;label&quot;:&quot;有&quot;,&quot;selected&quot;:0}]"
                      sde-updatetime="2019-11-18T03:36:04.983Z"><span class="sde-value" contenteditable="true"
                        sde-left="[" sde-right="]"><label contenteditable="false"><input name="radio_30db4333"
                            type="radio"
                            value="%7B%22value%22%3A%22%E6%97%A0%22%2C%22label%22%3A%22%E6%97%A0%22%2C%22selected%22%3A0%7D">无</label><label
                          contenteditable="false"><input name="radio_30db4333" type="radio"
                            value="%7B%22value%22%3A%22%E6%9C%89%22%2C%22label%22%3A%22%E6%9C%89%22%2C%22selected%22%3A0%7D">有</label></span></span>​
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p>&nbsp; &nbsp;&nbsp;
                </td>
              </tr>
              <tr>
                <td valign="top" width="83.33333333333331"
                  style="border-width: 1px; border-style: solid; border-color: rgb(255, 255, 255) rgb(255, 255, 255) black black; word-break: break-all;;border-left:1px solid black;;;border-right:1px solid black;;;;;border-bottom:1px solid black;;;;"
                  height="69">个人史</td>
                <td valign="top" width="627"
                  style="border-width: 1px; border-style: solid; border-color: rgb(255, 255, 255) black black rgb(255, 255, 255); word-break: break-all;;border-right:1px solid black;;border-bottom:1px solid black;;"
                  height="69">吸烟 ：&nbsp;<span class="sde-ctrl" contenteditable="false" id="xy" sde-type="radio"
                    sde-right="."
                    sde-model="%7B%22desc%22%3A%22%22%2C%22required%22%3A0%2C%22notdel%22%3A0%2C%22mode%22%3A%22EDITOR%22%2C%22bindingdata%22%3A%5B%7B%22value%22%3A%22%E6%97%A0%22%2C%22label%22%3A%22%E6%97%A0%22%2C%22selected%22%3A0%7D%2C%7B%22value%22%3A%22%E6%9C%89%22%2C%22label%22%3A%22%E6%9C%89%22%2C%22selected%22%3A0%7D%5D%2C%22remotedata%22%3Anull%7D"
                    sde-value="" sde-isloadasyncdata="true"
                    bindingdata="[{&quot;value&quot;:&quot;无&quot;,&quot;label&quot;:&quot;无&quot;,&quot;selected&quot;:0},{&quot;value&quot;:&quot;有&quot;,&quot;label&quot;:&quot;有&quot;,&quot;selected&quot;:0}]"
                    sde-updatetime="2019-11-18T03:36:04.984Z"><span class="sde-value" contenteditable="true"
                      sde-left="[" sde-right="]"><label contenteditable="false"><input name="radio_095c6af6"
                          type="radio"
                          value="%7B%22value%22%3A%22%E6%97%A0%22%2C%22label%22%3A%22%E6%97%A0%22%2C%22selected%22%3A0%7D">无</label><label
                        contenteditable="false"><input name="radio_095c6af6" type="radio"
                          value="%7B%22value%22%3A%22%E6%9C%89%22%2C%22label%22%3A%22%E6%9C%89%22%2C%22selected%22%3A0%7D">有</label></span></span>​&nbsp;&nbsp;<span
                    class="sde-ctrl" contenteditable="false" id="xybz" sde-type="text" sde-right="."
                    sde-model="%7B%22desc%22%3A%22%22%2C%22required%22%3A0%2C%22strictverify%22%3A0%2C%22notdel%22%3A0%2C%22verify%22%3A%22%22%2C%22mode%22%3A%22EDITOR%22%7D"
                    sde-isloadasyncdata="false"><span class="sde-value" contenteditable="true" sde-left="["
                      sde-right="]" _backups=""></span></span>​<p>支/天&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>
                  <p>&nbsp;酗酒：</p><span class="sde-ctrl" contenteditable="false" id="xj" sde-type="radio" sde-right="."
                    sde-model="%7B%22desc%22%3A%22%22%2C%22required%22%3A0%2C%22notdel%22%3A0%2C%22mode%22%3A%22EDITOR%22%2C%22bindingdata%22%3A%5B%7B%22value%22%3A%22%E6%97%A0%22%2C%22label%22%3A%22%E6%97%A0%22%2C%22selected%22%3A0%7D%2C%7B%22value%22%3A%22%E6%9C%89%22%2C%22label%22%3A%22%E6%9C%89%22%2C%22selected%22%3A0%7D%5D%2C%22remotedata%22%3Anull%7D"
                    sde-value="%7B%22value%22%3A%22%E6%9C%89%22%2C%22label%22%3A%22%E6%9C%89%22%2C%22selected%22%3A0%7D"
                    sde-isloadasyncdata="true"
                    bindingdata="[{&quot;value&quot;:&quot;无&quot;,&quot;label&quot;:&quot;无&quot;,&quot;selected&quot;:0},{&quot;value&quot;:&quot;有&quot;,&quot;label&quot;:&quot;有&quot;,&quot;selected&quot;:0}]"
                    sde-updatetime="2019-11-18T03:36:04.984Z"><span class="sde-value" contenteditable="true"
                      sde-left="[" sde-right="]"><label contenteditable="false"><input name="radio_e3193f38"
                          type="radio"
                          value="%7B%22value%22%3A%22%E6%97%A0%22%2C%22label%22%3A%22%E6%97%A0%22%2C%22selected%22%3A0%7D">无</label><label
                        contenteditable="false"><input name="radio_e3193f38" type="radio"
                          value="%7B%22value%22%3A%22%E6%9C%89%22%2C%22label%22%3A%22%E6%9C%89%22%2C%22selected%22%3A0%7D"
                          checked="checked">有</label></span></span>​&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 习惯用药
                  ：&nbsp; &nbsp; &nbsp;&nbsp;<span class="sde-ctrl" contenteditable="false" id="xgyy" sde-type="radio"
                    sde-right="."
                    sde-model="%7B%22desc%22%3A%22%22%2C%22required%22%3A0%2C%22notdel%22%3A0%2C%22mode%22%3A%22EDITOR%22%2C%22bindingdata%22%3A%5B%7B%22value%22%3A%22%E6%97%A0%22%2C%22label%22%3A%22%E6%97%A0%22%2C%22selected%22%3A0%7D%2C%7B%22value%22%3A%22%E6%9C%89%22%2C%22label%22%3A%22%E6%9C%89%22%2C%22selected%22%3A0%7D%5D%2C%22remotedata%22%3Anull%7D"
                    sde-value="" sde-isloadasyncdata="true"
                    bindingdata="[{&quot;value&quot;:&quot;无&quot;,&quot;label&quot;:&quot;无&quot;,&quot;selected&quot;:0},{&quot;value&quot;:&quot;有&quot;,&quot;label&quot;:&quot;有&quot;,&quot;selected&quot;:0}]"
                    sde-updatetime="2019-11-18T03:36:04.984Z"><span class="sde-value" contenteditable="true"
                      sde-left="[" sde-right="]"><label contenteditable="false"><input name="radio_2eb91e6e"
                          type="radio"
                          value="%7B%22value%22%3A%22%E6%97%A0%22%2C%22label%22%3A%22%E6%97%A0%22%2C%22selected%22%3A0%7D">无</label><label
                        contenteditable="false"><input name="radio_2eb91e6e" type="radio"
                          value="%7B%22value%22%3A%22%E6%9C%89%22%2C%22label%22%3A%22%E6%9C%89%22%2C%22selected%22%3A0%7D">有</label></span></span>​&nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; 健康状况 ： 过去<span class="sde-ctrl" contenteditable="false" id="jkgq"
                    sde-type="select" sde-right="."
                    sde-model="%7B%22desc%22%3A%22%22%2C%22required%22%3A0%2C%22multi%22%3A0%2C%22notdel%22%3A0%2C%22mode%22%3A%22EDITOR%22%2C%22bindingdata%22%3A%5B%5D%2C%22remotedata%22%3Anull%7D"
                    sde-value="[]" sde-isloadasyncdata="true" bindingdata="[]"
                    sde-updatetime="2019-11-18T03:36:04.984Z"><span class="sde-value sde-select" contenteditable="true"
                      sde-left="[" sde-right="]"></span></span>​&nbsp; &nbsp; 现在<span class="sde-ctrl"
                    contenteditable="false" id="jkxz" sde-type="select" sde-right="."
                    sde-model="%7B%22desc%22%3A%22%22%2C%22required%22%3A0%2C%22multi%22%3A0%2C%22notdel%22%3A0%2C%22mode%22%3A%22EDITOR%22%2C%22bindingdata%22%3A%5B%5D%2C%22remotedata%22%3Anull%7D"
                    sde-value="" sde-isloadasyncdata="true" bindingdata="[]"
                    sde-updatetime="2019-11-18T03:36:04.984Z"><span class="sde-value sde-select" contenteditable="true"
                      sde-left="[" sde-right="]"></span></span>​
                </td>
              </tr>
              <tr>
                <td valign="top" width="83.33333333333331"
                  style="border-width: 1px; border-style: solid; border-color: rgb(255, 255, 255) black black; word-break: break-all;;border-left:1px solid black;;border-right:1px solid black;;;border-bottom:1px solid black;;"
                  height="85">月经史</td>
                <td valign="top" width="627"
                  style="border-width: 1px; border-style: solid; border-color: rgb(255, 255, 255) black black rgb(255, 255, 255); word-break: break-all;;border-right:1px solid black;;border-bottom:1px solid black;;"
                  height="85">初潮 :&nbsp;<span class="sde-ctrl" contenteditable="false" id="cc" sde-type="text"
                    sde-right="."
                    sde-model="%7B%22desc%22%3A%22%22%2C%22required%22%3A0%2C%22strictverify%22%3A0%2C%22notdel%22%3A0%2C%22verify%22%3A%22%22%2C%22mode%22%3A%22EDITOR%22%7D"
                    sde-isloadasyncdata="false"><span class="sde-value" contenteditable="true" sde-left="["
                      sde-right="]" _backups=""></span></span>​岁&nbsp; &nbsp; &nbsp;月经周期 ： <span class="sde-ctrl"
                    contenteditable="false" id="yjzq" sde-type="text" sde-right="."
                    sde-model="%7B%22desc%22%3A%22%22%2C%22required%22%3A0%2C%22strictverify%22%3A0%2C%22notdel%22%3A0%2C%22verify%22%3A%22%22%2C%22mode%22%3A%22EDITOR%22%7D"
                    sde-isloadasyncdata="false"><span class="sde-value" contenteditable="true" sde-left="["
                      sde-right="]"></span></span>​&nbsp;天&nbsp; &nbsp; &nbsp; 持续 ：&nbsp;<span class="sde-ctrl"
                    contenteditable="false" id="yjcx" sde-type="text" sde-right="."
                    sde-model="%7B%22desc%22%3A%22%22%2C%22required%22%3A0%2C%22strictverify%22%3A0%2C%22notdel%22%3A0%2C%22verify%22%3A%22%22%2C%22mode%22%3A%22EDITOR%22%7D"
                    sde-isloadasyncdata="false"><span class="sde-value" contenteditable="true" sde-left="["
                      sde-right="]"></span></span>​&nbsp; &nbsp; 经量 ：&nbsp;<span class="sde-ctrl"
                    contenteditable="false" id="yjjl" sde-type="select" sde-right="."
                    sde-model="%7B%22desc%22%3A%22%22%2C%22required%22%3A0%2C%22multi%22%3A0%2C%22notdel%22%3A0%2C%22mode%22%3A%22EDITOR%22%2C%22bindingdata%22%3A%5B%5D%2C%22remotedata%22%3Anull%7D"
                    sde-value="[]" sde-isloadasyncdata="true" bindingdata="[]"
                    sde-updatetime="2019-11-18T03:36:04.984Z"><span class="sde-value sde-select" contenteditable="true"
                      sde-left="[" sde-right="]"></span></span>​<p>&nbsp;&nbsp;</p>
                  <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p>
                  痛经 ：<span class="sde-ctrl" contenteditable="false" id="tj" sde-type="select" sde-right="."
                    sde-model="%7B%22desc%22%3A%22%22%2C%22required%22%3A0%2C%22multi%22%3A0%2C%22notdel%22%3A0%2C%22mode%22%3A%22EDITOR%22%2C%22bindingdata%22%3A%5B%5D%2C%22remotedata%22%3Anull%7D"
                    sde-value="" sde-isloadasyncdata="true" bindingdata="[]"
                    sde-updatetime="2019-11-18T03:36:04.984Z"><span class="sde-value sde-select" contenteditable="true"
                      sde-left="[" sde-right="]"></span></span>​&nbsp; &nbsp; &nbsp;末次月经 ：&nbsp;<span class="sde-ctrl"
                    contenteditable="false" id="mcyj" sde-type="date" sde-right="."
                    sde-model="%7B%22desc%22%3A%22%22%2C%22required%22%3A0%2C%22strictverify%22%3A0%2C%22notdel%22%3A0%2C%22mode%22%3A%22EDITOR%22%2C%22min%22%3A%22%22%2C%22max%22%3A%22%22%2C%22format%22%3A%22%22%2C%22defvalue%22%3A%22%22%7D"
                    sde-isloadasyncdata="false"><span class="sde-value" contenteditable="true" sde-left="["
                      sde-right="]" _backups=""></span></span>​
                </td>
              </tr>
              <tr>
                <td valign="top" width="83.33333333333331"
                  style="border-width: 1px; border-style: solid; border-color: rgb(255, 255, 255) black black; word-break: break-all;;border-left:1px solid black;;border-right:1px solid black;;;border-bottom:1px solid black;;"
                  height="119">婚育史</td>
                <td valign="top" width="627"
                  style="border-width: 1px; border-style: solid; border-color: rgb(255, 255, 255) black black rgb(255, 255, 255); word-break: break-all;;border-right:1px solid black;;border-bottom:1px solid black;;"
                  height="119">远亲结婚 ：&nbsp;<span class="sde-ctrl" contenteditable="false" id="yqjh" sde-type="radio"
                    sde-right="."
                    sde-model="%7B%22desc%22%3A%22%22%2C%22required%22%3A0%2C%22notdel%22%3A0%2C%22mode%22%3A%22EDITOR%22%2C%22bindingdata%22%3A%5B%7B%22value%22%3A%22%E5%90%A6%22%2C%22label%22%3A%22%E5%90%A6%22%2C%22selected%22%3A0%7D%2C%7B%22value%22%3A%22%E6%98%AF%22%2C%22label%22%3A%22%E6%98%AF%22%2C%22selected%22%3A0%7D%5D%2C%22remotedata%22%3Anull%7D"
                    sde-value="" sde-isloadasyncdata="true"
                    bindingdata="[{&quot;value&quot;:&quot;否&quot;,&quot;label&quot;:&quot;否&quot;,&quot;selected&quot;:0},{&quot;value&quot;:&quot;是&quot;,&quot;label&quot;:&quot;是&quot;,&quot;selected&quot;:0}]"
                    sde-updatetime="2019-11-18T03:36:04.984Z"><span class="sde-value" contenteditable="true"
                      sde-left="[" sde-right="]"><label contenteditable="false"><input name="radio_2a4ef327"
                          type="radio"
                          value="%7B%22value%22%3A%22%E5%90%A6%22%2C%22label%22%3A%22%E5%90%A6%22%2C%22selected%22%3A0%7D">否</label><label
                        contenteditable="false"><input name="radio_2a4ef327" type="radio"
                          value="%7B%22value%22%3A%22%E6%98%AF%22%2C%22label%22%3A%22%E6%98%AF%22%2C%22selected%22%3A0%7D">是</label></span></span>​&nbsp;
                  &nbsp; &nbsp;再婚 ：&nbsp;<span class="sde-ctrl" contenteditable="false" id="zh" sde-type="radio"
                    sde-right="."
                    sde-model="%7B%22desc%22%3A%22%22%2C%22required%22%3A0%2C%22notdel%22%3A0%2C%22mode%22%3A%22EDITOR%22%2C%22bindingdata%22%3A%5B%7B%22value%22%3A%22%E5%90%A6%22%2C%22label%22%3A%22%E5%90%A6%22%2C%22selected%22%3A0%7D%5D%2C%22remotedata%22%3Anull%7D"
                    sde-value="" sde-isloadasyncdata="true"
                    bindingdata="[{&quot;value&quot;:&quot;否&quot;,&quot;label&quot;:&quot;否&quot;,&quot;selected&quot;:0}]"
                    sde-updatetime="2019-11-18T03:36:04.984Z"><span class="sde-value" contenteditable="true"
                      sde-left="[" sde-right="]"><label contenteditable="false"><input name="radio_85431350"
                          type="radio"
                          value="%7B%22value%22%3A%22%E5%90%A6%22%2C%22label%22%3A%22%E5%90%A6%22%2C%22selected%22%3A0%7D">否</label></span></span>​&nbsp;
                  &nbsp; &nbsp;妊娠 ：<span class="sde-ctrl" contenteditable="false" id="rs" sde-type="radio" sde-right="."
                    sde-model="%7B%22desc%22%3A%22%22%2C%22required%22%3A0%2C%22notdel%22%3A0%2C%22mode%22%3A%22EDITOR%22%2C%22bindingdata%22%3A%5B%7B%22value%22%3A%22%E5%90%A6%22%2C%22label%22%3A%22%E5%90%A6%22%2C%22selected%22%3A0%7D%2C%7B%22value%22%3A%22%E6%98%AF%22%2C%22label%22%3A%22%E6%98%AF%22%2C%22selected%22%3A0%7D%5D%2C%22remotedata%22%3Anull%7D"
                    sde-value="" sde-isloadasyncdata="true"
                    bindingdata="[{&quot;value&quot;:&quot;否&quot;,&quot;label&quot;:&quot;否&quot;,&quot;selected&quot;:0},{&quot;value&quot;:&quot;是&quot;,&quot;label&quot;:&quot;是&quot;,&quot;selected&quot;:0}]"
                    sde-updatetime="2019-11-18T03:36:04.984Z"><span class="sde-value" contenteditable="true"
                      sde-left="[" sde-right="]"><label contenteditable="false"><input name="radio_bdc9bf58"
                          type="radio"
                          value="%7B%22value%22%3A%22%E5%90%A6%22%2C%22label%22%3A%22%E5%90%A6%22%2C%22selected%22%3A0%7D">否</label><label
                        contenteditable="false"><input name="radio_bdc9bf58" type="radio"
                          value="%7B%22value%22%3A%22%E6%98%AF%22%2C%22label%22%3A%22%E6%98%AF%22%2C%22selected%22%3A0%7D">是</label></span></span>​&nbsp;
                  &nbsp; &nbsp;末次妊娠时间：<span class="sde-ctrl" contenteditable="false" id="mcrssj" sde-type="date"
                    sde-right="."
                    sde-model="%7B%22desc%22%3A%22%22%2C%22required%22%3A0%2C%22strictverify%22%3A0%2C%22notdel%22%3A0%2C%22mode%22%3A%22EDITOR%22%2C%22min%22%3A%22%22%2C%22max%22%3A%22%22%2C%22format%22%3A%22%22%2C%22defvalue%22%3A%22%22%7D"
                    sde-isloadasyncdata="false"><span class="sde-value" contenteditable="true" sde-left="["
                      sde-right="]" _backups=""></span></span>​<p>现有子女 : <span class="sde-ctrl" contenteditable="false"
                      id="xyzn" sde-type="text" sde-right="."
                      sde-model="%7B%22desc%22%3A%22%22%2C%22required%22%3A0%2C%22strictverify%22%3A0%2C%22notdel%22%3A0%2C%22verify%22%3A%22%22%2C%22mode%22%3A%22EDITOR%22%7D"
                      sde-isloadasyncdata="false"><span class="sde-value" contenteditable="true" sde-left="["
                        sde-right="]" _backups=""></span></span>​人</p>
                  <p><br></p>
                </td>
              </tr>
              <tr>
                <td valign="top" width="83.33333333333331"
                  style="border-width: 1px; border-style: solid; border-color: rgb(255, 255, 255) black black; word-break: break-all;;border-left:1px solid black;;border-right:1px solid black;;;border-bottom:1px solid black;;">
                  家庭史</td>
                <td valign="top" width="627"
                  style="border-width: 1px; border-style: solid; border-color: rgb(255, 255, 255) black black rgb(255, 255, 255); word-break: break-all;;border-right:1px solid black;;border-bottom:1px solid black;;">
                  遗传病史 ：&nbsp;<span class="sde-ctrl" contenteditable="false" id="ycbs" sde-type="radio" sde-right="."
                    sde-model="%7B%22desc%22%3A%22%22%2C%22required%22%3A0%2C%22notdel%22%3A0%2C%22mode%22%3A%22EDITOR%22%2C%22bindingdata%22%3A%5B%7B%22value%22%3A%22%E6%97%A0%22%2C%22label%22%3A%22%E6%97%A0%22%2C%22selected%22%3A0%7D%2C%7B%22value%22%3A%22%E6%9C%89%22%2C%22label%22%3A%22%E6%9C%89%22%2C%22selected%22%3A0%7D%5D%2C%22remotedata%22%3Anull%7D"
                    sde-value="" sde-isloadasyncdata="true"
                    bindingdata="[{&quot;value&quot;:&quot;无&quot;,&quot;label&quot;:&quot;无&quot;,&quot;selected&quot;:0},{&quot;value&quot;:&quot;有&quot;,&quot;label&quot;:&quot;有&quot;,&quot;selected&quot;:0}]"
                    sde-updatetime="2019-11-18T03:36:04.984Z"><span class="sde-value" contenteditable="true"
                      sde-left="[" sde-right="]"><label contenteditable="false"><input name="radio_dbe56cde"
                          type="radio"
                          value="%7B%22value%22%3A%22%E6%97%A0%22%2C%22label%22%3A%22%E6%97%A0%22%2C%22selected%22%3A0%7D">无</label><label
                        contenteditable="false"><input name="radio_dbe56cde" type="radio"
                          value="%7B%22value%22%3A%22%E6%9C%89%22%2C%22label%22%3A%22%E6%9C%89%22%2C%22selected%22%3A0%7D">有</label></span></span>​&nbsp;<span
                    class="sde-ctrl" contenteditable="false" id="xcbsbz" sde-type="text" sde-right="."
                    sde-model="%7B%22desc%22%3A%22%22%2C%22required%22%3A0%2C%22strictverify%22%3A0%2C%22notdel%22%3A0%2C%22verify%22%3A%22%22%2C%22mode%22%3A%22EDITOR%22%7D"
                    sde-isloadasyncdata="false"><span class="sde-value" contenteditable="true" sde-left="["
                      sde-right="]"></span></span>​<p><br></p>
                  <p>不孕不育病史 ： <span class="sde-ctrl" contenteditable="false" id="bybybs" sde-type="radio" sde-right="."
                      sde-model="%7B%22desc%22%3A%22%22%2C%22required%22%3A0%2C%22notdel%22%3A0%2C%22mode%22%3A%22EDITOR%22%2C%22bindingdata%22%3A%5B%7B%22value%22%3A%22%E6%97%A0%22%2C%22label%22%3A%22%E6%97%A0%22%2C%22selected%22%3A0%7D%2C%7B%22value%22%3A%22%E6%9C%89%22%2C%22label%22%3A%22%E6%9C%89%22%2C%22selected%22%3A0%7D%5D%2C%22remotedata%22%3Anull%7D"
                      sde-value="" sde-isloadasyncdata="true"
                      bindingdata="[{&quot;value&quot;:&quot;无&quot;,&quot;label&quot;:&quot;无&quot;,&quot;selected&quot;:0},{&quot;value&quot;:&quot;有&quot;,&quot;label&quot;:&quot;有&quot;,&quot;selected&quot;:0}]"
                      sde-updatetime="2019-11-18T03:36:04.984Z"><span class="sde-value" contenteditable="true"
                        sde-left="[" sde-right="]"><label contenteditable="false"><input name="radio_6cab562c"
                            type="radio"
                            value="%7B%22value%22%3A%22%E6%97%A0%22%2C%22label%22%3A%22%E6%97%A0%22%2C%22selected%22%3A0%7D">无</label><label
                          contenteditable="false"><input name="radio_6cab562c" type="radio"
                            value="%7B%22value%22%3A%22%E6%9C%89%22%2C%22label%22%3A%22%E6%9C%89%22%2C%22selected%22%3A0%7D">有</label></span></span>​&nbsp;<span
                      class="sde-ctrl" contenteditable="false" id="bybybsbz" sde-type="text" sde-right="."
                      sde-model="%7B%22desc%22%3A%22%22%2C%22required%22%3A0%2C%22strictverify%22%3A0%2C%22notdel%22%3A0%2C%22verify%22%3A%22%22%2C%22mode%22%3A%22EDITOR%22%7D"
                      sde-isloadasyncdata="false"><span class="sde-value" contenteditable="true" sde-left="["
                        sde-right="]"></span></span>​</p>
                </td>
              </tr>
              <tr>
                <td valign="top" width="76.33333333333331"
                  style="border-width: 1px; border-style: solid; border-color: rgb(255, 255, 255) black black; word-break: break-all;;border-left:1px solid black;;border-right:1px solid black;;;border-bottom:1px solid black;;"
                  height="159">体格检查</td>
                <td valign="top" width="627"
                  style="border-width: 1px; border-style: solid; border-color: rgb(255, 255, 255) black black rgb(255, 255, 255); word-break: break-all;;border-right:1px solid black;;border-bottom:1px solid black;;"
                  height="159">
                  <p>测试</p>
                  <p><br></p>
                  <p>测试</p>
                  <p><br></p>
                  <p>测试</p>
                  <p><br></p>
                  <p>测试</p>
                  <p><br></p>
                  <p>测试</p>
                  <p>测试</p>
                  <p><br></p>
                  <p>测试</p>
                </td>
              </tr>
              <tr>
                <td valign="top" colspan="1" rowspan="1"
                  style="border-left-color: black; border-left-width: 1px; border-top-color: black; border-top-width: 1px; word-break: break-all;;border-left:1px solid black;;border-right:1px solid black;;;border-bottom:1px solid black;;"
                  width="0">妇科检查<br></td>
                <td valign="top" colspan="1" rowspan="1"
                  style="border-left-color: black; border-left-width: 1px; border-top-color: black; border-top-width: 1px; word-break: break-all;;border-right:1px solid black;;border-bottom:1px solid black;;"
                  width="627">
                  <p>一切从简</p>
                  <p>一切从简</p>
                  <p><br></p>
                  <p>一切从简</p>
                  <p>一切从简一切从简</p>
                  <p>一切从简一切从简</p>
                  <p>一切从简一切从简</p>
                  <p>一切从简一切从简</p>
                </td>
              </tr>
              <tr>
                <td valign="top" colspan="1" rowspan="1"
                  style="word-break: break-all;;border-left:1px solid black;;border-right:1px solid black;;;border-bottom:1px solid black;;"
                  width="0">诊断</td>
                <td valign="top" colspan="1" rowspan="1"
                  style="word-break: break-all;;border-right:1px solid black;;border-bottom:1px solid black;;"
                  width="627">
                  <p>扛不住</p>
                  <p><br></p>
                </td>
              </tr>
              <tr>
                <td valign="top" colspan="1" rowspan="1"
                  style="word-break: break-all;;border-left:1px solid black;;border-right:1px solid black;;;border-bottom:1px solid black;;"
                  width="0">诊疗方案</td>
                <td valign="top" colspan="1" rowspan="1"
                  style="word-break: break-all;;border-right:1px solid black;;border-bottom:1px solid black;"
                  width="627">扛不住</td>
              </tr>
              <tr>
                <td valign="top" colspan="2" rowspan="1"
                  style="word-break: break-all;;border-left:1px solid black;;border-right:1px solid black;;border-bottom:1px solid black;"
                  align="right">
                  <p>签名 ：_____________&nbsp;</p>
                  <p>日期 ：&nbsp;<span class="sde-ctrl" contenteditable="false" id="rq" sde-type="date" sde-right="."
                      sde-model="%7B%22desc%22%3A%22%22%2C%22required%22%3A0%2C%22strictverify%22%3A0%2C%22notdel%22%3A0%2C%22mode%22%3A%22EDITOR%22%2C%22min%22%3A%22%22%2C%22max%22%3A%22%22%2C%22format%22%3A%22%22%2C%22defvalue%22%3A%22%22%7D"
                      sde-isloadasyncdata="false"><span class="sde-value" contenteditable="true" sde-left="["
                        sde-right="]"></span></span>​</p>
                </td>
              </tr>
              <tr>
                <td valign="top" colspan="1" rowspan="1" align="right"
                  style="border-left-color: black; border-left-width: 1px; border-top-color: black; border-top-width: 1px;"
                  width="112"><br></td>
                <td valign="top" colspan="1" rowspan="1" align="right"
                  style="border-left-color: black; border-left-width: 1px; border-top-color: black; border-top-width: 1px; word-break: break-all;"
                  width="627">
                  <div class="sde-ctrl sde-section" contenteditable="false" id="aaa" sde-type="section"
                    sde-model="%7B%22desc%22%3A%22%22%2C%22notdel%22%3A0%2C%22mode%22%3A%22EDITOR%22%2C%22originalmode%22%3A%22EDITOR%22%7D"
                    sde-isloadasyncdata="false">
                    <div class="sde-value" contenteditable="true">
                      flafjaofjoajfo
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div contenteditable="false" class="sde-tmp-footer">
        <div contenteditable="true" title="页脚" class="sde-tmp-footer-value" style="display: block;"></div>
      </div>
    </div>​

  </div>
</template>
