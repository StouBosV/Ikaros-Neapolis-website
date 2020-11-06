<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand" id="Home" to="/">
        <img id="logo" class="border border-warning rounded" :src="image" alt="LOGO--" /> Ίκαρος Νεάπολης B.C
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
      <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <router-link
            :to="{ name: 'Syllogos' }"
            tag="li"
            class="nav-item"
            activeClass="active"
          >
            <a class="nav-link">Ο Σύλλογος</a>
          </router-link>
          <router-link
            :to="{ name: 'katigories',
                  params: {tmima: 'andriko'} }"
            tag="li"
            class="nav-item"
            activeClass="active"
          >
            <a class="nav-link">Ανδρικό Τμήμα</a>
          </router-link>
          <li
            class="dropdown"
          >
            <a href="#"
               class="nav-link dropdown-toggle"
               data-toggle="dropdown"
               role="button"
               aria-haspopup="true"
               aria-expanded="false">Ακαδημίες<span class="caret"></span></a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link :to="{  name: 'katigories',
                                    params: {tmima: 'mikroi' }}" tag="li" class="dropdown-item"><a>Μικρότερα Τμήματα</a></router-link>
                <router-link :to="{  name: 'katigories',
                                    params: {tmima: 'paidiko' }}" tag="li" class="dropdown-item"><a>Παιδικό</a></router-link>
            </div>
          </li>
          <router-link
            :to="{name: 'Epikoinonia'}"
            tag="li"
            class="nav-item"
            activeClass="active"
          >
            <a class="nav-link">Επικοινωνία</a>
          </router-link>
        </ul>
        <ul class="navbar-nav nav-right">
          <router-link
            v-if="!auth"
            to="/signup"
            tag="li"
            class="nav-item"
            activeClass="active"
          >
            <a class="nav-link">Εγγραφή</a>
          </router-link>
          <router-link
            v-if="!auth"
            to="/signin"
            tag="li"
            class="nav-item"
            activeClass="active"
          >
            <a class="nav-link">Σύνδεση</a>
          </router-link>
          <router-link
            v-if="auth"
            to="/dashboard"
            tag="li"
            class="nav-item"
            activeClass="active"
          >
            <a class="nav-link">Αρχική</a>
          </router-link>
          <router-link
            v-if="auth"
            to="/dashboard"
            tag="li"
            class="nav-item"
            activeClass="active"
          >
            <a class="nav-link">Αποσύνδεση</a>
          </router-link>
          <li>
            <button v-if="auth" @click="onLogout">Logout</button>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import image from '../assets/logo.jpg'
export default {
  data(){
    return{
      image : image
    }
  }
};
</script>

<style>
#logo {
  height: 3rem;
}
.navbar {
  background-color: rgb(109, 18, 25) !important;
  font-family: "Roboto", sans-serif;
}
.navbar .navbar-brand {
  color: #fff;
  padding: 0 30px;
  font-size: 1.9rem;
}
.navbar .navbar-brand:hover {
  color: #fff;
}
.navbar .navbar-nav .nav-link {
  font-size: 1.1rem;
  color: #fff !important;
}
.navbar .navbar-brand li .nav-item {
  color: #fff !important;
}

</style>
