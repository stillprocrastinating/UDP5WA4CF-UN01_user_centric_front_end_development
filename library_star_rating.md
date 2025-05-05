# CodingLab star rating

From [this YouTube video](https://www.youtube.com/watch?v=q1xhbc-oKnc) by [CodingLab](https://www.youtube.com/@CodingLabYT).

```html
<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<title>Star Rating</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-pUA-Compatible" content="ie=edge">
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      body {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(45deg, #ffd195, #ffb283);
      }
      .rating-box {
        position: relative;
        background: #fff;
        padding: 25px 50px 35px;
        border-radius: 25px;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
      }
      .rating-box header {
        font-size: 22px;
        color: #dadada;
        font-weight: 500;
        margin-bottom: 20px;
        text-align: center;
      }
      .rating-box .stars {
        display: flex;
        align-items: center;
        gap: 25px;
      }
      .stars i {
        color: #e6e6e6;
        font-size: 35px;
        cursor: pointer;
        transition: color 0.2s ease;
      }
      .stars i.active {
        color: #ff9c1a;
      }
    </style>
</head>

<body>
	<div class="rating-box">
		<header>
			How was your experience?
		</header>
		<div class="stars">
			<i class="fa-solid fa-star"></i>
			<i class="fa-solid fa-star"></i>
			<i class="fa-solid fa-star"></i>
			<i class="fa-solid fa-star"></i>
			<i class="fa-solid fa-star"></i>
		</div>
	</div>
    <!-- font awesome --><script src="https://kit.fontawesome.com/f16d074ce1.js" crossorigin="anonymous"></script>
	<script>
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
	</script>
</body>

</html>
```

