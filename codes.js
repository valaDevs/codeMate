let selfCoder = document.getElementById('fName')
let selfLang = document.getElementById('proLang')
let searchBtn = document.getElementById('btn-find')
let youAre = document.getElementById('you')
let coderImage = document.getElementById('code-avatar')
let coderName = document.getElementById('code-name')
let coderCountry = document.getElementById('code-country')
let coderMail = document.getElementById('code-mail')

const eventHandlers = () => {
    getUserData()
    findCoders()
}

const getUserData = () => {
    if(selfCoder.vlaue !== "" && selfLang.value !== ""){
       let li = document.createElement('li')
       li.appendChild(document.createTextNode(`شما ${selfCoder.value}  هستید  ${selfLang.value} کد میزنید`))
       youAre.appendChild(li)
       selfCoder.value= ""
        selfLang.value= ""
    }
    else{
        alert('مقادیر را مثل آدم بنویس')
    }
}

const findCoders = () => {
    fetch('https://randomuser.me/api/?gender=female')
.then(response => response.json())
.then(data => {
    let userData = data.results[0];
    let imgSrc = `<img src="${userData.picture.medium}">`;
    let cardImage = document.querySelector('.img')
    cardImage.innerHTML = imgSrc

})

    let fakeName = faker.name.findName();
    coderName.innerHTML = fakeName

    const fakeCountry = faker.address.country()
    coderCountry.innerHTML = fakeCountry

    const fakeMail = faker.name.jobTitle()
    coderMail.innerHTML = fakeMail
}



