// const containerEl = document.querySelector('.container')
// const careers = ['Welcome To My Repositories', 'This', 'is Auto', 'Text Generator'];
// let careerIndex = 0;
// let characterIndex = 0;


// function updateText() {
//     containerEl.innerHTML = `<h1>${careers[careerIndex].slice(0, characterIndex)}</h1>`;
//     ;
//     if (characterIndex == careers[careerIndex].length + 1) {
//         reversename();
//         careerIndex++;
//         characterIndex = 0;
//         if (careerIndex == careers.length) careerIndex = 0;
//     }
//     setTimeout(() => {
//         updateText();
//         characterIndex++
//     }, 200);

// }
// function reversename() {
//     if (characterIndex === 0) return;
//     containerEl.innerHTML = `<h1>${careers[careerIndex].slice(0, characterIndex)}</h1>`;
//     setTimeout(() => {
//         characterIndex--;
//         reversename();
//     }, 200);
// }
// updateText();

const activeEl = document.querySelector('.active')
const inpEl = document.querySelector('.inp')
const btnEl = document.querySelector('#btn')
const stopEl = document.querySelector('#stop')
let newArr;
btnEl.addEventListener('click', () => {
    if (inpEl.value === "") alert("Enter Something Sir");
    else {
        const containerEl = document.querySelector('.container')
        const careers = ['Welcome To My Repositories', 'This', 'is Auto', 'Text Generator'];
        let careerIndex = 0;
        let characterIndex = 0;
        newArr = inpEl.value.split(" ");

        function updateText() {
            containerEl.innerHTML = `<h1>${newArr[careerIndex].slice(0, characterIndex)}</h1>`;
            ;
            if (characterIndex == newArr[careerIndex].length + 1) {
                reversename();
                careerIndex++;
                characterIndex = 0;
                if (careerIndex == newArr.length) careerIndex = 0;
            }
            setTimeout(() => {
                updateText();
                characterIndex++
            }, 200);

        }
        function reversename() {
            if (characterIndex === 0) return;
            containerEl.innerHTML = `<h1>${newArr[careerIndex].slice(0, characterIndex)}</h1>`;
            setTimeout(() => {
                characterIndex--;
                reversename();
            }, 200);
        }
        updateText();
    }
})
stopEl.addEventListener('click',()=>{
newArr = [];
activeEl.value = "";
activeEl.style.display = 'hidden';    
})
