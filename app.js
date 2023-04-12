const b1=document.querySelector('#i1');
const b2=document.querySelector('#i2');
const b3=document.querySelector('#i3');
const b4=document.querySelector('#i4');
const b5=document.querySelector('#i5');
const b6=document.querySelector('#i6');
const b7=document.querySelector('#i7');
const b8=document.querySelector('#i8');
const b9=document.querySelector('#i9');
const reset=document.querySelector('#reset')
const x=document.querySelector('#X');
const o=document.querySelector('#O');
const container1=document.querySelectorAll('.item');
const container=document.querySelector('#container');
let check=0;
let isGameover=false;
let a=false;
function align(){
    if(check===0) {check=1;return'X';}
    else{check=0;return'O';}
}
// if(check===0){x.style.backgroundColor=green;}

let winner='A'
function over(){
    if(b1.textContent===b2.textContent &&b2.textContent===b3.textContent &&b1.textContent!==''){
        isGameover=true;
        winner=b1.textContent;
    }
    else if(b4.textContent===b5.textContent &&b4.textContent===b6.textContent &&b4.textContent!==''){
        isGameover=true;
        winner=b4.textContent;
    }
    else if(b7.textContent===b8.textContent &&b8.textContent===b9.textContent &&b7.textContent!==''){
        isGameover=true;
        winner=b7.textContent;
    }
    else if(b2.textContent===b5.textContent &&b5.textContent===b8.textContent &&b5.textContent!==''){
        isGameover=true;
        winner=b2.textContent;
    }
    else if(b1.textContent===b4.textContent &&b4.textContent===b7.textContent &&b1.textContent!==''){
        isGameover=true;
        winner=b1.textContent;
    }
    else if(b3.textContent===b6.textContent &&b6.textContent===b9.textContent &&b3.textContent!==''){
        isGameover=true;
        winner=b3.textContent;
    }
    else if(b1.textContent===b5.textContent &&b5.textContent===b9.textContent &&b1.textContent!==''){
        isGameover=true;
        winner=b1.textContent;
    }
    else if(b3.textContent===b5.textContent &&b5.textContent===b7.textContent &&b3.textContent!==''){
        isGameover=true;
        winner=b3.textContent;
    }
    else if(b1.textContent!=='' &&b2.textContent!=''&&b3.textContent!=''&&b4.textContent!=''&&b5.textContent!=''
        &&b6.textContent!=''&&b7.textContent!=''&&b8.textContent!=''&&b9.textContent!=''){
            isGameover=true;
            winner="DRAW"
        }
    return isGameover;
}
function start(){
    check=0;
    for(let v of container1){
        v.textContent=null;
    }
}
reset.addEventListener('click',function(){
    start();
    x.style.backgroundColor='aqua';
    o.style.backgroundColor='pink';
})
function dekho(){
    if(a===true){
        console.log('WINNER')
        // start();
        // container.innerHTML=`${display()}`;
        container.innerHTML='';
        container.appendChild(display());
    }
}
function display(){
    var d=document.createElement('div');
    var h1=document.createElement('h1');
    const img=document.createElement("img");
    img.src='https://media.tenor.com/0gLx5KfH9IwAAAAj/excited-cat.gif'
    console.log(img);
  
    h1.innerText=`${"WINNER IS"} ${winner}`;
    if(winner==="DRAW") {h1.innerHTML="DRAW";
    img.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLdrziCMIDWgi6TPmIlh6r62kKmFSRu7L2pg&usqp=CAU';
}
    d.append(h1);
    d.append(img);      
    return d;
    
}
b1.addEventListener('click',function(){
    if(b1.textContent===''){
        b1.textContent=align();
        a=false;
        a=over();
        dekho();
    }
    if(check===0){x.style.backgroundColor='aqua';o.style.backgroundColor='pink';}
    if(check===1){o.style.backgroundColor='aqua';x.style.backgroundColor='pink';}
}
)
b2.addEventListener('click',function(){
    if(b2.textContent===''){
        b2.textContent=align();
        a=false;
        a=over();
        dekho();
    }
    if(check===0){x.style.backgroundColor='aqua';o.style.backgroundColor='pink';}
    if(check===1){o.style.backgroundColor='aqua';x.style.backgroundColor='pink';}
}
)
b3.addEventListener('click',function(){
    if(b3.textContent===''){
        b3.textContent=align();
        a=false;
        a=over();
        dekho();
    }
    if(check===0){x.style.backgroundColor='aqua';o.style.backgroundColor='pink';}
    if(check===1){o.style.backgroundColor='aqua';x.style.backgroundColor='pink';}
}
)
b4.addEventListener('click',function(){
    if(b4.textContent===''){
        b4.textContent=align();
        a=false;
        a=over();
        dekho();
    };
    if(check===0){x.style.backgroundColor='aqua';o.style.backgroundColor='pink';}
    if(check===1){o.style.backgroundColor='aqua';x.style.backgroundColor='pink';}
}
)
b5.addEventListener('click',function(){
    if(b5.textContent===''){
        b5.textContent=align();
        a=false;
        a=over();
        dekho();
    }
    if(check===0){x.style.backgroundColor='aqua';o.style.backgroundColor='pink';}
    if(check===1){o.style.backgroundColor='aqua';x.style.backgroundColor='pink';}
    
}
)
b6.addEventListener('click',function(){
    if(b6.textContent===''){
        b6.textContent=align();
        a=false;
        a=over();
        dekho();
    }
    if(check===0){x.style.backgroundColor='aqua';o.style.backgroundColor='pink';}
    if(check===1){o.style.backgroundColor='aqua';x.style.backgroundColor='pink';}
}
)
b7.addEventListener('click',function(){
    if(b7.textContent===''){
        b7.textContent=align();
        a=false;
        a=over();
        dekho();
    }
    if(check===0){x.style.backgroundColor='aqua';o.style.backgroundColor='pink';}
    if(check===1){o.style.backgroundColor='aqua';x.style.backgroundColor='pink';}
}
)
b8.addEventListener('click',function(){
    if(b8.textContent===''){
        b8.textContent=align();
        a=false;
        a=over();
        dekho();
    }
    if(check===0){x.style.backgroundColor='aqua';o.style.backgroundColor='pink';}
    if(check===1){o.style.backgroundColor='aqua';x.style.backgroundColor='pink';}
}
)
b9.addEventListener('click',function(){
    if(b9.textContent===''){
        b9.textContent=align();
        a=false;
        a=over();
        dekho();
    }
    if(check===0){x.style.backgroundColor='aqua';o.style.backgroundColor='pink';}
    if(check===1){o.style.backgroundColor='aqua';x.style.backgroundColor='pink';}
}
)