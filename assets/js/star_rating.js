// Select all elements with the "i" tag and store them in a Nodelist called "stars"
const stars = document.querySelectorAll(".stars i");
//console.log(stars);

// Loop through the "stars" Nodelist
stars.forEach((star, index1) => {
    // Add an event listener which runs a function when the "click" event is triggered
    star.addEventListener("click", () => {
        //console.log("clicked");
        //console.log("index1");
        // Loop through the "stars" Nodelist again
        stars.forEach((star, index2) => {
            //console.log("index2");
            // Add the "active" class to the clicked star and any stars with a lower index
            // Remove the "active" class from any stars with a higher index
            index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
        });
    });
});