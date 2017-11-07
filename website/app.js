const  candidates = [
    { name: 'Peter Parker', likes: 700},
    { name: 'Tony Stark', likes: 135},
    { name: 'dash', likes: 0},
  ]

  
  function printCandidates()
  {
      for ( i = 0; i < candidates.length; i++)
      {
        

            let element = document.createElement("div");
            document.getElementById("candidate").appendChild(element);

            let candidate_name = document.createElement("p");
            candidate_name.innerHTML = candidates[i].name;
            element.appendChild(candidate_name);

            let like_count = document.createElement("p");

            // set the like counter ID to the array index.
            like_count.id=i;
            like_count.innerHTML = candidates[i].likes;
            element.appendChild(like_count);
            

            let like_button = document.createElement("button");
            like_button.innerHTML = "Like";
            like_button.className=i;
            like_button.onclick = function(){ likeIncrement(this.className)};
            element.appendChild(like_button);

            let delete_button = document.createElement("button");
            delete_button.innerHTML = "Delete";
            delete_button.onclick = function () { deleteCandidate(this.className)};
            
            element.appendChild(delete_button);

      }
  }

 

  function deleteCandidate()
  {
    console.log("Delete Button clicked ! ");


  }

  function likeIncrement(index)
  {
      console.log(candidates[index]);
      
      candidates[index].likes = candidates[index].likes+1;
      document.getElementById(index).innerHTML = candidates[index].likes;
      console.log("Like Button clicked ! ");
  }


  function addCandidate()
  {
    let new_name = document.getElementById("candidate_name").value ;
    candidates.push({name: new_name, likes: 0 })

    let element = document.createElement("div");
    document.getElementById("candidate").appendChild(element);

    let candidate_name = document.createElement("p");
    candidate_name.innerHTML = new_name;
    element.appendChild(candidate_name);

    let like_count = document.createElement("p");
    
    // set the like counter ID to the array index.
    like_count.id=candidates.length - 1;
    like_count.innerHTML = 0;
    element.appendChild(like_count);


    let like_button = document.createElement("button");
    like_button.innerHTML = "Like";
    like_button.className=candidates.length - 1;
    like_button.onclick = function(){ likeIncrement(this.className)};
    element.appendChild(like_button);

    let delete_button = document.createElement("button");
    delete_button.innerHTML = "Delete";
    delete_button.onclick = function () { deleteCandidate(this.className)};
    
    element.appendChild(delete_button);




    
    
  }