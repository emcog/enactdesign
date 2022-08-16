<nav class="secondary-nav">
	<ul>
		<li><a href="">Category 1</a></li>
		<li><a href="">Category 2</a></li>
		<li><a href="">Category 3</a></li>
	</ul>
	<ul>
		<li><a href="">Project 1</a></li>
		<li><a href="">Project 2</a></li>
		<li><a href="">Project 3</a></li>
	</ul>
</nav>

<style lang="scss">
	nav {
		grid-column: 1/4;
		grid-row: 3/-1;
		display: grid;
		//todo fix hard coded values
		grid-template-columns: repeat(2, vars.$xl9);
		margin: 0;
		padding: 0;
	}

	ul:first-child {grid-column: 1/2;}
	ul:nth-child(2) {grid-column: 2/-1}

	ul { list-style: none;
			margin: 0;
			padding: 0;
		display: flex;
		flex-direction: column;

	}

	li {
		display: inline;
	}

	a { text-decoration: none }
</style>