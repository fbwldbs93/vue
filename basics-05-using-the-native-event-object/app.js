const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullname: '',
    };
  },
  /*
    Watcher
    - basically a function
    - you can tell Vue to execute when one of it's dependencies changed.
  */
  watch: {
    //and here again, you will define a bunch of methods
    name() {},
  },
  computed: {
    /*
    fullname() {
      //***이 속성을 변수처럼 사용할 것이다!! (함수처럼 사용하지 않음!!)
      //method 가 아니라 data 처럼 사용할 것임
      //기술적으로는 method 이지만, method 처럼 사용하지는 않을 것임
      //그래서 computed의 속성을 data 속성에서 지은 이름과 같이 지음
      console.log('Running again...');
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Schwarzmuller';
      
      //fullname data 속성이 있는지 기본적으로 체크할 것임, 
      //만일 없으면 그 이름을 가진 computed 속성이 있는지 체크하고
      //그 케이스가 맞다면 그걸 실행시킬 것임
      
    },
    */
    /*
      In computed, you define a bunch of methods just like in methods, but the methods you defined and computed will be called and executed differently
      (정의하고 실행시키는 methods는 조금 다르게 불리고, 실행될 것이다.)
    */
  },
  methods: {
    outputFullname() {
      console.log('Running again...'); //add()를 실행시켜도 콘솔에 등장.
      /*
        다른 함수를 실행시켰을 때 Vue는 페이지에서 어떤 부분을 랜더링 페이지에 업데이트 해야하는지 찾기 시작함.

        근데 페이지 내에서 무엇이든 바뀌게 되면 {{outputFullname()}} method 도 함께 재실행되는 문제가 있음.
        왜냐하면 Vue는 {{outputFullname()}}가 뭘 하는 녀석인지 모름.

        그래서 우리는 {{outputFullname()}} 가 counter를 사용하지 않는 것을 알지만 Vue는 모름.

        that's why methods are not the best solution for outputting some dynamically calculated value like this.
        즉, 동적으로 계산되는 값을 얻을 때 method는 좋은 방법은 아니다 ==> computed 사용(?)
      */
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Schwarzmuller';
      /*
        vue is aware of the dependencies off the computer properties
        (Vue 는 컴퓨터 속성의 종속성을 인식합니다.)
        즉, name 이 dependency 이고 이것이 computed property value를 캐치할 것 입니다.
        그리고 이 값만 재계산하고 재평가합니다.

        -----------
        if one of the dependencies in this case,
        the only dependency we have the name property changed
        and that's the key difference for performance
        종속성 중 하나인 경우, 만일 우리가 가진 name 속성이 변경된 종속성이 유일하다면
        그것이 성능의 주요 차이점이다

        it's better to use computer properties that 
        methods for outputting values in most cases.
      */
      /*
        it should return something, because I'm not going to use it to bind it to an event. 
      */
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    },
  },
});

app.mount('#events');
