import Vue from "vue";
import {INCREMENT} from "./mutations-type";

export default {
  updateInfo(state) {
    // 禁止使用异步操作, devtools 会记录错误信息
    // setTimeout(() => {
    //   state.info.name = 'orange';
    // }, 1000);

    // 添加属性
    state.info['address'] = '洛杉矶';
    Vue.set(state.info, 'address2', '洛杉矶2');

    // 删除属性
    delete state.info.age;
    Vue.delete(state.info, 'age');
  },
  [INCREMENT](state) {
    state.counter++;
  },
  decrement(state) {
    state.counter--;
  },
  // incrementCount(state, count) {
  //   state.counter += count;
  // },
  incrementCount(state, payload) {
    // {type: "incrementCount", count: 5}
    console.log(payload);
    state.counter += payload.count;
  },
  addStudent(state, stu) {
    state.students.push(stu);
  }
}
