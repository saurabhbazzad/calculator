$(()=>{
    let state=""
    let num1=0
    let num2=0
    let operation=""
    result=0
    $('.number').click((e)=>{
        state=state+e.target.innerText
        $('#result').text(state)
    })

    $('.op').click((e)=>{
        num1=result==0?Number(state):result
        state=""
        operation=e.target.innerText
    })

    $('.bkspc').click((e)=>{
        state=state.substr(0,state.length-1)
        if(state.length==0) state=0
        $('#result').text(state)
    })

    $('.eq').click((e)=>{
        num2=Number(state)
        state="0"
        result=num1
        switch(operation){
            case "+":
                result=num1+num2
                break;
            case "-":
                result=num1-num2
                break;
            case "*":
                result=num1*num2
                break;
            case "/":
                result=num1/num2
                break;
        }
        $('#result').text(result)
        num1=0;
        num2=0;
        operation=""
    })

    $('.clear').click(()=>{
        state=""
        num1=0
        num2=0
        operation=""
        result=0
        $('#result').text(0)
    })
})