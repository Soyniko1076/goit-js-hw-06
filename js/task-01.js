
const navItem = document.querySelectorAll(".item")
console.log("Number of categories:", navItem.length)


 Array.prototype.forEach.call(navItem, (element) => {
    const title = element.firstElementChild.textContent;
    console.log(`Category: ${title}`);
    const itemLength = element.lastElementChild.children.length;
    console.log(`Elements: ${itemLength}`);
});

