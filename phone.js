
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
const data = await res.json();

phoneDetails(data);

}

const phoneDetails = (phone) => {
    showModal.showModal()
    const details = document.getElementById('details');
    const phoneImage = document.getElementById('image');
    // phoneImage.innerHTML = `<img src="${phone.image}" alt="image not found" />`
    // console.log(phone.brand)
   
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
    loadAllIphones(loadAllSamPhones(loadAllOppoPhones()));
    ;
    ;
}

loadAllPhones();