<script>
    let isClick = false;
    function SMButtonClick() {
        isClick = !isClick;
    }
</script>

<h1> Svelte Compiler는 어떻게 실행될까? </h1>
<div class="cl"> { isClick } </div>
<button on:click={SMButtonClick()}>클릭</button>

<style>
    div { background-color: orange; }
    .cl { color: red; }
</style>