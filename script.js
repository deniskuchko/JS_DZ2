var inputData = document.querySelector('input[type="text"]');
var menuList = document.getElementById('list');
var InfoAutor = document.querySelector('#InfoAutor');
var spans = document.getElementsByTagName('span');
var saveBtn = document.getElementById('save');
var clearBtn = document.getElementById('clear');



function deleteTodo(){
    for(let span of spans){
        span.addEventListener('click', function(){
            span.parentElement.remove();
            event.preventDefault();
        })
    }
}

function loadToDo(){
    if(localStorage.getItem('todoApplication')){
        menuList.innerHTML = localStorage.getItem('todoApplication');
        deleteTodo();
    }
};


/* addEventLictener = обработка  события с последующим выполнением функции */
InfoAutor.onclick = function() {
    alert('!!! Кучко Денис Анатольевич !!!');
};

inputData.addEventListener('keypress', function(keyPressed){
     
    if(keyPressed.which === 13){

        var newLi = document.createElement('li');
        var newSpan = document.createElement('span');
        newSpan.innerHTML = 'Delete ';

       
        var newTodo = this.value; /* Получение текущих введенных данных */
       
        if(this.value === ''){                                             /* как к этому условию добавить пробел ??? */
            alert(' Введите иное значение ');
        } else{
            this.value = '';
            
            Date.prototype.format = function(format = 'yyyy-mm-dd') {
                const replaces = {
                    yyyy: this.getFullYear(),
                    mm: ('0'+(this.getMonth() + 1)).slice(-2),
                    dd: ('0'+this.getDate()).slice(-2),
                    hh: ('0'+this.getHours()).slice(-2),
                    MM: ('0'+this.getMinutes()).slice(-2),
                    ss: ('0'+this.getSeconds()).slice(-2)
                };
                let result = format;
                for(const replace in replaces){
                    result = result.replace(replace,replaces[replace]);
                }
                return result;
            };
                
                
        dataCreateNew = ((new Date()).format('yyyy/mm/dd hh:MM:ss'));
        
        menuList.appendChild(newLi).append(newSpan, newTodo,'. Дата создания: '/* ,Year, '.', Month, '.', Day, '.', ' ',Hour, ':', Minutes, ':', Seconds, '   ' */,dataCreateNew);
        
        deleteTodo();
       
        zacherkivanie = function() {
            zacherkivanie = newLi.style.setProperty("text-decoration", "line-through");
        }
        
        newLi.onclick = zacherkivanie; 

        } 
    }
    
   
});

saveBtn.addEventListener('click', function(){
    localStorage.setItem('todoApplication', menuList.innerHTML);
})

clearBtn.addEventListener('click', function(){
    menuList.innerHTML = '';
    localStorage.setItem('todoApplication', menuList.innerHTML);
})
deleteTodo();

loadToDo();