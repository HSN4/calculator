var display = document.getElementById("display")
var keys = document.querySelector(".calculator-keys")

keys.addEventListener("click",(e) =>{
    var target = e.target;
    if(target.classList.contains("equal")){
        try{
            var result = eval(display.value);
            if(result == 'Infinity'){
                alert("لا يمكن القسمه على صفر")
                display.value='';
            }else{
                display.value = result;
            }
        }catch{
            alert("فيه غلط يالحبيب");
            display.value='';
        }
    }else if(target.classList.contains("delete")){
        display.value ='';
    }else{
        display.value += target.value;
    }
})