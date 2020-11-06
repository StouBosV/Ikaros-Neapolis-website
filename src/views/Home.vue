// Ενα Slide με φώτος της ομαδας (2-3)
<template>
  <div class="container">
    <div class="row">
      <ul class="slideshow">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
</script>

<style>
.slideshow {
  background-color: #000;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  z-index: 0;
  list-style: 0;
  margin: 0;
  padding: 0;
}
.slideshow li {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  opacity: 0;
  z-index: 0;
  animation: imageAnimation 37.5s linear infinite;
}
.slideshow li:nth-child(1) {
  background-image: url("../assets/logo.jpg");
}
.slideshow li:nth-child(2) {
  background-image: url("../assets/photo2.jpg");
  animation-delay: 7.5s;
}
.slideshow li:nth-child(3) {
  background-image: url("../assets/photo3.jpg");
  animation-delay: 15s;
}
.slideshow li:nth-child(4) {
  background-image: url("../assets/photo4.jpg");
  animation-delay: 22.5s;
}
.slideshow li:nth-child(5) {
  background-image: url("../assets/photo5.jpg");
  animation-delay: 30s;
}
@keyframes imageAnimation {
  0% {
    opacity: 0;
    animation-timing-function: ease-in;
  }
  10% {
    opacity: 1;
    animation-timing-function: ease-out;
  }
  20% {
    opacity: 1;
  }
  30% {
    opacity: 0;
  }
}
</style>
