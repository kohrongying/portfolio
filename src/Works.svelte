<script>
	import { repos } from './repos.js'
</script>

<style>
	#right-fixed {
		width: 70vw;
		float: right;
	}
	#card-container {
		margin: 20px;
		display: flex;
		flex-wrap: wrap;
		padding: 25px;
		justify-content: space-between;
	}
	.card {
		width: 40%;
		margin: 15px;
		padding: 15px;
		box-shadow: #cccccc63 1px 1px 6px 2px;
	}
	.title-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
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