<template>
    <div class="actions-container">
      <div class="action" @click="freezecard(action.label)"  v-for="action in actions" :key="action.label">
        <div class="icon-wrapper"  >
          <img  :src="action.icon" :alt="action.label" />
        </div>
        <div v-if="action.label=='Freeze card'" class="label">{{ props.isFreezed? 'Unfreeze Card': action.label }}</div>
        <div v-else class="label">{{ action.label }}</div>

      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import Freeze from '../assets/Freezecard.svg'
  import Spendlimit from '../assets/spendlimit.svg'
  import Gpay from '../assets/Gpay.svg'
  import Replacecard from '../assets/Replacecard.svg'
  import Deactivatecard from '../assets/Deactivatecard.svg'

  const emit = defineEmits<{
  (e: 'freeze'): void;
}>();

const props = defineProps<{
  isFreezed: boolean
}>()

 function freezecard(action:string){
  if(action == 'Freeze card')
  emit('freeze')
 }


  
  const actions = ref([
    {
      label: 'Freeze card',
      icon: Freeze
    },
    {
      label: 'Set spend limit',
      icon: Spendlimit
    },
    {
      label: 'Add to GPay',
      icon: Gpay
    },
    {
      label: 'Replace card',
      icon: Replacecard
    },
    {
      label: 'Cancel card',
      icon: Deactivatecard
    }
  ])
  </script>
  
  <style scoped>
  .actions-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #f1f7ff;
    padding: 20px;
    border-radius: 20px;
    margin-top: 36px;
  }
  
  .action {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60px;
    text-align: center;
    font-size: 0.85rem;
    color: #1e3a8a;
    cursor:pointer;
  }
  
  .icon-wrapper {
  
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;
  }

  .label{
    font-size: 12px;
  }

  
  .icon-wrapper img {
    width: 40px;
    height: 40px;
  }
  </style>
  