let result = document.querySelector('.result');

let buttons = Array.from(document.getElementsByClassName('button'));


buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'Clear':
                result.innerText = '';
                break;
            case '=':
                 if(eval(result.innerText) === undefined){
                     result.innerText = 'Cannot be defined';
                }else{
                    result.innerText = eval(result.innerText);
                }
                break;
            case '←':
                if (result.innerText){
                   result.innerText = result.innerText.slice(0, -1);
                }else{
                   result.innerText = 'Not possible operation';
                }
                break;
            case '√':
                result.innerText = Math.sqrt(result.innerText);
                break;
            case '^':
                result.innerText = result.innerText * result.innerText;
                break;
            default:
                result.innerText = result.innerText + e.target.innerText;
        }
    });
});