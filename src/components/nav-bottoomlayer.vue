<template>
  <div class="top-layer container flex justify-between mx-auto px-[180px] py-9 border-b border-gray-200 !w-full">
    <div class="flex items-center justify-center">
      <img src="@/assets/imgs/logo.png" alt="Logo">
    </div>
    <div>
      <ul>

      </ul>
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
  {id: 5, label: 'Pages', list}
])

</script>
