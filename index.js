console.log("CV Screener!!");

//Array of Objects
const data = [
    {
        name: 'Shubham Goyal',
        age: 18,
        city: 'Delhi',
        language: 'python',
        framework: 'React.js',
        image: 'https://randomuser.me/api/portraits/med/men/71.jpg'
    },

    {
        name: 'Harry goel',
        age: 20,
        city: 'Kolkata',
        language: 'C++',
        framework: 'Mongo',
        image: 'https://randomuser.me/api/portraits/med/men/63.jpg'
    },

    {
        name: 'Aishwariya Rai',
        age: 45,
        city: 'Luckhnow',
        language: 'Javascript',
        framework: 'Flutter',
        image: 'https://randomuser.me/api/portraits/med/women/70.jpg'
    },

    {
        name: 'Shivam Nagpal',
        age: 29,
        city: 'Bengaluru',
        language: 'Java',
        framework: 'Node.js',
        image: 'https://randomuser.me/api/portraits/med/men/88.jpg'
    }
]

//CV iterator
function cvIterator(profiles) {
    let nextIndex = 0;
    return{
        next: function() {
            return nextIndex<profiles.length ? 
            {value: profiles[nextIndex++], done: false} : 
            {done: true}
        }
    };
}
let candidates = cvIterator(data);
nextCV();

//Button listener for next button
const next = document.getElementById("next");
next.addEventListener('click',nextCV);

function nextCV() {
    let currentCandidate = candidates.next().value;
    let image = document.getElementById("image");
    let profile = document.getElementById("profile");
    
    if(currentCandidate != undefined){
    image.innerHTML = `<img src = '${currentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
    <li class="list-group-item">Uses ${currentCandidate.framework}</li>
  </ul>`
    }
    else{
        alert("End of Applications");
        window.location.reload();//reloads the page when all the applications end.
    }
}