function timer() {
    let secondOnes = document.querySelector('#secondOnes');
    let secondTens = document.querySelector('#secondTens');
    let msHundreds = document.querySelector('#msHundreds');
    let msTens = document.querySelector('#msTens');
    var interval = setInterval(function(){
        switch(msTens.textContent === '-'){
            case true:
                return msTens.textContent = 1;
                break;
            case false:
                switch(msTens.textContent === '9'){
                    case true:
                        msTens.textContent = 0;
                        switch(msHundreds.textContent === '-'){
                            case true:
                                return msHundreds.textContent = 1;
                            case false:
                                switch(msHundreds.textContent === '9'){
                                    case true: 
                                    msHundreds.textContent = 0;
                                    switch(secondOnes.textContent === '-'){
                                        case true: 
                                        return secondOnes.textContent = 1;
                                        case false:
                                            switch(secondOnes.textContent === '9'){
                                                case true: 
                                                secondOnes.textContent = 0;
                                                secondTens.textContent = 1;
                                                let redStyle = document.querySelector('.digits');
                                                redStyle.classList.add('redDigit');
                                                clearInterval(interval);
                                                return;
                                                case false:
                                                    return ++secondOnes.textContent;
                                            }
                                    }
                                    case false:
                                        return ++msHundreds.textContent;
                                }
                        }
                        case false:
                        return ++msTens.textContent;
                        break;

                }
        }
    },10);

interval();


}

timer();
