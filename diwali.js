const countdownDate = new Date('2023-11-12 23:59:59').getTime(); // Set the countdown date and time

const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById('timer').innerHTML = 'EXPIRED';
    }
}, 1000);

let number = document.getElementById("number");
let counter = 0;
setInterval(() => {
    if(counter == 50){
        clearInterval();
    }else{
    counter+= 1; 
    number.innerHTML = counter + "%";
    }
},20);
