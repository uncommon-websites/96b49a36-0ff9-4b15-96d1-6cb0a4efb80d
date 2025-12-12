<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import FooterCTA from "$lib/components/FooterCTA.svelte";
  import { scrollFade } from "$lib/actions/scrollFade";

  const regions = [
    {
      name: "North London",
      properties: ["Seven Sisters", "Beagle Close", "Linburn House"]
    },
    {
      name: "South London",
      properties: ["Boomtown", "Heather Court", "Bedford Park", "Tavistock Court", "Roxby House", "Billiard Lodge"]
    },
    {
      name: "West London",
      properties: ["Peacehaven"]
    },
    {
      name: "Essex",
      properties: ["Blackburn House", "Pico Wharf", "Midland House", "St John's", "Headgate"]
    },
    {
      name: "Kent",
      properties: ["Springfield Place", "The Sidings"]
    },
    {
      name: "Berkshire",
      properties: ["Hayley House", "Apex House"]
    },
    {
      name: "Hampshire",
      properties: ["Zenith House"]
    },
    {
      name: "Oxfordshire",
      properties: ["Claremont Place"]
    },
    {
      name: "Surrey",
      properties: ["The Spires"]
    },
    {
      name: "East Sussex",
      properties: ["Sussex Mansions", "Gloucester Mansions"]
    },
    {
      name: "Suffolk",
      properties: ["Giles Place"]
    }
  ];

  const featured = {
    name: "Zenith House",
    location: "Hampshire",
    description: "New development near Fleet Pond Nature Reserve featuring energy-efficient design with studio, one-bedroom, and two-bedroom rental apartments. Spacious layouts emphasizing modern, sustainable residential living.",
    features: ["Energy-efficient design", "Studio to two-bedroom units", "Near Fleet Pond Nature Reserve", "Spacious layouts"]
  };
</script>

<main class="font-sans antialiased text-black bg-white selection:bg-primary-200 selection:text-primary-900">
  <Header />
  
  <div class="pt-32 pb-16 px-6 md:px-16 lg:px-24">
    <div class="max-w-4xl">
      <h1 class="text-5xl md:text-7xl font-light tracking-tight mb-6">Portfolio</h1>
      <p class="text-xl text-gray-600 leading-relaxed">
        2,000+ properties under management across Greater London and Southeast England, spanning residential, commercial, mixed-use developments, and freehold management.
      </p>
    </div>
  </div>

  <!-- Featured Development -->
  <section class="px-6 md:px-16 lg:px-24 py-24 bg-gray-50">
    <div class="max-w-7xl mx-auto">
      <div class="mb-12">
        <p class="text-xs uppercase tracking-wider text-gray-500 mb-2">Featured development</p>
        <h2 class="text-4xl md:text-5xl font-light tracking-tight">{featured.name}</h2>
      </div>
      
      <div class="grid md:grid-cols-2 gap-12">
        <div>
          <p class="text-sm uppercase tracking-wider text-gray-500 mb-2">{featured.location}</p>
          <p class="text-lg text-gray-600 leading-relaxed mb-8">{featured.description}</p>
          
          <div class="space-y-3">
            {#each featured.features as feature}
              <div class="flex items-start gap-3">
                <div class="w-1 h-1 bg-primary-500 rounded-full mt-2.5"></div>
                <p class="text-gray-700">{feature}</p>
              </div>
            {/each}
          </div>
        </div>
        
        <div class="bg-gray-200 aspect-[4/3] flex items-center justify-center text-gray-400">
          <p class="text-sm">Property image</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Regional Coverage -->
  <section class="px-6 md:px-16 lg:px-24 py-24">
    <div class="max-w-7xl mx-auto">
      <div class="mb-16">
        <h2 class="text-4xl md:text-5xl font-light tracking-tight mb-6">Regional coverage</h2>
        <p class="text-lg text-gray-600 max-w-2xl">
          Our portfolio spans multiple regions across Greater London and Southeast England, with concentrated expertise in residential, commercial, and mixed-use developments.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each regions as region}
          <div use:scrollFade class="border-t border-gray-200 pt-6">
            <h3 class="text-lg font-medium mb-4">{region.name}</h3>
            <ul class="space-y-2">
              {#each region.properties as property}
                <li class="text-gray-600">{property}</li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <FooterCTA />
  <Footer />
</main>
