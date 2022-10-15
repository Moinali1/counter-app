// document.getElementById("primary").innerHTML=55;


// let myage=19;
// console.log(myage);


// 1. Create two variables, myAge and humanDogRatio
// 2. Multiply the two together and store the result in myDogAge 
// 3. Log myDogAge to the console
// let myage=19;
// let catage=myage*7;
// console.log(catage);



// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70
// let bonusPoints=50
// bonusPoints=bonusPoints+50
// bonusPoints= bonusPoints-75
// bonusPoints=bonusPoints+45
// console.log(bonusPoints)

// let countele=document.getElementById("primary");
// let count=0;
// function increment()
// {
//     count=countele+1;
//     document.getElementById("primary").innerHTML=count;

// }




// let count = 0

// function increment() {
//     count = count + 1
//     document.getElementById("primary").innerText = count
// }


// function save()
// {
//     console.log(count);
// }



//

// let message= "You have three new notifications";
// let username="name"
// console.log(message + ", " + username + "!")

// let messageToUser=message + ", " + username + "!";

// let name = 42
// let greeting = "Hi, my name is "
// let myGreeting = greeting + name
// console.log(myGreeting)


// console.log(4 + 5) // 9
// console.log("2" + "4") // "24"
// console.log("5" + 1) // "51"
// console.log(100 + "100") // "100100"


let count = 0

function increment() {
    count = count + 1
    document.getElementById("primary").innerText = count
}


function save()
{
    let ele=document.getElementById("save-details");
    // ele.innerText+= count + " - "; this avoid the space
    ele.textContent+= count + " - "; //this is the solution for the problem
    count=0;
    document.getElementById("primary").innerText=count;
}
 