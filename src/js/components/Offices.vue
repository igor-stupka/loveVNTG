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
              :class="activeTab === index ? 'offices__button--active' : '' "
              class="offices__button"
              @click="changeActiveTab(index)"
            >
              {{ place.name }}
            </button>
          </li>
        </ul>
        <transition name="fade">
          <p class="offices__description">
            {{ places[activeTab].info }}
          </p>
        </transition>

        <p class="offices__address">
          {{ places[activeTab].address }}<br>
          {{ places[activeTab].index }}<br>
          {{ places[activeTab].country }}<br>
        </p>
      </div>
      <div
        class="offices__right"
        tabindex="-1"
      >
        <GmapMap
          :center="places[activeTab].coords"
          :zoom="9"
          class="offices__map"
          :options="mapStyle"
        >
          <GmapMarker
            :position="places[activeTab].coords"
            :icon="marker"
          />
        </GmapMap>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('gMap', {
      activeTab: 'activeTab',
      mapStyle: 'mapStyle',
      places: 'places',
      marker: 'markerIcon'
    })
  },
  methods: {

    changeActiveTab(index) {
      this.$store.commit('gMap/setIndex', index);
    }
  }

};
</script>

<style lang="sass">
@import '../../css/components/offices.sass'
</style>
