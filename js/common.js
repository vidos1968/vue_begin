
var app = new Vue({
el:'#app2',
data:{
message:'Вы загрузили эту страницу сегодня в :' + new Date().toLocaleString()

}


})

var app3 = new Vue({

el:'#app3',
data:{
    seen:true
}

})

var app4 = new Vue({
el:'#app4',
data:{
    todos:[
        {text:'Посадить дерево'},
        {text:'Построить дом'},
        {text:'Вырастить сына'}

    ]
}

})


var app5 = new Vue({
el:'#app5',
data:{
    message:'Привет, Vue!'
},
methods:{
reverseMessage:function(){
    this.message = this.message.split('').reverse('').join('')
}
    
}


})

var app6 = new Vue({
el:'#app6',
data:{

    message:'Hello Vue!'
}



})

Vue.component('todo-item',{
  props:[
   'todo'],

 
  template:
      '<li>{{todo.text}}</li>'
  



    })


var app7 = new Vue({
el: '#app7',
data:{
groceryList:[

{id:0, text:'Овощи'},
{id:1, text:'Фрукты'},
{id:2, text:'Макароны'},

]
}


}) 


var example = new Vue({

el:'#example',
data:{

    message:'Привет!'
},

computed:{

reversedMessage:function(){

    return this.message.split('').reverse('').join('')
}


}

})

var app8 = new Vue({
el:'#app8',
data:{
    activeColor:'green',
    
}


})