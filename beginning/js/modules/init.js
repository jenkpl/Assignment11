// CREATE NEW INSTANCE OF XHR OBJECT
 const xhr = new XMLHttpRequest();
// SET THE RESPONSE TYPE TO JSON
xhr.responseType = 'json';
// OPEN THE CONNECTION TO OUR DATA
xhr.open('GET', '../beginning/data/employees.json');
// SEND THE REQUEST
xhr.send();

console.log(employees);



// Within the init.js file, use async / await to load the JSON data and return it back into the buildGrid() function
export async function fetchEmps() {
    try {
        const response = await fetch('../beginning/data/employees.json');
        const emps = await response.json();
        return emps;
    } catch (error) {
        console.log(error.message);
    }
}
fetchEmps()
    .then( (emps) => {
        for (let emp of emps) {
            document.body.innerHTML += 
            `<p>
            <strong>${employees.name}</strong><br>
            <a href="mailto:${employees.email}">${employees.email}</a><br>
            ${employees.ext}<br>
            ${employees.dept}
            </p>`;
        }
    })
    .catch( e => console.log(e) )