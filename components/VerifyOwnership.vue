<template>
    <div>
        <img src="/images/logo.svg" alt="" width="121" height="32" class="logo">
        <h1 class="is-size-4 has-text-weight-bold">
            Verify Your Node Ownership
        </h1>
        <div v-if="successState" class="has-text-centered has-text-success-dark">
            <img src="/images/check.svg" alt="" width="100" height="100">
            <div class="has-text-weight-bold">
                Great!
            </div>
            The role of "ALICE v2 Node Operator" has been assigned to you on the Muon Discord server.
            You may now return to Discord.
        </div>
        <div v-else>
            <div class="mb-3">
                You need to verify the ownership of your node by signing a message using the address you used to stake
                and add your node to the network.
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
        name: "VerifyOwnership",
        async setup() {
            const route = useRoute();
            return {nodeId: route.query.nodeId, discordId: route.query.discordId}
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
                this.verify("0x2e3c275501d940afe1a95ed41c9f15a31b34e4108dafbd8dc99149a58946e5e669178eef3f1105b91cf26cb6cf6d544044f00a9cea49720a17a51b05d655f7531b", 4);
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
                    let message = `I am the owner of the node #${this.nodeId} on the PION network.`;
                    // let message = `I am the owner of node with ID ${this.nodeId}`;
                    let signature = await web3.eth.personal.sign(message, address, "");
                    this.verify(signature, this.nodeId);
                } else {
                    this.errorMessage = 'Please install MetaMask to use this feature.';
                }
            },
            verify(signature, nodeId) {
                this.isLoading = true;
                $fetch('/api/verify-ownership', {
                    method: "post",
                    body: {
                        signature,
                        nodeId: nodeId,
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
        height: 50px;
    }
</style>