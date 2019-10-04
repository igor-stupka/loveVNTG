<template>
  <section class="offices">
    <div class="offices__grid">
      <div class="offices__left">
        <h2 class="section-title">
          Our Offices
        </h2>
        <ul class="offices__list">
          <li
            v-for="(place, index) in places"
            :key="index"
            class="offices__city"
          >
            <button
              :class="{'active':place.selected}"
              class="offices__button"
              @click="changeCoords(place)"
            >
              {{ place.name }}
            </button>
          </li>
        </ul>
        <p class="offices__description">
          Global Message Services Ukraine LLC
        </p>

        <p class="offices__address">
          Kuiv, Stepan Bandera, 33
          02066
          Ukraine
        </p>
      </div>
      <div class="offices__right">
        <GmapMap
          :center="currentPosition"
          :zoom="9"
          style="width: 500px; height: 300px"
          :options="mapStyle"
        >
          <GmapMarker
            :position="currentPosition"
            :icon="marker"
          />
        </GmapMap>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters('gMap', {
      currentPosition: 'currentPosition',
      mapStyle: 'mapStyle',
      places: 'places',
      marker: 'markerIcon'
    })
  },
  methods: {
    ...mapActions('gMap', {
      changeCoords: 'changeCoords'
    })
  }

};
</script>

<style lang="sass">
</style>
