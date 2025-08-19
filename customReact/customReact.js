
function customRender(element,container){
    // const domElement=document.createElement(element.type)
    // domElement.innerHTML=element.children
    // domElement.setAttribute("href",element.props.href)
    //     domElement.setAttribute("target",element.props.target)

    // console.log(domElement);
    // container.appendChild(domElement)
    const domElement=document.createElement(element.type);
    domElement.innerHTML=element.children
    console.log(domElement);
    for (const prop in element.props) {
        console.log(prop,element.props[prop]);
        
        domElement.setAttribute(prop,element.props[prop])
      
    }

    
    container.appendChild(domElement)
}
const reactElement={
    type:'a',
    props:{
        href:"https://www.google.com",
        target:'_blank'
    },
    children:"click me to visit google"
}


const mainContainer=document.querySelector("#root")
customRender(reactElement,mainContainer)