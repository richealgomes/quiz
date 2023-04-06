const questions= [
    { 
        'que': 'which of the following is a markup language?',
        'a'  : 'html',
        'b'  : 'css',
        'c'  : 'js',
        'd'  : 'php',
        'correct' : 'b'
    },
    { 
        'que': 'what year was javascript launched?',
        'a'  : '1996',
        'b'  : '1995',
        'c'  : '1094',
        'd'  : '2020',
        'correct' : 'b'
    },
    { 
        'que': 'what does css stand for?',
        'a'  : 'hyper text markup language',
        'b'  : 'cascading style sheet',
        'c'  : 'jason object notation',
        'd'  : 'none of these',
        'correct' : 'b'
    },
    { 
        'que': 'if we multiply 7 with 30 and add 20 then minus 10 what will be the answer?',
        'a'  : '320',
        'b'  : '420',
        'c'  : '520',
        'd'  : '220',
        'correct' : 'c'
    }
    ]
        let index = 0;
        let total = questions.length;
        let right=0;
            wrong=0;
        const queBox = document.getElementById('queBox')
        const options = document.querySelectorAll('.option')
        const loadQuestion =()=>{
            if(index===total){
              return  endQuiz()
            }
            reset()
        const data = questions[index]
        queBox.innerText =`${index+1})${data.que}`
        options[0].nextElementSibling.innerText= data.a;
        options[1].nextElementSibling.innerText= data.b;
        options[2].nextElementSibling.innerText= data.c;
        options[3].nextElementSibling.innerText= data.d;
    }
    const nextAnas =() => {
        const data = questions[index]
        const ans = getAnswer()
        if(ans===data.correct){
            right++
        }
        else{wrong++}
        index++;
        loadQuestion()
        return;
    }
    const getAnswer =()=>{
        options.forEach(
            (input) => {
                if(input.checked){
                    return input.value
                }
            
            }
        )
    }
    const reset =()=>{
        options.forEach(
            (input) => {
                input.checked=false
            
            }
        )
    }
     const endQuiz =()=>{
        document.getElementById('box').innerHTML=`
        <h2>Good job you have successfully completed your practice test </h2>
        <h3>${right}/${total} are correct</h3>
        <h3>good luck for your main exam .</h3>`
    
    }
    loadQuestion();