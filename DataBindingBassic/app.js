const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastname:'',
      confirmedName: '',
      fullName: ''
    }
  }, 
  watch: {
    // name(value) {
    //   if (value === ''){
    //     this.fullname = ''
    //   } else {
    //     this.fullname = value + ' ' + this.lastname;
    //   }
    // },
    // lastname(value) {
    //   if (value === ''){
    //     this.fullname = ''
    //   } else {
    //     this.fullname = this.name + ' ' + value;
    //   }
    // }
  },
  computed:{
    // fullName(){
    //   if (this.name === ''){
    //     return ''
    //   }
    //   return this.name + ' ' + 'Ng'
    // }
  },
  methods: {
    confirmInput(event){
      this.confirmedName = this.name;
    },

    submitForm(event){
      // event.preventDefault();
      alert('Submitted');
    },
    setName(event){
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetInputName(){
      this.name = '';
      this.lastname = '';
    },
    fullname(){
      console.log("fullname function start ")
      if (this.name === ''){
        return ''
      }
      return this.name + ' ' + this.lastname
    }
  }
});

app.mount('#user-goal')
// const app = Vue.createApp({
//   data() {
//     return {
//       courseGoalA: 'Finish the course and learn Vue!',
//       courseGoalB: 'Master Vue and build amazing apps!',
//       vueLink : 'https://vuejs.org'
//     }
//   },
//   methods: {
//     outputGoal(){
//       const randomNumber = Math.random();
//       if (randomNumber < 0.5) {
//         return this.courseGoalA;
//       } else {
//         return this.courseGoalB;
//       }
//     }
//   }
// });

// app.mount('#user-goal');


// Vue.createApp({
//   data() {
//     return {
//       goals: [],
//       enteredValue: ''
//     };
//   },
//   methods: {
//     addGoal() {
//       this.goals.push(this.enteredValue);
//       this.enteredValue = '';
//     }
//   }
// }).mount('#app');

// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal() {
//   const enteredValue = inputEl.value;
//   const listItemEl = document.createElement('li');
//   listItemEl.textContent = enteredValue;
//   listEl.appendChild(listItemEl);
//   inputEl.value = '';
// }

// buttonEl.addEventListener('click', addGoal);