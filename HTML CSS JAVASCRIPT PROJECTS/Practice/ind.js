(function(){
    let screen = document.querySelector('.screen')
    let buttons = document.querySelectorAll('.btn')
    let clear = document.querySelector('.clear')
    let equal = document.querySelector('.equal')


    buttons.forEach(function(buttons){
        buttons.addEventListener('click', function(e){
            let value = e.target.dataset.nums
            screen.value += value
        })
    })


    equal.addEventListener('click', function(e){
        if(screen === ''){
            screen.value = ''
        }
        else
        {
            let answer = eval(screen.value)
            screen.value = answer
        }
    })
    clear.addEventListener('click', function(e){
        screen.value = ''

    })

})()