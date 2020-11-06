//Θα μπει το Header και το Style με το Animation στην αλλαγή των Σελίδων
<template>
  <div id="app">
    <app-header />
    <router-view v-slot="slotProps"> 
      <transition name="slide" mode="out-in">
        <component :is="slotProps.Component"> </component>
      </transition>
    </router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";

export default {
  name: "app",
  data() {
    return {
      tmimata: [
        { tmima: 'andriko', katigories: ['AA', 'RA', 'VA'] },
        { tmima: 'mikroi', katigories: ['A'] },
        { tmima: 'paidiko', katigories: ['AP', 'RP', 'VP'] },
      ],
      categories: [
        { id:'A', name:'Ανακοινώσεις Ακαδημίας', img:'fas fa-bullhorn', loadedComp:'anakoinoseis'},
        { id:'AA', name:'Ανακοινώσεις Ανδρικού', img:'fas fa-bullhorn', loadedComp:'anakoinoseis'},
        { id:'RA', name:'Ρόστερ Ομάδας Ανδρικού', img:'fas fa-basketball-ball', loadedComp:'roster'},
        { id:'VA', name:'Βαθμολογία Ανδρικού', img:'fas fa-list-ol', loadedComp:'vathmologia'},
        { id:'AP', name:'Ανακοινώσεις Παιδικού', img:'fas fa-bullhorn', loadedComp:'anakoinoseis'},
        { id:'RP', name:'Ρόστερ Ομάδας Παιδικού', img:'fas fa-basketball-ball', loadedComp:'roster'},
        { id:'VP', name:'Βαθμολογία Παιδικού',  img:'fas fa-list-ol', loadedComp:'vathmologia'},
        ]
    };
  },
  provide() {
    return {
      tmimata: this.tmimata,
      categories: this.categories
    }
  },
  components: {
    appHeader: Header,
  }
};
</script>

<style>
.slide-enter-active {
        animation: slide-in 150ms ease-out forwards;
    }

.slide-leave-active {
        animation: slide-out 150ms ease-out forwards;
}

@keyframes slide-in {
        from {
            transform: translateX(-50px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

@keyframes slide-out {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(+50px);
            opacity: 0;
        }
    }


#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
