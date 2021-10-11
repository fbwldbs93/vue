/* ---------- Vue Code : To Do List ----------- */
Vue.createApp({
  // data:function(){}
  data() {
    return {
      goals: [],
      enteredValue: "",
      /*
            v-model : a special HTML attribute
                - v-model will establish a connection
                between <input/> and the value  being entered here
                - and this data property(enteredValue:'')
                - Vue will manage this for us
                - it will automatically listen to what the user enters
                - and automatically update this input
            */
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
  },
}).mount("#app");

/* ---------- Vanila JS Code : To Do List ----------- */

// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal(){
//     const enteredValue = inputEl.value;
//     const listItemEl = document.createElement('li');
//     listItemEl.textContent = enteredValue;
//     listEl.appendChild(listItemEl);

//     inputEl.value= '';
// }

// buttonEl.addEventListener('click', addGoal);
