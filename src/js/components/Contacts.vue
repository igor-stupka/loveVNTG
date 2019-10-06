<template>
  <section class="contacts">
    <div class="container">
      <h1 class="title">
        Contacts
      </h1>
      <div class="contacts__grid">
        <div>
          <h2 class="section-title section-title--dark">
            <span class="accent">GMS</span> Headquarters
          </h2>
          <div class="contacts__subgrid">
            <div>
              <p class="contacts__paragraph">
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
              <div class="contacts__text">
                Email
              </div>
              <a
                href="mailto:info@gms-worldwide.com"
                class="contacts__link"
              >info@gms-worldwide.com</a>

              <div class="contacts__text">
                Send message
              </div>
              <a
                href="viber://forward?+41415446200"
                class="contacts__link"
              >Viber us</a>

              <div class="contacts__text">
                Send form
              </div>
              <a
                href="#form-section"
                class="contacts__link js-go-to"
              >Contact us</a>
            </div>
          </div>
        </div>
        <div>
          <h2 class="section-title section-title--dark">
            Technical support <span class="accent">24/7</span>
          </h2>
          <p class="contacts__paragraph">
            GMS understands that it can be hard to follow all new technologies. We regularly provide for all our clients educational trainings to make your operator`s business earn more and better though our best practices.
          </p>
          <a
            href="tel:+41415446200"
            class="contacts__phone"
          >+41 41 544 62 00</a>
        </div>
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
@import '../../css/components/contacts.sass'
</style>
