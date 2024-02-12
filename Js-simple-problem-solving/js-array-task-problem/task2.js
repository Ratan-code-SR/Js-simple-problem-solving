/*
2. Add or remove elements
Declare an array of 3 tourist destinations
Add a new tourist destination to your tourist array
Add two more to your array
Remove the last tourist destination you have added
display the final array as output 
*/


function addOrRemoveElements(place) {
    if (!Array.isArray(place)) {
        return 'please provide an array';
    }
    else if(place.length < 3){
        return 'please provide 3 values';
    }
    place.push('barkalak');
    const newArray = ['nilachal', 'bilaichuri'];
    const finalArray = place.concat(newArray);
    finalArray.pop();
    return finalArray;

}
const places = ['rangamati', 'bandarban'];
console.log(addOrRemoveElements(places));

//task 2 completed;
