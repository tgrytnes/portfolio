<script lang="ts">
  import { onMount } from 'svelte';
  export let label = '📐 Open symbol cheat-sheet';

  let open = false;
  let Table;                // will hold the lazily-imported MDX component

  /** Opens the modal and lazy-imports the MDX table */
  async function openModal() {
    if (!Table) {
      const mod = await import('../content/Versicherungsmathematik.md');
      Table = mod.default;
    }
    open = true;
    document.body.style.overflow = 'hidden';   // lock background scroll
  }

  function closeModal() {
    open = false;
    document.body.style.overflow = '';
  }

  onMount(() => {
    // Close with Escape key
    const esc = (e: KeyboardEvent) =>
      e.key === 'Escape' && open && closeModal();
    window.addEventListener('keydown', esc);
    return () => window.removeEventListener('keydown', esc);
  });
</script>

<!-- Built-in trigger button -->
<button
  class="inline-flex items-center gap-2 px-5 py-3 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 transition"
  on:click={openModal}>
  {label}
</button>

{#if open}
  <!-- Backdrop -->
  <div class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
       on:click={closeModal} />

  <!-- Accessible native dialog -->
  <dialog open class="modal max-h-[80vh] w-[min(90vw,60rem)]">
    <button aria-label="Close"
            class="absolute top-4 right-5 text-xl"
            on:click={closeModal}>×</button>

    {#if Table}
      <svelte:component this={Table} />
    {:else}
      <p class="p-8">Loading…</p>
    {/if}
  </dialog>
{/if}

<style>
  dialog.modal {
    border: none;
    border-radius: 0.75rem;
    padding: 2rem;
    overflow: auto;
    max-height: 80vh;
  }
</style>