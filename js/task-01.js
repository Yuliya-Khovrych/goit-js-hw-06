const categories = document.querySelectorAll(".item");

const numberCategories = categories.length;
console.log("Number of categories:", numberCategories);

//1 способ map+join
// const categoriesArray = [...categories]
//   .map(
//     (category) => `Category: ${category.children[0].textContent}
// Elements: ${category.children[1].children.length}`
//   )
//   .join("\n");
// console.log(categoriesArray);

//2 способ reduce
const categoriesArray = [...categories].reduce(
  (acc, category) =>
    acc +
    `Category: ${category.children[0].textContent}\nElements: ${category.children[1].children.length}\n\n`,
  ""
);
console.log(categoriesArray);
