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
            <img src="https://www.smartsocs.com/wp-content/uploads/2021/09/logo_with_black_text.png" alt="SmartSoc Solutions Logo" class="menubar-logo" />
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
      <p>© 2024 SmartSoc Solutions. All rights reserved.</p>
    </footer>
  </div>
</template>

<!-- <style scoped> -->
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
<!-- </style> -->


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
  background-color: #dcf5e9;
  /* Beige background color for Menubar */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  /* Subtle shadow for depth */
}

/* Logo styling */
.menubar-logo {
  height: 30px;
  width: auto;
  margin-right: 1rem;
}

/* Menu item styling */
.p-menubar .p-menuitem {
  transition: background-color 0.3s, color 0.3s;
}

/* Beige color for menu items */
.p-menubar .p-menuitem-link {
  color: #5f4b3a;
  /* Dark brownish color for text */
  padding: 10px;
}

/* Hover effect on Menubar items */
.p-menubar .p-menuitem:hover {
  background-color: #d2b48c;
  /* Light tan color on hover */
  color: white;
}

.p-menubar .p-menuitem-link {
  padding: 10px;
  transition: background-color 0.3s;
}

/* Add focus effect for accessibility */
.p-menubar .p-menuitem-link:focus {
  background-color: #c0976c;
  /* Darker tan color for focus */
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
}</style>
