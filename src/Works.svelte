<script>
	import { repos } from './repos.js'
</script>

<style>
	#card-container {
		margin: 20px;
		display: flex;
		flex-wrap: wrap;
		padding: 25px;
		justify-content: space-between;
	}
	.card {
		width: 100%;
		margin: 15px;
		padding: 15px;
		box-shadow: #cccccc63 1px 1px 6px 2px;
	}
	.title-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	@media only screen and (min-width: 680px) {	
		#right-fixed {
			width: 70vw;
			float: right;
		}
	}
	@media only screen and (min-width: 900px) {	
		.card {
			width: 38%;
		}
	}
	@media only screen and (min-width: 1000px) {	
		.card {
			width: 40%;
		}
	}
	@media only screen and (min-width: 1380px) {	
		.card {
			width: 43%;
		}
	}
</style>

<section id="right-fixed">
  <div id="card-container">
    {#each repos as repo}
      <div class="card">

        <div class="title-container">

          <a href={repo.url}>
            {repo.name}
          </a>
            <a href={repo.github_url}>
              <img src="github-icon.png" alt='github' width=40 />
            </a>
        </div>
        <span>{repo.desc}</span>
      </div>
    {/each}
  </div>
</section>