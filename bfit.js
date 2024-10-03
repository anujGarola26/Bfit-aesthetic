function home() {
    document.querySelector('#homes').style.color='#fff';
    document.querySelector('#programs').style.color='#dd5702';
    document.querySelector('#calculators').style.color='#dd5702';
    document.querySelector('#abouts').style.color='#dd5702';
    document.querySelector('#contacts').style.color='#dd5702';
}

function program() {
    document.querySelector('#programs').style.color='#fff';
    document.querySelector('#homes').style.color='#dd5702';
    document.querySelector('#abouts').style.color='#dd5702';
    document.querySelector('#calculators').style.color='#dd5702';
    document.querySelector('#contacts').style.color='#dd5702';
}

function calculator() {
    document.querySelector('#calculators').style.color='#fff';
    document.querySelector('#homes').style.color='#dd5702';
    document.querySelector('#programs').style.color='#dd5702';
    document.querySelector('#abouts').style.color='#dd5702';
    document.querySelector('#contacts').style.color='#dd5702';
}

function about() {
    document.querySelector('#abouts').style.color='#fff';
    document.querySelector('#homes').style.color='#dd5702';
    document.querySelector('#calculators').style.color='#dd5702';
    document.querySelector('#programs').style.color='#dd5702';
    document.querySelector('#contacts').style.color='#dd5702';
}

function contact() {
    document.querySelector('#contacts').style.color='#fff';
    document.querySelector('#homes').style.color='#dd5702';
    document.querySelector('#programs').style.color='#dd5702';
    document.querySelector('#calculators').style.color='#dd5702';
    document.querySelector('#abouts').style.color='#dd5702';
}



// CALLORIE CALCULATOR

const Calories = document.querySelector('.bmr-calculator .result .result-message .calorie');
const calculateButton = document.querySelector('.bmr-calculator .result .calculate-btn');
const age = document.querySelector('.bmr-calculator form #age');
const height = document.querySelector('.bmr-calculator form #height');
const weight = document.querySelector('.bmr-calculator form #weight');
const errorMessage = document.querySelector('.bmr-calculator .result .error-message');


const calculateBmr = (weight, height, age, gender) => {
    if(gender == 'male') {
        return 10 * weight + 6.25 * height - 5 * age + 5;
    }

    return 10 * weight + 6.25 * height - 5 * age - 161;

};

calculateButton.addEventListener("click", () => {

    if(age.classList.contains("invalid") || weight.classList.contains("invalid")  || height.classList.contains("invalid")) {
        errorMessage.classList.add("active");
        return;
    }

    errorMessage.classList.remove("active");

   let genderValue = document.querySelector(".bmr-calculator form input[name = 'gender']:checked").value;

   let BMR = calculateBmr(weight.value, height.value, age.value, genderValue);

   Calories.innerHTML = BMR.toLocaleString("en-US");
});


age.addEventListener("input", (Error) => {
    let ageValue = Error.target.value;

    if(!ageValue || isNaN(ageValue) || ageValue < 10 || ageValue > 100) {
        age.classList.add("invalid");
    }
    else {
        age.classList.remove("invalid");
    }
});

height.addEventListener("input", (Error) => {
    let heightValue = Error.target.value;

    if(!heightValue || isNaN(heightValue) || heightValue < 0) {
        height.classList.add("invalid");
    }
    else {
        height.classList.remove("invalid");
    }
});

weight.addEventListener("input", (Error) => {
    let weightValue = Error.target.value;

    if(!weightValue || isNaN(weightValue) || weightValue < 0) {
        weight.classList.add("invalid");
    }
    else {
        weight.classList.remove("invalid");
    }
});


// OTHER JS

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector("#navbar");

menuIcon.onclick =() => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

// SCROLL SECTIONS 

let section = document.querySelector('div');
let navlink = document.querySelector('nav #navbar a');

window.onscroll = () => {
    section.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && offset + height) {
            navlink.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('nav #navbar a[href*=' + id +']').classList.add('active');
            });
        }
    });

let header =document.querySelector('nav');
header.classList.toggle('sticky', window.scrollY > 100);


menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');

};
