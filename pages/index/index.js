// index.js
// 获取应用实例
const app = getApp();

Page({
  data: {
    add: "",
    list: [
      {
        title: "Leanrning HTML",
        completed: true,
      },
      {
        title: "Leanrning CSS",
        completed: false,
      },
      {
        title: "Leanrning JS",
        completed: false,
      },
    ],
    leftCount: 2,
  },
  // 事件处理函数
  // 添加
  addHandle: function () {
    if (!this.data.add) return;
    var todos = this.data.list;
    todos.push({
      title: this.data.add,
      completed: false,
    });
    this.setData({
      list: todos,
      add: "",
      leftCount: this.leftCount++,
    });
  },
  // 切换状态
  toggleHandle: function (e) {
    var item = this.data.list[e.currentTarget.dataset.index];
    item.completed = !item.completed;
    var leftCount = this.data.leftCount + (item.completed ? -1 : +1);
    this.setData({
      list: this.data.list,
      leftCount: leftCount,
    });
  },
  // 切换全部
  tooggleAllHandle: function () {
    var todos = this.data.list;
    todos.forEach((item) => {
      item.completed = !item.completed;
    });
    this.setData({
      list: todos,
      leftCount: todos.length - this.data.leftCount,
    });
  },
  // 删除
  removeHandle: function (e) {
    var todos = this.data.list;
    var index = e.currentTarget.dataset.index;
    var leftCount = this.data.leftCount;
    var completed = this.data.list[index].completed;
    // 删除index项
    todos.splice(index, 1);
    if (!completed) {
      leftCount--;
    }
    this.setData({
      list: this.data.list,
      leftCount: leftCount,
    });
  },
  // 清空全部已完成
  clearHandle: function () {
    var list = this.data.list;
    var todos = list.filter((value) => {
      return value.completed == false;
    });
    list = todos;
    this.setData({
      list,
    });
  },
  // 获取输入的todo
  inputChange: function (e) {
    this.setData({
      add: e.detail.value,
    });
  },
});
