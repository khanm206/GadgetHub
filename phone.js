const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText.toLowerCase()}`);
    const data = await res.json();
    const phones = data.data
    displayPhones(phones)
}


const displayPhones = phones => {
const phoneContainer = document.getElementById('phone-container');
phoneContainer.innerText = '';

    phones.forEach(phone => {
        const phoneCard = document.createElement('div')
        phoneCard.classList = 'card w-full bg-gray-100 shadow-xl';
        phoneCard.innerHTML = `<div class='bg-opacity-60'>
        <figure><img class= mt-4 src="${phone.image}"
        alt="Shoes" /></figure>
<div class="card-body">
    <h2 class="card-title">${phone.phone_name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
        <button
            class="cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700">
            Show Details
        </button>
        </div>`;
        phoneContainer.appendChild(phoneCard)
    })
}



// Search
const search = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhone(searchText);
}