<template>
  <div class="App">
    <div>
      <span>Tổng Số User:{{ data.tableData.length }}</span>
    </div>
    <el-form
      :model="student"
      ref="ruleForm"
      label-width="120px"
      class="demo-ruleForm"
    >
      <el-form-item>
        <el-input v-model="name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="student.age"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="student.phone"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="student.address"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="AddUser('student')">Submit</el-button>
        <el-button @click="CanCel('student')">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

export default class Create extends Vue {
  @Prop({ type: Object, default: null }) readonly row?: Record<string,any>;

  student: Record<string, any> = {
    id: Math.floor(Math.random() * 1000),
    name: "",
    age: "",
    phone: "",
    address: "",
  };
  name: string = ""
  get data(): string {
    return this.$store.state.tableData;
  }
  
  @Watch("student")
  Row(row: any): void {
    console.log(row);
    this.student = row;
  }

  AddUser() {
    this.$emit("save", this.student);
    this.student = {
      id: Math.floor(Math.random() * 1000),
      name: "",
      age: "",
      phone: "",
      address: "",
    };
    console.log(this.student);
  }

  // computed: {
  //   data(): void {
  //     return this.$store.state.tableData;
  //   }
  // },
  // props: {
  //   row: {
  //     type: Object,
  //     default: null
  //   }
  // },
  // watch: {
  //   row(): void {
  //     if (this.row) {
  //       this.student = Object.assign({}, this.row);
  //     } else {
  //       this.student = {
  //         id: Math.floor(Math.random() * 1000),
  //         name: "",
  //         age: "",
  //         phone: "",
  //         address: ""
  //       };
  //     }
  //   }
  // },
  // methods: {
  //   CanCel() {
  //     this.student = {
  //       id: Math.floor(Math.random() * 1000),
  //       name: "",
  //       age: "",
  //       phone: "",
  //       address: ""
  //     };
  //   },
  //   AddUser() {
  //     this.$emit("save", this.student);
  //     this.student = {
  //       id: Math.floor(Math.random() * 1000),
  //       name: "",
  //       age: "",
  //       phone: "",
  //       address: ""
  //     };
  //     console.log(this.student);
  //   }
  // },

  // data() {
  //   console.log(this.$store.state.tableData)
  //   return {
  //     student: {
  //       id: Math.floor(Math.random() * 1000),
  //       name: "",
  //       age: "",
  //       phone: "",
  //       address: ""
  //     }
  //   };
  // }
}
</script>

<style>
.App {
  margin-top: 10px;
}
</style>
