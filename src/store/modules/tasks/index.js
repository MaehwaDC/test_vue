import { ADD_TASK } from '@/store/modules/tasks/types';

export default {
  state: {
    list: [],
  },
  mutations: {
    [ADD_TASK]: (state, payload) => (
      state.tasks.push(payload.task)
    )
  },
  actions: {
    addTaskAction: (context, task) => {
      context.increment({
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
