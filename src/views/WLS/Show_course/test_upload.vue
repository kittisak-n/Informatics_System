<template>
  <div id="content">
    <a-row :span="24" :gutter="[30, 10]">
      <a-col :span="5" :offset="1">
        <input
          type="file"
          name="csv_file"
          id="csv_file"
          @change="importExcel"
        />
      </a-col>
    </a-row>
    <a-row :span="24" :gutter="[30, 10]">
      <a-col :span="5" :offset="1">
        <button>pares CSV</button> 
      </a-col>
    </a-row>
  </div>
</template>

<script>
import xlsx from "xlsx";
export default {
  data() {
    return {
      self : this,
      course: {},
    };
  },
  methods: {
    importExcel(e) {
      const files = e.target.files;
      console.log(files);
      if (!files.length) {
        return;
      } else if (!/\.(xls|xlsx)$/.test(files[0].name.toLowerCase())) {
        return alert(
          "The upload format is incorrect. Please upload xls or xlsx format"
        );
      }
      const fileReader = new FileReader();
      fileReader.onload = (ev) => {
        try {
          const data = ev.target.result;
          const XLSX = xlsx;
          const workbook = XLSX.read(data, {
            type: "binary",
          });
          const wsname = workbook.SheetNames[0]; // Take the first sheet，wb.SheetNames[0] :Take the name of the first sheet in the sheets
          const ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname]); // Generate JSON table content，wb.Sheets[Sheet名]    Get the data of the first sheet
          const excellist = []; // Clear received data
          // Edit data
          for (var i = 0; i < ws.length; i++) {
            excellist.push(ws[i]);
          }
          console.log("Read results", excellist); // At this point, you get an array containing objects that need to be processed
          self.course = excellist
        } catch (e) {
          return alert("Read failure!");
        }
      };
      fileReader.readAsBinaryString(files[0]);
      var input = document.getElementById("upload");
      input.value = "";
    },
    // //Processing Method for Uploading Files
    // handleChange(file, fileList) {
    //   this.fileTemp = file.raw;
    //   if (this.fileTemp) {
    //     if (
    //       this.fileTemp.type ==
    //         "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
    //       this.fileTemp.type == "application/vnd.ms-excel"
    //     ) {
    //       this.importfxx(this.fileTemp);
    //     } else {
    //       this.$message({
    //         type: "warning",
    //         message: "Attachment format error, please delete and upload again!",
    //       });
    //     }
    //   } else {
    //     this.$message({
    //       type: "warning",
    //       message: "Please upload the attachment!",
    //     });
    //   }
    // },
    // //Processing method when exceeding the maximum number of uploaded files
    // handleExceed() {
    //   this.$message({
    //     type: "warning",
    //     message: "Exceed the maximum number of uploaded files limit!",
    //   });
    //   return;
    // },
    // //How to remove files
    // handleRemove(file, fileList) {
    //   this.fileTemp = null;
    // },
    // importfxx(obj) {
    //   let _this = this;
    //   let inputDOM = this.$refs.inputer;
    //   // Retrieving file data through DOM

    //   this.file = event.currentTarget.files[0];

    //   var rABS = false; //Read the file as a binary string
    //   var f = this.file;

    //   var reader = new FileReader();
    //   //if (!FileReader.prototype.readAsBinaryString) {
    //   FileReader.prototype.readAsBinaryString = function (f) {
    //     var binary = "";
    //     var rABS = false; //Read the file as a binary string
    //     var pt = this;
    //     var wb; //Read completed data
    //     var outdata;
    //     var reader = new FileReader();
    //     reader.onload = function (e) {
    //       var bytes = new Uint8Array(reader.result);
    //       var length = bytes.byteLength;
    //       for (var i = 0; i < length; i++) {
    //         binary += String.fromCharCode(bytes[i]);
    //       }
    //       //If not introduced in main.js, you need to introduce it here to parse excel
    //       // var XLSX = require("xlsx");
    //       if (rABS) {
    //         wb = XLSX.read(btoa(fixdata(binary)), {
    //           //Manual conversion
    //           type: "base64",
    //         });
    //       } else {
    //         wb = XLSX.read(binary, {
    //           type: "binary",
    //         });
    //       }
    //       outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
    //       //outdata is read data (without header rows or headers, the header will be the subscript of the object)
    //       //Data can be processed here.
    //       // let arr = [];
    //       // outdata.map(v => {
    //       //     let obj = {}
    //       //     obj.code = v['Code']
    //       //     obj.name = v['Name']
    //       //     obj.pro = v['province']
    //       //     obj.cit = v['city']
    //       //     obj.dis = v['district']
    //       //     arr.push(obj)
    //       // });
    //       // _this.da=arr;
    //       // _this.dalen=arr.length;
    //       return arr;
    //     };
    //     reader.readAsArrayBuffer(f);
    //   };
    //   if (rABS) {
    //     reader.readAsArrayBuffer(f);
    //   } else {
    //     reader.readAsBinaryString(f);
    //   }
    // },
  },
};
</script>

<style>
</style>