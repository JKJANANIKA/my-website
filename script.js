const words=[
"Shopify Websites",
"WordPress Websites",
"Custom-Coded Websites"
];

let i=0,j=0,isDeleting=false;
const el=document.querySelector(".typing");

function animate(){
const word=words[i];
el.textContent=isDeleting
? word.substring(0,--j)
: word.substring(0,++j);

if(!isDeleting && j===word.length){
setTimeout(()=>isDeleting=true,1200);
}
if(isDeleting && j===0){
isDeleting=false;
i=(i+1)%words.length;
}
setTimeout(animate,isDeleting?60:100);
}
animate();
