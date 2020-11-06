<template>
  <div>
    <header class="jumbotron">
      <div class="container">
        <h1>{{ teamName }}</h1>
        <p>Εδώ θα βρείτε όλα τα νέα για {{ teamName2 }} της ομάδας μας! </p>
      </div>
    </header>
    <div class="container">
      <div class="row text-center">
        <app-category
          v-for="katigoria in katigories"
          :key="katigoria.loadedComp"
          :name="katigoria.name"
          :img="katigoria.img"
          :comp="katigoria.loadedComp"
        ></app-category>
      </div>
      <div id="popup" class="row justify-content-center">
        <div class="col">
          <router-view v-slot="slotProps"> 
            <transition name="more-info" mode="out-in">
              <component :is="slotProps.Component"> </component>
            </transition>
          </router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Category from "../components/Katigoria.vue";

export default {
  components: {
    appCategory: Category
  },
  inject: ['tmimata', 'categories'],
  props: ['tmima'],
  data() {
    return{
      teamName: '',
      teamName2: '',
      katigories: []
    }
  },
  methods: {
    loadCategories(tmima){
      //Στην Μεταβλητή selectedTeam αποθηκεύω τμήμα που έχω διαλέξει
      const selectedTeam = this.tmimata.find(team => team.tmima === tmima);
      //Στην Μεταβλητή katigories περνάω τις κατηγορίες(ID) από το tmimata με βάση το επιλεγμένο τμήμα
      const katigories = selectedTeam.katigories;
      const selectedCats = [];
      //Για κάθε μία απο τις κατηγορίες που περάστηκαν απο το tmimata
      for (const katigoria of katigories) {
        //Ψάχνω στο categories που έκανα inject και θέλω να βρώ ποιες κατηγορίες εχουν ίδιο id 
        const selectedCategory = this.categories.find((category) => category.id === katigoria);
        //όποια κατηγορία βρω, την προσθέτω στον πίνακα selectedCats
        selectedCats.push(selectedCategory);
      }
      if (selectedTeam.tmima === 'andriko'){
        this.teamName = 'Ανδρικό'
        this.teamName2 = 'το Ανδρικό τμήμα'
      } else if (selectedTeam.tmima === 'paidiko'){
        this.teamName = 'Παιδικό'
        this.teamName2 = 'το Παιδικό τμήμα'
      } else {
        this.teamName = 'Ακαδημίες'
        this.teamName2 = 'τις Ακαδημίες'
      }
      this.katigories = selectedCats;
    }
  },
  created() {
    this.loadCategories(this.tmima);
  },
  watch: {
    tmima(newTmima) {
      this.loadCategories(newTmima);
    },
  },
};
</script>

<style>
.jumbotron {
  background-color: #000f3e;
  color: floralwhite;
 }

.more-info-enter-from,
.more-info-leave-to {
  opacity: 0;
}

.more-info-enter-active {
  transition: opacity 0.3s ease-out;
}

.more-info-leave-active {
  transition: opacity 0.3s ease-in;
}

.more-info-enter-to,
.more-info-leave-from {
  opacity: 1;
}
  #popup {
    margin-top: 3em;
  }
</style>
