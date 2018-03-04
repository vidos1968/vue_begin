
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