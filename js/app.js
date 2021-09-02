//********OnClick Function 
const getData = () => {

    const inputField = document.getElementById('input-field')
    const inputValue = inputField.value;
    inputField.value = "";
    // ******convate to data json fille
    fetch(`https://openlibrary.org/search.json?q=${inputValue}`)
        .then(res => res.json())
        .then(data => displayData(data.docs))

}

//********* display  Data function 

const displayData = (data) => {

    const containerDiv = document.getElementById('search-result');

    let inputFields = document.getElementById('input-field')
    let inputValues = inputFields.value;
    let errorDiv = document.getElementById('error')






    let count = Object.keys(data).length

    //******* Error handle 
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

    // Show Data in ui 

    data.forEach(item => {
        this.count++;
        const div = document.createElement('div');
        div.classList.add('card-sytyle')
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
      <img src="https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg"
      class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-text"><b id="text-success">Book Name: </b>${item.title}</h5>
        <p class="card-text"><b id="text-success">Book Author: </b> ${item.author_name}</p>
        <p class="card-text"><b id="text-success">Book 1st publish year: </b> ${item.first_publish_year}</p>
        
      </div>
        `

        containerDiv.appendChild(div)



    });

}

