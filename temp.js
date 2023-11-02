function convert(){
    const x = Number(document.getElementById("input").value);
    const unit = document.getElementById("unit").value;
    var y;

    if(unit=="fahrenheit"){
        y = (x*9/5)+32;
    }else{
        y = (x-32)*5/9;
    }
    document.getElementById("output").innerHTML=y+"°"+unit;
}