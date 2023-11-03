async function fetchData(){
    console.log("ascyn function executed")
    const data = await fetch("https://jsonplaceholder.typicode.com/users")
    console.log("ascyn function complete")
}
// function fetchData(){
//     console.log("Hello")



//     let d = null
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(function(data){
//         console.log("Promise success")
//         console.log(data);
//         return data.json()
//     })
//     .then(function(data){
//         console.log("Final data[0].username")
//         console.log(data[0].username)
        
//         let para = document.getElementById('username')
//         for(let i=0; i< data.length; i++){
//             let eachuser = document.createElement('h6');
//             eachuser.innerHTML = "Welcome " + data[i].username

//             para.appendChild(eachuser)

//         }
        
//         para.style.color = "blue"

//         d=data;
//     })
//     .catch(function(err){
//         console.log("Promise failed")
//     });
//     console.log(d)

// }

// // timebomb implemation

// let timerInSecond = 10;   //second
// let interval;

// function updateTimer(){
//     if (timerInSecond <0){
//         clearInterval(interval); //stop the timer
//         alert ('BOOM!!')
//     }
//     else {
//     const minutes = Math.floor(timerInSecond/60);
//     const second = timerInSecond % 60;

//     const formattedTime = (minutes + ":" + second);

//     document.getElementById('timebomb').innerHTML = formattedTime;
    

  
//     timerInSecond = timerInSecond - 1;
//     }

// }

// interval = setInterval(updateTimer, 1000); //call every second. (1000ms)