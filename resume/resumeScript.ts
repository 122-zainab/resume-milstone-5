



window.addEventListener('load', ()=>{
  let name =  localStorage.getItem('name');
  // console.log(name);

  let img = localStorage.getItem('picture');

  
  
 let mobile =  localStorage.getItem('mobile');

let email =  localStorage.getItem('email');

let address =  localStorage.getItem('address');

let degree1 =  localStorage.getItem('degree1');

 let university =   localStorage.getItem('university');

let pass1 =   localStorage.getItem('pass1');

let degree2 =  localStorage.getItem('degree2');

let colg =   localStorage.getItem('colg');

let pass2 =   localStorage.getItem('pass2');

let degree3 =  localStorage.getItem('degree3');

let school =    localStorage.getItem('school');

let skill1 =   localStorage.getItem('skill1');

let skill2 =   localStorage.getItem('skill2');

let skill3 =   localStorage.getItem('skill3');

let skill4 =   localStorage.getItem('skill4');

let language =    localStorage.getItem('language');

let language2 =    localStorage.getItem('language2');

 let obj =   localStorage.getItem('obj');

 let objt =   localStorage.getItem('objt');

 let company =   localStorage.getItem('company');


 let designation =   localStorage.getItem('designation');


 let starting_month =   localStorage.getItem('starting_month');

let  start_year = localStorage.getItem('start_year');

 let responsibility1 =  localStorage.getItem('responsibility1');

   let responsibility2 = localStorage.getItem('responsibility2');

 let responsibility3 = localStorage.getItem('responsibility3');

 let responsibility4 = localStorage.getItem('responsibility4');

  let company2 =  localStorage.getItem('company2');

 let designation2 =   localStorage.getItem('designation2');

 let starting_month2 =   localStorage.getItem('starting_month2');

 let start_year2 = localStorage.getItem('start_year2');

let ending_month = localStorage.getItem('ending_month');

let ending_year = localStorage.getItem('ending_year');

 let responsibility5 =  localStorage.getItem('responsibility5');

 let responsibility6 =  localStorage.getItem('responsibility6');

let responsibility7 = localStorage.getItem('responsibility7');

 let reference =  localStorage.getItem('ref');







 let resume_name: any = document.getElementById('resume_name')
 resume_name.textContent = name;


// img
let resume_img: any = document.getElementById('resume_img')
resume_img.src = img;


 let resume_mobile: any = document.getElementById('resume_mobile')
 resume_mobile.textContent = mobile;

 let resume_email: any = document.getElementById('resume_email');
 resume_email.textContent = email;

 let resume_add: any = document.getElementById('resume_add');
 resume_add.textContent = address;


 let resume_degree: any = document.getElementById('resume_degree');
 resume_degree.textContent = degree1;

 let resume_uni: any = document.getElementById('resume_uni');
 resume_uni.textContent = university;

 let passing_year: any = document.getElementById('passing_year');
 passing_year.textContent = pass1;

 let resume_degree2: any = document.getElementById('resume_degree2');
 resume_degree2.textContent = degree2;

 let resume_colg: any = document.getElementById('resume_colg');
 resume_colg.textContent = colg;

 let passing_year2: any = document.getElementById('passing_year2');
 passing_year2.textContent = pass2;

 let resume_degree3: any = document.getElementById('resume_degree3');
 resume_degree3.textContent = degree3;

 let resume_school: any = document.getElementById('resume_school');
 resume_school.textContent = school;

 let resume_skill1: any = document.getElementById('resume_skill1');
 resume_skill1.textContent = skill1;

 let resume_skill2: any = document.getElementById('resume_skill2');
 resume_skill2.textContent = skill2;

 let resume_skill3: any = document.getElementById('resume_skill3');
 resume_skill3.textContent = skill3;

 let resume_skill4: any = document.getElementById('resume_skill4');
 resume_skill4.textContent = skill4;

 let resume_language1: any = document.getElementById('resume_language1');
 resume_language1.textContent = language;


 let resume_language2: any = document.getElementById('resume_language2');
 resume_language2.textContent = language2;

 let resume_objective: any = document.getElementById('resume_objective');
 resume_objective.textContent = obj;

 let work_exp: any = document.getElementById('work_exp');
 work_exp.textContent = company;

 let resume_designation: any = document.getElementById('resume_designation');
resume_designation.textContent = designation


 let month_start: any = document.getElementById('month_start');
 month_start.textContent = starting_month;

 let year_start: any = document.getElementById('year_start');
 year_start.textContent = start_year;

 let resume_res1: any = document.getElementById('resume_res1');
 resume_res1.textContent = responsibility1;


 let resume_res2: any = document.getElementById('resume_res2');
 resume_res2.textContent = responsibility2;


 let resume_res3: any = document.getElementById('resume_res3');
 resume_res3.textContent = responsibility3;


 let resume_res4: any = document.getElementById('resume_res4');
 resume_res4.textContent = responsibility4;



 let resume_exp2: any = document.getElementById('resume_exp2');
 resume_exp2.textContent = designation2;

 
 let month_start2: any = document.getElementById('month_start2');
 month_start2.textContent = starting_month2;

 let year_start2: any = document.getElementById('year_start2');
 year_start2.textContent = start_year2
 
 let end_month: any = document.getElementById('end_month');
 end_month.textContent = ending_month;
 
 
 let end_year: any = document.getElementById('end_year');
 end_year.textContent = ending_year;

 
 let resume_res5: any = document.getElementById('resume_res5');
 resume_res5.textContent = responsibility5;

 let resume_res6: any = document.getElementById('resume_res6');
 resume_res6.textContent = responsibility6;

 let resume_res7: any = document.getElementById('resume_res7');
 resume_res7.textContent = responsibility7;


 let resume_ref: any = document.getElementById('resume_ref');
 resume_ref.textContent = reference; 



//  Share Button


let link_button = document.getElementById('link_button');
let anchor_tag = document.getElementById('anchor_tag')
let userName;
if (name){
  userName = name.toLowerCase().replace(/\s+/g , "=")
}
else{
  userName = 'user'
}
let baseUrl = " file:///C:/Users/DELL/Desktop/Projects/milestone005/resume/index1.html"
let uniqueUrl = `${baseUrl}?/${name}`

link_button?.addEventListener('click', () => {
  anchor_tag?.setAttribute('href', uniqueUrl)
})


// Copy Button

let copy_button = document.getElementById('copy_button');
copy_button?.addEventListener('click', () => {
  navigator.clipboard.writeText(uniqueUrl)
  .then(() =>{
    alert("successfully copy")
  })
})

});


// EditButton

let edit_button = document.getElementById('edit_button');
edit_button?. addEventListener('click', () => {
  window.history.back()
})




