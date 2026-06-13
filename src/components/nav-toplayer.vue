<template>
  <div class="top-layer container flex justify-between mx-auto  py-2 border-b border-gray-200 !w-full" >
    <div class="flex items-center gap-9">
      <p class=" font-bold text-[15px] hover:text-[#80B500] transition duration-300"><i class="pi pi-map-marker text-[#80B500]"></i> 15/A, Nest Tower, NYC</p>
      <p class=" font-bold text-[15px] hover:text-[#80B500] transition duration-300"><i class="pi pi-envelope text-[#80B500]"></i> info@webmail.com</p>
    </div>
    <div class="flex items-center gap-5">
      <div class="relative group cursor-pointer" >
        <p class="hover:text-[#80B500] transition duration-300 font-semibold text-[14px]">
          English <i class="pi pi-arrow-down !text-[14px]  text-[#80B500]"></i>
        </p>
        <div
          class="absolute right-0 top-14 mt-2 w-48 bg-white  shadow-lg
                opacity-0 invisible group-hover:opacity-100 group-hover:visible
                transition-all duration-500 group-hover:top-6"
        >
          <a
            v-for="item in menuItems"
            :key="item.id"
            class="block px-4 py-2 hover:text-[#80B500] transition duration-300 "
          >
            {{ item.label }}
          </a>
        </div>
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

const menuItems = ref([
  {id: 1, label: 'Arabic'},
  {id: 2, label: 'Bengali'},
  {id: 3, label: 'Chinese'},
  {id: 4, label: 'English'},
  {id: 5, label: 'French'},
  {id: 6, label: 'Hindi'},
])
</script>