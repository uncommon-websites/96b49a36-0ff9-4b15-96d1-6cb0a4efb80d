<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import ProcessSection from "$lib/components/ProcessSection.svelte";
  import FooterCTA from "$lib/components/FooterCTA.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<main class="font-sans antialiased text-black bg-white selection:bg-primary-200 selection:text-primary-900">
  <Header />
  
  <div class="pt-32 pb-16 px-6 md:px-16 lg:px-24">
    <div class="max-w-4xl">
      <h1 class="text-5xl md:text-7xl font-light tracking-tight mb-6">Our process</h1>
      <p class="text-xl text-gray-600 leading-relaxed">
        A data-led approach to transforming underperforming assets into high-value investments through strategic repositioning.
      </p>
    </div>
  </div>
  
  <ProcessSection />
  <FooterCTA />
  <Footer />
</main>
