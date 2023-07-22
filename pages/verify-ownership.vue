<template>
    <div class="container">
        <div class="columns is-centered">
            <div class="column is-4-desktop is-6-tablet">
                <br>
                <br>
                <div class="box">
                    <VerifyOwnership/>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    useHead({
        script: [
            {
                src: "/js/web3.min.js",
            },
        ],
    })
</script>
<script>

    import VerifyOwnership from "../components/VerifyOwnership";
    export default {
        components: {VerifyOwnership}
    }
</script>