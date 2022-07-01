var countWord = function() {
    let a = text.split("").length
    return a
}

var countChar = function() {
    let a = text.length
    return a
} 

var findWord = function(word) {
    let c = (text.match (word) || []).length
    return c
}

function findAverage() {
    let average = 0
    let sum = 0
    for (let i=0; i<nums.length; i++) {
        sum = sum +nums[i]
    }
    average = sum/(nums.length+1)
    return average
}

function findMin() {
    let min = nums[0]
    for (let i=0; i<nums.length; i++) {
        if(nums[i]<min) {
            min = nums[i]
        }
    }
}

function findMax() {
    let max = nums[0]
    for (let i =0; i <nums.length; i++) {
        if(nums[i]>max) {
            max = nums[i]
        }
    }
}




app.get('/', (req, res) => {
    res.send("/count/1-2, /find, /avrg, /max, /min")
})

app.get('/count/1', (req, res) => {
    res.json(text+"Total words - "+countWord())
})

app.get('/count/2', (req, res) => {
    res.json(text+"Total characters - "+countChar())
})

app.get('/find', (req, res) => {
    res.json(findWord("Lorem"))
})

app.get('/avrg', (req, res) => {
    res.json(nums+"  -  Average = "+ findAverage())
})

app.get('/max', (req, res) => {
    res.json(nums + "  - Max= "+ findMax())
})

app.get('/min', (req, res) => {
    res.json(nums + "  - Min= "+ findMin())
})
