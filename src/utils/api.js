// import axios from "axios";
const MAX_NUMBER = 8;
const MIN_NUMBER = 1;
const TIMEOUT_ERROR_TIME = 6000;

// const useMockApi = process.env.VUE_APP_USE_MOCK_API === 'true'
// const fixerAccessKey = process.env.VUE_APP_FIXER_ACCESS_KEY
const useMockApi = true
export function fetchExchangeRate() {
    const delayTime = (Math.floor(Math.random() * MAX_NUMBER) + MIN_NUMBER) * 100;
    return new Promise((resolve, reject) => {
        if (delayTime >= TIMEOUT_ERROR_TIME) {
            reject("API timeout error");
            return;
        }
        setTimeout(() => {
            const exchangeRate = useMockApi ? getMockExchangeRate() : getExchangeRate();
            resolve(exchangeRate);
        }, delayTime);
    });
}
export function fetchUBike() {
    const delayTime = (Math.floor(Math.random() * MAX_NUMBER) + MIN_NUMBER) * 100;
    return new Promise((resolve, reject) => {
        if (delayTime >= TIMEOUT_ERROR_TIME) {
            reject("API timeout error");
            return;
        }
        setTimeout(() => {
            const exchangeRate = useMockApi ? getMockExchangeRate() : getExchangeRate();
            resolve(exchangeRate);
        }, delayTime);
    });
}

function getExchangeRate() {
    // 請自行申請 https://fixer.io/
    // 一個月有免費一百次
    // axios.get("http://data.fixer.io/api/latest?access_key=" + fixerAccessKey + "&format=1").then((response) => {
    //     return response.data;
    // });
    return getMockExchangeRate()
}

function getMockExchangeRate() { // 因為免費方案 基礎是歐元
    const mockApiResponse = {
        "success": true,
        "timestamp": 1641130143,
        "base": "EUR",
        "date": "2022-01-02",
        "rates": {
            "AED": 4.176782,
            "AFN": 117.979297,
            "ALL": 121.277018,
            "AMD": 546.096265,
            "ANG": 2.049808,
            "AOA": 626.101357,
            "ARS": 116.773434,
            "AUD": 1.564485,
            "AWG": 2.046862,
            "AZN": 1.937662,
            "BAM": 1.965137,
            "BBD": 2.296476,
            "BDT": 97.495932,
            "BGN": 1.953969,
            "BHD": 0.428655,
            "BIF": 2278.270857,
            "BMD": 1.137145,
            "BND": 1.535298,
            "BOB": 7.842413,
            "BRL": 6.335383,
            "BSD": 1.137387,
            "BTC": 2.4073437e-5,
            "BTN": 84.571125,
            "BWP": 13.373034,
            "BYN": 2.908273,
            "BYR": 22288.050307,
            "BZD": 2.292658,
            "CAD": 1.437255,
            "CDF": 2277.138169,
            "CHF": 1.035898,
            "CLF": 0.035112,
            "CLP": 968.848312,
            "CNY": 7.227587,
            "COP": 4622.871406,
            "CRC": 730.147918,
            "CUC": 1.137145,
            "CUP": 30.134354,
            "CVE": 110.587841,
            "CZK": 24.871929,
            "DJF": 202.093932,
            "DKK": 7.435897,
            "DOP": 65.243765,
            "DZD": 157.842186,
            "EGP": 17.864285,
            "ERN": 17.05727,
            "ETB": 55.891143,
            "EUR": 1,
            "FJD": 2.41587,
            "FKP": 0.857839,
            "GBP": 0.840369,
            "GEL": 3.519511,
            "GGP": 0.857839,
            "GHS": 6.993888,
            "GIP": 0.857839,
            "GMD": 59.984864,
            "GNF": 10603.881482,
            "GTQ": 8.77767,
            "GYD": 237.84642,
            "HKD": 8.865304,
            "HNL": 27.750716,
            "HRK": 7.516973,
            "HTG": 114.046113,
            "HUF": 369.242932,
            "IDR": 16195.225126,
            "ILS": 3.53953,
            "IMP": 0.857839,
            "INR": 84.733311,
            "IQD": 1660.232319,
            "IRR": 48072.823194,
            "ISK": 147.590544,
            "JEP": 0.857839,
            "JMD": 175.116336,
            "JOD": 0.806468,
            "JPY": 130.89458,
            "KES": 128.668442,
            "KGS": 96.434255,
            "KHR": 4628.182274,
            "KMF": 494.516161,
            "KPW": 1023.430793,
            "KRW": 1351.929888,
            "KWD": 0.34401,
            "KYD": 0.947789,
            "KZT": 494.763156,
            "LAK": 12718.971963,
            "LBP": 1720.501423,
            "LKR": 230.751407,
            "LRD": 165.028274,
            "LSL": 18.137903,
            "LTL": 3.357695,
            "LVL": 0.687848,
            "LYD": 5.23515,
            "MAD": 10.553142,
            "MDL": 20.240156,
            "MGA": 4508.782,
            "MKD": 61.922417,
            "MMK": 2022.309337,
            "MNT": 3250.399028,
            "MOP": 9.136089,
            "MRO": 405.960721,
            "MUR": 49.57634,
            "MVR": 17.516294,
            "MWK": 925.636767,
            "MXN": 23.308415,
            "MYR": 4.749292,
            "MZN": 72.584422,
            "NAD": 18.137898,
            "NGN": 468.447486,
            "NIO": 40.259183,
            "NOK": 10.027286,
            "NPR": 135.313403,
            "NZD": 1.662009,
            "OMR": 0.437796,
            "PAB": 1.137387,
            "PEN": 4.536646,
            "PGK": 4.008481,
            "PHP": 57.994806,
            "PKR": 202.696598,
            "PLN": 4.588727,
            "PYG": 7825.297573,
            "QAR": 4.14039,
            "RON": 4.947838,
            "RSD": 117.564035,
            "RUB": 85.04893,
            "RWF": 1154.202605,
            "SAR": 4.269042,
            "SBD": 9.203967,
            "SCR": 15.472979,
            "SDG": 497.505305,
            "SEK": 10.291223,
            "SGD": 1.533612,
            "SHP": 1.566309,
            "SLL": 12798.57213,
            "SOS": 664.093312,
            "SRD": 23.661765,
            "STD": 23536.614386,
            "SVC": 9.952132,
            "SYP": 2857.069671,
            "SZL": 18.13789,
            "THB": 37.747586,
            "TJS": 12.851765,
            "TMT": 3.99138,
            "TND": 3.270207,
            "TOP": 2.586555,
            "TRY": 15.148032,
            "TTD": 7.725487,
            "TWD": 31.518378,
            "TZS": 2622.257729,
            "UAH": 31.030458,
            "UGX": 4031.995186,
            "USD": 1.137145,
            "UYU": 50.746114,
            "UZS": 12303.913866,
            "VEF": 243156058810.96985,
            "VND": 25989.458662,
            "VUV": 128.784736,
            "WST": 2.956773,
            "XAF": 659.089986,
            "XAG": 0.048844,
            "XAU": 0.000622,
            "XCD": 3.073193,
            "XDR": 0.812663,
            "XOF": 658.979869,
            "XPF": 120.367257,
            "YER": 284.571056,
            "ZAR": 18.138658,
            "ZMK": 10235.677475,
            "ZMW": 18.94874,
            "ZWL": 366.160363
        }
    }

    return mockApiResponse.rates
}
