<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import WorkSection from "$lib/components/WorkSection.svelte";
  import FooterCTA from "$lib/components/FooterCTA.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<main class="font-sans antialiased text-black bg-white selection:bg-primary-200 selection:text-primary-900">
  <Header />
  
  <div class="pt-32 pb-16 px-6 md:px-16 lg:px-24">
    <div class="max-w-4xl">
      <h1 class="text-5xl md:text-7xl font-light tracking-tight mb-6">Our services</h1>
      <p class="text-xl text-gray-600 leading-relaxed">
        Comprehensive property asset management solutions designed to maximize value and performance across your portfolio.
      </p>
    </div>
  </div>
  
  <WorkSection />
  <FooterCTA />
  <Footer />
</main>
