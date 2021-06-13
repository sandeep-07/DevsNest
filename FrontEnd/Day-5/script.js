function screen(val){
    document.getElementById("box").value=val
}

function screenres(res){
    document.querySelector(".result").innerHTML=res
    document.getElementById("box").value=res
}
function shownum(val)   {
    document.getElementById("box").value+=val;
    console.log(document.getElementById("box").value)
}

function solve(){
    try{
        screenres(eval(document.getElementById("box").value))
    }

    catch(e){
        screen('Error')
    }
}

function clearall(){
    document.getElementById("box").value=''
    document.querySelector(".result").innerHTML=0

}
function delone(){
    var valueNeeded=document.getElementById("box").value
    var finalValueNeeded=valueNeeded.substr(0,valueNeeded.length-1)
    document.getElementById("box").value=finalValueNeeded
}