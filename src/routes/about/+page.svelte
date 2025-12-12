<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import CultureSection from "$lib/components/CultureSection.svelte";
  import ValuesSection from "$lib/components/ValuesSection.svelte";
  import StatsSection from "$lib/components/StatsSection.svelte";
  import FooterCTA from "$lib/components/FooterCTA.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<main class="font-sans antialiased text-black bg-white selection:bg-primary-200 selection:text-primary-900">
  <Header />
  
  <div class="pt-32 pb-16 px-6 md:px-16 lg:px-24">
    <div class="max-w-4xl">
      <h1 class="text-5xl md:text-7xl font-light tracking-tight mb-6">About Woodfell</h1>
      <p class="text-xl text-gray-600 leading-relaxed mb-8">
        We strengthen property assets, enhance lives and exceed expectations through data-led stewardship and strategic repositioning.
      </p>
      <p class="text-lg text-gray-600 leading-relaxed">
        Based in Finchley, North London, we manage 2,000+ properties across Greater London and Southeast England, setting a new benchmark for long-term value in property asset management.
      </p>
    </div>
  </div>
  
  <StatsSection />
  <CultureSection />
  <ValuesSection />
  <FooterCTA />
  <Footer />
</main>
