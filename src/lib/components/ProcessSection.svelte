<script lang="ts">
  import { onMount } from 'svelte';

  const steps = [
    {
      id: "discover",
      title: "Analyze Asset Performance",
      text: "We don't just manage for today—we position assets for the future. Through comprehensive analysis of demographics, housing demand, and market trends, we identify opportunities to maximize value and deliver consistent returns.",
      tags: ["Market Analysis", "Asset Valuation", "Demographic Research", "Performance Audits", "Tenant Satisfaction Surveys", "Compliance Review"],
      graphic: "lines"
    },
    {
      id: "envision",
      title: "Strategic Repositioning",
      text: "Every underperforming asset has untapped potential. We develop data-led strategies that transform properties into high-value investments, balancing immediate improvements with long-term positioning for sustainable growth.",
      tags: ["Asset Strategy", "Value Optimization", "Investment Planning", "Sustainability Audits", "Portfolio Analysis", "Risk Management"],
      graphic: "curve"
    },
    {
      id: "build",
      title: "Comprehensive Management",
      text: "From leasing to facilities management, we deliver holistic property stewardship. Our integrated approach covers the full lifecycle, ensuring every aspect of your asset is optimized for performance and tenant satisfaction.",
      tags: ["Property Management", "Leasing Operations", "Facilities Management", "Maintenance Coordination", "Tenant Relations", "Financial Reporting"],
      graphic: "circle-top"
    },
    {
      id: "elevate",
      title: "Continuous Value Creation",
      text: "We believe in transparent, proactive management. Through regular reporting, performance monitoring, and strategic improvements, we ensure your assets consistently exceed expectations and deliver peak performance.",
      tags: ["Performance Monitoring", "Transparent Reporting", "Proactive Maintenance", "Value Enhancement", "Client Communication", "Strategic Planning"],
      graphic: "circle-waves"
    }
  ];

  let activeStep = 0;
  let sectionRef: HTMLElement;

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = steps.findIndex(step => step.id === entry.target.id);
            if (index !== -1) {
              activeStep = index;
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "-20% 0px -20% 0px", // Trigger when element is in the middle 60% of viewport
        threshold: 0.5
      }
    );

    steps.forEach((step) => {
      const el = document.getElementById(step.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  });
</script>

<section class="bg-black text-white py-32 px-6 md:px-16 lg:px-24 relative" bind:this={sectionRef}>
  <div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
    
    <!-- Sticky Navigation -->
    <div class="md:w-1/2 md:h-[calc(100vh-8rem)] md:sticky md:top-32 flex flex-col justify-center">
      <div class="space-y-12">
        {#each steps as step, i}
          <div class="transition-opacity duration-500 {i === activeStep ? 'opacity-100' : 'opacity-20'}">
            <p class="text-sm uppercase tracking-wider text-gray-500 mb-3">Step {i + 1}</p>
            <h2 class="text-3xl md:text-5xl font-medium leading-tight">{step.title}</h2>
          </div>
        {/each}
      </div>
    </div>

    <!-- Scrollable Cards -->
    <div class="md:w-1/2 space-y-32 pt-12 md:pt-0">
      {#each steps as step, i}
        <div class="bg-white text-black p-12 md:p-16 min-h-[600px] flex flex-col justify-between scroll-mt-32" id={step.id}>
          <!-- Graphic Placeholder -->
          <div class="flex-1 flex items-center justify-center mb-12 bg-gray-50 min-h-[240px]">
             {#if step.graphic === 'lines'}
                <svg width="200" height="100" viewBox="0 0 200 100" class="opacity-30">
                    <line x1="20" y1="20" x2="20" y2="80" stroke="black" stroke-width="1"/>
                    <line x1="40" y1="20" x2="40" y2="80" stroke="black" stroke-width="1"/>
                    <line x1="60" y1="20" x2="60" y2="80" stroke="black" stroke-width="1"/>
                    <line x1="80" y1="20" x2="80" y2="80" stroke="black" stroke-width="1"/>
                    <line x1="100" y1="20" x2="100" y2="80" stroke="black" stroke-width="1"/>
                </svg>
             {:else if step.graphic === 'curve'}
                <svg width="200" height="100" viewBox="0 0 200 100" class="opacity-30">
                    <path d="M20 80 Q 100 0 180 80" fill="none" stroke="black" stroke-width="1"/>
                </svg>
             {:else if step.graphic === 'circle-top'}
                <svg width="200" height="100" viewBox="0 0 200 100" class="opacity-30">
                    <circle cx="100" cy="100" r="60" fill="none" stroke="black" stroke-width="1"/>
                    <circle cx="100" cy="100" r="40" fill="none" stroke="black" stroke-width="1"/>
                </svg>
             {:else}
                <svg width="200" height="100" viewBox="0 0 200 100" class="opacity-30">
                    <ellipse cx="100" cy="50" rx="80" ry="20" fill="none" stroke="black" stroke-width="1"/>
                    <ellipse cx="100" cy="50" rx="60" ry="15" fill="none" stroke="black" stroke-width="1"/>
                    <ellipse cx="100" cy="50" rx="40" ry="10" fill="none" stroke="black" stroke-width="1"/>
                </svg>
             {/if}
          </div>

          <div>
             <p class="text-lg md:text-xl leading-relaxed mb-12 text-gray-700">{step.text}</p>

             <div class="grid grid-cols-2 gap-6 text-xs uppercase tracking-wider text-gray-400">
               {#each step.tags as tag}
                 <div class="flex items-center gap-2">
                   <span class="w-1 h-1 bg-black rounded-full shrink-0"></span>
                   {tag}
                 </div>
               {/each}
             </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
