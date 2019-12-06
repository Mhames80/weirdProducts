// JavaScript Document

//Step One - create variables that store a reference to header and section elements
let header = document.querySelector('header');
let section = document.querySelector('section');

//Step Two - create a variable to store request URL
let requestURL = "https://mhames80.github.io/weirdProducts/js/weird.json";

// Step Three - create a new XHR object
let request = new XMLHttpRequest();

//Step Four - open a new request, using the open method
request.open('GET', requestURL);

//Step Five - set up the request to accept JSON

request.responseType = 'json';

//Step Six - send the request using the send method

request.send();


// Step Seven - adding an event handler that listens for onload event of the JSON file/object
request.onload = function() {
  let weirdStuffInc = request.response;
  console.log(weirdStuffInc);
  populateHeader(weirdStuffInc);
  weirdProducts(weirdStuffInc);
}

// Step Eight - set up populateHeader function to fill in the header function
function populateHeader(jsonObj) {

  // grab the company name from JSON object and then create a new element, adding text and appending to the header

  let headerH1 = document.createElement('h1');
  headerH1.textContent = jsonObj['companyName'];
  header.appendChild(headerH1);

  //grab the company info and established date and add a new paragraph to your HTML that displays this info

  let headerPara = document.createElement('p');
  headerPara.textContent = 'Head Office: ' + jsonObj['headOffice'] + ' , Established:  ' + jsonObj['established'];
  header.appendChild(headerPara);
}

// define the topflavours function to show the flavours

function weirdProducts(jsonObj) {

  //bind top flavours object to a variables
  let weirdProducts = jsonObj['weirdProducts'];

  for (let i = 0; i < weirdProducts.length; i++) {
    //create a few different elements
    let article = document.createElement('article');
    let h2 = document.createElement('h2');
    let img = document.createElement('img');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');


    //grab the data associated with image to set the src and alt attribute
    img.setAttribute('src', 'https://mhames80.github.io/weirdProducts/images/' + weirdProducts[i].image);
    img.setAttribute('alt', weirdProducts[i].image );

    h2.textContent =  weirdProducts[i].name;
    p1.textContent = 'Price: ' + weirdProducts[i].price;
    p2.textContent = 'Description: ' + weirdProducts[i].description;


    // Append each element to article, then append article to section

    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(p1);
    article.appendChild(p2);
    section.appendChild(article);

  }
}
