<script lang="ts">
	import { initLazy } from '$lib/lazy';

	initLazy();
</script>

<nav>
	<a href="/">Home</a>
	<a href="/shared-load">shared load</a>
	<a href="/server-load">server load</a>
</nav>

<slot />
