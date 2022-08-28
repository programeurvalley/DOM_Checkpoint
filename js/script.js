function Inc(i){
    let identifier = i;
    identifier = "q" + identifier[1];

    let v = document.getElementById(identifier);
    let x = parseInt(v.innerHTML)+1;
    v.innerHTML =x;

    let p = "p" + identifier[1];
    let price = document.getElementById(p).innerHTML;

    let t = parseFloat(price) * x;
    let y = "t" + identifier[1];
    let total = document.getElementById(y);
    total.innerHTML = t.toFixed(2)  + "$";  

    let amount1 = document.getElementById("t1").innerHTML;
    let amount2 = document.getElementById("t2").innerHTML;
    let amount3 = document.getElementById("t3").innerHTML;
    let amount4 = document.getElementById("t4").innerHTML;
    let amount5 = document.getElementById("t5").innerHTML;

    console.log(amount1);

    let sum = parseFloat(amount1) + parseFloat(amount2) + parseFloat(amount3) + parseFloat(amount4) + parseFloat(amount5);

    let final_total = document.getElementById("tvalue");
    final_total.innerHTML = sum.toFixed(2);

}

function Dec(i){
    let identifier = i;
    identifier = "q" + identifier[1] ;

    let v = document.getElementById(identifier);

    if(v.innerHTML == 0) {
        return false;
    }

    let x = parseInt(v.innerHTML)-1;
    v.innerHTML =x;

    let p = "p" + identifier[1];
    let price = document.getElementById(p).innerHTML;

    let t = parseFloat(price) * x;
    let y = "t" + identifier[1];
    let total = document.getElementById(y);
    total.innerHTML = t.toFixed(2)  + "$"; 

    let amount1 = document.getElementById("t1").innerHTML;
    let amount2 = document.getElementById("t2").innerHTML;
    let amount3 = document.getElementById("t3").innerHTML;
    let amount4 = document.getElementById("t4").innerHTML;
    let amount5 = document.getElementById("t5").innerHTML;

    console.log(amount1);

    let sum = parseFloat(amount1) + parseFloat(amount2) + parseFloat(amount3) + parseFloat(amount4) + parseFloat(amount5);

    let final_total = document.getElementById("tvalue");
    final_total.innerHTML = sum.toFixed(2);
    
}

function Del(i){
    let identifier = i;
    identifier = "q" + identifier[1] ;

    let v = document.getElementById(identifier);
    v.innerHTML = 0;

    let y = "t" + identifier[1];
    let total = document.getElementById(y);
    total.innerHTML =   "00.00$"; 

    let amount1 = document.getElementById("t1").innerHTML;
    let amount2 = document.getElementById("t2").innerHTML;
    let amount3 = document.getElementById("t3").innerHTML;
    let amount4 = document.getElementById("t4").innerHTML;
    let amount5 = document.getElementById("t5").innerHTML;

    console.log(amount1);

    let sum = parseFloat(amount1) + parseFloat(amount2) + parseFloat(amount3) + parseFloat(amount4) + parseFloat(amount5);

    let final_total = document.getElementById("tvalue");
    final_total.innerHTML = sum.toFixed(2);

}

var check = false;

function ChangeImg(i){
    let identifier = i ;
    chk = identifier;
    
    if(!check){
        let x = document.getElementById(identifier);
        x.outerHTML = `<img src="img/ico/red_heart.PNG" class="m-sh" id=${identifier} onclick="ChangeImg(this.id)"/>`;
        check = true;
    }else{
        let y = document.getElementById(identifier);
        y.outerHTML = `<img src="img/ico/shaped_heart.PNG" class="m-sh" id=${identifier} onclick="ChangeImg(this.id)"/>`;
        check = false;
    }

}

function Buy(){
    let buy = document.getElementById("tvalue").innerHTML;
    if(parseInt(buy) != 0){
        alert("you buyed succefuly !");
    }else{
        alert("you have not select any items :'( , You can't buy !");
    }
    
}

function Total(){
    

}