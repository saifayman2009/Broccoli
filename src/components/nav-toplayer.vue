<template>
  <div class="top-layer container flex justify-between mx-auto px-[170px] py-2 border-b border-gray-200 !w-full" >
    <div class="flex items-center gap-5">
      <p class=" font-bold text-[15px] hover:text-[#80B500] transition duration-300"><i class="pi pi-map-marker text-[#80B500]"></i> 15/A, Nest Tower, NYC</p>
      <p class=" font-bold text-[15px] hover:text-[#80B500] transition duration-300"><i class="pi pi-envelope text-[#80B500]"></i> info@webmail.com</p>
    </div>
    <div class="flex items-center gap-5">
      <div>
        <p class="hover:text-[#80B500] transition duration-300 font-semibold text-[14px]">
          English <i class="pi pi-arrow-down !text-[14px]  text-[#80B500]"></i>
        </p>
        <Menu :model="langList"></Menu>
      </div>
      
      <div>
        <i class="pi pi-facebook mx-2 text-gray-800 hover:text-[#80B500] transition duration-300 cursor-pointer"></i>
        <i class="pi pi-twitter mx-2 text-gray-800 hover:text-[#80B500] transition duration-300 cursor-pointer"></i>
        <i class="pi pi-instagram mx-2 text-gray-800 hover:text-[#80B500] transition duration-300 cursor-pointer"></i>
        <i class="pi pi-linkedin mx-2 text-gray-800 hover:text-[#80B500] transition duration-300 cursor-pointer"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Menu } from 'primevue';

import {ref} from 'vue';

const langList = ref([
  {label: 'Arabic'},
  {label: 'Bengali'},
  {label: 'Chinese'},
  {label: 'English'},
  {label: 'French'},
  {label: 'Hindi'},
])
</script>