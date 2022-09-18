function openAdventure() {
    hideLabel()
    var x = document.getElementById("phrases");
    x.style.display = "block";

    var y = document.getElementById('category-header');
    y.style.alignSelf = "start";
    y.style.paddingLeft = "50px";
    y.style.paddingTop = "170px";
    y.style.marginBottom = "-60px";
    y.innerText = "ADVENTURE";
}

function hideLabel() {
    const items = document.getElementsByClassName("category-item");
    for (let i = 0; i < items.length; i++)
        items[i].style.display="none";
}



async function getData(cat) {
    const response = await fetch(`http://127.0.0.1:8000/getValue/${cat}`, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit        
    }).then((response) => response.json()).then((data) => data);

    return response;

}

getData("love");

// async function getData((cat, data) = {
//     url:`http://127.0.0.1:8000/getValue/${cat}`,
//     method: 'GET', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, *same-origin, omit          
//   }.then((data) => {
//     console.log(data)
//   }))