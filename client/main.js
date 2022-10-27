const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const addChoreBtn = document.getElementById("addChore")
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

const addChore = () => axios.post('http://localhost:4000/api/chore/', body).then(res => {
    e.preventDefault()
    alert('chore submitted')
    
})

function submitHandler(e) {
    e.preventDefault()
    let chore = document.querySelector('#chore')

    let bodyObj = {
        chore: chore.value
    }
    addChore(bodyObj)
    chore.value = ''
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
addChoreBtn.addEventListener('submit', addChore)
choreBtn.addEventListener('click', getChore)