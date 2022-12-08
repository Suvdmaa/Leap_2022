let array = [ "Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon" ] 
console.log(array);

// Sort the array using  method
array.sort();
console.log(array);

// Reverse the array using  method
array.reverse();
console.log("reversed: ", array);

// Remove the first IT company from the array

array.shift();
console.log(array);

// Remove the middle IT company or companies from the array
arr = array.length/2;
array.splice(arr,1);
console.log(array);


// Remove the last IT company from the array
array.pop();
console.log(array);

// Remove all IT companies
array.splice(0);
console.log(array);
