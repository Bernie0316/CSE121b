/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Bernie Zhong",
    photo: "images/IMG_0343.jpeg",
    favoriteFoods: ['Chocolate', 'Burger', 'Steak'],
    hobbies: ["eat", "sleep", "play"],
    placesLived: [], // empty
}
/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Xinzhu, Taiwan", 
        length: "5 years"
    }
)
myProfile.placesLived.push(
    {
        place: "Pingdong, Taiwan", 
        length: "14 years"
    }
)
myProfile.placesLived.push(
    {
        place: "Zhubei, Taiwan", 
        length: "4 years"
    }
)
    // Add additional object literals with appropriate values to the placesLived array for each place you have lived.

/* DOM Manipulation - Output */
    // document.querySelector("#name").textContent = myProfile.name;
    // document.querySelector('#photo').innerHTML = myProfile.photo;

/* Name */
const Name = document.getElementById("name");
Name.textContent = myProfile.name;

/* Photo with attributes */
const Photo = document.querySelector('#photo');
Photo.src = myProfile.photo;
Photo.alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let foodli = document.createElement('li');
    foodli.textContent = food;
    document.querySelector('#favorite-foods').appendChild(foodli);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let hobbyli = document.createElement('li');
    hobbyli.textContent = hobby;
    document.querySelector('#hobbies').appendChild(hobbyli);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(placeLived => {
    let addbt = document.createElement('bt');
    addbt.textContent = placeLived.place;
    document.querySelector('#places-lived').appendChild(addbt);
    let addDd = document.createElement('dd');
	addDd.textContent = placeLived.length;
	document.getElementById("places-lived").appendChild(addDd);
});

