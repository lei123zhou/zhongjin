<template>
  <div class="user">
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
</template>

<script>
export default {

}
</script>

<style>

</style>