import {mapActions} from "vuex";

export default {
    async created() {
        console.log("UpdateUBikeListMixin created");
        // 新增刷新
        this.timeoutID = window.setInterval(async () => await this.fetchUBike(), 1000 * 5);
    },
    methods: {
        ...mapActions(["fetchUBikeList"]),
        // FIXME: RRR 與UBike相同命名 那以誰為主？
        async fetchUBikeMix() {
            console.log("UpdateUBikeListMixin excute fetchUBike");
            await this.fetchUBikeList();
        }
    },
    beforeDestroy() {
        console.log("UpdateUBikeListMixin beforeDestroy");

        window.clearInterval(this.timeoutID);
    }
};
