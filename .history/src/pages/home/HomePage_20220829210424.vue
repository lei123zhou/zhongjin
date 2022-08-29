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
          <div>
            <el-link @click="showDetail"
              >这是一条公告标题<i class="el-icon-view el-icon--right"></i>
            </el-link>
            <span
              >欢迎阅读 QingCloud 文档，我们尽可能以清晰简明的图文，介绍
              QingCloud 各项服务及使用方法。本文档分为几个部分，包括 QingCloud
              IaaS 产品、QingStor 对象存储产品、CDN & DDOS 产品、QingCloud
              AppCenter
              产品等。每类产品的文档包含产品介绍、使用说明、开发者接口文档、FAQ
              等。 如果使用过程中遇到困惑或问题，建议先按产品类型查看下常见问题
              FAQ， 我们会不断收集整理用户提出的问题，并编入 FAQ 。
              对于想更高效地使用 QingCloud，或想通过 QingCloud
              做进一步开发的技术人员，可以参阅 QingCloud 的 API 文档。
              我们开放了资源相关的所有 API，就是希望开发者能够基于 QingCloud
              创造更丰富的上层服务。
              根据中国大陆工信部的规定，所有在大陆境内运行的网站必须进行 ICP
              备案。 详细备案文档请前往 青云备案管理系统 查看。</span
            >
            <diglog ref="show" :announcement="announcement"></diglog>
          </div>
          <div>
            <el-link @click="showDetail"
              >这是一条公告标题<i class="el-icon-view el-icon--right"></i>
            </el-link>
            <span
              >欢迎阅读 QingCloud 文档，我们尽可能以清晰简明的图文，介绍
              QingCloud 各项服务及使用方法。本文档分为几个部分，包括 QingCloud
              IaaS 产品、QingStor 对象存储产品、CDN & DDOS 产品、QingCloud
              AppCenter
              产品等。每类产品的文档包含产品介绍、使用说明、开发者接口文档、FAQ
              等。 如果使用过程中遇到困惑或问题，建议先按产品类型查看下常见问题
              FAQ， 我们会不断收集整理用户提出的问题，并编入 FAQ 。
              对于想更高效地使用 QingCloud，或想通过 QingCloud
              做进一步开发的技术人员，可以参阅 QingCloud 的 API 文档。
              我们开放了资源相关的所有 API，就是希望开发者能够基于 QingCloud
              创造更丰富的上层服务。
              根据中国大陆工信部的规定，所有在大陆境内运行的网站必须进行 ICP
              备案。 详细备案文档请前往 青云备案管理系统 查看。</span
            >
            <diglog ref="show" :announcement="announcement"></diglog>
          </div>
          <div>
            <el-link @click="showDetail"
              >这是一条公告标题<i class="el-icon-view el-icon--right"></i>
            </el-link>
            <span
              >欢迎阅读 QingCloud 文档，我们尽可能以清晰简明的图文，介绍
              QingCloud 各项服务及使用方法。本文档分为几个部分，包括 QingCloud
              IaaS 产品、QingStor 对象存储产品、CDN & DDOS 产品、QingCloud
              AppCenter
              产品等。每类产品的文档包含产品介绍、使用说明、开发者接口文档、FAQ
              等。 如果使用过程中遇到困惑或问题，建议先按产品类型查看下常见问题
              FAQ， 我们会不断收集整理用户提出的问题，并编入 FAQ 。
              对于想更高效地使用 QingCloud，或想通过 QingCloud
              做进一步开发的技术人员，可以参阅 QingCloud 的 API 文档。
              我们开放了资源相关的所有 API，就是希望开发者能够基于 QingCloud
              创造更丰富的上层服务。
              根据中国大陆工信部的规定，所有在大陆境内运行的网站必须进行 ICP
              备案。 详细备案文档请前往 青云备案管理系统 查看。</span
            >
            <diglog ref="show" :announcement="announcement"></diglog>
          </div>
        </div>
      </div>
      <div class="right-down">
        <h5 class="title">外部链接</h5>
        <el-row :gutter="24">
          <el-col :span="8" v-for="o in 3" :key="o" >
            <el-card>
              <img
                src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                class="image"
              />
              <div style="padding: 14px">
                <span>好吃的汉堡</span>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
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
  /deep/.el-table .el-table__cell {
    padding: 18px 0;
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
  div {
    margin: 5px 0px;
  }
  span {
    display: block;
    width: 100%;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 12px;
  }
  .el-link {
    font-size: 18px;
  }
}
.el-card{
  width: 200px;
  background: rgba(0, 0, 0,1);
 .image {
    width: 100%;
    display: block;
  }
}

</style>
