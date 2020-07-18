<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-message"></i> 任务中心
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <el-tabs v-model="message">
        <el-tab-pane :label="`待办任务(${unreadTask.length})`" name="first">
          <el-table
            :data="unreadTask"
            :show-header="false"
            style="width: 100%"
            @row-click="openDetails"
          >
            <el-table-column>
              <template slot-scope="scope">
                <span class="message-title">{{scope.row.title}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="date" width="180"></el-table-column>
          </el-table>
          <el-pagination
            small
            @current-change="handleCurrentChange"
            layout="prev, pager, next"
            :total="pageNums"
          ></el-pagination>
        </el-tab-pane>
        <el-tab-pane :label="`当前任务(${onreadTask.length})`" name="second">
          <template>
            <el-table
              v-if="activeName === 'second'"
              :data="onreadTask"
              :show-header="false"
              style="width: 100%"
            >
              <el-table-column>
                <template slot-scope="scope">
                  <span class="message-title">{{scope.row.title}}</span>
                </template>
              </el-table-column>
              <el-table-column prop="date" width="150"></el-table-column>
            </el-table>
            <el-pagination
              small
              @current-change="handleCurrentChange"
              layout="prev, pager, next"
              :total="pageNums"
            ></el-pagination>
          </template>
        </el-tab-pane>
        <el-tab-pane :label="`已完成任务(${finishTask.length})`" name="third">
          <template>
            <el-table
              v-if="activeName === 'third'"
              :data="finishTask"
              :show-header="false"
              style="width: 100%"
            >
              <el-table-column>
                <template slot-scope="scope">
                  <span class="message-title">{{scope.row.title}}</span>
                </template>
              </el-table-column>
              <el-table-column prop="date" width="150"></el-table-column>
            </el-table>
            <el-pagination
              small
              @current-change="handleCurrentChange"
              layout="prev, pager, next"
              :total="pageNums"
            ></el-pagination>
          </template>
        </el-tab-pane>
        <el-tab-pane :label="`驳回任务(${rejectTask.length})`" name="fourth">
          <template>
            <el-table
              v-if="activeName === 'fourth'"
              :data="rejectTask"
              :show-header="false"
              style="width: 100%"
            >
              <el-table-column>
                <template slot-scope="scope">
                  <span class="message-title">{{scope.row.title}}</span>
                </template>
              </el-table-column>
              <el-table-column prop="date" width="150"></el-table-column>
            </el-table>
            <el-pagination
              small
              @current-change="handleCurrentChange"
              layout="prev, pager, next"
              :total="pageNums"
            ></el-pagination>
          </template>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskCore",
  data() {
    return {
      menusList: [
        {
          id: "31011",
          name: "讲师管理",
          path: "/train/lecturer",
          code: "user",
          icon: "el-icon-user",
          children: [
            {
              id: "31012",
              name: "讲师维护",
              path: "/train/lecturer/maintain",
              code: "user",
              icon: "el-icon-first-aid-kit",
              children: []
            },
            {
              icon: "el-icon-edit-outline",
              code: "user",
              path: "/train/lecturer/lecturerRate",
              name: "讲师评级",
              id: null,
              children: [
                {
                  children: [],
                  icon: "el-icon-document-add",
                  code: "user",
                  path: "/train/lecturer/lecturerRate/prepLecturerEdit",
                  name: "预备讲师维护",
                  id: null
                },
                {
                  children: [],
                  icon: "el-icon-thumb",
                  code: "user",
                  path: "/train/lecturer/lecturerRate/lecturerReviewList",
                  name: "预备讲师审核",
                  id: null
                }
              ]
            }
          ]
        }
      ],
      message: "first",
      showHeader: false,
      //消息总数
      pageNums: 20,
      unreadTask: [
        {
          date: "2018-09-02 20:00:00",
          title: "【系统通知】该系统将于今晚凌晨2点到5点进行升级维护"
        },
        {
          date: "2018-09-02 21:00:00",
          title: "今晚12点整发大红包，先到先得"
        },
        {
          date: "2018-09-02 21:00:00",
          title: "今晚12点整发大红包，先到先得"
        },
        {
          date: "2018-09-02 21:00:00",
          title: "今晚12点整发大红包，先到先得"
        }
      ],
      onreadTask: [
        {
          date: "2018-09-02 20:00:00",
          title: "【系统通知】该系统将于今晚凌晨2点到5点进行升级维护"
        }
      ],
      finishTask: [
        {
          date: "2018-09-20 20:00:00",
          title: "【系统通知】该系统将于今晚凌晨2点到5点进行升级维护"
        }
      ],
      rejectTask: [
        {
          date: "2018-09-20 20:00:00",
          title: "【系统通知】该系统将于今晚凌晨2点到5点进行升级维护"
        }
      ]
    };
  },
  methods: {
    handleCurrentChange(index) {
      //页码
      console.log(index);
    },
    //阅读消息
    openDetails(column) {
      console.log(column);
    }
  },
  computed: {
    unreadNum() {
      return this.unreadTask.length;
    }
  }
};
</script>

<style>
.message-title {
  cursor: pointer;
}
.handle-row {
  margin-top: 30px;
}
</style>
