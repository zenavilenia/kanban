<template>
  <div id="container">
    <Navbar></Navbar>
    <div class="flex-nav-container">
      <div class="flex-nav-items">
        <div id="div-back-log">
          <p>Back-log</p>
        </div>
      </div>
      <div class="flex-nav-items">
        <div id="div-todo">
          <p>To-Do</p>
        </div>
        <div class="list">
          <div class="to-do">
            <div class="to-do-title">
              <p class="p-title">Title</p>
            </div>
            <div class="to-do-detail">
              <p class="p-todo-detail">Point:</p>
              <p class="p-todo-detail">Assigned To:</p>
              <button class="btn btn-primary btn-sm">Show Detail</button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-nav-items">
        <div id="div-doing">
          <p>Doing</p>
        </div>
      </div>
      <div class="flex-nav-items">
        <div id="div-done">
          <p>Done</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';

export default {
  name: 'Login',
  components: {
    Navbar,
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  background-color: #39f;
}


#div-back-log {
  background-color: #f30;
  border-radius: 8px;
  height: 35px;
  text-align: left;
  font-size: 16px;
  color: white;
  font-family: Helvetica Neue;
  padding: 7px;
}

#div-todo {
  background-color: #f90;
  border-radius: 8px;
  height: 35px;
  text-align: left;
  font-size: 16px;
  color: white;
  font-family: Helvetica Neue;
  padding: 7px;
}

#div-doing {
  background-color: #39f;
  border-radius: 8px;
  height: 35px;
  text-align: left;
  font-size: 16px;
  color: white;
  font-family: Helvetica Neue;
  padding: 7px;
}

#div-done {
  background-color: #0c6;
  border-radius: 8px;
  height: 35px;
  text-align: left;
  font-size: 16px;
  color: white;
  font-family: Helvetica Neue;
  padding: 7px;
}

.flex-nav-container {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  height: auto;
  max-width: 1200px;
  margin: auto;
  margin-bottom: 10px;
  flex-direction: row;
}

.flex-nav-items {
  width: 23%;
  border: 2px solid #e3e8ee;
  border-radius: 8px;
  margin: 7px;
}

.to-do {
  border: 1px solid #e3e8ee;
  margin: 7px;
  border-radius: 8px;
}

.to-do-title {
  border-bottom: 1px solid #e3e8ee;
  text-align: left;
  font-family: Helvetica;
}

.p-title {
  padding-top: 10px;
  padding-left: 10px;
  font-weight: bold;
}

.to-do-detail {
  text-align: left;
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
}

.p-todo-detail {
  margin: 0px;
}
</style>
