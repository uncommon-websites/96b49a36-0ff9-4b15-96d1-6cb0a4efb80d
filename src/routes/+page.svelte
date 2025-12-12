<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import WorkSection from "$lib/components/WorkSection.svelte";
  import ProcessSection from "$lib/components/ProcessSection.svelte";
  import CultureSection from "$lib/components/CultureSection.svelte";
  import StatsSection from "$lib/components/StatsSection.svelte";
  import ValuesSection from "$lib/components/ValuesSection.svelte";
  import FooterCTA from "$lib/components/FooterCTA.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import FloatingNav from "$lib/components/FloatingNav.svelte";
</script>

<main class="font-sans antialiased text-black bg-white selection:bg-primary-200 selection:text-primary-900">
  <Header />
  <Hero />
  <WorkSection />
  <ProcessSection />
  <CultureSection />
  <StatsSection />
  <ValuesSection />
  <FooterCTA />
  <Footer />
  <FloatingNav />
</main>


