
const navItem = document.querySelectorAll(".item")
console.log("Number of categories:", navItem.length)

 
Array.prototype.forEach.call(navItem, (element) => {
    const title = element.querySelector("h2").innerHTML;
    const itemLength = element.querySelectorAll("li").length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${itemLength}`);
});


