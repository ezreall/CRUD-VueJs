<template>
  <div class="App">
    <el-col :span="20" style="text-algin:center">
      <create @save="clickAdd" :row="tableData" :demo="hocsinh" />
    </el-col>
    <el-col :span="20" style="text-algin:center">
      <div class="content">
        <el-table style="width: 100%" :data="tableData">
          <el-table-column label="ID" prop="id"></el-table-column>
          <el-table-column label="Name" prop="name">
            <template slot-scope="scope">
              <el-button
                class="delog"
                @click="detail(scope.row, (outerVisible = true))"
                >{{ scope.row.name }}</el-button
              >
            </template>
          </el-table-column>
          <el-table-column label="Địa Chỉ" prop="address"> </el-table-column>
          <el-table-column label="Phone" prop="phone"> </el-table-column>
          <el-table-column label="Tuổi" prop="age"> </el-table-column>

          <el-table-column align="right">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.row, scope)"
                >Edit</el-button
              >
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, tableData)"
                >Delete</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <div class="block">
          <el-pagination layout="prev, pager, next" :total="50">
          </el-pagination>
        </div>
      </div>
    </el-col>
  </div>
</template>

<script lang="ts">
import Create from "./Create.vue";
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {
    Create,
  },
})
export default class List extends Vue {
  public hocsinh: any = {};
  public search: any = "";
  public tableData: any = {};

  data(): string {
    return this.$store.state.tableData;
  }
  handleEdit(row: any): void {
    this.hocsinh = row;
    let demo = this.hocsinh;
    console.log(demo);
  }
  handleDelete(index: any, row: any) {
    row.splice(index, 1);
  }
  clickAdd(itemSave: any) {
    let index = this.tableData.findIndex((c: any) => c.id === itemSave.id);
    if (index >= 0) {
      this.tableData.splice(index, 1, itemSave);
    } else {
      this.tableData.push(itemSave);
    }
  }

  handle(row: any, column: any, event: any, cell: any) {
    console.log(row);
    console.log(column);
    console.log(event);
    console.log(cell);
  }
}
</script>
<style>
.content {
  margin-left: 120px;
}
button.el-button.delog.el-button--default {
  border: none;
}
button.el-button.delog.el-button--default:hover {
  color: #606266;
  background: rgb(246, 247, 250);
}
.el-button:focus,
.el-button:hover {
  background: rgb(246, 247, 250);
}
</style>
