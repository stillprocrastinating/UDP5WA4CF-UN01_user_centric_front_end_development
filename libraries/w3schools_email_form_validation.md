# W3Schools form validation

From the [JavaScript Forms](https://www.w3schools.com/js/js_validation.asp) page by [W3Schools](https://www.w3schools.com).

```js
function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
```

