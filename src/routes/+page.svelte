<svelte:head>
	<title>remult-my-db</title>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css" />
</svelte:head>

<h1>Welcome to `remult-my-db`</h1>

<p>You wanna try something cool ?</p>

<div>
	Create a `.env` file with the following content
	<pre>DATABASE_URL = [YOUR_CONNECTION_STRING_HERE]</pre>
</div>

<div>
	Pull your db infos
	<pre>npm exec remult-cli pull</pre>
</div>

<div>
	Start your app
	<pre>npm run dev</pre>
</div>

Go to<a href="/api/admin">/api/admin</a>

<style>
	pre {
		padding: 1rem;
		background-color: black;
	}
</style>
