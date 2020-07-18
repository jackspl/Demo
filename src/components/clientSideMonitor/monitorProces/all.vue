<template>
  <div class="all clearfix">
    <div class="top_box clearfix">
      <div class="all_left fl">
        <div class="text_skyBlue">Minemap</div>
        <div class="title">Status Grid</div>
        <div class="table">
          <el-table :data="StatusTable" border style="width: 100%">
            <el-table-column prop="date" label="Host" width="180" class="clearfix">
              <template slot-scope="{row}">
                <div v-if="row.id >=10" class="assetPng fl">
                  <img src="../../../assets/red.png" />
                </div>
                <div v-else class="assetPng fl">
                  <img src="../../../assets/yellow.png" />
                </div>

                <el-tooltip class="item fl" effect="dark" :content="row.id" placement="top-start">
                  <p>{{row.date}}</p>
                </el-tooltip>
              </template>
            </el-table-column>
            <el-table-column prop="name" label="Services">
              <template slot-scope="{row}">
                <el-tooltip  class="item fl round" effect="dark" :content="item.date" placement="top-start"  v-for="(item,index) in StatusTable" :key="index">
                  <p>{{row.d}}</p>
                </el-tooltip>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div class="all_right fl">
        <div class="text_skyBlue">Minemap</div>
        <div class="title">Status Grid</div>
        <div class="table">
          <el-table :data="HostTable" border style="width: 100%">
            <el-table-column prop="date" label="日期"></el-table-column>
            <el-table-column prop="name" label="姓名"></el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <div class="na_ruand"></div>
  </div>
</template>
<script>
"user strict";
export default {
  data() {
    return {
      StatusTable: [
        {
          id: "10",
          date: "localhost",
          name: "王小虎"
        },
        {
          id: "5",
          date: "tc11_dispatcher",
          name: "王小虎"
        },
        {
          id: "9",
          date: "tc11_fsc",
          name: "王小虎"
        }
      ],
      sonTable: [{ index: "1" }, { index: "10" }, { index: "16" }],
      HostTable: [
        {
          date: "2016-05-02",
          name: "王小虎"
        },
        {
          date: "2016-05-04",
          name: "王小虎"
        },
        {
          date: "2016-05-01",
          name: "王小虎"
        },
        {
          date: "2016-05-03",
          name: "王小虎"
        }
      ]
    };
  },
  created() {
    this.user();
  },
  methods: {
    user() {
      var web = "123";
      function run() {
        const web = "345";
        console.log(web);
      }
      run();
      console.log(web);
      let { name, url } = { name: "123123", url: "www.baidu.com" };
      console.log(name, url);
    }
  },
  mounted() {}
};
</script>
<style lang="scss" >
@import "../../../css/base/base.css";
.all {
  .all_left {
    width: 70%;
    height: 300px;
    border: 1px solid red;
    box-sizing: border-box;
    .text_skyBlue {
      color: skyblue;
      font-size: 14px;
      height: 20px;
      line-height: 20px;
    }
    .title {
      font-size: 16px;
      color: #27ff00;
      height: 25px;
      line-height: 25px;
    }
    .table {
      .el-table thead {
        color: black;
      }
      .el-table tbody {
        color: skyblue;
      }
      .el-table tr,
      th {
        background-color: rgb(47, 85, 128);
      }
      .el-table--border td {
        border: 1px solid #8094ad;
      }
      .el-table tr {
        border: 1px solid #8094ad;
        border-bottom: 0px;
      }
      .el-table th.is-leaf {
        border-bottom: 0px;
        border-right: 1px solid #8094ad;
      }
      .el-table::before {
        z-index: 0;
      }
      .assetPng {
        width: 16px;
        margin-right: 5px;
      }
      .item {
        display: block;
        width: 130px;
      }
      .round {
        width: 15px;
        height: 15px;
        border-radius: 40px;
        background-color: red;
        float: left;
        margin: 0 5px;
        .prompt {
          position: relative;
          width: 30px;
          height: 20px;
          line-height: 20px;
          background-color: #27ff00;
        }
      }
    }
  }
  .all_right {
    width: 30%;
    height: 300px;
    border: 1px solid blue;
    box-sizing: border-box;
    .text_skyBlue {
      color: skyblue;
      font-size: 14px;
      height: 20px;
      line-height: 20px;
    }
    .title {
      font-size: 16px;
      color: #27ff00;
      height: 25px;
      line-height: 25px;
    }
  }
  .na_ruand {
    width: 100%;
    height: 50px;
    background-color: #27ff00;
  }
}
</style>
