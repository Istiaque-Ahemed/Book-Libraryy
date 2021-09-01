const getData = () => {
    const inputField = document.getElementById('input-field')
    const inputValue = inputField.value;


    fetch(`http://openlibrary.org/search.json?q=${inputValue}`)
        .then(res => res.json())
        .then(data => displayData(data.docs))
}
getData()

const displayData = (data) => {
    const containerDiv = document.getElementById('search-result');
    // const allData = data.docs;
    data.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('card-sytyle')
        div.classList.add('col');
        div.innerHTML = `
        <div  class="card h-100">
        <img src="" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text"> ${item.author_name}</p>
        </div>
    </div>
</div>
    `
        containerDiv.appendChild(div)

    });


}
// https://covers.openlibrary.org/b/id/{cover_i}-M.jpg

