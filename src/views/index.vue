<template>
    <div class="index">
        <header>
            <vs-toolbar></vs-toolbar>
        </header>
        <section class="vs-flex">
            <!-- <vs-panel-lf></vs-panel-lf> -->
            <vs-panel-main></vs-panel-main>
            <!--<vs-panel-rf></vs-panel-rf> -->
        </section>
    </div>
</template>

<script>
export default {
	name: 'index',
	components: {
		'vs-toolbar': () => import('@/components/vs-toolbar'),
		'vs-panel-lf': () => import('@/components/vs-panel-lf'),
		'vs-panel-main': () => import('@/components/vs-panel-main'),
		'vs-panel-rf': () => import('@/components/vs-panel-rf'),
	},
};
</script>
<style lang="less" scoped="scoped">
.index {
	height: 100%;
	section {
		height: calc(100% - 39px);
	}
}
</style>
