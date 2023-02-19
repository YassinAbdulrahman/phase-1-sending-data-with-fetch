// Add your code here
let forminput = document.querySelector("form")

forminput.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = document.querySelector("#name")
    let email = document.querySelector("#email")
    submitData(name, email)
})

function submitData(name, email) {
    console.log(name.value)
    console.log(email.value)
    fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(
            {
                name:name.value,
                email:email.value,
            }
        ),
    })
    .then(res => {console.log(res); return res.json();})
    .then(data => console.log(data))
}

