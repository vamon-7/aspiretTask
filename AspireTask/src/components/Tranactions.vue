<template>
    <div class="transactions">
      <div class="header">
        <span class="icon">
          <img src="../assets/transaction.svg" alt="">
        </span>
        <span class="title">Recent transactions</span>
        <div class="right">
        <div class="arrow">&#9652;</div>
      </div>
      </div>
  
      <div class="transaction" v-for="(txn, index) in transactions" :key="index">
        <div class="icon-circle" :style="{ backgroundColor: txn.bg }">
          <span><img :src="txn.icon" alt=""></span>
        </div>
        <div class="details">
          <div class="top">
            <span class="merchant">{{ txn.name }}</span>
          </div>
          <div class="date">{{ txn.date }}</div>
          <div class="info">
            <span> <img height="15" width="15" src="../assets/refund.svg" alt=""></span>
            {{ txn.info }}</div>
        </div>
        <span :class="['amount', txn.amount > 0 ? 'positive' : 'negative']">
              {{ txn.amount > 0 ? '+ S$ ' + txn.amount : '- S$ ' + Math.abs(txn.amount) }}
            </span>
      </div>
  
      <div class="footer">View all card transactions</div>
    </div>
  </template>
  
  <script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getTransactions } from '../service/api';
import { Transactions } from './type';

  
  const transactions =ref<Transactions[]>([])

  onMounted(async ()=>{
    transactions.value = await getTransactions()
  })


  
  </script>
  
  <style scoped>
  .transactions {
    width: 400px;
    background: white;
    border: #F0F0F0 solid 1px;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
    font-family: Arial, sans-serif;
  }
  
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;
    padding: 16px;
    background-color: #F5F9FF;
    border-radius: 16px;
    
  }
  
  .header .icon {
    font-size: 18px;
  }
  
  .header .title {
    flex-grow: 1;
    margin-left: 12px;
    font-size: 14px;
    color: #0C365A;
    font-weight: 300;
  }
  
  .transaction {
    display: flex;
    gap: 12px;
    padding: 16px;
    border-top: 1px solid #f0f0f0;
  }
  
  .icon-circle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
  }

  .details .date {
    margin-top: 6px;
    color: #AAAAAA;
    font-size: 14px;
  }

  .details .info{
    color: #325BAF ;
    font-size: 14px !important;
    font-weight: 500;
    display: flex;
    gap: 4px;
    margin-top: 8px;
  }

  .footer{
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    padding: 16px;
    background-color: #EDFFF5;
    color: #01D167;
    font-size: 14px;
    border-radius: 16px;

  }

  .merchant {
    color: #222222;
    font-size: 16px;
    font-weight: 500;
  }

  .amount{
    font-weight: 600;
    margin-left: 44px;
  }

  .positive{
    color: #01D167;
  }

  .right .arrow {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: #e5ecf8;
    color: #6b7280;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
  }

  </style>