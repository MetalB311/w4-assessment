const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const addChoreForm = document.getElementById("addChore")
const choreBtn = document.getElementById("chore")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const addChore = (body) => {
    axios.post('http://localhost:4000/api/chore/', body).then(res => {
        alert('chore submitted')
    
    })
}
function submitHandler(e) {
    e.preventDefault()
    let chore = document.querySelector('#newChore')

    let bodyObj = {
        chore: chore.value
    }
    console.log(chore)
    console.log(bodyObj)
    addChore(bodyObj)
    // chore.value = ('')
}

const getChore = () => {
    axios.get("http://localhost:4000/api/chore/") 
        .then(res => {
            const data = res.data;
            alert(data);
    });
}



complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
addChoreForm.addEventListener('submit', submitHandler)
choreBtn.addEventListener('click', getChore)