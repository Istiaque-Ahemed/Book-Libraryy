const getData = () => {
    const inputField = document.getElementById('input-field')
    const inputValue = inputField.value;

    fetch(`http://openlibrary.org/search.json?q=${inputValue}`)
        .then(res => res.json())
        .then(data => displayData(data.docs))
    const errorDiv = document.getElementById('error')
    if (inputValue === '') {
        errorDiv.innerText = "Search field cannot be empty"
    }

}
getData()

const displayData = (data) => {



    const containerDiv = document.getElementById('search-result');


    // clear dom 
    containerDiv.innerHTML = '';

    data.forEach(item => {

        const div = document.createElement('div');
        div.classList.add('card-sytyle')
        div.classList.add('col');
        div.innerHTML = `
        <div  class="card h-40">
        <img id="img" class="card-img-top" src="https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg" />
        <div class="card-body">
            <h5 class="card-text"><b id="text-success">Book Name: </b>${item.title.slice(0,)}</h5>
            <p class="card-text"><b id="text-success">Book Author: </b> ${item.author_name[0]}</p>
            <p class="card-text"><b id="text-success">Book 1st publish year: </b> ${item.first_publish_year}</p>
        </div>
    </div>
</div>
    `
        containerDiv.appendChild(div)

    });


}

