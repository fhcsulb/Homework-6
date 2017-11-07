const  candidates = [
    { name: 'Peter Parker', likes: '700'},
    { name: 'Tony Stark', likes: '135'},
    { name: 'dash', likes: '0'},
  ]

  
  function printCandidates()
  {
      for ( i = 0; i < candidates.length; i++)
      {
        

            let element = document.createElement("div");
            // element.appendChild(document.createTextNode(candidates[i].name +   "\t\t" +like_count));
            document.getElementById("candidate").appendChild(element);

            let candidate_name = document.createElement("p");
            candidate_name.innerHTML = candidates[i].name;
            element.appendChild(candidate_name);

            let like_count = document.createElement("p");
            like_count.innerHTML = candidates[i].likes;
            element.appendChild(like_count);
            

            let like_button = document.createElement("button");
            like_button.innerHTML = "Like";
            like_button.onclick = likeIncrement;
            element.appendChild(like_button);

            let delete_button = document.createElement("button");
            delete_button.innerHTML = "Delete";
            delete_button.onclick = deleteCandidate;
            element.appendChild(delete_button);

      }

      

  }

 

  function deleteCandidate()
  {
    console.log("Delete Button clicked ! ");
  }

  function likeIncrement()
  {
      

      console.log("Like Button clicked ! ");
  }