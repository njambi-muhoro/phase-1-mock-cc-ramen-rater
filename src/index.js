function ourRamenMenu() {
  fetch("http://localhost:3700/ramens")
    .then((res) => {
      return res.json();
    })
    .then((ramens) => {
      // we create our new elements where various ramen info will go to

      const ourImageFiles = document.getElementById("ramen-menu");
      for (let myRamenImage of ramens) {
        // new folder of files and assigning values to it

        const largeDiv = document.createElement("div");
        largeDiv.classList.add("ramMenu");
        ourImageFiles.appendChild(largeDiv);

        const ourImages = document.createElement("img");
        ourImages.classList.add("imgs");
        ourImages.src = `${myRamenImage.image}`;
        ourImages.alt = `${myRamenImage.name}`;
        largeDiv.appendChild(ourImages);
        // console.log(`${ourImages.src}`)

        const newDiv = document.createElement("div");
        newDiv.classList.add("menus");
        largeDiv.appendChild(newDiv);

        const newp1 = document.createElement("p");
        newp1.classList.add("ramenName");
        newp1.innerHTML = `${myRamenImage.name}`;
        //console.log(newp1);
        newDiv.appendChild(newp1);

       
        const newp2 = document.createElement("p");
        newp2.classList.add("restaurantName");
        newp2.innerHTML = `${myRamenImage.restaurant}`;
        // console.log(newp2);
        newDiv.appendChild(newp2);

        const newp3 = document.createElement("p");
        newp3.classList.add("resRating");
        newp3.innerHTML = `${myRamenImage.rating}`;
        newDiv.appendChild(newp3);
        //console.log(newp3);

        const newp4 = document.createElement("p");
        newp4.classList.add("resComment");
        newp4.innerHTML = `${myRamenImage.comment}`;
        newDiv.appendChild(newp4);
        //console.log(newp4)

        // we iterate over the elements clicked
        let newIm = "";
        const clickableDivs = document.querySelectorAll(".ramMenu");

        for (const clickableDiv of clickableDivs) {
          clickableDiv.addEventListener("click", (e) => {
            //same as resetting
            newIm = "";

            //we iterate one by one
            const singleImage = clickableDiv.querySelector(".imgs");
            const scrImage = singleImage.src;
           // console.log(scrImage);

            const ramensName =
              clickableDiv.querySelector(".ramenName").innerText;
            // console.log(ramensName);

            const myRestaurantName =
              clickableDiv.querySelector(".restaurantName").innerText;
            //console.log(myRestaurantName);

            const ourRating =
              clickableDiv.querySelector(".resRating").innerText;
            //console.log(ourRating);

            const resComment =
              clickableDiv.querySelector(".resComment").innerText;
            //console.log(resComment);

            newIm = {
              scrImage,
              ramensName,
              myRestaurantName,
              ourRating,
              resComment,
            };
            upload();
            // (e).stopPropagation();
          });
          function upload() {
            document.querySelector(".name").innerText = newIm.ramensName;
            document.querySelector(".restaurant").innerText =
              newIm.myRestaurantName;
            document.querySelector("#ratingDisplay").innerText =
              newIm.ourRating;
            document.querySelector("#commentDisplay").innerText =
              newIm.resComment;
            document.querySelector(".detailImage").src = newIm.scrImage;
          }
        }

        // const singleImage =document.querySelector("")
      }
      
      let ramenName = document.querySelector("#newName")
      console.log(ramenName);
      
      let newRamenImage =document.querySelector("#newImage");
      console.log(newRamenImage);
      
      let newRamenRating =document.querySelector("#newRating");
      console.log(newRamenRating);

     let  newRamenRes = document.querySelector("#new-restaurant")
      console.log(newRamenRes);

      let newReviewComments =document.querySelector("#newComment");
      console.log(newReviewComments);
      
      const myForm = document.querySelector("#newramenFeedBack")
      console.log(myForm)
      myForm.addEventListener('submit', (e)=>{
          (e).preventDefault()
          
         // this is where we create new elements to take in the values of out inputs
         const ourImageFiles = document.getElementById("ramen-menu");
         const largeDiv = document.createElement("div");
         largeDiv.classList.add("ramMenu");
         ourImageFiles.appendChild(largeDiv);
 
         const ourImages = document.createElement("img");
         ourImages.classList.add("imgs");
         ourImages.src = newRamenImage.value;
         
         largeDiv.appendChild(ourImages);
         
 
         const newDiv = document.createElement("div");
         newDiv.classList.add("menus");
         largeDiv.appendChild(newDiv);
 
         const newp1 = document.createElement("p");
         newp1.classList.add("ramenName");
         newp1.innerHTML = ramenName.value;
         newDiv.appendChild(newp1);
         
 
         
         const newp2 = document.createElement("p");
         newp2.classList.add("restaurantName");
         newp2.innerHTML = newRamenRes.value;
         newDiv.appendChild(newp2);
        
 
         const newp3 = document.createElement("p");
         newp3.classList.add("resRating");
         newp3.innerHTML = newRamenRating.value;
         newDiv.appendChild(newp3);
       
 
         const newp4 = document.createElement("p");
         newp4.classList.add("resComment");
         newp4.innerHTML = newReviewComments.value;
         newDiv.appendChild(newp4);
         
         myForm.reset();
        })
            
           
      

      
      // function newElements(){
      //   //we write the new elements where our inputs will go to...of which they are to go to our DIV ramen-menu
        
      //   const ourImages = document.createElement("img");
      //   ourImages.classList.add("imgs");
      //   ourImages.src = newForm.newRamenImage;
        
      //   largeDiv.appendChild(ourImages);
        

      //   const newDiv = document.createElement("div");
      //   newDiv.classList.add("menus");
      //   largeDiv.appendChild(newDiv);

      //   const newp1 = document.createElement("p");
      //   newp1.classList.add("ramenName");
      //   newp1.innerHTML =newForm.name;
        
      //   newDiv.appendChild(newp1);

        
      //   const newp2 = document.createElement("p");
      //   newp2.classList.add("restaurantName");
      //   newp2.innerHTML =newForm.restaurantName ;
        
      //   newDiv.appendChild(newp2);

      //   const newp3 = document.createElement("p");
      //   newp3.classList.add("resRating");
      //   newp3.innerHTML =newForm.newRamenRating;
      //   newDiv.appendChild(newp3);
        

      //   const newp4 = document.createElement("p");
      //   newp4.classList.add("resComment");
      //   newp4.innerHTML = newForm.newComments;
      //   newDiv.appendChild(newp4);

      // }
    });
}
document.addEventListener("DOMContentLoaded", function () {
  ourRamenMenu();
});
