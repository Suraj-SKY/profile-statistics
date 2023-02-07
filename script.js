const counterElement = document.querySelectorAll(".counter");

counterElement.forEach((counterElement) => {
    counterElement.innerHTML = '0';

    incrementCounter();

    function incrementCounter() {
        let currentNum = +counterElement.innerHTML;
        //notes: + sign will convert string to number
        const dataCeil = counterElement.getAttribute('data-ceil');
        const increment = dataCeil / 15; // 15 is smallest number

        currentNum += Math.ceil(increment);

        if (currentNum < dataCeil) {
            counterElement.innerHTML = currentNum;
            setTimeout(incrementCounter, 50);
        }
        else {
            counterElement.innerHTML = dataCeil;
        }
    }
})