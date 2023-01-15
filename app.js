const data = [
  {
    name: "John Doe",
    age: 33,
    gender: "male",
    lookingFor: "female",
    location: "Boston MA",
    image: "http://randomuser.me/api/portraits/men/82.jpg",
  },
  {
    name: "Jen Smith",
    age: 26,
    gender: "female",
    lookingFor: "male",
    location: "Miami FL",
    image: "http://randomuser.me/api/portraits/women/82.jpg",
  },
  {
    name: "William Johnson",
    age: 38,
    gender: "male",
    lookingFor: "female",
    location: "Lynn MA",
    image: "http://randomuser.me/api/portraits/men/83.jpg",
  },
];

const profiles = profileIterator(data);

// Next event Listener
const next = document
  .getElementById("next")
  .addEventListener("click", nextProfile);

// Next profile Display
function nextProfile() {
  const currentProfile = profiles.next().value;
  // console.log(currentProfile);
  document.querySelector("#profileDisplay").innerHTML = `
    <ul class="list-group">
      <li class="list-group-item">Name: ${currentProfile.name}</li>
      <li class="list-group-item">Age: ${currentProfile.age}</li>
      <li class="list-group-item">Location: ${currentProfile.location}</li>
      <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingFor}</li>
    </ul> 
  `;
  document.querySelector("#imageDisplay").innerHTML = `
    <img src="${currentProfile.image}">

  `;
}

// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}
