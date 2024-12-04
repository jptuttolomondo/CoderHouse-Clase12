
fetch('http://localhost:8080/api/users')
.then(result=>result.json())
.then(json=>{
console.log(json)
})

