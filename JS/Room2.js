const electronicBoard = document.querySelector(".electronic-board");
const electronicBoardIMG = document.querySelector(".electronicBoard-IMG");
const 전자기판input = document.querySelector(".전자기판input");
const 전자기판Form = document.querySelector(".전자기판Form");

const Room2__금고 = document.querySelector(".Room2__금고");
const Room2__금고IMG = document.querySelector(".금고-IMG");
const 금고input = document.querySelector(".금고input");
const 금고Form = document.querySelector(".금고Form");

const drawer2 = document.querySelector(".Room2__서랍");
const drawer2_IMG = document.querySelector(".drawer2-IMG"); 

const 전자기판CorrectAnswer = "01001"
const 금고CorrectAnswer = "1234";

const 전자기판__h3 = document.querySelector(".전자기판__h3");
const 금고__h3 = document.querySelector(".금고__h3");


let 전자기판InputAnswer = ""; //전자기판에다 적은 인풋값, 오답이면 "", 정답이면 "01001"이 들어감.
let 금고InputAnswer = "";

const TVCoAnText = "TV가 켜졌다.";
const 금고CoAnText = "금고가 열렸다.";
const WrAnText = "잘못된 비밀번호다.";
const COLOR_GRREN = "green";
const COLOR_RED = "red";

//비밀번호 TV에 띄우기
function TVpassword(){
    const TV = document.querySelector(".TV");
    const passwordH1 = document.createElement("h1");
    TV.append(passwordH1);
    passwordH1.innerText = "1234";
    passwordH1.style.color = "white";
    passwordH1.style.fontSize = "42px";
}

//전자기판
function electronicBoardDiv(){
     removeHidden(electronicBoardIMG);
     removeHidden(전자기판input);
    divText.innerText = "TV를 켜기 위해 올바른 스위치만을 켜야 한다.";
    //정답일 때만 실행됨
    if(전자기판InputAnswer == 전자기판CorrectAnswer){ 
        addHidden(전자기판input); 
        divText.innerText = "";
        전자기판__h3.innerText = TVCoAnText;
    }
}
electronicBoard.addEventListener("click", clickDiv);
electronicBoard.addEventListener("click",  electronicBoardDiv);

//전자기판 답안 검사
전자기판Form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(전자기판input.value == 전자기판CorrectAnswer){
        전자기판InputAnswer = 전자기판input.value; //정답("01001") 값을 전자기판inputAnswer에 저장.
        전자기판input.value = "";
        divText.innerText = "TV가 작동하는 소리가 들리며 화면이 켜진다.";
        전자기판__h3.style.color = COLOR_GRREN;
        전자기판__h3.innerText = TVCoAnText;
        addHidden(전자기판input); 
        TVpassword();
    }
    else{
        전자기판input.value = "";
        전자기판__h3.style.color = COLOR_RED;
        전자기판__h3.innerText = WrAnText;
    }    
})

//금고
function 금고div(){
     removeHidden(Room2__금고IMG);
     removeHidden(금고input);
    divText.innerText = "전자 금고다.";
    if(금고InputAnswer == 금고CorrectAnswer){ 
        addHidden(금고input); 
        divText.innerText = "";
        금고__h3.innerText = 금고CoAnText;
    }
}
Room2__금고.addEventListener("click", clickDiv);
Room2__금고.addEventListener("click", 금고div);

//금고 답안 검사
금고Form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(금고input.value == 금고CorrectAnswer){  
        금고InputAnswer = 금고input.value;
        금고input.value = "";
        divText.innerText = "금고 안에서 열쇠를 발견했다.";
        금고__h3.style.color = COLOR_GRREN;
        금고__h3.innerText = 금고CoAnText;
        addHidden(금고input); 
         removeHidden(item__key);
        hasKey = 1;
    }
    else{
        금고input.value = "";
        금고__h3.style.color = COLOR_RED;
        금고__h3.innerText = WrAnText;
    }   
})

//서랍2
function drawer2ClickDiv(){
     removeHidden(drawer2_IMG);
     removeHidden(item__teardPaper);
    divText.innerText = "또다른 서랍, 안에서 찢어진 종이를 얻었다.";
}
drawer2.addEventListener("click", clickDiv);
drawer2.addEventListener("click",  drawer2ClickDiv);







 


