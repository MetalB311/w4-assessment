module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortune = ['A faithful friend is a strong defense', 'A lifetime friend shall soon be made', 'A pleasant surprise is waiting for you', 'All the effort you are making will ultimately pay off', 'All will go well with your new project', 'Do not make extra work for yourself'];
        let randomIndex = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndex];
      
        res.status(200).send(randomFortune)
    },
    
    getChore: (req, res) => {
        const chore = ['dishes', 'laundry', 'mopping', 'trash', 'sweeping'];
        let randomIndex = Math.floor(Math.random() * chore.length);
        let randomChore = chore[randomIndex];
        
        res.status(200).send(randomChore)
    },
    
    
    
    addCompliment: (req, res) => {
        let newCompliment = {
            type:'text',
            id:"compliment",
        };
        
        compliments.push(newCompliment)
        res.status(200)
    }



}  