const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name:'',
      confirmedName:'',
    };
  },
  methods:{
    confirmInput(){
      this.confirmedName = this.name
    },
    submitForm(event){
      //event.preventDefault();
      alert('Submitted!');
    },
    setName(event, lastName){
      this.name = event.target.value + ' ' + lastName;
      /*when you add a event, 
      and you point at a function that should be executed, 

        setName(인자(argument))
        function will automatically get one argument
        the browser will ensure that this argument is provided so to say
        and that will be an object describing the event that occurred

        함수는 자동적으로 하나의 인자(argument)를 가지게 됨.
        브라우저는 이 인자가 제공되었는지 확인을 하고
        그리고 그것(인자, argument)은 발생한 이벤트를 설명하는 객체(object)가 될 것 입니다.
        
        default event object (기본 이벤트 객체)
        - full of information about the event 
        - information about HTML element on which this event occurred
        - then we can read the current value stored in this input from that input element

        we get access to the target of the event with "event.target"

        event.target
        - gives us access to the element on which the event occurred

        --------------------------------------

      */
    },
    add(num){
      this.counter = this.counter + num;
      //this.counter++;
    },
    reduce(num){
      this.counter = this.counter - num;
      //this.counter--;
    }
  }
});

app.mount('#events');
