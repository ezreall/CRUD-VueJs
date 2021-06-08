<template>
  <div class="App">
    <el-col :span="20" style="text-algin:center">
      <Create @save="clickAdd" :row="hocsinh" />
    </el-col>
    <el-col :span="20" style="text-algin:center">
      <div class="content">
        <el-table
          style="width: 100%"
          :data="
            data.tableData.filter(
              data =>
                !search ||
                data.name.toLowerCase().includes(search.toLowerCase())
            )
          "
        >
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
            <template slot="header" slot-scope="scope">
              <el-input
                v-model="search"
                size="mini"
                placeholder="Type to search"
              />
            </template>
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.row, scope)"
                >Edit</el-button
              >
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, data.tableData)"
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

<script>
import Menu from "../views/Menu";
import Create from "../components/Create.vue";
export default {
  computed: {
    data() {
      // console.log(this.$store.state.tableData);
      return this.$store.state.tableData;
    }
  },
  components: {
    Menu,
    Create
  },
  data() {
    return {
      outerVisible: false,
      innerVisible: false,
      hocsinh: {},
      detail: {},
      search: ""
    };
  },

  methods: {
    handle(row, column, event, cell) {
      console.log(row);
      console.log(column);
      console.log(event);
      console.log(cell);
    },
    detail(row) {
      console.log(row);
      outerVisible = false;
      innerVisible = false;
    },
    handleEdit(row) {
      this.hocsinh = row;
    },
    handleDelete(index, row) {
      row.splice(index, 1);
    },
    clickAdd(itemSave) {
      let index = this.data.tableData.findIndex(c => c.id === itemSave.id);
      if (index >= 0) {
        this.data.tableData.splice(index, 1, itemSave);
      } else {
        let max = 0;
        let newId = 0;
        for (let i = 0; i < this.data.tableData.length; i++) {
          if (this.data.tableData[i].id > max) {
            max = this.data.tableData[i].id;
            console.log(this.data.tableData[i].id);
          }
        }
        itemSave.id = max + 1;
        this.data.tableData.push(itemSave);
      }
    }
  }
};
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