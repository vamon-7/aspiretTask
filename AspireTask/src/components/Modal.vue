<template>
    <div v-if="show" class="modal-backdrop" @click.self="close">
      <div class="modal-content">
        <h2>Add Card Details</h2>
        <form @submit.prevent="submitForm">
          <label>
            Name on Card:
            <input v-model="form.name" type="text" required />
          </label>
  
          <label>
            Card Number:
            <input
          id="cardNumber"
          type="text"
          v-model="formatted"
          maxlength="19"
          disabled
          placeholder="1234 5678 9012 3456"
    />
          </label>
  
          <label>
            CVV:
            <input v-model="form.cvv" type="text" maxlength="3" required />
          </label>
  
          <label>
            Expiry Date:
            <input disabled v-model="form.expiry" type="text" required />
          </label>
  
          <div class="buttons">
            <button type="submit">Submit</button>
            <button type="button" @click="close">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps, defineEmits, onMounted, watch, onUpdated } from 'vue'
  import { generateExpiryDate, generateCardNumber } from '../utils'
  
  const props = defineProps({
    show: Boolean
  })
  
  const emit = defineEmits(['close', 'submit'])
  
  const form = ref({
    name: '',
    cvv: '',
    expiry: ''
  })
  const formatted = ref('');
  
  function close() {
    emit('close')
  }

  watch(()=>props.show,()=>{
    genarateNewCard()
  })
  
  function submitForm() {
    if(form.value.name!==''&&
        form.value.cvv!==''&&
        form.value.expiry!==''
    )
    emit('submit', { ...form.value, number : formatted.value })
    close()
    form.value.name =''
    form.value.cvv =''
  }

 

function genarateNewCard() {
   const newNumber = generateCardNumber().replace(/(\d{4})(?=\d)/g, '$1 ');
  formatted.value = newNumber;
  form.value.expiry = generateExpiryDate()
}
  </script>
  
  <style scoped>
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .modal-content {
    background: white;
    padding: 24px;
    padding-right: 36px;
    border-radius: 12px;
    width: 320px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  }
  
  .modal-content h2 {
    margin-bottom: 16px;
    font-size: 1.2rem;
  }
  
  label {
    display: block;
    margin-bottom: 12px;
    font-weight: 500;
  }
  
  input {
    width: 100%;
    padding: 8px;
    margin-top: 4px;
    border: 1px solid #ccc;
    border-radius: 6px;
  }
  
  .buttons {
    margin-top: 16px;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }
  
  button {
    padding: 8px 12px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }
  
  button[type="submit"] {
    background-color: #10b981;
    color: white;
  }
  
  button[type="button"] {
    background-color: #e5e7eb;
  }
  </style>
  