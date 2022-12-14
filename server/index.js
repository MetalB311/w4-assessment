const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

//calling the controller file for reference 
const { getCompliment } = require('./controller')
const { getFortune } = require('./controller')
const { getChore } = require('./controller')
const { addChore} = require('./controller')
const { getActivity } = require('./controller')
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 
//All of these require the same so they can be written like this
// const {getCompliment, getFortune, getChore, addChore, getActivity} = require('./controller')
//******************************************************** */

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/chore", getChore);
app.post("/api/chore", addChore);
app.get("/api/activity", getActivity);

app.listen(4000, () => console.log("Server running on 4000"));
