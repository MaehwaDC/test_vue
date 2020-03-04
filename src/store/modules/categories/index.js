import { ADD_TASK } from './types';
import data from '../../../../data/data.json';

export default {
  state: {
    list: data,
  },
  mutations: {
    [ADD_TASK]: (state, payload) => (
      state.tasks.push(payload.task)
    )
  },
  actions: {
    addCategoryAction: (context, task) => {
      context.commit({
        type: ADD_TASK,
        task: task
      });
    }
  },
  getters: {
    getCategories: (state) => {
      return state.list;
    }
  }
}
