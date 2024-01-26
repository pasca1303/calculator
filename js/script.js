document.addEventListener('DOMContentLoaded', function(){
        
    var form = document.querySelector(".calc");
    form.addEventListener('submit', function(e){
        e.preventDefault()
    })
    var res_field = document.querySelector(".calculator_result-field")

    var btn_num = document.querySelector(".num")
    //let btn_reset = document.querySelectorAll(".js--btn--reset")
    var btn_calc = document.querySelector(".sign-enter")
    for(i=0; i < btn_num.length; i++){
        btn_num[i].addEventListener("click", function(e){
            e.preventDefault()
            res_field.value += this.innerHTML;

        })
    }
    // btn_reset.addEventListener("click", function(e){
    //     e.preventDefault()
    //     res_field.value += '';

    // })
    btn_calc.addEventListener('click', function(e){
        e.preventDefault()
        res_field.value += eval(res_field.value);

    });

})