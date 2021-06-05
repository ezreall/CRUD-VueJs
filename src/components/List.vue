<template>
  <div class="App">
    <div class="Menu">
      <Menu />
    </div>
    <el-col :span="20" style="text-algin:center">
      <Create @save="clickAdd" :row="hocsinh" />
    </el-col>
    <el-col :span="20" style="text-algin:center">
      <div class="content">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column label="ID" prop="id"> </el-table-column>
          <el-table-column label="Name" prop="name"> </el-table-column>
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
      </div>
    </el-col>
  </div>
</template>

<script>
import Menu from "../views/Menu";
import Create from "../components/Create.vue";
export default {
  computed:{
tableData(){
  return this.$store.state.tableData
}
  },
  components: {
    Menu,
    Create
  },
  data() {
    return {
      hocsinh: {},
    };
  },
  methods: {
    handleEdit(row) {
      this.hocsinh = row;
      console.log(this.hocsinh);
    },
    handleDelete(index, row) {
      row.splice(index, 1);
    },
    clickAdd(itemSave) {
      let data= this.tableData.findIndex((c)=>c.id===itemSave.id)
      if(data>=0){
        this.tableData.splice(data,1,itemSave)
      }else{
        this.tableData.push(itemSave)
      }
      // this.tableData.push(itemSave);
    }
  }
};
</script>
<style>
.content {
  margin-left: 120px;
}
</style>