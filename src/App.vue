<template>
  <div id="app">
    <router-view name="mainsidebar" />
    <router-view name="navbar" />
    <div class="content-wrapper">
      <router-view />
      
    </div>
    <router-view name="footer" />
  </div>
</template>

<script>
import Navbar from "./views/layouts/Navbar.vue";
import Sidebar from "./views/layouts/Sidebar.vue";
import MainSidebar from "./views/layouts/MainSidebar.vue";
import Footer from "./views/layouts/Footer.vue";
export default {
  name: "App",
  components: {}
};
