// An array that contains the name and like_count of the pre-defined candidates.
const  candidates = [
  { name: 'Peter Parker', likes: 700},
  { name: 'Tony Stark', likes: 135},
  { name: 'dash', likes: 0},
]

// This funcion prints the candidates and their like_count 
// iteratively using the candidate[]
function printCandidates() {
    for ( i = 0; i < candidates.length; i++)
    {
          // Create a div and make it the child of the 'candidate' div.
          // The 'candidate' div is instantiated in the HTML
          let element = document.createElement("div");
          document.getElementById("candidate").appendChild(element);
          // The the div of the div to the candidate name
          element.id = candidates[i].name;

          // Create a p element inside the just created 'person' div
          // to hold the candidate's name
          let candidate_name = document.createElement("p");
          candidate_name.innerHTML = candidates[i].name;
          element.appendChild(candidate_name);

          // Create a p element inside the 'person' div 
          // to hold their number of likes
          let like_count = document.createElement("p");
          // Set the p element ID to the candidate[i] index.
          like_count.id=i;
          like_count.innerHTML = candidates[i].likes;
          element.appendChild(like_count);
          

          // Create the delete-button
          // Set the button's classname to the candidate[i] index
          let delete_button = document.createElement("button");
          delete_button.innerHTML = "Delete";
          delete_button.className = i;
          // Define an onclick function. This function will pass buttons with the same class name 
          // (ie. from the same array index)
          delete_button.onclick = function(){ 
            deleteCandidate(this.className);
          };
          element.appendChild(delete_button);

          // Create the like-button
          // Set the button's classname to the candidate[i] index
          let like_button = document.createElement("button");
          like_button.innerHTML = "Like";
          like_button.className=i;
          // Define an onclick function. This function will pass buttons with the same class name 
          // (ie. from the same array index)
          like_button.onclick = function(){ 
            likeIncrement(this.className)
          };
          element.appendChild(like_button);



    }
}

// This is a function for increasing the candidate like counter
// If 'like' is clicked, then increase the counter
function likeIncrement(index)
{
    // Update the number of likes    
    candidates[index].likes = candidates[index].likes+1;

    // Update the value on the HTML document.
    document.getElementById(index).innerHTML = candidates[index].likes;
    console.log("Like Button clicked ! ");
}

// This is a function that removes candidates 
// When a candidate is removed, their name will no longer appear.
function deleteCandidate(index) {
  // Return the 'candidate' div - the overarching div
  var parent = document.getElementById("candidate");

  // return a single div from the 'candidate' div. 
  // since the child divs have IDs that are the candidate's names, just retrieve by candidate name
  let child = document.getElementById(candidates[index].name);

  // remove the child from the parent (ie. the 'person' div from the 'candidate' div)
  parent.removeChild(child);
  console.log("Delete Button clicked ! ");
}


  // This is a function for adding candidates. 
  // When a candidate is added, their name will appear in the list.
  function addCandidate() {
    
    // Retrieve the user-input name from the text input box
    // Set their inital like_count to 0
    let new_name = document.getElementById("candidate_name").value ;
    if(new_name.length > 0) {
      candidates.push({name: new_name, likes: 0 })
      
          // Create a div and make it the child of the 'candidate' div.
          // The 'candidate' div is instantiated in the HTML
          let element = document.createElement("div");
          element.id = new_name;
          document.getElementById("candidate").appendChild(element);
      
          // Create a p element inside the just created 'person' div
          // to hold the candidate's name
          let candidate_name = document.createElement("p");
          candidate_name.innerHTML = new_name;
          element.appendChild(candidate_name);
      
           // Create a p element inside the 'person' div 
          // to hold their number of likes
          let like_count = document.createElement("p");
          like_count.id=candidates.length - 1;
          like_count.innerHTML = 0;
          element.appendChild(like_count);
      
          // Create the delete-button
          // Set the button's classname to the candidate[i] index
          let delete_button = document.createElement("button");
          delete_button.className = candidates.length - 1;
          delete_button.innerHTML = "Delete";
          delete_button.onclick = function () { deleteCandidate(this.className)};
          element.appendChild(delete_button);
      
          // Create the like-button
          // Set the button's classname to the candidate[i] index
          let like_button = document.createElement("button");
          like_button.innerHTML = "Like";
          like_button.className=candidates.length - 1;
          like_button.onclick = function(){ likeIncrement(this.className)};
          element.appendChild(like_button);
    }
    

  
  }

