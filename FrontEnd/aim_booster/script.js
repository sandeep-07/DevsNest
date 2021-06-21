const crosshair=document.querySelector('.cursor')
const target=document.querySelector('.target')
let score=document.querySelector('.score')
const playbutton=document.querySelector('.home .playButton')
point=0
document.addEventListener('mousemove',(e)=>{
    crosshair.style.left=`${e.clientX}px`
    crosshair.style.top=`${e.clientY}px`
})
document.addEventListener('click',(e)=>{
    document.querySelector('.home').style.opacity="0"

    setTimeout(()=>{
        document.querySelector('.home').style.display="none"
    },1000)

})

window.onload=function(){
    respawn()
    timer()
}
const restart=()=>{
    
    point=0
    score.innerHTML=point
    console.log(point)
    respawn()
    timer()

}

const respawn=()=>{
    const top=Math.floor(Math.random()*window.innerHeight)
    const left=Math.floor(Math.random()*window.innerHeight)
    // console.log(top,left)
    target.style.top=`${top}px`
    target.style.left=`${left}px`
    
}

target.addEventListener('click',()=>{
    point+=1
    score.innerHTML=point
    respawn()
})

function timer(){
    var sec=10
    var timer = setInterval(function(){
        document.querySelector('.timer').innerHTML=sec
        sec--

        if(sec<0)
        {
            clearInterval(timer)
            point=0
            setTimeout(restart,3000)
        }
    },1000)
}
