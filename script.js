


const quort = document.getElementsByTagName("blockquote")[0];
const author = document.getElementsByClassName("author")[0];

const newQuote = document.querySelector(".quote_btn");
const  tweetBtn = document.querySelector(".tweet_btn");


const apiLink =" https://quotes-api-self.vercel.app/quote";
// api call  --->anyc Await
let temp ;
const getData = async()=>{
    const response = await fetch(apiLink);
    const data = await response.json();
    console.log(data);
  
    temp=data.quote
  // Access the correct property names
  console.log(data.quote);
  console.log(data.author);
  
  // Update the HTML elements with the fetched data
  quort.innerText = data.quote;
  author.innerText = data.author;
};
//function call
getData();


newQuote.addEventListener("click",()=>{
     getData();
})

tweetBtn.addEventListener("click",()=>{
    window.open("https://twitter.com/intent/tweet?text="+temp ,"tweet post","width=700px,height=500px");
});