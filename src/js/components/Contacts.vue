<template>
  <section class="contacts">
    <h1 class="title">
      Contacts
    </h1>
    <div class="contacts__grid">
      <div>
        <h2 class="section-title">
          <span class="accent">GMS</span> Headquarters
        </h2>
        <div class="contacts__subgrid">
          <div>
            <p class="contacts__text">
              Global Message Services Ukraine LLC<br>
              Bundesstrasse 5 | 3rd Floor<br>
              6300 Zug<br>
              Switzerland
            </p>
            <a
              href="tel:+41415446200"
              class="contacts__phone"
            >+41 41 544 62 00</a>
          </div>
          <div>
            <span class="contacts__text">Email</span>
            <a
              href="mailto:info@gms-worldwide.com"
              class="contacts__link"
            >info@gms-worldwide.com</a>

            <span class="contacts__text">Send message</span>
            <a
              href="mailto:info@gms-worldwide.com"
              class="contacts__link"
            >Viber us</a>

            <span class="contacts__text">Send form</span>
            <a
              href="#form-section"
              class="contacts__link js-go-to"
            >Contact us</a>
          </div>
        </div>
      </div>
      <div>
        <h2 class="section-title">
          Technical support <span class="accent">24/7</span>
        </h2>
        <p class="contacts__text">
          GMS understands that it can be hard to follow all new technologies. We regularly provide for all our clients educational trainings to make your operator`s business earn more and better though our best practices.
        </p>
        <a
          href="tel:+41415446200"
          class="contacts__phone"
        >+41 41 544 62 00</a>
      </div>
    </div>
  </section>
</template>
<script>
import scrollTo from '../classes/smoothScroll';

export default {
  methods: {
    scrollTo
  }
};
</script>
<style lang="sass">
</style>
