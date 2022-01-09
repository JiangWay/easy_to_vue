import axios from "axios";

export function fetchUBike() {

    const uBikeList = axios.get("https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json").then((response) => { // console.log(response)
        return response.data;
    });
    return uBikeList
}
