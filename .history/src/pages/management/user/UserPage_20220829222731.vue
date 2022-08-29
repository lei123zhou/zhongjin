<template>
  <div class="user">
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="100"> </el-table-column>
      <el-table-column prop="username" label="用户名" sortable width="200">
      </el-table-column>
      <el-table-column prop="email" label="邮箱" sortable width="240">
      </el-table-column>
      <el-table-column prop="role" label="角色" sortable width="240">
      </el-table-column>
      <el-table-column prop="state" label="状态" sortable width="240">
      </el-table-column>
      <el-table-column prop="comment" label="备注" sortable width="240">
      </el-table-column>
      <el-table-column prop="ldapid" label="ldapid" :formatter="formatter">
      </el-table-column>
      <el-table-column label="操作">
        <el-popover placement="right" width="40" trigger="hover">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
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
</template>

<script>
export default {
  data() {
    return {
      allDel: false,
      tableData: [
        {
          username: "王小虎",
          role: "管理员",
          email: "12313fg1231@qq.com",
          state: "在线",
          comment: "该用户为年费用户",
          ldapid: "J2313#2dS",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          username: "王小虎",
          role: "管理员",
          email: "12313fg1231@qq.com",
          state: "在线",
          comment: "该用户为年费用户",
          ldapid: "J2313#2dS",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          username: "王小虎",
          role: "管理员",
          email: "12313fg1231@qq.com",
          state: "在线",
          comment: "该用户为年费用户",
          ldapid: "J2313#2dS",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          username: "王小虎",
          role: "管理员",
          email: "12313fg1231@qq.com",
          state: "在线",
          comment: "该用户为年费用户",
          ldapid: "J2313#2dS",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          username: "王小虎",
          role: "管理员",
          email: "12313fg1231@qq.com",
          state: "在线",
          comment: "该用户为年费用户",
          ldapid: "J2313#2dS",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          username: "王小虎",
          role: "管理员",
          email: "12313fg1231@qq.com",
          state: "在线",
          comment: "该用户为年费用户",
          ldapid: "J2313#2dS",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          username: "王小虎",
          role: "管理员",
          email: "12313fg1231@qq.com",
          state: "在线",
          comment: "该用户为年费用户",
          ldapid: "J2313#2dS",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          username: "王小虎",
          role: "管理员",
          email: "12313fg1231@qq.com",
          state: "在线",
          comment: "该用户为年费用户",
          ldapid: "J2313#2dS",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
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
      return row.ldapid;
    },
  },
};
</script>

<style lang="less" scoped>
.user {
  width:90%;
}
</style>
