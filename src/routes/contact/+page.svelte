<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";

  const contactInfo = [
    {
      label: "Phone",
      value: "020 7112 5405",
      href: "tel:02071125405"
    },
    {
      label: "Email",
      value: "office@woodfell.co.uk",
      href: "mailto:office@woodfell.co.uk"
    },
    {
      label: "Location",
      value: "Finchley, North London (N3)",
      href: null
    }
  ];

  const portals = [
    { name: "Resident Portal", description: "For tenant access and services" },
    { name: "Partner Portal", description: "For client management" },
    { name: "Parking Portal", description: "For visitor permits" },
    { name: "FixFlo", description: "For maintenance requests" }
  ];
</script>

<main class="font-sans antialiased text-black bg-white selection:bg-primary-200 selection:text-primary-900">
  <Header />
  
  <div class="pt-32 pb-16 px-6 md:px-16 lg:px-24">
    <div class="max-w-4xl">
      <h1 class="text-5xl md:text-7xl font-light tracking-tight mb-6">Get in touch</h1>
      <p class="text-xl text-gray-600 leading-relaxed">
        Whether you're a property investor seeking strategic asset management or a resident looking for exceptional service, we're here to help.
      </p>
    </div>
  </div>

  <!-- Contact Information -->
  <section class="px-6 md:px-16 lg:px-24 py-16">
    <div class="max-w-7xl mx-auto">
      <div class="grid md:grid-cols-3 gap-8 mb-24">
        {#each contactInfo as info}
          <div class="border-t border-gray-200 pt-6">
            <p class="text-sm uppercase tracking-wider text-gray-500 mb-3">{info.label}</p>
            {#if info.href}
              <a href={info.href} class="text-lg hover:text-primary-500 transition-colors">
                {info.value}
              </a>
            {:else}
              <p class="text-lg text-gray-700">{info.value}</p>
            {/if}
          </div>
        {/each}
      </div>

      <!-- Digital Portals -->
      <div class="mb-24">
        <h2 class="text-3xl md:text-4xl font-light tracking-tight mb-8">Digital access</h2>
        <div class="grid md:grid-cols-2 gap-6">
          {#each portals as portal}
            <div class="border border-gray-200 p-8 hover:border-primary-500 transition-colors">
              <h3 class="text-lg font-medium mb-2">{portal.name}</h3>
              <p class="text-gray-600">{portal.description}</p>
            </div>
          {/each}
        </div>
      </div>

      <!-- Newsletter -->
      <div class="border-t border-gray-200 pt-16">
        <div class="max-w-2xl">
          <h2 class="text-3xl md:text-4xl font-light tracking-tight mb-4">Stay informed</h2>
          <p class="text-lg text-gray-600 mb-8">
            Subscribe to our newsletter for insights, announcements, and updates on the property market.
          </p>
          <div class="flex gap-4">
            <input 
              type="email" 
              placeholder="Enter your email"
              class="flex-1 px-6 py-4 border border-gray-200 focus:border-primary-500 focus:outline-none transition-colors"
            />
            <button class="px-8 py-4 bg-black text-white hover:bg-gray-800 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Footer />
</main>
