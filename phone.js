
const loadPhone = async (searchText, isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText.toLowerCase()}`);
    const data = await res.json();
    const phones = data.data
    displayPhones(phones, isShowAll)
}



const displayPhones = (phones, isShowAll) => {
const phoneContainer = document.getElementById('phone-container');
const firstPage = document.getElementById('firstPage');
firstPage.classList.add('hidden');
phoneContainer.innerText = '';

const next = document.getElementById('next');
if(phones.length > 12 && !isShowAll){
next.classList.remove('hidden');
}
else{
    next.classList.add('hidden');
};

// Display only 12 items
if(!isShowAll){
    phones = phones.slice(0,12);
}

    phones.forEach(phone => {
        const phoneCard = document.createElement('div')
        phoneCard.classList = 'card w-full border-white border-[1px] shadow-2xl';
        phoneCard.innerHTML = `<div class='bg-opacity-60'>
        <figure><img class= mt-6 src="${phone.image}"/></figure>
<div class="card-body grid justify-center text-center">
    <h2 class="card-title text-xl text-center">${phone.phone_name}</h2>
    <p></p>
    <div class="card-actions justify-center">
        <button onClick="clickShow('${phone.slug}')"
            class="cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700">
            Show Details
        </button>
        </div>`;
        phoneContainer.appendChild(phoneCard)
    })
//  stop loading
    loading(false);
}



// Search
const search = (isShowAll) => {
    loading(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    if(searchText == ''){
       loadAllPhones();
    }
    loadPhone(searchText, isShowAll);
}


// Loading
const loading = (isLoading) => {
    const loader = document.getElementById('loader');
    if(isLoading){
        loader.classList.remove('hidden');
    }
    else{
        loader.classList.add('hidden');
    }
}

// show all
const clickedNext = () => {
    search(true);
}

// show details
const clickShow = async (id) => {
    // loading(true);
const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
const allData = await res.json();

const data = allData.data;
phoneDetails(data);
console.log(data)

}

const phoneDetails = (phone) => {
    showModal.showModal()
    const details = document.getElementById('details');
    const phoneImage = document.getElementById('image');
    details.innerHTML = `
    <div id="image" class="flex justify-center">
    <img src="${phone.image}" alt="image not found">
  </div><br>
  <h3 class="font-bold lg:text-2xl text-xl text-black">${phone.name}</h3>
  <p><span class="font-medium text-black">Brand: </span>${phone.brand}</p>
  <p><span class="font-medium text-black">Release Date: </span>${phone.releaseDate}</p>
  <p><span class="font-medium text-black">Storage: </span>${phone.mainFeatures.storage}</p>
  <p><span class="font-medium text-black">Display Size: </span>${phone.mainFeatures.displaySize}</p>
  <p><span class="font-medium text-black">Chipset: </span>${phone.mainFeatures.chipSet}</p>
  <p><span class="font-medium text-black">Memory: </span>${phone.mainFeatures.memory}</p>
  <p><span class="font-medium text-black">WLAN: </span>${phone.others.WLAN}</p>
  <p><span class="font-medium text-black">Bluetooth: </span>${phone.others.Bluetooth}</p>
  <p><span class="font-medium text-black">GPS: </span>${phone.others.GPS}</p>
  <p><span class="font-medium text-black">NFC: </span>${phone.others.NFC}</p>
  <p><span class="font-medium text-black">Radio: </span>${phone.others.Radio}</p>
  <p><span class="font-medium text-black">USB: </span>${phone.others.USB}</p>
  <p><span class="font-medium text-black">Sensors: </span>${phone.mainFeatures.sensors}</p>
  <div class="modal-action">
    <form method="dialog">
      
      <button
        class="overflow-hidden relative w-32 p-2 h-12 bg-blue-600 text-white border-none rounded-md text-xl font-medium cursor-pointer z-10 group">
        Close
        <span
          class="absolute w-36 h-32 -top-8 -left-2 bg-pink-500 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
        <span
          class="absolute w-36 h-32 -top-8 -left-2 bg-sky-500 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
        <span
          class="absolute w-36 h-32 -top-8 -left-2 bg-violet-500 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
        <span
          class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-10 z-10">Close</span>
    </form>
  </div>
    `
    console.log(phone.brand)
   
}










const loadAllIphones = async () => {
    loading(true)
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`);
    const data = await res.json();
    const phones = data.data
    displayAllPhones(phones)
}


const loadAllSamPhones = async () => {
    loading(true)
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=samsung`);
    const data = await res.json();
    const phones = data.data
    displayAllPhones(phones)
}


const loadAllOppoPhones = async () => {
    loading(true)
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=oppo`);
    const data = await res.json();
    const phones = data.data
    displayAllPhones(phones)
}




const displayAllPhones = (phones) => {
const phoneContainer = document.getElementById('phone-container');
const firstPage = document.getElementById('firstPage');
firstPage.innerHTML = '<h1>All the available phones</h1><br>';


    phones.forEach(phone => {
        const phoneCard = document.createElement('div')
        phoneCard.classList = 'card w-full border-white border-[1px] shadow-2xl';
        phoneCard.innerHTML = `
        <div class='bg-opacity-60'>
        <figure><img class= mt-6 src="${phone.image}"/></figure>
<div class="card-body grid justify-center">
    <h2 class="card-title text-xl text-center">${phone.phone_name}</h2>
    <p></p>
    <div class="card-actions justify-center">
        <button onClick="clickShow('${phone.slug}')"
            class="cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700">
            Show Details
        </button>
        </div>`;
        phoneContainer.appendChild(phoneCard)
    })
//  stop loading
loading(false);
}

const loadAllPhones = () => {
    loadAllIphones();
    loadAllSamPhones();
    loadAllOppoPhones();
}

loadAllPhones();