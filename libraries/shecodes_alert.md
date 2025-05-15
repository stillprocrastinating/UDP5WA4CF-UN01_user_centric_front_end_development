# SheCodes alert

From the 'Intro to learning' webinar by Matt at [SheCodes](https://www.shecodes.io).

```js
function subscribe() {
    let name = prompt("What is your name?");
    prompt("What is your email address?");
    alert(`Thanks, ${name}! We'll be in touch! Meanwhile, don't forget to breathe 🧘‍♀️`);
}
let button = document.querySelector("button");
button.addEventListener("click", subscribe);
```

