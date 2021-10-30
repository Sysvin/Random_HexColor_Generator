//we need some variables here to get all of our stuff 
const hexColor = document.querySelector(".hex"); 
const btn = document.querySelector(".generate"); 

const genColor = () => { 
    //we need a random number 
    let randomColor = Math.random(); 
    //we need to convert the # to string b/c we will need letters as well as numbrers. We want to use base 16 so it will go from 0 to 9 and from A to F. 
    randomColor = Math.random().toString(16);
    //now we just need 6 of the numbers generated. We will use substring method to fix it this way. The substring takes two parameters. The first is where it starts. We want to start after the period, and only go six more.
    randomColor = Math.random().toString(16).substring(2, 8); 
    //we are only doing these on separate lines so we can see what is happening. 


    //now we want to change the number in our read out box and we need to add a hash in front by string concatenation
    hexColor.innerHTML = "#" + randomColor; 

    //now we need to actually change the background to this color: 
    document.body.style.backgroundColor = "#" + randomColor; 
}

btn.addEventListener("click", genColor); 

//to generate a random color on page load, need to call the genColor function here like this: 
genColor(); 