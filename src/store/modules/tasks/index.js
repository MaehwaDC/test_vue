import { ADD_TASK } from '@/store/modules/tasks/types';

export default {
  state: {
    list: [
      { id: 0, title: "test title", body: "test body" }
    ],
  },
  mutations: {
    [ADD_TASK]: (state, payload) => (
      state.tasks.push(payload.task)
    )
  },
  actions: {
    addTaskAction: (context, task) => {
      context.commit({
        type: ADD_TASK,
        task: task
      });
    }
  },
  getters: {
    getTasks: (state) => {
      return state.list;
    }
  }
}
