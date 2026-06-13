<template>
  <div class="top-layer container flex justify-between mx-auto  py-9  !w-full">
    <div class="flex items-center justify-center">
      <img src="@/assets/imgs/logo.png" alt="Logo">
    </div>
    <div>
      <ul class="flex gap-5 items-center pt-3">
        <li 
        class=" !relative group cursor-pointer text-[15px]  transition duration-300"
        v-for="nav in navs"
        :key = "nav.id"
        >
          <p class="hover:text-[#80B500] font-bold">{{ nav.label }} <span v-if="nav.list != false"><i class="pi pi-plus text-[9px]! font-bold!"></i></span></p>
          <div v-if="nav.list != false"  class="absolute pt-4 -left-2 top-14 mt-2 w-48 bg-white   shadow-lg
                opacity-0 invisible group-hover:opacity-100 group-hover:visible
                transition-all duration-500 group-hover:top-6 border-t-5 border-[#80B500]">
            <a 
            href="" v-for="i in nav.list"
            class="block px-7 py-2.5 hover:text-[#80B500] transition duration-300"
            :key="i.id">
              {{ i.label }}
            </a>
          </div>
        </li>
      </ul>
    </div>
    <div class="flex gap-5">
      <a href="#" class=" text-white bg-[#80B500] px-[26px] py-[14px] font-bold text-[14px]">GET A QUOTE</a>
      <div class="flex gap-3">
        <div class="bg-white text-gray-700 group relative px-4 py-3 shadow-xl ">
          <i class="pi pi-search"></i>
          <div class="absolute p-4 -right-2 top-17 mt-2 w-[300px]! bg-white   shadow-lg
                opacity-0 invisible group-hover:opacity-100 group-hover:visible
                transition-all duration-500 group-hover:top-12 ">
              <div class="relative">
                <input type="search " placeholder="search" class="w-full p-3 border-2 border-blue-100">
                <i class="pi pi-search absolute top-[50%] transform -translate-y-1/2  right-3"></i>
              </div>
            </div>
        </div>
        <div class="bg-white text-gray-700 group relative px-4 py-3 shadow-xl ">
          <i class="pi pi-user"></i>
          <div class="absolute right-0 top-17 mt-2 w-40 bg-white   shadow-lg
                opacity-0 invisible group-hover:opacity-100 group-hover:visible
                transition-all duration-500 group-hover:top-11  ">
                <a href="" class="block px-5 py-2.5 hover:text-[#80B500] transition duration-300"
                v-for="item in profile"
                :key="item.id"
                >
                {{ item.label }}
              </a>
              </div>
        </div>
        <div class="bg-white text-gray-700 px-4 py-3 shadow-xl ">
          <i class="pi pi-shopping-cart"></i>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import {ref} from 'vue';

const navs = ref([
  {id: 1, label: 'Home', list: [
    {id: 1 ,label: 'Home Style 01'},
    {id: 2 ,label: 'Home Style 02'},
    {id: 3 ,label: 'Home Style 03'},
    {id: 4 ,label: 'Home Style 04'},
    {id: 5 ,label: 'Home Style 05'},
    {id: 6 ,label: 'Home Style 06'},
    {id: 7 ,label: 'Home Style 07'},
    {id: 8 ,label: 'Home Style 08'},
    {id: 9 ,label: 'Home Style 09'},
    {id: 10 ,label: 'Home Style 10'},
    {id: 11 ,label: 'Home Style 11'},
  ]},
  {id:2 ,label: 'About', list: [
    {id: 1 ,label: 'About',},
    {id: 2 ,label: 'Services',},
    {id: 3 ,label: 'Service Details',},
    {id: 4 ,label: 'Gallery',},
    {id: 5 ,label: 'Gallery - 02',},
    {id: 5 ,label: 'Gallery Details',},
    {id: 6 ,label: 'Team',},
    {id: 7 ,label: 'Team Details',},
    {id: 8 ,label: 'FAQ',},
    {id: 9 ,label: 'Google Map Locations',},
  ]},
  {id:3 ,label: 'Shop', list: [
    {id: 1 , label: 'Shop'},
    {id: 2 , label: 'Shop Grid'},
    {id: 3 , label: 'Shop Left sidebar'},
    {id: 4 , label: 'Shop right sidebar'},
    {id: 5 , label: 'Shop details'},
    {id: 6 , label: 'Shop details no sidebar'},
    {id: 7 , label: 'Other Pages', list: [
      {id: 1 , label: 'Cart'},
      {id: 2 , label: 'Wishlist'},
      {id: 3 , label: 'Checkout'},
      {id: 4 , label: 'Order Tracking'},
      {id: 5 , label: 'My Account'},
      {id: 6 , label: 'Sign in'},
      {id: 7 , label: 'Register'},
    ] },
  ]},
  {id: 4, label: 'News', list: [
    {id: 1, label: 'News'},
    {id: 2, label: 'News Grid'},
    {id: 3, label: 'News Left sidebar'},
    {id: 4, label: 'News Right sidebar'},
    {id: 5, label: 'News details'},
  ]},
  {id: 5, label: 'Pages' ,list: false},
  {id: 6, label: 'Contact' ,list: false}
])
const profile = ref([
  {id:1, label:'Sign in'},
  {id:1, label:'Register'},
  {id:1, label:'My Account'},
  {id:1, label:'Wishlist'},
])

</script>