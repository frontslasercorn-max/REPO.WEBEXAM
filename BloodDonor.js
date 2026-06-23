let names = [];
let ages = [];
let genders = [];
let bloods = [];
let contacts = [];
let addresses = [];
let dates = [];

function display(){
    let table = document.getElementById("tableData");
    
    table.innerHTML = "";

    for (let i = 0; i < names.length; i++){

        let row = document.createElement("tr");
        
        row.innerHTML = 
        `<td>${names[i]}</td>
        <td>${ages[i]}</td>
        <td>${genders[i]}</td>
        <td>${bloods[i]}</td>
        <td>${contacts[i]}</td>
        <td>${addresses[i]}</td>
        <td>${dates[i]}</td>`;

        table.appendChild(row);

    };

};

function register(){
 
    let name = document.getElementById("Full-Name").value;
    let age = document.getElementById("Age").value;
    let gender = document.querySelector("input[name=pickGender]:checked").value;
    let blood = document.querySelector("input[name=Onepick]:checked").value;
    let contact = document.getElementById("Contact-number").value;
    let hiddennumber = contact.slice(0,2) + "*".repeat(contact.length - 4) + contact.slice(-2);
    let address = document.getElementById("Home-Address").value;
    let hiddenaddress = address.slice(0,2) + "**************";
    let date = document.getElementById("Donation-Date").value;

    alert("Donor Registered Successfully!");
    names.push(name);

    ages.push(age);

    genders.push(gender);

    bloods.push(blood);

    contacts.push(hiddennumber);

    addresses.push(hiddenaddress);
     
    dates.push(date);

    display();
};

function search(){

    let name = document.getElementById("DonorName").value;
    let table = document.getElementById("TableMessage");

    table.innerHTML = "";

    for (let i = 0; i < names.length; i++){
        if (names[i] === name){

            let headerRow = document.createElement("tr");

            headerRow.innerHTML = 
            `<th>Full Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Blood Type</th>
            <th>Contact Number</th>
            <th>Home Address</th>
            <th>Donation Date</th>`;

            table.appendChild(headerRow);

            let row = document.createElement("tr");

            row.innerHTML = 
            `<td>${names[i]}</td>
            <td>${ages[i]}</td>
            <td>${genders[i]}</td>
            <td>${bloods[i]}</td>
            <td>${contacts[i]}</td>
            <td>${addresses[i]}</td>
            <td>${dates[i]}</td>`;

            table.appendChild(row);

            return;
        };
    };

    table.innerHTML = 
    `<tr>
        <td colspan="7">Donor not found.</td>
    </tr>`;
    
};

function deleteDonor(){

    let name = document.getElementById("DonorName").value;

    for (let i = 0; i < names.length; i++){
        if (names[i] === name){
            
            names.splice(i, 1);

            ages.splice(i, 1);

            genders.splice(i, 1);

            bloods.splice(i, 1);

            contacts.splice(i, 1);

            addresses.splice(i, 1);
     
            dates.splice(i, 1);

            display();
            return;

        };
    };

};