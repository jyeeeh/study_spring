const app = Vue.createApp({
  data() {
    return { 
      enteredGoalValue: '',
      goals: [] 
    };
  },

  methods: {
    addGoal()    {
      // 사용자가 입력한 내용을 새로운 목표로 push
      this.goals.push(this.enteredGoalValue);

    },
    removeGoal(idx){
      this.goals.splice(idx, 1)

    }
  }
});

app.mount('#user-goals');
