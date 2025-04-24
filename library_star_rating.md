# Star rating library by [Renaud Tertrais](https://codepen.io/renaudtertrais)

[Source](https://codepen.io/renaudtertrais/pen/AwjvLM) of original code, copy-pasted as follows.

# html

```html
<link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet">

<h1>Flat pure CSS3 rating system</h1>
 
<div id="wrapper">
<input type="radio" id="star1" name="star" />
<label for="star1"></label>
<input type="radio" id="star2" name="star" />
<label for="star2"></label>
<input type="radio" id="star3" name="star" checked="checked"/>
<label for="star3"></label>
<input type="radio" id="star4" name="star" />
<label for="star4"></label>
<input type="radio" id="star5" name="star" />
<label for="star5"></label>
</div>
```

# css

```css
@import "compass/css3";

body{
  text-align: center;
  background-color: #34495e;
  font-family :"Helvetica Neue", Helvetica, Arial, sans-serif;
}

h1{
  color:#FFF;
  font-weight:500;
  padding:30px;
  @include text-shadow(0 3px 3px darken(#34495e,5%));
}

input{
  display:none;
}

label{
  cursor:pointer;
  font-size: 40px;
  color:yellow;
  display:block;
  width: 50px;
  height:50px;
  line-height:60px;
  text-align: center;
  float:left;
  @include transition(all .2s);
  @include text-shadow(0 3px 3px darken(#34495e,5%));
  
  &:hover{
    font-size:50px;
    color:#FFF;
    @include text-shadow(0 0 5px lighten(#34495e,50%));
  }
  
  &:before{
    display: inline;
    width: auto;
    height: auto;
    line-height: normal;
    vertical-align: baseline;
    margin-top: 0;
    font-family: FontAwesome;
    font-weight: normal;
    font-style: normal;
    text-decoration: inherit;
    -webkit-font-smoothing: antialiased;
    content: "\f005";
  }
}
input:checked + label ~label{
  &:before{
    content: "\f006";
  }
}

#wrapper{
  display: inline-block;
  &:hover{
    label{
      &:before{
        content: "\f005"; 
      }
      &:hover{
        &~label:before{
           content: "\f006";
        }
      }
    }
  }
}
```

