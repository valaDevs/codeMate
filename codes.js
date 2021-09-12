let selfCoder = document.getElementById('fName')
let selfLang = document.getElementById('proLang')
let searchBtn = document.getElementById('btn-find')
let youAre = document.getElementById('you')
let coderImage = document.getElementById('code-avatar')
let coderName = document.getElementById('code-name')
let coderCountry = document.getElementById('code-country')
let coderMail = document.getElementById('code-mail')
let premium = document.querySelector('.premium')

premium.addEventListener('click' , () => {
    alert('برای هم کد شدن با محسن مدحج نیاز به حساب ویژه دارید، باتوسعه دهنده هماهنگ کنید')
})
const eventHandlers = () => {
    getUserData() 
}
const getUserData = () => {
    if(selfCoder.vlaue !== "" && selfLang.value !== ""){
       let li = document.createElement('li')
       li.appendChild(document.createTextNode(`شما ${selfCoder.value}  هستید  ${selfLang.value} کد میزنید`))
       youAre.appendChild(li)
       selfCoder.value= ""
        selfLang.value= ""
     
        findCoders()
    }
    else{
        alert('مقادیر را مثل آدم بنویس')
        return false;
    }
}

const findCoders = () => {
    fetch('https://randomuser.me/api/')
.then(response => response.json())
.then(data => {
    let userData = data.results[0];
    let imgSrc = `<img src="${userData.picture.medium}">`;
    let cardImage = document.querySelector('.img')
    cardImage.innerHTML = imgSrc

})

    let fakeName = faker.name.findName();
    coderName.innerHTML = `نام : ${fakeName}`

    const fakeCountry = faker.address.country()
    coderCountry.innerHTML = `کشور : ${fakeCountry}`

    const fakeMail = faker.phone.phoneNumber()
    coderMail.innerHTML = `شماره : ${fakeMail}`
}



