const fm = document.getElementById('fom');
const output = document.getElementById('output');

let inputshow = true;

function toogle(){
    if(inputshow){
        fm.style.display="none";
        inputshow = false;
        output.innerHTML=`<h1>Test</h1>`;
        // output.innerHTML=` 
        // <div class="out">
        // <h1>${fm["fname"].value}</h1>    
        // <h1>${fm["lname"].value}</h1>    
        // </div>
        // <div class="first">
        //     <div>
        //     <h2>Work Experience</h2>
        //     <p> ${fm["workexp"].value}</p>
        //     <h2>Gender</h2>
        //     <p> ${fm["gender"].value}</p>
        //     <h2>Age</h2>
        //     <p> ${fm["Age"].value}</p>
        //     <h2>Email</h2>
        //     <p> ${fm["Email"].value}</p>
        //     <h2>Contact</h2>
        //     <p> ${fm["Contact"].value}</p>
        //     </div>
        // </div> 
        // `
    }
    else{
        fm.style.display="block";
        inputshow = true ;
    }
}