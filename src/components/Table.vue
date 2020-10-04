<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12"> </v-col>

      <v-col class="mb-4">
        <h1
          class="display-2 font-weight-bold mb-3"
          style="text-transform: uppercase"
        >
          statistics tabell
        </h1>
        <v-combobox
          v-model="select"
          :items="items"
          label="Season"
          outlined
          dense
          @change="getStatByYear"
        ></v-combobox>
      </v-col>

      <v-col class="mb-5" cols="12">
        <v-data-table
          :headers="headers"
          :items="stats"
          :items-per-page="10"
          class="elevation-1"
        >
          <template v-slot:[`item.logoUrl`]="{ item }">
            <v-avatar>
              <img :src="item.team[0].logoUrl" alt="team-logo" />
            </v-avatar>
          </template>
        </v-data-table>

        <v-row justify="center"> </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import service from '@/services/index';
export default {
  name: 'Table',

  data: () => ({
    select: '2020-2021',
    items: [
      '2020-2021',
      '2019-2020',
      '2018-2019',
      '2017-2018',
      '2016-2017',
      '2015-2016',
      '2014-2015',
      '2013-2014',
      '2012-2013',
      '2011-2012',
      '2010-2011',
    ],
    headers: [
      {
        text: 'RANK',
        align: 'start',
        sortable: true,
        value: 'position',
      },
      {
        text: '',
        value: 'logoUrl',
      },
      { text: 'TEAM', value: 'name' },
      { text: 'GP', value: 'stats.GP' },
      { text: '3P', value: 'stats.W' },
      { text: '2P', value: 'stats.OTW' },
      { text: '1P', value: 'stats.OTL' },
      { text: '0P', value: 'stats.L' },
      { text: 'G', value: 'stats.GF' },
      { text: 'GA', value: 'stats.GA' },
      { text: '+/-', value: 'stats.GD' },
      { text: 'POINTS', value: 'stats.PTS' },
    ],
    stats: [],
  }),
  async created() {
    try {
      this.stats = await service.getStats('2020-2021');
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    async getStatByYear(year) {
      try {
        this.stats = await service.getStats(year);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
