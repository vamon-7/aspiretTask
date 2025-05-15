<template lang="">
    <div class="dashboard-container">
        <div class="top-bar">
            <div >
             <p class="avl-text">Available balance</p>
             <div class="money-container">
                <span class="money-badge">S$</span>
                <p class="money">3,000</p>
             </div>
            </div>
            <button @click="showModal" class="new-card">
                <img src="../assets/box.svg" alt="box icon"/>
                New card
            </button>
        </div> 
        <div class="card container">
            
            <div>
                <Cards :cards="cards" @slideChange="indexChange"/>
                <Wigits @freeze="freeze" :isFreezed="cards[currentIndex]?.isFreezed"/>
            </div>
            <div>
                <CardDetails />
                <Tranactions />
            </div>
        </div>
        <Modal :show="openModal" @close="closeModal" @submit="submitNewCard"/>
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Cards from './Card.vue';
import Tranactions from './Tranactions.vue';
import Wigits from './wigits.vue';
import Modal from './Modal.vue';
import CardDetails from './CardDetails.vue';
import { Card } from './type';
import { addCard, freezeCard, getCards } from '../service/api';


const openModal = ref(false)
const cards = ref<Card[]>([])
const currentIndex = ref<number>(0)

onMounted(async () => {
    cards.value = await getCards()
})

function closeModal() {
    openModal.value = false
}

function showModal() {
    openModal.value = true
}


async function submitNewCard(card: Pick<Card, 'id' | 'name' | 'number' | 'cvv' | 'expiry'>) {
    try {

        const newCard: Card = {
            ...card,
            last4: card.number.toString().slice(-4),
            isFreezed:false
        }

        const cardsRes = await addCard(newCard)
        cards.value = {...cardsRes}

    }
    catch (e) {
        console.log(e)
    }
}

function indexChange(e:number){
   currentIndex.value = e
}

async function freeze(){
   
   try{
    const cardRes = await freezeCard(currentIndex.value)
    cards.value = {...cardRes}
   }
   catch(e){
    console.log(e)
   }
}

</script>
<style scoped>
.dashboard-container {
    padding: 60px;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
}

.avl-text {
    font-size: 14px;
    font-weight: 200;
}

.money-container {
    display: flex;
    gap: 16px;

}

.money-badge {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 25px;
    background-color: #01D167;
    font-size: 12px;
    border-radius: 4px;
    color: white;
    margin-top: 6px;
}

.money {
    margin-top: 0px;
    font-size: 28px;
    font-weight: 500;
}

.top-bar {
    display: flex;
    justify-content: space-between;
}

.new-card {
    background-color: #325BAF;
    height: 35px;
    width: 109px;
    border: none;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 35px;
    color: white;
    gap: 8px;
    cursor: pointer;
}

.card {
    box-shadow: 0 2px 12px 0 #00000014;
    width: auto;
    height: 767px;
    padding: 40px;
}

.container {
    display: flex;
    gap: 98px;
 }

</style>