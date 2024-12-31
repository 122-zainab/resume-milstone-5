"use strict";
// personal details
// Object.defineProperty(exports, "__esModule", { value: true });
let myName = document.getElementById('name');
let img = document.getElementById('img');
let phone = document.getElementById('mobile');
let email = document.getElementById('email');
let address = document.getElementById('address');
// Education
let degree1 = document.getElementById('degree1');
let uni = document.getElementById('university');
let pass1 = document.getElementById('pass1');
// intermediate
let intermediate = document.getElementById('degree2');
let college = document.getElementById('colg');
let pass2 = document.getElementById('pass2');
// matriculation
let matric = document.getElementById('degree3');
let school = document.getElementById('school');
// Skills
let skill1 = document.getElementById('skill1');
let skill2 = document.getElementById('skill2');
let skill3 = document.getElementById('skill3');
let skill4 = document.getElementById('skill4');
// language
let language = document.getElementById('language');
let language2 = document.getElementById('language2');
// objective
let obj = document.getElementById('obj');
let objt = document.getElementById('objt');
// Experience
let company = document.getElementById('company');
let designation = document.getElementById('designation');
let startMonth = document.getElementById('starting_month');
let startYear = document.getElementById('starting_year');
// resposibilities
let responsibility1 = document.getElementById('responsibility1');
let responsibility2 = document.getElementById('responsibility2');
let responsibility3 = document.getElementById('responsibility3');
let responsibility4 = document.getElementById('responsibility4');
// Experience02
let company2 = document.getElementById('company2');
let designation2 = document.getElementById('designation2');
let startMonth2 = document.getElementById('starting_month2');
let startYear2 = document.getElementById('starting_year2');
let endMonth = document.getElementById('ending_month');
let endYear = document.getElementById('ending_year');
//responsibilities
let responsibility5 = document.getElementById('responsibility5');
let responsibility6 = document.getElementById('responsibility6');
let responsibility7 = document.getElementById('responsibility7');
// reference
let reference = document.getElementById('ref');
// button
let submitButton = document.getElementById('submitButton');
// 
let form = document.getElementById('form');
// console.log(form)
form?.addEventListener('submit', (btn) => {
    btn.preventDefault();
    localStorage.setItem('name', myName.value);
    // console.log(localStorage.getItem('name'));
    localStorage.setItem('mobile', phone.value);
    // console.log(localStorage.getItem('mobile'))
    localStorage.setItem('email', email.value);
    localStorage.setItem('address', address.value);
    localStorage.setItem('degree1', degree1.value);
    localStorage.setItem('university', uni.value);
    localStorage.setItem('pass1', pass1.value);
    localStorage.setItem('degree2', intermediate.value);
    localStorage.setItem('colg', college.value);
    localStorage.setItem('pass2', pass2.value);
    localStorage.setItem('degree3', matric.value);
    localStorage.setItem('school', school.value);
    localStorage.setItem('skill1', skill1.value);
    localStorage.setItem('skill2', skill2.value);
    localStorage.setItem('skill3', skill3.value);
    localStorage.setItem('skill4', skill4.value);
    localStorage.setItem('language', language.value);
    localStorage.setItem('language2', language2.value);
    localStorage.setItem('obj', obj.value);
    localStorage.setItem('objt', objt.value);
    localStorage.setItem('company', company.value);
    localStorage.setItem('designation', designation.value);
    localStorage.setItem('starting_month', startMonth.value);
    localStorage.setItem('start_year', startYear.value);
    localStorage.setItem('responsibility1', responsibility1.value);
    localStorage.setItem('responsibility2', responsibility2.value);
    localStorage.setItem('responsibility3', responsibility3.value);
    localStorage.setItem('responsibility4', responsibility4.value);
    localStorage.setItem('company2', company2.value);
    localStorage.setItem('designation2', designation2.value);
    localStorage.setItem('starting_month2', startMonth2.value);
    localStorage.setItem('start_year2', startYear2.value);
    localStorage.setItem('ending_month', endMonth.value);
    localStorage.setItem('ending_year', endYear.value);
    localStorage.setItem('responsibility5', responsibility5.value);
    localStorage.setItem('responsibility6', responsibility6.value);
    localStorage.setItem('responsibility7', responsibility7.value);
    localStorage.setItem('ref', reference.value);
    // console.log(img);
    if (img.files && img.files[0]) {
        let read = new FileReader();
        read.addEventListener("load", () => {
            let textPicture = read.result;
            localStorage.setItem("picture", textPicture);
        });
        read.readAsDataURL(img.files[0]);
    }
    window.location.href = "./resume/index1.html";
});
