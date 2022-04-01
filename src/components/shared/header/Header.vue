<template>
<div class="header">
  <h3 class="header-title">Star wars with Vue</h3>
  <nav>
    <ul class="menu-list">
      <li class="menu-list__item">Home</li>
      <li class="menu-list__item">Motivation</li>
      <li class="menu-list__item">About</li>
    </ul>
  </nav>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.header {
  align-items: center;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 3px 3px 1px gray;
  padding: 10px;
}

.header-title {
 margin-left: 1rem;
}

.header-title:hover {
 cursor: pointer;
}

.menu-list {
  display: flex;
}

.menu-list__item {
  list-style: none;
  padding: 5px;
  margin-right: 1rem;
}

.menu-list__item {
  cursor: pointer;
}

</style>