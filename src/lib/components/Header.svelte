<script lang="ts">
  export let title: string = "WOODFELL";
  
  const navLinks = [
    { href: "/services", label: "Services" },
    { href: "/process", label: "Process" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" }
  ];
</script>

<header class="fixed top-0 left-0 w-full z-50 px-6 md:px-16 lg:px-24 py-8 flex justify-between items-center text-black bg-white/80 backdrop-blur-sm border-b border-gray-100">
  <a href="/" class="text-xl font-medium tracking-tight hover:text-primary-500 transition-colors">{title}</a>
  
  <nav class="hidden md:flex items-center gap-8">
    {#each navLinks as link}
      <a href={link.href} class="text-sm hover:text-primary-500 transition-colors">
        {link.label}
      </a>
    {/each}
  </nav>
  
  <div class="md:hidden text-right text-xs uppercase tracking-wider text-gray-500">
    <p>Property Asset Management</p>
  </div>
</header>
