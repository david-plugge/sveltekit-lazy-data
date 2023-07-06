<script lang="ts">
	import { initLazy } from '$lib/lazy';

	initLazy();
</script>

<nav>
	<a href="/">Home</a>
	<a href="/greeting">Greeting</a>
</nav>

<slot />
