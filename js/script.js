import content from './data.js';
//fire the script when the doc is finished loading
$(document).ready(function(){
//this is the data sector
var model = {
    init: function() {
        if (!localStorage.data){
            localStorage.setItem('data', JSON.stringify(content))
        }
    },
    get:function(x){
        if (x === 'data'){
            return JSON.parse(localStorage.data)
        }
    },
    renderUpdate:function(timeSlot,textContent){
        let obj = JSON.parse(localStorage.data)
        obj[timeSlot].content = textContent
        localStorage.data = JSON.stringify(obj)
    },
}
//this is Mr.X ;)
var x = {
    init:function(){
        model.init();
        view.init();
    },
    get: function(x){
        if (x === 'data'){
            return model.get('data')
        }
    },
    updateData:function(timeSlot,textContent){
        model.renderUpdate(timeSlot,textContent)
    }
}
//this is the view sector
var view = {
    init:function (){
        $('#currentDay').text(moment().format('dddd[, ]MMMM Do ')) 
        this.container = $('.container');
        // render the table
        let data =  x.get('data')
        for (let id = 0 ; id < data.length ; id++ ){
            this.render(data[id])
            this.addSaveButtonListener(Number(id)+9);
        }  

    },
    render:function(data){
        
        let currentHour = moment().format('H');
        this.template = $('#hourTemp').text();
        if (data.h <= 12){
            this.template = this.template.replace('{{timeOfDay}}',data.h+"AM")
        } else if (data.h > 12) {
            this.template = this.template.replace('{{timeOfDay}}',data.h-12+"PM")
        }
        this.template = this.template.replace('{{i}}',data.h)
        if ( Number(data.h) > Number(currentHour) ){
            this.template = this.template.replace('{{color}}','green')
        } else if ( Number(data.h) < Number(currentHour) ){
            this.template = this.template.replace('{{color}}','gray')
        } else{
            this.template = this.template.replace('{{color}}','red')
        }
            this.container.append(this.template)
            document.getElementById(data.h).children[1].value = data.content
    },
    addSaveButtonListener:function(id){
        $('#'+id+' .save' ).on('click',function(){
            view.updateTimeSlot( (id) , ($(this).parent().children()[1].value) )
        })
    },
    updateTimeSlot:function(timeSlot,textContent){
        x.updateData(timeSlot-9,textContent);
    },
}
// Mr.x, command the inits
x.init()
})