<template>
    <div class="tabs">
      <div
        class="tab"
        :class="{ active: selectedTab === 'my' }"
        @click="selectedTab = 'my'"
      >
        My debit cards
      </div>
      <div
        class="tab"
        :class="{ active: selectedTab === 'company' }"
        @click="selectedTab = 'company'"
      >
        All company cards
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const selectedTab = ref('my')
  </script>
  
  <style scoped>
  .tabs {
    display: flex;
    gap: 24px;
    font-size: 16px;
    font-weight: 500;
  }
  
  .tab {
    color: #b0b0b0;
    cursor: pointer;
    padding-bottom: 4px;
    border-bottom: 2px solid transparent;
    transition: all 0.2s;
  }
  
  .tab.active {
    color: #000;
    border-bottom: 2px solid #2bb8ff; /* light blue underline */
    font-weight: 700;
  }
  </style>
s  