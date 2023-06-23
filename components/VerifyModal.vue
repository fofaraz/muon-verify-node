<template>
    <div>
        <img src="/images/logo.svg" alt="" width="121" height="32" class="logo">
        <h1 class="title">
            Node Verification
        </h1>
        <div v-if="successState" class="has-text-centered has-text-success-dark">
            <img src="/images/check.svg" alt="" width="100" height="100">
            <div class="has-text-weight-bold">
                Great!
            </div>
            Your ownership successfully verified.
        </div>
        <div v-else>
            <div class="mb-3">
                To verify that you are the owner of the node with
                <span class="tag is-medium">
                ID&nbsp;{{nodeId}}
            </span>
                , you need to sign the verification request using your staker address.

            </div>
            <div v-if="errorMessage" class="has-text-danger-dark my-2">
                {{errorMessage}}
            </div>
            <button class="button is-success is-fullwidth is-medium"
                    :class="{'is-loading':isLoading}"
                    @click="connect">Verify Signature
            </button>
        </div>
    </div>
</template>


<script>


    export default {
        name: "VerifyModal",
        async setup() {
            const route = useRoute();
            const {data} =
                useFetch(`/api/getNodeInfo`, {
                    method: 'post',
                    body: {
                        nodeId: route.params.nodeId
                    }

                });

            return {nodeInfo: data, nodeId: route.params.nodeId}
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
                    const web3 =  new this.$web3(window.ethereum);
                    // Request MetaMask to enable the current Ethereum account
                    await window.ethereum.enable();

                    let address = this.nodeInfo.address;

                    web3.eth.personal.sign(`I am the owner of node ID ${this.nodeId}`, address, (error, signature) => {
                        if (!error) {
                            this.verify(signature);
                        } else {
                            this.errorMessage = error;
                        }
                    });
                } else {
                    this.errorMessage = 'Please install MetaMask to use this feature.';
                }
            },
            verify(signature) {
                this.isLoading = true;
                $fetch('/api/verify', {
                    method: "post",
                    body: {
                        signature,
                        nodeId: this.nodeId
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