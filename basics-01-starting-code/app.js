const app = Vue.createApp({
    //data: function(){}
    data(){
        //it returns object(always an object)
        return {
          courseGoal: "Finish the course and learn Vue!",
          vueLink: "http://vuejs.org",
          courseGoalA: "Finish the course and learn Vue!",
          courseGoalB: "<h2>Master Vue and build amazing apps!</h2>",
        };
        //data itself was a function a method
        //데이터 자체가 함수입니다.
    },
    methods:{
        //outpurGoal: function(){}
        outputGoal(){
            const randomNumber = Math.random();
            if(randomNumber < 0.5){
                //return 'Learn Vue!';
                return this.courseGoalA;
                /*
                    "this" basically takes all the data you return
                    in the data object, which you return the data method,
                    and it merges it into a global Vue instance object.
                    this 가 data 에 있는 데이터들을 뷰의 글로벌 오브젝트로 병합시켜버림. 그래서 this를 선언하는 순간, data의 모든 데이터 오브젝트들을 지정할 수 있는것. 
                */
            }else{
                //return 'Master Vue!'
                return this.courseGoalB;
            }
        }
    }
    /*
        methods allows you to define functions
        which should execute when something happens
    */
   //method takes an object, which will be full of methods (of functions)
   //메소드는 메소드(함수)로 가득찬 객체를 취합니다.
});
/*
    If we control a HTML element with Vue, we'll also control all child elements of that element
*/

app.mount('#user-goal');