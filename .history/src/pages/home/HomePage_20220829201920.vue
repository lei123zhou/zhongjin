<template>
  <div class="home">
    <div class="left">
      <h5 class="title">我的容器</h5>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="date" label="日期" sortable width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" sortable width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址" :formatter="formatter">
        </el-table-column>
        <el-table-column label="操作">
          <el-popover placement="right" width="40" trigger="hover">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
                >编辑</el-button
              >
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
                >删除</el-button
              >
            </template>
            <i slot="reference" class="el-icon-more"></i>
          </el-popover>
        </el-table-column>
      </el-table>
      <el-pagination background layout="prev, pager, next" :total="1000">
      </el-pagination>
      <div style="margin-top: 20px" v-if="allDel">
        <el-button @click="toggleSelection([tableData[1], tableData[2]])"
          >全部删除</el-button
        >
        <el-button @click="toggleSelection()">取消选择</el-button>
      </div>
    </div>
    <div class="right">
      <div class="right-top">
        <h5 class="title">公告</h5>
        <div class="contaion">
          <span
            >这是一条公告
            <el-link @click="showDetail"
              >查看<i class="el-icon-view el-icon--right"></i> </el-link
          ></span>
          <diglog ref="show" :announcement="announcement"></diglog>
        </div>
         <div class="contaion">
          <span
            >这是一条公告
            <el-link @click="showDetail"
              >查看<i class="el-icon-view el-icon--right"></i> </el-link
          ></span>
          <diglog ref="show" :announcement="announcement"></diglog>
        </div>
      </div>
      <div class="right-down"><h5 class="title">外部链接</h5></div>
    </div>
  </div>
</template>

<script>
import diglog from "./compontents/DiglogCom.vue";
export default {
  components: {
    diglog,
  },
  data() {
    return {
      allDel: false,
      dialogVisible: false,
      announcement: "",
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      multipleSelection: [],
    };
  },

  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
      this.allDel = !this.allDel;
    },
    // 编辑删除
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },

    formatter(row) {
      return row.address;
    },
    showDetail() {
      this.$refs.show.showDig();
    },
  },
};
</script>

<style lang="less" scoped>
.home {
  display: flex;
  margin: 2vw;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  h5 {
    padding: 5px 10px;
    border: 1px solid rgb(201, 200, 200);
    border-top-right-radius: 20px;
    border-top-left-radius: 10px;
  }
}
.left {
  width: 55%;
  margin-right: 1%;
  .el-pagination {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
  }
}
.right {
  flex: 1;
  display: flex;
  flex-direction: column;
  .right-top {
    display: flex;
    flex-direction: column;
    margin-bottom: 1%;
  }
}
.contaion {
  height: 300px;
  span {
    display: block;
    width: 80%;
    white-space: nowrap;
    /* 强制性的在一行显示所有的文本，直到文本结束或者遭遇br标签对象才换行*/
    overflow: hidden;
    /* 溢出的文字隐藏起来*/
    text-overflow: ellipsis;
    /*溢出的文字使用圆点显示*/
  }
}
</style>
