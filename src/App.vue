<script setup>
import { ref } from "vue";
import Menubar from 'primevue/menubar';
import { RouterView, RouterLink } from 'vue-router';

function findRoute(label) {
  if (label === 'Home') {
    return "/home";
  } else {
    return "/smallestnumber";
  }
}

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home'
  },
  {
    label: 'Smallest Number',
    icon: 'pi pi-star'
  },
]);
</script>

<template>
  <div class="page-container">
    <div class="card menubar-container">
      <Menubar :model="items">
        <template #start>
          <RouterLink to="/home">
            <img src="https://vuejs.org/images/logo.png" alt="Vue.js Logo" class="menubar-logo" />
          </RouterLink>
        </template>
        <template #item="{ item }">
          <RouterLink :to="findRoute(item.label)" style="text-decoration: none; color: inherit;">
            <span>
              {{ item.label }}
            </span>
          </RouterLink>
        </template>
      </Menubar>
    </div>
    <RouterView />
    <footer class="footer">
      <p>© 2024 Your Company Name. All rights reserved.</p>
    </footer>
  </div>
</template>

<style scoped>
/* General layout */
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Menubar styles */
.menubar-container {
  width: 100%;
  margin: 0;
  padding: 0;
}

.menubar-container .p-menubar {
  width: 100%;
  border-radius: 0;
}

.menubar-logo {
  height: 30px;
  width: auto;
  margin-right: 1rem;
}

/* Add hover effect on Menubar items */
.p-menubar .p-menuitem {
  transition: background-color 0.3s, color 0.3s;
}

.p-menubar .p-menuitem:hover {
  background-color: #007bff;  /* Change this to any color you prefer */
  color: white;
}

.p-menubar .p-menuitem-link {
  padding: 10px;
  transition: background-color 0.3s;
}

/* Add focus effect for accessibility */
.p-menubar .p-menuitem-link:focus {
  background-color: #0056b3;  /* Adjust color for focus */
  color: white;
}

/* Footer styles */
.footer {
  margin-top: auto;
  text-align: center;
  background-color: #f8f9fa;
  padding: 1rem;
  border-top: 1px solid #eaeaea;
}

footer p {
  margin: 0;
  font-size: 0.9rem;
  color: #6c757d;
}
</style>

