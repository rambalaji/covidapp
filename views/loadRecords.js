const setEditModal = (isbn) => {
    // We will implement this later
}



const loadRecords = (country) => {
    const xhttp = new XMLHttpRequest();
    var country = JSON.stringify(country);
  
    console.log ("Country in js"+country);
    xhttp.open("GET", "https://disease.sh/v3/covid-19/"+country, false);
    xhttp.send();

    const records = JSON.parse(xhttp.responseText);
     console.log(records);
    for (let book of records) {
        const x = `
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${book.state}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${book.active}</h6>

                        <div>Author: ${book.recovered}</div>
                        <div>Publisher: ${book.death}</div>
                        <div>Number Of Pages: ${book.cases}</div>

                        <hr>

                        <button type="button" class="btn btn-danger">Delete</button>
                        <button types="button" class="btn btn-primary" data-toggle="modal"
                            data-target="#editBookModal" onClick="setEditModal(${book.state})">
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        `

        document.getElementById('covidrecords').innerHTML = document.getElementById('covidrecords').innerHTML + x;
    }
}

loadRecords();