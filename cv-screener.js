console.log("CV Screener");

// data is an array of Objects which conatains information about the candidates
const data = [
    {
        name: 'Rohan Das',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Djano',
        image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
        name: 'Shubham Sharma',
        age: 28,
        city: 'Banglore',
        language: 'Javascript',
        framework: 'Angualar',
        image: 'https://randomuser.me/api/portraits/men/74.jpg'
    },
    {
        name: 'Camella cabello',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Djano',
        image: 'https://randomuser.me/api/portraits/women/73.jpg'
    },
    {
        name: 'Aiswarya Rai',
        age: 45,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/72.jpg'
    },
    {
        name: 'Rohit Sharma',
        age: 34,
        city: 'Jharkhand',
        language: 'GO',
        framework: 'GO Framework',
        image: 'https://randomuser.me/api/portraits/men/70.jpg'
    }
];
// https://api.smartrecruiters.com/v1/companies/smartrecruiters/postings/

// async function cvParser() {
//     const response = await fetch('https://api.smartrecruiters.com/v1/companies/smartrecruiters/postings/');
//     const usersList =  await response.json();
//     return usersList;
// }
// const userData = cvParser();
// console.log(userData);
// CV Iterator
function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function() {
            return nextIndex<profiles.length ? 
            { value: profiles[nextIndex++], done: false } : 
            { done: true }
        }
    };
}
const candidates = cvIterator(data);
nextCV();
// Button Listener for nex button
const next = document.getElementById('next');
next.addEventListener('click', nextCV);

function nextCV() {
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate !=undefined) {
    image.innerHTML = `<img src='${currentCandidate.image}'>`;
    profile.innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Name: ${currentCandidate.name}</li>
            <li class="list-group-item">${currentCandidate.age} years old</li>
            <li class="list-group-item">Lives in ${currentCandidate.city}</li>
            <li class="list-group-item">Primarly works on ${currentCandidate.language}</li>
            <li class="list-group-item">Uses ${currentCandidate.framework} framework</li>
        </ul>
    `;
    } else {
        alert("End of candidate Applications");
        window.location.reload();
    }
}