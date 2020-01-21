<style>
.editor_wrap {
  height: 100vh;
}
</style>
<template>
  <div class="editor_wrap">
    <div class="toolbars">
      <!-- <b>修改模式：</b>
      <button v-on:click="changeMode('DESIGN')">设置为设计模式</button>
      <button v-on:click="changeMode('EDITOR')">设置为编辑模式</button>
      <button v-on:click="changeMode('STRICT')">设置为严格（表单）模式</button>
      <button v-on:click="changeMode('READONLY')">设置为只读模式</button>
      <button v-on:click="getMode()">获取当前模式</button> -->
      <br>
      <b>内部方法：</b>

      <button v-on:click="getXml()">获取XML</button>
      <button v-on:click="exportXML()">导出XML</button>
      <!-- <button v-on:click="importXML()">导入xml</button> -->
      <input type="file" accept="text/xml, application/xml" @change="importXML($event)" />
      <button v-on:click="renderXML()">xml赋值</button>

      <button v-on:click="execCommand('indent')">首行缩进</button>

      <br />

      <button v-on:click="getHTML()">获取编辑器内容</button>
      <button v-on:click="setHTML()">设置编辑器内容</button>
      <input type="text" v-model="txthtml" placeholder="请输入html内容">

      <button v-on:click="insertImg()">设置图片</button>

      <br>

      <button v-on:click="getHTML()">获取编辑器内容</button>

      <div>
        <p>功能：</p>
        <button v-on:click="saveTemplate()">模板保存</button>
        <button v-on:click="renderTemplate()">模板使用</button>

        <button>选择模板</button>
        <select v-model="tempValue" @change="tempValueSel">
          <option value="无">请选择</option>
          <option value="0">模板1</option>
          <option value="1">模板2</option>
        </select>
        <button v-on:click="ctrlGet('test')">控件获取</button>
        <br>
      </div>
      <button v-on:click="execCommand('seniorprint')">打印</button>
    </div>

    <div>
      <sde-editor-test ref="sdeEditor" :height="editorHeight"></sde-editor-test>
    </div>

  </div>
</template>
<script>
import { dicApi } from "@/api/api";

import { template } from "@/utils/template";

