<template>
  <aside class="sidebar">
    <!-- Logo -->
    <div class="logo-section">
      <img width="125px" src="../assets/aspirelogo.svg" alt="Aspire Logo" class="logo" />
      <p class="tagline">Trusted way of banking for 3,000+ SMEs and startups in Singapore</p>
    </div>

    <!-- Navigation -->
    <nav class="nav">
      <ul>
        <li v-for="item in navItems" :class="{ active: activeItem === item.name }" @click="setActive(item.name)">
          <span class="icon">
            <img
              :src="giveIcon(item.name)"
              :alt="item.name">
          </span>
          <span>{{ item.name }}</span>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import accountActive from '../assets/accountActive.svg';
import account from  '../assets/account.svg';
import activeCredit from '../assets/creditActive.svg'
import credit from '../assets/credit.svg'
import paymentActive from '../assets/paymentActive.svg'
import payment from '../assets/payment.svg'
import cardActive from '../assets/cardActive.svg'
import card from '../assets/card.svg'
import homeActive from '../assets/Homeactive.svg'
import home from '../assets/Home.svg'
import { NavItem } from './type';
import { getNavItem } from '../service/api';


const activeItem = ref<string>('Home')
const navItems =ref<NavItem[]|[]>([])

function setActive(item:string) {
  activeItem.value = item
}

onMounted(async()=>{
  navItems.value = await getNavItem()
})

function giveIcon(icon:string){
  switch(icon){
    case "Settings":
       return activeItem.value =='Settings'? accountActive: account
       
     case "Credit" :
     return activeItem.value =='Credit'? activeCredit: credit

     case "Payments" :
     return activeItem.value =='Payments'? paymentActive: payment

     case "Cards" :
     return activeItem.value =='Cards'? cardActive: card

     case "Home" :
     return activeItem.value =='Home'? homeActive: home

  }
}



</script>

<style scoped>
.sidebar {
  width: 440px;
  height: 100vh;
  background-color: #0C365A;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 42px;
  box-sizing: border-box;
}

.logo-section {
  margin-bottom: 30px;
}

.logo {
  height: auto;
  margin-bottom: 10px;
}

.tagline {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12pt;
  color: #FFFFFF;
  opacity: 30%;
  font-weight: 300;
}

.nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 10px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-top: 31px;
}



.nav li.active {
  color: #01D167;
}

.icon {
  width: 24px;
  text-align: center;
}
</style>