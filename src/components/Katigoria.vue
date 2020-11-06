<template>
      <div class="col-sm-4">
        <div class="thumbnail">
          <div class="caption">
            <i :class="img"
                class="fa-3x"></i>
            <h4>{{ name }}</h4>
          </div>
          <router-link :to="{ name: comp }">
            <a class="btn more" type="button"
              >More Info</a>
          </router-link>
        </div>
      </div>
</template>

<script>

export default {
  props: ['name', 'img', 'comp']
};
</script>

<style>
  .more {
    border: 1px solid #6d1219;
    background: #6d1219;
    color: white;
    padding: 6px;
    font: inherit;
    cursor: pointer;
  }
  
  .more:hover,
  .more:active {
    background-color: #8d424c;
    color: white;
  }
  
  i {
    color: #6d1219;
  }
</style>
