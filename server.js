const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
 res.send('Hello World!')
})


app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})

const facts = {
"0": "Dogs have three eyelids, including one that helps keep their eyes moist and protected.",
"1": "The Norwegian Lundehund is the only dog breed with six toes on each foot.",
"2": "Dogs can detect certain types of cancer, such as prostate cancer, with up to 98% accuracy.",
"3": "The Basenji is the only breed of dog that can't bark, but they can still make a variety of other vocalizations.",
"4": "The Labrador Retriever is the most popular breed of dog in the United States, Canada, and the United Kingdom.",
"5": "Dogs can understand over 100 words and gestures, and some can even count up to five.",
"6": "The smallest dog breed in the world is the Chihuahua, which can weigh as little as two pounds.",
"7": "Dogs can get jealous and exhibit behaviors similar to human jealousy, such as attention-seeking and aggression.",
"8": "Dogs' noses are up to 100,000 times more sensitive than humans, which allows them to detect odors we can't even perceive.",
"9": "The tallest dog breed in the world is the Great Dane, which can stand over three feet tall at the shoulder."
}


app.get('/', (req, res) => {
    res.send(facts)
})


app.get('/random', (req, res) => {
    const randomNum = Math.floor(Math.random() * 10);
    res.send(facts[randomNum])
})


app.get('/fact', (req, res) => {
    const parameters = req.query
    const i = parameters.index
    res.send(facts[i])
})
