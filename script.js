let userscore = 0;
let compscore = 0;

const msgcontainer=document.querySelector(".msg-container");
const msg=document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
const userscorepara=document.querySelector("#user-choice");
const compscorepara=document.querySelector("#comp-choice");


const getrandom = () => {

    let options = ["rock", "paper", "scissor"];
    let random = Math.floor(Math.random() * 3);
    return options[random];
}

const playgame = (userchoice) => {

    let comchoice = getrandom();
  showwinner(userchoice,comchoice);

};
let  showwinner=(userchoice,comchoice)=>{
    if (userchoice === comchoice) {
        msg.innerText="Game is Draw Play Again/";
        msgcontainer.style.backgroundColor="black";

    } else if
        ((userchoice === "rock" && comchoice === "sciss  or") || (userchoice === "scissor" && comchoice === "paper") || (userchoice === "paper" && comchoice === "rock")) {
    userscore++;
    userscorepara.innerText=userscore;
        msg.innerText=`YOU  WIN. your  ${userchoice}  beat   ${comchoice}`;
        msgcontainer.style.backgroundColor="green";
    }
    else {
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText=`YOU  LOST. your  ${comchoice}  beat  ${userchoice}`;
        msgcontainer.style.backgroundColor="red";
    }

}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userchoice = choice.getAttribute("id");
        playgame(userchoice);

    });
});