var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];

// Select and cache the <main> element in a variable named mainEl.
let mainEl = document.getElementsByTagName('main')

// console.log(mainEl[0])
// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
mainEl[0].style.backgroundColor = 'var(--main-bg)'

// Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.

// Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
mainEl[0].innerHTML =`<h1>DOM Manipulation </h1>`

// Add a class of flex-ctr to mainEl.
// Hint: Use the Element.classList API.
mainEl[0].classList.add(`flex-ctr`);

//select and cache the <nav id="top-menu"> element in a ariable name top menuEl
let topMenuEl= document.getElementById
(`top-menu`)
// console.log(topMenuEl)

//Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = '100%'

//Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = `var(--top-menu-bg)`

//Add a class of flex-around to topMenuEl.
topMenuEl.classList.add(`flex-around`)

// Iterate over the entire menuLinks array and for each "link" object:

menuLinks.forEach((link) =>{
// console.log(link)

// Create an <a> element. .createElement
let newLink = document.createElement(`a`)
console.log (newLink)
// On the new element, add an href attribute with its value set to the 
//href property of the "link" object.
newLink.setAttribute(`href`, link.href)
// Set the new element's content to the value of the 
//text property of the "link" object.
newLink.textContent = link.text
// Append the new element to the topMenuEl element.
topMenuEl.appendChild(newLink)
})