import sdeEditorTest from "../components/sdeEditorTest";
export default {
  components: {
    sdeEditorTest
  },
  data() {
    return {
      editorHeight: "",
      timer: null,

      txthtml: "",
      tempValue: ""
    };
  },
  created() {
    // dicApi({})
    //   .then(({ data }) => {
    //     console.info("allalalla");
    //   })
    //   .catch(err => {});
    this.editorHeight = document.documentElement.clientHeight + "px";
  },

  methods: {
    /**
     * @description: 获取编辑器XML格式内容
     * @param {type}
     * @return:
     */
    getXml() {
      const editorXml = this.$refs.sdeEditor.sde.exportXML();
      alert(this.$refs.sdeEditor.sde.exportXML());
    },

    /**
     * @description: 导出XML
     * @param {type}
     * @return:
     */
    exportXML() {
      this.$refs.sdeEditor.sde.downloadXML();
    },

    /**
     * @description: XML赋值
     * @param {type}
     * @return:
     */
    renderXML() {
      const xml = `<?xml version="1.0" encoding="UTF-8"?><xml><html>%3Cp%3Eadfa%E6%89%93%E5%8F%91sfadsf%E9%98%BFsfadsf%E9%98%BF%E6%96%AFdfa%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%3Cspan%20sde-type%3D%22text%22%20sde-right%3D%22.%22%20id%3D%22abc1%22%20sde-model%3D%22%257B%2522mode%2522%253A%2522EDITOR%2522%252C%2522notdel%2522%253A0%252C%2522strictverify%2522%253A0%252C%2522verify%2522%253A%2522%255E%255B0-9%255D*%2524%2522%252C%2522required%2522%253A0%252C%2522desc%2522%253A%2522%25E6%2595%25B4%25E6%2595%25B0%25E6%258E%25A7%25E4%25BB%25B6%2522%252C%2522remotedata%2522%253A%257B%2522url%2522%253A%2522%252Fdata%252Fjson1.json%2522%252C%2522method%2522%253A%2522get%2522%252C%2522data%2522%253A%257B%2522name%2522%253A%2522tl%2522%257D%257D%257D%22%20contenteditable%3D%22false%22%20class%3D%22sde-ctrl%22%20sde-isloadasyncdata%3D%22true%22%20bindingdata%3D%22undefined%22%20sde-updatetime%3D%222018-05-08T12%3A32%3A22.721Z%22%3E%3Cspan%20sde-left%3D%22%5B%22%20sde-right%3D%22%5D%22%20contenteditable%3D%22true%22%20class%3D%22sde-value%22%20title%3D%22%E6%95%B4%E6%95%B0%E6%8E%A7%E4%BB%B6%22%3E%E6%95%B4%E6%95%B0%E6%8E%A7%E4%BB%B6%3C%2Fspan%3E%3C%2Fspan%3E%26nbsp%3B%20%26nbsp%3Bsd%E5%95%8A%E6%96%AF%E9%A1%BF%E5%8F%91%E6%89%93%E5%8F%91%E6%96%AF%E8%92%82%E8%8A%AC%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%3Cspan%20sde-value%3D%22%5B%7B%20%26quot%3Blabel%26quot%3B%3A%20%26quot%3B%E7%94%B7%26quot%3B%2C%20%26quot%3Bvalue%26quot%3B%3A%201%20%7D%5D%22%20sde-type%3D%22select%22%20sde-updatetime%3D%222018-05-08T12%3A32%3A22.722Z%22%20sde-right%3D%22.%22%20id%3D%22abc-select%22%20sde-model%3D%22%257B%2522mode%2522%253A%2522EDITOR%2522%252C%2522notdel%2522%253A0%252C%2522strictverify%2522%253A0%252C%2522required%2522%253A0%252C%2522multi%2522%253A0%252C%2522desc%2522%253A%2522%25E6%2580%25A7%25E5%2588%25AB%2522%252C%2522bindingdata%2522%253A%255B%255D%252C%2522remotedata%2522%253A%257B%2522url%2522%253A%2522%252Fdata%252Fsex.json%2522%252C%2522method%2522%253A%2522get%2522%252C%2522headers%2522%253A%257B%257D%252C%2522data%2522%253A%257B%257D%257D%257D%22%20contenteditable%3D%22false%22%20class%3D%22sde-ctrl%22%20sde-isloadasyncdata%3D%22true%22%20bindingdata%3D%22%5B%7B%26quot%3Blabel%26quot%3B%3A%26quot%3B%E7%94%B7%26quot%3B%2C%26quot%3Bvalue%26quot%3B%3A1%7D%2C%7B%26quot%3Blabel%26quot%3B%3A%26quot%3B%E5%A5%B3%26quot%3B%2C%26quot%3Bvalue%26quot%3B%3A2%7D%2C%7B%26quot%3Blabel%26quot%3B%3A%26quot%3B%E6%9C%AA%E7%9F%A5%26quot%3B%2C%26quot%3Bvalue%26quot%3B%3A3%7D%5D%22%3E%3Cspan%20sde-left%3D%22%5B%22%20sde-right%3D%22%5D%22%20contenteditable%3D%22true%22%20class%3D%22sde-value%20sde-select%22%20title%3D%22%E6%80%A7%E5%88%AB%22%3E%E7%94%B7%3C%2Fspan%3E%3C%2Fspan%3E%26nbsp%3Bsd%E5%95%8A%E6%89%93%E7%88%B1%E7%9A%84%E5%8F%91%E7%9A%84%E8%92%82%E8%8A%AC%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%3Cspan%20sde-value%3D%22%5B%7B%20%26quot%3Blabel%26quot%3B%3A%20%26quot%3B%E6%84%9F%E8%A7%89%E5%BE%88%E5%A5%BD%26quot%3B%2C%20%26quot%3Bvalue%26quot%3B%3A%201%20%7D%2C%20%7B%20%26quot%3Blabel%26quot%3B%3A%20%26quot%3B%E6%84%9F%E8%A7%89%E4%B8%80%E8%88%AC%26quot%3B%2C%20%26quot%3Bvalue%26quot%3B%3A%202%20%7D%5D%22%20sde-type%3D%22select%22%20sde-updatetime%3D%222018-05-08T12%3A32%3A22.728Z%22%20sde-right%3D%22.%22%20id%3D%22abc-select1%22%20sde-model%3D%22%257B%2522mode%2522%253A%2522EDITOR%2522%252C%2522notdel%2522%253A0%252C%2522strictverify%2522%253A0%252C%2522required%2522%253A0%252C%2522multi%2522%253A1%252C%2522desc%2522%253A%2522%25E6%2584%259F%25E8%25A7%2589%2522%252C%2522bindingdata%2522%253A%255B%255D%252C%2522remotedata%2522%253A%257B%2522url%2522%253A%2522%252Fdata%252Ffeel.json%2522%252C%2522method%2522%253A%2522get%2522%252C%2522headers%2522%253A%257B%257D%252C%2522data%2522%253A%257B%257D%257D%257D%22%20contenteditable%3D%22false%22%20class%3D%22sde-ctrl%22%20sde-isloadasyncdata%3D%22true%22%20bindingdata%3D%22%5B%7B%26quot%3Blabel%26quot%3B%3A%26quot%3B%E6%84%9F%E8%A7%89%E5%BE%88%E5%A5%BD%26quot%3B%2C%26quot%3Bvalue%26quot%3B%3A1%7D%2C%7B%26quot%3Blabel%26quot%3B%3A%26quot%3B%E6%84%9F%E8%A7%89%E4%B8%80%E8%88%AC%26quot%3B%2C%26quot%3Bvalue%26quot%3B%3A2%7D%2C%7B%26quot%3Blabel%26quot%3B%3A%26quot%3B%E6%97%A0%E6%84%9F%E8%A7%89%26quot%3B%2C%26quot%3Bvalue%26quot%3B%3A3%7D%2C%7B%26quot%3Blabel%26quot%3B%3A%26quot%3B%E6%84%9F%E8%A7%89%E7%B3%9F%E7%B3%95%26quot%3B%2C%26quot%3Bvalue%26quot%3B%3A4%7D%5D%22%3E%3Cspan%20sde-left%3D%22%5B%22%20sde-right%3D%22%5D%22%20contenteditable%3D%22true%22%20class%3D%22sde-value%20sde-select%22%20title%3D%22%E6%84%9F%E8%A7%89%22%3E%3Cspan%20class%3D%22sde-val-item%22%20sde-value%3D%221%22%3E%E6%84%9F%E8%A7%89%E5%BE%88%E5%A5%BD%3C%2Fspan%3E%3Cspan%20class%3D%22sde-val-item%22%20sde-value%3D%222%22%3E%E6%84%9F%E8%A7%89%E4%B8%80%E8%88%AC%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fspan%3E%26nbsp%3Bsd%E5%95%8A%E6%89%93%E5%8F%91sf%3C%2Fp%3E%3Cp%3E%E5%BC%80%E5%A7%8B%E6%97%B6%E9%97%B4%EF%BC%9A%26nbsp%3B%3Cspan%20id%3D%22kssj%22%20sde-type%3D%22date%22%20sde-model%3D%22%257B%2522mode%2522%253A%2522EDITOR%2522%252C%2522notdel%2522%253A0%252C%2522strictverify%2522%253A0%252C%2522required%2522%253A0%252C%2522desc%2522%253A%2522%2522%252C%2522defvalue%2522%253A%25222018-5-7%252016%253A08%253A09%2522%252C%2522format%2522%253A%2522%257Byyyy%257D-%257BMM%257D-%257Bdd%257D%2520%257Bhh%257D%253A%257Bmm%257D%253A%257Bss%257D%2522%252C%2522min%2522%253A%2522%2522%252C%2522max%2522%253A%2522%2522%257D%22%20class%3D%22sde-ctrl%22%20contenteditable%3D%22false%22%20sde-isloadasyncdata%3D%22false%22%3E%3Cspan%20contenteditable%3D%22true%22%20sde-left%3D%22%5B%22%20sde-right%3D%22%5D%22%20class%3D%22sde-value%22%3E%E5%BC%80%E5%A7%8B%E6%97%B6%E9%97%B4%3C%2Fspan%3E%3C%2Fspan%3E%26nbsp%3B%E9%98%BF%E6%89%93%E5%8F%91%E6%89%93%0A%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%E7%BB%93%E6%9D%9F%E6%97%B6%E9%97%B4%EF%BC%9A%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%3Cspan%20id%3D%22jssj%22%20sde-type%3D%22date%22%20sde-model%3D%22%257B%2522mode%2522%253A%2522EDITOR%2522%252C%2522notdel%2522%253A0%252C%2522strictverify%2522%253A0%252C%2522required%2522%253A0%252C%2522desc%2522%253A%2522%2522%252C%2522defvalue%2522%253A%25222018-5-7%252016%253A08%253A09%2522%252C%2522format%2522%253A%2522%257Byyyy%257D-%257BMM%257D-%257Bdd%257D%2520%257Bhh%257D%253A%257Bmm%257D%253A%257Bss%257D%2522%252C%2522min%2522%253A%25222018-4-7%252016%253A08%253A09%2522%252C%2522max%2522%253A%25222018-5-17%252016%253A08%253A09%2522%257D%22%20class%3D%22sde-ctrl%22%20contenteditable%3D%22false%22%20sde-isloadasyncdata%3D%22false%22%3E%3Cspan%20contenteditable%3D%22true%22%20sde-left%3D%22%5B%22%20sde-right%3D%22%5D%22%20class%3D%22sde-value%22%3E%E7%BB%93%E6%9D%9F%E6%97%B6%E9%97%B4%3C%2Fspan%3E%3C%2Fspan%3E%26nbsp%3B%E9%98%BF%E6%89%93%E5%8F%91%E6%89%93%0A%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%E5%8F%91%E9%9A%8F%E6%84%8F%E6%97%B6%E9%97%B4%EF%BC%9A%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%3Cspan%20id%3D%22sysj%22%20sde-type%3D%22date%22%20sde-model%3D%22%257B%2522mode%2522%253A%2522EDITOR%2522%252C%2522notdel%2522%253A0%252C%2522strictverify%2522%253A0%252C%2522required%2522%253A0%252C%2522desc%2522%253A%2522%2522%252C%2522defvalue%2522%253A%25222018-5-7%252016%253A08%253A09%2522%252C%2522format%2522%253A%2522%257Byyyy%257D%25E5%25B9%25B4%257BMM%257D-%257Bdd%257D%2520%257Bhh%257D%253A%257Bmm%257D%253A%257Bss%257D%2522%252C%2522min%2522%253A%25222018-4-7%252016%253A08%253A09%2522%252C%2522max%2522%253A%25222018-5-17%252016%253A08%253A09%2522%257D%22%20class%3D%22sde-ctrl%22%20contenteditable%3D%22false%22%20sde-isloadasyncdata%3D%22false%22%3E%3Cspan%20contenteditable%3D%22true%22%20sde-left%3D%22%5B%22%20sde-right%3D%22%5D%22%20class%3D%22sde-value%22%3E%E7%BB%93%E6%9D%9F%E6%97%B6%E9%97%B4%3C%2Fspan%3E%3C%2Fspan%3E%26nbsp%3B%E9%98%BF%E6%89%93%E5%8F%91%E6%89%93%0A%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%E5%8F%91%3C%2Fp%3E</html></xml>`;

      this.$refs.sdeEditor.sde.importXML(xml);
    },

    /**
     * @description: 导入XML
     * @param {type}
     * @return:
     */
    importXML(e) {
      var xmlFile = e.target;
      var _this = this;
      if (xmlFile.files && xmlFile.files.length) {
        var fileObj = xmlFile.files[0];
        if (fileObj.name.toLowerCase().endsWith(".xml")) {
          var fileReader = new FileReader();
          fileReader.onload = function(e) {
            _this.$refs.sdeEditor.sde.importXML(e.target.result.toString());
          };
          fileReader.readAsText(fileObj);
        } else alert("上传文件类型不符合要求！");
      }
    },

    /**
     * @description: 获取编辑器内的html
     * @param {type}
     * @return:
     */
    getHTML() {
      console.info(this.$refs.sdeEditor.getHTML());
      alert(this.$refs.sdeEditor.getHTML());
    },

    /**
     * @description: 设置编辑器内的html
     * @param {type}
     * @return:
     */
    setHTML() {
      this.$refs.sdeEditor.setHTML(this.txthtml);
    },

    execCommand(cmd) {
      this.$refs.sdeEditor.execCommand(cmd);
    },
    drag(evt) {
      evt.dataTransfer.effectAllowed = "move";
      //evt.dataTransfer.setDragImage(evt.target, 0, 0);
      evt.dataTransfer.clearData();
      const html = decodeURIComponent(evt.target.getAttribute("html"));
      evt.dataTransfer.setData("Text", html);
    },
    changeMode(mode) {
      this.$refs.sdeEditor.mode(mode);
    },
    getMode() {
      alert(this.$refs.sdeEditor.mode());
    },

    ctrlGet(type) {
      this.$refs.sdeEditor.ctrlGet(type);
    },

    insertImg() {
      // this.$refs.sdeEditor.execCommand("insertimage", {
      //   src: "http://jysz.jyyy.so/common-file/app/img/2019-12-17/62601a0b4bf74b4c95cc5906525f2906.jpg",
      //   width: "100",
      //   height: "100"
      // });
    },

    /**
     * @description: 当前模板保存
     * @param {type}
     * @return:
     */
    saveTemplate() {
      localStorage.setItem("Template", this.$refs.sdeEditor.getHTML());
    },

    /**
     * @description: 渲染模板
     * @param {type}
     * @return:
     */
    renderTemplate() {
      var template = localStorage.getItem("Template");
      this.$refs.sdeEditor.setHTML(template);
    },

    tempValueSel() {
      // console.info( template[this.tempValue].content );

      if (this.tempValue == "无" && this.tempValue === "") {
        return;
      }
      const content =
        (template[this.tempValue] && template[this.tempValue].content) || "";
      this.$refs.sdeEditor.setHTML(content);
    }
  }
};
</script>
<style scoped>
.toolbars {
  line-height: 30px;
  margin-bottom: 20px;
}
.toolbars button {
  margin-left: 10px;
}
.dragstart {
  margin-left: 15px;
  cursor: move;
}
.dragstart:hover {
  border: 1px solid rgb(142, 243, 182);
}
</style>

