const app = Vue.createApp({
    data(){
        return{
            counter:0,
        }
    },
    watch:{
        counter(value){
            if(value !== 0){
                const that = this;
                setTimeout(function(){
                    that.counter=0;
                }, 5000)
            }
            
        }
    },
    computed:{
        result(){
            if(this.counter < 37){
                return "Not there yet"
            }else{
                return "Too much!"
            }
        }
    },
    methods:{
        add5(num){
            this.counter = this.counter + num;
        },
        add1(num){
            this.counter = this.counter + num
        }
    }
});

app.mount('#assignment');