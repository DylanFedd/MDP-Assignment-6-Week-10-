const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json())

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
)

app.get('/getUser', (req, res) => {
    res.status(200).send({
        username: 'fluffyDog',
        password: 'dogs1',
        email: 'dog@yahoo.com',
        courses: {
            course: {
                classId: "CMSC2250",
                courseName: "BIO",
                startdate: "8/12/2021",
                endDate: "12/15/2021"
            },
            course1: {
                classId: "CMSC2223",
                courseName: "Math",
                startdate: "8/23/2021",
                endDate: "13/29/2021"
            },
            course2: {
                classId: "CMSC2246",
                courseName: "English",
                startdate: "8/30/2021",
                endDate: "12/12/2021"
            }
        }
    })
})

app.post('/addUser', (req, res) => {
    const { user } = req.body;

    if (!user) {
        res.status(418).send({message: 'this is not a good user'})
    }

    res.send({
        tshirt: `Added user ${user.username} successfully`,
    })
})