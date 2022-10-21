const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const addComplimentBtn = document.getElementById("addCompliment")
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

const addCompliment = body => axios.post('http://localhost:4000/api/compliment/', body).then(res => {
    
    alert('compliment submitted')
})

function submitHandler(e) {
    e.preventDefault()
    let compliment = document.querySelector('compliment')

    let bodyObj = {
        compliment: compliment.value
    }
    addCompliment(bodyObj)
    compliment.value = ''
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
addComplimentBtn.addEventListener('submit', addCompliment)
choreBtn.addEventListener('click', getChore)