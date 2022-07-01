const prompt = require('prompt-sync')()
const now = new Date()

users = [
    {
      name: 'Цагаанбарс',
      age: 16,
      score: 80,
      password: 'afgag',
    },
    {
      name: 'Номинзул',
      age: 17,
      score: 95,
      password: 'afgag',
    },
    {
      name: 'Чингүн',
      age: 18,
      score: 89,
      password: 'afgag',
    },
    {
      name: 'Ариунаа',
      age: 19,
      score: 76,
      password: 'afgag',
    },
    {
      name: 'Эмүжин',
      age: 16,
      score: 83,
      password: 'afgag',
    },
    {
      name: 'Ариунболор',
      age: 18,
      score: 89,
      password: 'afgag',
    },
    {
      name: 'Дөлгөөн',
      age: 20,
      score: 123,
      password: 'afgag',
    },
    {
      name: 'Энх-Учрал',
      age: 25,
      score: 80,
      password: 'afgag',
    },
    {
      name: 'Бямбадорж',
      age: 19,
      score: 65,
      password: 'afgag',
    },
    {
      name: 'Энхсайхан',
      age: 22,
      score: 33,
      password: 'afgag',
    },
    {
      name: 'Тулга',
      age: 12,
      score: 55,
      password: 'afgag',
    },
    {
      name: 'Хэрлэн',
      age: 15,
      score: 40,
      password: 'afgag',
    },
    {
      name: 'Анурад',
      age: 14,
      score: 90,
      password: 'afgag'
    },
    {
      name: 'Саруулбуян',
      age: 17,
      score: 82,
      password: 'afgag'
    },
    {
      name: 'Тэргэл',
      age: 17,
      score: 88,
      password: 'afgag'
    },
    {
      name: 'Төрмөнх',
      age: 16,
      score: 85,
      password: 'afgag'
    },
    {
      name: 'Сандаг',
      age: 28,
      score: 60,
      password: 'afgag'
    },
   ];

//hamgiin undur onootot huniig hevlej haruuldag
function highScore(userarray) {
    highest = 0
    highestIndex = 0
    for (let i=0; i<userarray.length; i++) {
        if(userarray[i].score>highest) {
            highest = userarray[i].score
            highestIndex = i
        }
    }
    console.log("Angiin hamgiin ih onootoi hun bol - "+userarray[highestIndex].name +", "+userarray[highestIndex].score+"onoo")
}

//Nereer erembeldeg, suuliin hun Enkhsaihan uu gj shalgana
function sortNames(userarray) { 
    userarray.sort(function(a, b) {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
    });

    a = userarray.length-1
    if(userarray[a].name == "Энхсайхан") {
        console.log("Enkhsaihan bno")
    } else {
        console.log("Enkhsaihan bish bno")
    }
}


//Angiin dundaj onoog gargana
function findAverage(userarray) {
    let sum = 0
    for(i=0;i<userarray.length; i++) {
        sum = sum + userarray[i].score
    }
    sum = Math.floor(sum / (userarray.length+1))

    aboveAvrg = 0
    for(i=0; i<userarray.length; i++) {
        if(userarray[i].score>= sum) {
            aboveAvrg = aboveAvrg + 1
        }
    }

    console.log("Angiin dundaj - "+sum)
    console.log("Dundjaas ih avsan hun - "+aboveAvrg)
    return sum
}

function findAverageOnly(userarray) {
    let sum = 0
    for(i=0;i<userarray.length; i++) {
        sum = sum + userarray[i].score
    }
    sum = Math.floor(sum / (userarray.length+1))
    return sum
}

//sign in hiine, tuhain hereglegchiin nasiig gargaj ugnu
function signin() {
    console.log(" - Sign In - ")

    uname = prompt("Username: ")
    pass = prompt("Password: ")

    founduser = ''
    for(i=0; i<users.length; i++) {
        if(users[i].name==uname) {
            founduser = users[i]
        }
    }

    if(founduser == '') {
        console.log("User not found")
    }

    if(founduser != '') {
        console.log(founduser.name + " - " + founduser.age+" nastai")
        return founduser
    }

}

//sign up, ner ahiglagdaj bga esehiig shalgana, tursun onoos ni shuud nasiig gargana
function signup() {
    console.log(" - Sign Up - ")

    let uname1 = prompt("Username: ")
    let pass1 = prompt("Password: ")
    let byear = prompt("Tursun on: ")
    let bmonth = prompt("Sar: ")
    let bday = prompt("Udur: ")


    //ner shalgana
    let nameused = false
    for(i=0;i<users.length; i++) {
        if(users[i].name == uname1) {
            nameused = true
            console.log("This username already exists")
        }
    }

    //nasiig gargana
    let agebyYear = now.getFullYear()-byear
    console.log(agebyYear)
    if(((now.getMonth()+1)-bmonth)>=0) {
        if((now.getMonth()+1)==bmonth) {
            if((now.getDate()-bday)<=0) {
                agebyYear = agebyYear - 1
            }
        }
    }

    if(nameused==false) {
        users.push({
            name: uname1,
            age: agebyYear,
            score: findAverageOnly(users),
            password: pass1
        }) 
        console.log("Sign up successfull")
    }

}


highScore(users)
sortNames(users)
findAverage(users)
signup()
console.log(users[users.length-1])
signin()
