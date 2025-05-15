<template>
  <div class="carousel-container">
    <div class="top-card-text" @click="onShowCard">
        <img src="../assets/eye.svg" alt="">
         {{showCard?'Hide':'Show'}} card number</div> 
    <div class="carousel">
      <div class="slider" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div class="card" :style="{backgroundColor:card.isFreezed?'gray':''}" v-for="(card, index) in props.cards" :key="card.id">
          <div class="top-bar">
            <img src="../assets/aspirewhite.svg" alt="aspire" class="logo" />
          </div>
          <div class="card-holder">{{ card.name }}</div>
          <div v-if="showCard" class="card-number">{{ card.number.split(' ')[0] }}&nbsp; {{ card.number.split(' ')[1] }} &nbsp; {{card.number.split(' ')[2]}} &nbsp; {{ card.number.split(' ')[3] }}</div>
          <div v-else class="card-number">●●●● &nbsp; ●●●● &nbsp; ●●●● &nbsp; {{ card.last4 }}</div>

          <div class="card-info">
            <div>Thru: {{ card.expiry }}</div>
            <div v-if="showCard">CVV: <span class="cvv"> {{ card.cvv }}</span></div>
            <div v-else>CVV: <span class="cvv">***</span></div>
          </div>

          <div class="bottom-logo"><img src="../assets/visa.svg" alt=""></div>
          
        </div>
      </div>
    </div>

    <div class="indicators">
      <span v-for="(card, index) in props.cards" :key="index" :class="{ dot: true, active: index === currentIndex }"
        @click="currentIndex = index"></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { Card } from './type';


const currentIndex= ref(0)
const showCard = ref(false)

const emit = defineEmits<{
  (e: 'slideChange', index: number): void;
}>();

watch(currentIndex,()=>{
  emit('slideChange',currentIndex.value)
  showCard.value =false
})


const props = defineProps<{
  cards: Card[]
}>()

function onShowCard(){
  showCard.value = !showCard.value
}
  
</script>

<style scoped>
.carousel-container {
  max-width: 420px;
  margin: auto;
  text-align: center;
}

.carousel {
  overflow: hidden;
  position: relative;
  height: 250px;
  border-radius: 20px;
}

.slider {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.card {
  min-width: 100%;
  padding: 24px;
  height: 240px;
  background-color: #4ade80;
  border-radius: 20px;
  color: white;
  position: relative;
  font-family: sans-serif;
  box-sizing: border-box;
}

.top-bar {
  display: flex;
  justify-content: flex-end;
}

.logo {
  width: 70px;
}

.card-holder {
  font-size: 1.5em;
  font-weight: bold;
  margin: 20px 0 10px;
  text-align: left;
}

.card-number {
  font-size: 1.3em;
  letter-spacing: 3px;
  margin-bottom: 20px;
  margin-top: 24px;
  text-align: left;
}

.card-info {
  display: flex;
   gap: 68px;
  font-weight: bold;
}

.cvv {
  letter-spacing: 2px;
}

.bottom-logo {
  position: absolute;
  right: 24px;
  bottom: 24px;
  font-size: 1.5em;
  font-weight: bold;
}

.indicators {
  margin-top: 16px;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.dot {
  width: 10px;
  height: 10px;
  background-color: #d1fae5;
  border-radius: 50%;
  transition: all 0.3s;
  cursor: pointer;
}

.dot.active {
  width: 16px;
  border-radius: 12px;
  background-color: #4ade80;
}


.top-card-text {
  cursor: pointer;
margin-left: 269px;  
margin-bottom: 8px;
font-size: 13px;
color: #01D167;
display: flex;
align-items: center;
gap: 6px;
}
</style>
