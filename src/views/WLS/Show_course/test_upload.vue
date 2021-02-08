<template>
  <div id="content">
    <!-- <a-row :span="24" :gutter="[30, 10]">
      <a-col :span="5" :offset="1">
        <input
          type="file"
          name="csv_file"
          id="csv_file"
          @change="loadCSV($event)"
        />
      </a-col>
    </a-row>
    <a-row :span="24" :gutter="[30, 10]">
      <a-col :span="5" :offset="1">
        <button @click="test()">pares CSV</button>
      </a-col>
    </a-row>
    <a-row :span="24" :gutter="[30, 10]">
      <table v-if="parse_csv">
        <thead>
          <tr>
            <th
              v-for="item in parse_header"
              v-bind:key="item.key"
              @click="sortBy(key)"
              :class="{ active: sortKey == key }"
            >
              {{ key | capitalize }}
              <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
              </span>
            </th>
          </tr>
        </thead>
        <tr v-for="csv in parse_csv" v-bind:key="csv.key">
          <td v-for="item in parse_header" v-bind:key="item.key">
            {{ csv[key] }}
          </td>
        </tr>
      </table>
    </a-row> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      // name: "",
      // fields: [],
      // entries: [],
      // parse_header: [],
      // parse_csv: [],
      // sortOrder: {},
      // sortKey: "",
    };
  },
  filters: {
    // capitalize: function (str) {
    //   return str.charAt(0).toUpperCase() + str.slice(1);
    // },
  },
  methods: {
    // sortBy: function (key) {
    //   var vm = this;
    //   vm.sortKey = key;
    //   vm.sortOrder[key] = vm.sortOrders[key] * -1;
    // },
    // csvJSON(csv) {
    //   var vm = this;
    //   var lines = csv.split("\n");
    //   var result = [];
    //   var header = lines[0].split(",");
    //   vm.parse_header = lines[0].split(",");
    //   lines[0].split(",").forEach(function (key) {
    //     vm.sortOrders[key] = 1;
    //   });
    //   lines.map(function (line, indexLine) {
    //     if (indexLine < 1) return; //Jump header line
    //     var obj = {};
    //     var currentline = line.split(",");
    //     header.map(function (header, indexHeader) {
    //       obj[header] = currentline[indexHeader];
    //     });
    //     result.push(obj);
    //   });
    //   result.pop(); //remove the last item because undefine value
    //   return result; //object
    // },
    // loadCSV(e) {
    //   var vm = this;
    //   if (window.FileReader) {
    //     var reader = new FileReader();
    //     reader.readAsText(e.target.files[0]);
    //     //Handle error load
    //     reader.onload = function (event) {
    //       var csv = event.target.result;
    //       vm.parse_csv = vm.csvJSON(csv);
    //     };
    //     reader.onerror = function (evt) {
    //       if (evt.target.error.name == "NotReadableError") {
    //         alert("Can not read file !!!");
    //       }
    //     };
    //   } else {
    //     alert("FileReader are not supported in this browser.");
    //   }
    // },
  },
};
</script>

<style>
</style>