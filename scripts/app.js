import { numberhere } from "./function.js" 

let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let btn4 = document.getElementById('btn4')
let btn5 = document.getElementById('btn5')

let idbtn = document.getElementById('idbtn')
let namebtn = document.getElementById('namebtn')
let emailbtn = document.getElementById('emailbtn')
let heightbtn = document.getElementById('heightbtn')
let agebtn = document.getElementById('agebtn')

let infodiv = document.getElementById('infodiv')

let leftar = document.getElementById('leftar')
let rightar = document.getElementById('rightar')
let pgnum = document.getElementById('pgnum')

let data
let updatedata
let page = 1
let totalPages
let displayedData
let currentResultsToShow = 10;

const getpeople = async () => {
    const promise = await fetch('./data/data.json')
    data = await promise.json()
    console.log(data)
    updatedata = data.People
    // fillstuff (updatedata)

    displayResults()
}

function displayResults() {
    infodiv.innerHTML = ''
    
    totalPages = Math.ceil(updatedata.length / currentResultsToShow)
    let startIndex = (page - 1) * currentResultsToShow
    let endIndex = startIndex + currentResultsToShow
    displayedData = updatedata.slice(startIndex, endIndex)

    displayedData.map(person => {
        let idp = document.createElement('p')
        idp.innerText = person.Id
        idp.classList.add('col')

        let namep = document.createElement('p')
        namep.innerText = person.FirstName + ' ' + person.LastName
        namep.classList.add('col')

        let emailp = document.createElement('p')
        emailp.innerText = person.Email
        emailp.classList.add('col')

        let heightp = document.createElement('p')
        heightp.innerText = person.Height
        heightp.classList.add('col')

        let agep = document.createElement('p')
        agep.innerText = person.Age
        agep.classList.add('col')

        let hr = document.createElement('hr')
        hr.style.opacity = '.6'

        let br = document.createElement('br')

        infodiv.appendChild(br)
        infodiv.appendChild(idp)
        infodiv.appendChild(namep)
        infodiv.appendChild(emailp)
        infodiv.appendChild(heightp)
        infodiv.appendChild(agep)
        infodiv.appendChild(hr)

    })
}
rightar.addEventListener("click", function () {
    if (page < totalPages) {
        page++
        pgnum.innerText = page
        displayResults()
    }
})

leftar.addEventListener("click", function () {
    if (page > 1) {
        page--
        pgnum.innerText = page
        displayResults()
    }
})

btn1.addEventListener('click', () => {
    currentResultsToShow = 10;
    displayResults()
})

btn2.addEventListener('click', () => {
    currentResultsToShow = 20;
    displayResults()
})

btn3.addEventListener('click', () => {
    currentResultsToShow = 30;
    displayResults()
})

btn4.addEventListener('click', () => {
    currentResultsToShow = 40;
    displayResults()
})

btn5.addEventListener('click', () => {
    currentResultsToShow = 50;
    displayResults()
})

idbtn.addEventListener('click', () => {
    updatedata.sort((a, b) => {
        return a.Id - b.Id
    })
    displayResults()
})

namebtn.addEventListener('click', () => {
    updatedata.sort((a, b) => {
        return a.FirstName.localeCompare(b.FirstName)
    })

    displayResults()
})

emailbtn.addEventListener('click', () => {
    updatedata.sort((a, b) => {
        return a.LastName.localeCompare(b.LastName)
    })

    displayResults()
})

heightbtn.addEventListener('click', () => {
    updatedata.sort((a, b) => {
        //note for myself so i dont forget
        //this sets values and floats them to integers then spilts the words from numbers to compare the heightb from heighta and then displays it
        const heightA = parseFloat(a.Height.split(' ')[0])
        const heightB = parseFloat(b.Height.split(' ')[0])

        return heightB - heightA
    })

    displayResults()
})

agebtn.addEventListener('click', () => {
    updatedata.sort((a, b) => {
        return a.Age - b.Age
    })

    displayResults()
})

getpeople()

numberhere()

//Old function to fill data just to check if my createlelments works

// function fillstuff (updatedata) {

//     let idp = document.createElement('p')
//     idp.innerText = updatedata[0].Id
//     idp.classList.add('col')

//     let namep = document.createElement('p')
//     namep.innerText = updatedata[0].FirstName
//     namep.classList.add('col')

//     let emailp = document.createElement('p')
//     emailp.innerText = updatedata[0].Email
//     emailp.classList.add('col')

//     let heightp = document.createElement('p')
//     heightp.innerText = updatedata[0].Height
//     heightp.classList.add('col')

//     let agep = document.createElement('p')
//     agep.innerText = updatedata[0].Age
//     agep.classList.add('col')

//     let hr = document.createElement('hr')
//     hr.style.opacity = '.6'

//     let br = document.createElement('br')

//     infodiv.appendChild(br)
//     infodiv.appendChild(idp)
//     infodiv.appendChild(namep)
//     infodiv.appendChild(emailp)
//     infodiv.appendChild(heightp)
//     infodiv.appendChild(agep)
//     infodiv.appendChild(hr)

// }

