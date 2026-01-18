const words=["Shopify Websites","WordPress Websites","Custom-Coded Websites"];
let i=0,j=0,del=false;
const el=document.querySelector(".typing");

if(el){
(function loop(){
el.textContent=del
? words[i].substring(0,--j)
: words[i].substring(0,++j);

if(!del && j===words[i].length){setTimeout(()=>del=true,1200)}
if(del && j===0){del=false;i=(i+1)%words.length}
setTimeout(loop,del?60:100);
})();
}
