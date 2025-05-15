<template>
    <div class="card-details">
      <div class="left">
        <img src="../assets/card-details.svg" alt="Card Icon" class="icon" />
        <span class="label">Card details</span>
      </div>
      <div class="right">
        <div class="arrow">&#9662;</div>
      </div>
    </div>
  </template>
  
  <script setup>

  </script>
  
  <style scoped>
  .card-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f4f8ff;
    padding: 16px;
    border-radius: 16px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.03);
    width: 370px;
    max-width: 600px;
    margin-bottom: 12px;
  }
  
  .left {
    display: flex;
    align-items: center;
  }
  
  .icon {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }
  
  .label {
    font-size: 16px;
    color: #1e3a8a;
    font-weight: 500;
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
  