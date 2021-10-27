const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName:'',
      //fullname: '',
    };
  },
  /*
    Watcher
    - basically a function
    - you can tell Vue to execute when one of it's dependencies changed.
    - dependencies 가 관리하는 두개 중 하나가 바뀌었을 때 실행시키는 특징 (computed 와 비슷)
    - 사실 computed를 대신하여 사용할 수 있음 (추천하지 X)

  */
  watch: {
    //watch wants an object (just like computed and methods)
    //and here again, you will define a bunch of methods
    name(value) {
      this.fullname = this.name + ' ' + 'Schwarzmuller'
      //name(value) : 가장 최신의 name 값을 value에 받아옴
      this.fullname = value + ' ' + 'Schwarzmuller'
    },
       /*--- 이것도 가능함!-----
        Watch:{
          name(newValue, oldValue){...}
        }
      */




    //  if(value === ''){
    //   this.fullname = '';
    //  }else{
    //    this.fullname = value + ' '+ this.lastName
    //  }
    // },
    // lastName(value){
    //   if(value === ''){
    //     this.fullname = '';
    //    }else{
    //      this.fullname = this.name + ' '+ value
    //    }
    // }
    //******위와 같이 쓰는 것은 코드가 너무 길어짐 (computed에서 사용하는게 훨 나음)
    

    /*-----watch는 어떨 때 사용해야하는가?------ */
    /*
        "counter value가 50이상이 넘으면 reset 시키기"
        - 이런일을 watch에게 시켜야함
        - ** 보통 send the HTTP request, set a timer, 
        store somthing in local storage ..등등에 사용
        - 어떤 일이 일어났을 때 counter를 바꾸고 싶음
    */
      counter(value){
        // if(value > 50){
        //   this.counter = 0;
        // }
        //computed 로 이런 로직을 실행시키면 분명 문제가 발생할 것임
        //watch 에게 아주 적합한 task

        if(value > 50){
          const that = this;
          /*
            this 는 여기까지만 인식하고 그 밑의 function 에서는 인지하지 못하기 때문에
            변수에 담아서 사용해주기
          */
          setTimeout(function(){
            that.counter = 0;
          },2000)
          
        }
      }
      



    /*-----watch 간단 정보 ------- */
    //data 나 computed property의 이름을 복제하듯이 가져와서 쓰게 될 것.
    /*
      data의 name 이 변경되면 watch 는 재실행 될 것임
    */
   /*
    실행되었을 때 HTML 에 값을 반환하는 것이 아닌, 
    name 값이 변경되었을 때(data나 computed에서 변경되었을 때)
    어떠한 이벤트를 실행시켜주는 역할
   */

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
   /* -------------------- 정리!!!----------------------
    computed 는 method 와 반대로 이벤트 바인딩(event binding)을 할 때는 사용하지 않고
    {{ fullname }} 에 이벤트를 넣을 때 사용함

    ***method : event binding
    *** computed : {{ something }} <- Vue 가 computed와 something의 dependencies(관계)를 체크하고 실행시켜줌
    
   */

    /*---------------------watch 보다 쉬운 computed 설명 ------- */

    fullname(){
      console.log('Running again...');
      if (this.name === '' || this.lastName ==='') {
        return '';
      }
      return this.name + ' ' + this.lastName;
    }
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

        -------------------총 정리 ---------------------

        즉,,,,!!!! method로 이벤트 바인딩(event binding)을 하지 않고 {{outputFullname()}} 이런 방식으로 method 를 사용하게되면 Vue 는 이벤트 작동시 헷갈려함.
        - 그래서 다른 이벤트를 클릭해도 {{outputFullname()}} 가 함께 실행되어버림. (console.log 로 체크) 
        - 그렇기 때문에  computed 를 사용해야함!
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
