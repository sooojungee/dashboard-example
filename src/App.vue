<template>
  <v-app app>
    <v-card height="100%">
      <v-navigation-drawer v-model="drawer"
                           class="nav-image nav-drawer"
                           width="260"
                           dark
                           fixed
                           mobile-break-point="990">
        <v-flex class="image-wrapper">
          <v-toolbar flat
                     class="transparent nav-header px-2">
            <v-list class="pa-0">
              <v-list-tile>
                <v-list-tile-avatar color="white"
                                    size="40px">
                  <img class="background-position"
                       src="https://demos.creative-tim.com/vuetify-material-dashboard/img/vuetifylogo.png">
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title class="font-18">Vuetify MD</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-toolbar>
          <v-divider class="mb-4 mx-3"></v-divider>
          <v-list class="pt-0 background-none">
            <!-- <v-divider></v-divider> -->

            <v-list-tile v-for="item in items"
                         :key="item.title"
                         @click="getItem(item.title)"
                         :list-tile-active-item="item.active"
                         class="temporary list-tile-content">
              <v-list-tile-action class="width-30">
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title class="item-title">{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-flex>
      </v-navigation-drawer>
      <v-toolbar :color="'#eee'"
                 class="toolbar">
        <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
        <v-toolbar-title class="font-weight-light"
                         style="font-size: 18px">Dashboard</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-flex xs6
                sm3
                md2>
          <v-text-field color="#ddd"
                        label="Search.."></v-text-field>
        </v-flex>
        <v-btn icon
               class="custom-btn"
               style="border-radius: 0px; width: 50px; height: 50px;">
          <v-icon>dashboard</v-icon>
        </v-btn>
        <v-menu transition="slide-y-transition"
                bottom
                offset-y
                class="menu-button">
          <template v-slot:activator="{ on }">
            <v-btn icon
                   v-on="on"
                   class="custom-btn"
                   style="border-radius: 0px; width: 50px; height: 50px;">
              <v-icon>more_vert</v-icon>
            </v-btn>
          </template>
          <v-list class="menu-position">
            <v-list-tile v-for="(item, i) in menulist"
                         :key="i"
                         @click="">
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-btn icon
               class="custom-btn"
               style="border-radius: 0px; width: 50px; height: 50px;">
          <v-icon>more_vert</v-icon>
        </v-btn>
      </v-toolbar>
      <v-content data-booted='true'
                 mt-3>
        <router-view></router-view>
      </v-content>
    </v-card>
    <v-footer class="pa-3 footer">
      <span class="footerlink"> HOME </span>
      <span class="footerlink"> CREATIVE TIME </span>
      <span class="footerlink"> ABOUT US </span>
      <span class="footerlink"> BLOG </span>

      <v-spacer></v-spacer>
      <span class="spancolor">© 2019 <a>Creative Tim</a> made with S2 for a better web</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts" src="./App.ts">
</script>
<style lang="scss">
body {
  background: #eeeeee;
}
.background-position {
  background-position: center center;
  transform: scale(0.5);
}

.nav-image-wrapper {
  height: 100%;
}

.nav-image {
  background-image: url("https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg");
  background-position: center center;
}
.nav-drawer {
  height: 100%;
  overflow: hidden;
}

.list-tile-content {
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 4px;
  /* background: #4caf50 !important; */
  /* background-origin: padding-box; */
  margin: 10px 15px 0;
}

[list-tile-active-item="true"] {
  background: #4caf50 !important;
}

.v-list__tile {
  padding: 10px 15px;
  border: 0px solid;
  border-radius: 4px;
}
.item-title {
  height: 30px;
  line-height: 30px;
  font-weight: 300;
  font-size: 14px;
  padding: 0px;
}

.width-30 {
  width: 30px;
  min-width: unset;
  margin-right: 15px;
}

.image-wrapper {
  background: rgba(0, 0, 0, 0.67);
  height: 100%;
}

.background-none {
  background: rgba(0, 0, 0, 0) !important;
}

.nav-header {
  padding: 6px 4px;
}

.font-18 {
  font-size: 18px !important;
}

.toolbar .v-toolbar__content {
  margin-left: 260px;
  min-height: 70px;
  padding-bottom: 10px;
  padding-top: 10px;
  @media screen and (max-width: 990px) {
    margin-left: 0px;
  }
}

.v-content__wrap {
  margin-left: 260px;
  @media screen and (max-width: 990px) {
    margin-left: 0px;
  }
}

.custom-btn::before {
  color: transparent;
}

input {
  color: red;
}

.menu-button {
  position: relative;
}

.footer {
  height: 82px !important;
  padding: 15px 24px !important;

  margin-left: 260px;
  @media screen and (max-width: 990px) {
    margin-left: 0px;
  }
}

.footerlink:hover {
  color: purple;
}

.spancolor {
  color: #495057;
  font-weight: 300;
  font-size: 16px;
}

.footerlink {
  font-weight: 500;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 12px;
  padding: 15px;
  line-height: 1.8;
}
</style>

