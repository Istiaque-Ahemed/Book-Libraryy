
const getData = () => {

    const inputField = document.getElementById('input-field')
    const inputValue = inputField.value;
    inputField.value ="";

    fetch(`http://openlibrary.org/search.json?q=${inputValue}`)
        .then(res => res.json())
        .then(data => displayData(data.docs))

}



const displayData = (data) => {



    const containerDiv = document.getElementById('search-result');

    let inputFields = document.getElementById('input-field')
    let inputValues = inputFields.value;
    let errorDiv = document.getElementById('error')
    





    let count = Object.keys(data).length
    
    if (inputValues === 'null') {
        errorDiv.innerText = "Search field cannot be empty"
    } 
     if (count > 0) {
        errorDiv.innerText = count + " Items found!"
    } else {
        errorDiv.innerText = "No item founds!"
    }
    
    



    // clear dom 
    containerDiv.innerHTML = '';
    data.forEach(item => {
        this.count++;
        const div = document.createElement('div');
        div.classList.add('card-sytyle')
        div.classList.add('col');
        div.innerHTML = `
        <div  class="card h-40">
        <img id="img" class="card-img-top" src="https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg" />
        <div class="card-body">
            <h5 class="card-text"><b id="text-success">Book Name: </b>${item.title.slice(0,30)}</h5>
            <p class="card-text"><b id="text-success">Book Author: </b> ${item.author_name.slice(0,30)}</p>
            <p class="card-text"><b id="text-success">Book 1st publish year: </b> ${item.first_publish_year}</p>
        </div>
    </div>
</div>
    `
        containerDiv.appendChild(div)

        

    });

}

