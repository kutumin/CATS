const button1 = document.querySelector('.btn1');

const image = document.querySelector('.img');

const url = 'https://aws.random.cat/meow';


async function fetchHandler(){
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.file);
        image.src = data.file;

    } catch (error) {
        console.log(error)
    }
}

button1.addEventListener("click", ()=>{
    let isloaded = image.complete;
    if (isloaded){
        fetchHandler();
    }
})
