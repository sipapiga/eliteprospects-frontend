<template>
  <v-app>
    <v-app-bar app dark>
      <div class="d-flex align-center">
        <v-app-bar-nav-icon
          @click.native="drawer = !drawer"
          class="hidden-sm-and-up"
        ></v-app-bar-nav-icon>
        <v-img
          :src="require('./assets/shl.png')"
          alt="SHL Logo"
          class="shrink mr-2"
          contain
          transition="scale-transition"
          height="40"
        />
      </div>

      <v-spacer></v-spacer>

      <!-- <v-tooltips bottom v-for="team in teams" :key="team._id"> -->
      <v-avatar v-for="team in teams" :key="team._id" class="mr-3">
        <img :src="team.logoUrl" alt="team-logo" />
      </v-avatar>
      <!--       <span>{{ team.name }}</span>
      </v-tooltips> -->
    </v-app-bar>
    <v-navigation-drawer absolute temporary v-model="drawer">
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="lighten-4--text text--accent-4"
        >
          <v-list-item v-for="team in teams" :key="team._id">
            <v-list-item-icon>
              <v-avatar size="36">
                <img :src="team.logoUrl" alt="team-logo" />
              </v-avatar>
            </v-list-item-icon>
            <v-list-item-title>{{ team.name }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <Home />
    </v-main>
  </v-app>
</template>

<script>
import Home from './views/Home';
import service from '@/services/index';

export default {
  name: 'App',

  components: {
    Home,
  },

  data: () => ({
    teams: [],
    drawer: false,
    group: null,
  }),
  async created() {
    try {
      this.teams = await service.getTeams();
    } catch (err) {
      console.log(err);
    }
  },
};
</script>
