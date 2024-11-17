<script setup>
import { ref } from "vue";
import Menubar from 'primevue/menubar';
import { RouterView, useRouter, RouterLink } from 'vue-router'

function findRoute(label) {
  if(label === 'Home') {
    return "/home"
  } else {
    return "/smallestnumber"
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
      <div class="card menubar-container">
          <Menubar :model="items">
              <template #start>
                  <img src="https://vuejs.org/images/logo.png" alt="Vue.js Logo" class="menubar-logo" />
              </template>
              <template #item="{item}">
                <RouterLink :to="findRoute(item.label)" style="text-decoration: none; color: inherit;">
                  <span>
                    {{ item.label }}
                  </span>
                </RouterLink>
              </template>
          </Menubar>
      </div>
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

.menubar-container {
    width: 100%;
    margin: 0;
    padding: 0;
}

.menubar-container .p-menubar {
    width: 100%;
    border-radius: 0;
    /* Remove rounded corners for a full-screen look */
}

.menubar-logo {
    height: 30px;
    /* Adjust the height */
    width: auto;
    /* Maintain aspect ratio */
    margin-right: 1rem;
    /* Add spacing between the logo and the menu items */.menubar-container {
    width: 100%;
    margin: 0;
    padding: 0;
}

.menubar-container .p-menubar {
    width: 100%;
    border-radius: 0;
    /* Remove rounded corners for a full-screen look */
}

.menubar-logo {
    height: 30px;
    /* Adjust the height */
    width: auto;
    /* Maintain aspect ratio */
    margin-right: 1rem;
    /* Add spacing between the logo and the menu items */
    }
  }
</style>
