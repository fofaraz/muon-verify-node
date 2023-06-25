<template>
    <div>
        <img src="/images/logo.svg" alt="" width="121" height="32" class="logo">
        <h1 class="title">
            Presale Participation Verification
        </h1>
        <div v-if="successState" class="has-text-centered has-text-success-dark">
            <img src="/images/check.svg" alt="" width="100" height="100">
            <div class="has-text-weight-bold">
                Great!
            </div>
            Verification successful.
        </div>
        <div v-else>
            <div class="mb-3">
                The role of "Presale Participant" has been assigned to you on the Muon Discord server. You may now return to Discord.
            </div>
            <div v-if="errorMessage" class="has-text-danger-dark my-2">
                {{errorMessage}}
            </div>
            <button class="button is-success is-fullwidth is-medium"
                    :class="{'is-loading':isLoading}"
                    @click="connect">
                Sign
            </button>
        </div>
    </div>
</template>


<script>


    export default {
        name: "VerifyPresale",
        async setup() {
            const route = useRoute();
            return {discordId: route.query.id}
        },
        data() {
            return {
                isLoading: false,
                errorMessage: null,
                successState: false
            }
        },
        methods: {
            async test() {
                this.verify("0x3bdf76eb0ecb111add225f93979f974e7f63757687a0a7a18fdf52243fe917db4cd8690914de836b8b671bd890c2e4cbce96af9549a041f6e20c836c5c889a531c");
            },
            async connect() {
                this.errorMessage = null;
                if (typeof window.ethereum !== 'undefined') {
                    // Initialize web3.js
                    const web3 = new Web3(window.ethereum);
                    // Request MetaMask to enable the current Ethereum account
                    await window.ethereum.enable();

                    const accounts = await web3.eth.getAccounts();
                    console.log("accounts " + accounts);
                    const address = accounts[0];
                    console.log("address " + address);
                    let signature = await web3.eth.personal.sign(`I have participated in the Muon presale using ${address} address.`, address, "");
                    this.verify(signature, address);
                } else {
                    this.errorMessage = 'Please install MetaMask to use this feature.';
                }
            },
            verify(signature, address) {
                this.isLoading = true;
                $fetch('/api/verify-presale', {
                    method: "post",
                    body: {
                        signature,
                        address,
                        discordId: this.discordId
                    }
                })
                    .then((data) => {
                        if (!data.success)
                            this.errorMessage = data.message;
                        else
                            this.successState = true;
                    })
                    .finally(() => {
                        this.isLoading = false;
                    })
            },
        }
    }
</script>


<style scoped>
    .logo {
        height: 60px;
    }
</style>