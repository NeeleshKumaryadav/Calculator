(function(){
    let screen =document.querySelector('.screen');
    let buttons =document.querySelectorAll('#hell');
    let clear=document.querySelector('.btn-clear');
    let equal=document.querySelector('.btn-equal');
    let back=document.querySelector('.btn-back');

    buttons.forEach(function(button){
        button.addEventListener('click',function(e){
            let value=e.target.dataset.num;
            screen.value+=value;

        })
    });

    equal.addEventListener('click',function(e){
        if (screen.value===''){
            screen.value='';
        }
        else{
            let answer=eval(screen.value);
            screen.value=answer;
        }
    })

    clear.addEventListener('click',function(e){
        screen.value='';
    })

    back.addEventListener('click',function(e){
        let val=screen.value;
        if(val.length>0){
            val=val.substr(0,val.length-1);
            screen.value=val
        }
    })

})();