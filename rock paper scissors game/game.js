let userScore=0;
let compScore=0;

const choices=document.querySelectorAll('.choice');
const msg=document.querySelector('#msg');
const userScorePara=document.querySelector('#user-score')
const compScorePara=document.querySelector('#comp-score')

const genCompChoice=()=>{
    //rock, paper , scissor
    let options=['rock','paper','scissor']
    const randIdx=Math.floor(Math.random()*3)
    return options[randIdx];
}

const drawGame=()=>{
    msg.innerText='Game was draw. Play again.'
    msg.style.backgroundColor='grey';
}

const showWinner =(userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You win.Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor='green';


    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You loss! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor='red';
    }
}


const playGmae =(userChoice)=>{
    //generate computer choice
    const compChoice=genCompChoice();


    if(userChoice===compChoice){
        //Draw game
        drawGame()
    }else{
        let userWin= true;
        if(userChoice==='rock'){
            //scissor or paper
            userWin= compChoice ==='paper' ? false: true;
        }else if(userChoice==='paper'){
            //rock or scissor
            userWin=compChoice ==='scissor' ? false:true;
        }else{
            //user - scissor
            //comp - rock or paper
            userWin=compChoice ==='rock' ? false:true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userChoice=choice.getAttribute('id')
        playGmae(userChoice)
    })
})


