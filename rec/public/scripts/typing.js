const message1 = "Mercancía personalizable canjeable por tus espectadores";
const message2 = "Interacciones divertidas que promueven tu salud";
const message3 = "Dispositivos que faciliten tu transmisión";
const message4 = "Objetos para tu comodidad";

const messages = [message1, message2, message3, message4];

let typeText = document.querySelector(".typing-effect");
let isAdding = true;
let index = 0;
let textToBeTypedIndex = 0;
            
function typing(){
        setTimeout(function(){

            typeText.innerText = messages[textToBeTypedIndex].slice(0, index);

                if (isAdding) {
      
                    if (index > messages[textToBeTypedIndex].length) {
        
                        isAdding = false
                        typeText.classList.add("showAnim");
                        setTimeout(function () {
                        typeText.classList.remove("showAnim");
                        typing();
                    }, 2000);
                    return;
                } else {
                index++;
                }
            } else {
                if (index === 0){
                    isAdding = true;
                    textToBeTypedIndex = (textToBeTypedIndex + 1) % messages.length;
                }
                else {
                    index--;
                }
            }
                typing();   
            }, isAdding ? 120 : 60);
        }

typing();
        