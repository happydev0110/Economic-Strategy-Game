
const  countriesData = [
    {iso: "AFG", NAME:	"Afghanistan", "realGdpGrowth":-5.000, "ppp": 78.729, "gdp": 19.132,inflationIndex: 120.671,inflationPctAvg: 5.607, unempPctLabourForce: null},
    {iso: "ALB", NAME:	"Albania", "realGdpGrowth":-3.500, "ppp": 40.737, "gdp": 15.147,inflationIndex: 108.600,inflationPctAvg: 1.603, unempPctLabourForce: 12.500},
    {iso: "DZA", NAME:	"Algeria", "realGdpGrowth":-5.992, "ppp": 491.459, "gdp": 144.294,inflationIndex: 211.180,inflationPctAvg: 2.415, unempPctLabourForce: 14.242},
    {iso: "AGO", NAME:	"Angola", "realGdpGrowth":-3.975, "ppp": 215.105, "gdp": 62.440,inflationIndex: 431.227,inflationPctAvg: 22.277, unempPctLabourForce: null},
    {iso: "ATG", NAME:	"Antigua and Barbuda", "realGdpGrowth":-17.273, "ppp": 1.826, "gdp": 1.390,inflationIndex: 102.109,inflationPctAvg: 1.058, unempPctLabourForce: null},
    {iso: "ARG", NAME:	"Argentina", "realGdpGrowth":-9.956, "ppp": 941.848, "gdp": 388.279,inflationIndex: 619.207,inflationPctAvg: 42.015, unempPctLabourForce: 11.364},
    {iso: "ARM", NAME:	"Armenia", "realGdpGrowth":-7.571, "ppp": 39.380, "gdp": 12.339,inflationIndex: 294.395,inflationPctAvg: 1.230, unempPctLabourForce: 24.169},
    {iso: "ABW", NAME:	"Aruba", "realGdpGrowth":-25.457, "ppp": 3.274, "gdp": 2.458,inflationIndex: 123.593,inflationPctAvg: -1.338, unempPctLabourForce: 13.997},
    {iso: "AUS", NAME:	"Australia", "realGdpGrowth":-2.438, "ppp": 1329.878, "gdp": 1359.326,inflationIndex: 116.150,inflationPctAvg: 0.868, unempPctLabourForce: 6.508},
    {iso: "AUT", NAME:	"Austria", "realGdpGrowth":-6.590, "ppp": 491.500, "gdp": 428.622,inflationIndex: 131.808,inflationPctAvg: 1.391, unempPctLabourForce: 5.333},
    {iso: "AZE", NAME:	"Azerbaijan", "realGdpGrowth":-4.290, "ppp": 145.770, "gdp": 42.607,inflationIndex: 263.348,inflationPctAvg: 2.824, unempPctLabourForce: 6.541},
    {iso: "BHS", NAME:	"The Bahamas", "realGdpGrowth":-16.281, "ppp": 12.762, "gdp": 11.250,inflationIndex: 108.070,inflationPctAvg: 0.039, unempPctLabourForce: 25.571},
    {iso: "BHR", NAME:	"Bahrain", "realGdpGrowth":-5.395, "ppp": 73.804, "gdp": 33.904,inflationIndex: 97.580,inflationPctAvg: -2.324, unempPctLabourForce: 5.039},
    {iso: "BGD", NAME:	"Bangladesh", "realGdpGrowth":3.798, "ppp": 874.047, "gdp": 329.120,inflationIndex: 282.685,inflationPctAvg: 5.648, unempPctLabourForce: null},
    {iso: "BRB", NAME:	"Barbados", "realGdpGrowth":-17.600, "ppp": 3.902, "gdp": 4.365,inflationIndex: 197.208,inflationPctAvg: 2.882, unempPctLabourForce: 17.145},
    {iso: "BLR", NAME:	"Belarus", "realGdpGrowth":-0.900, "ppp": 189.922, "gdp": 60.201,inflationIndex: 869.354,inflationPctAvg: 5.536, unempPctLabourForce: 4.100},
    {iso: "BEL", NAME:	"Belgium", "realGdpGrowth":-6.424, "ppp": 588.752, "gdp": 513.087,inflationIndex: 108.227,inflationPctAvg: 0.428, unempPctLabourForce: 5.608},
    {iso: "BLZ", NAME:	"Belize", "realGdpGrowth":-14.089, "ppp": 2.531, "gdp": 1.651,inflationIndex: 136.415,inflationPctAvg: 0.120, unempPctLabourForce: 23.699},
    {iso: "BEN", NAME:	"Benin", "realGdpGrowth":1.997, "ppp": 41.742, "gdp": 15.193,inflationIndex: 104.121,inflationPctAvg: 3.000, unempPctLabourForce: null},
    {iso: "BTN", NAME:	"Bhutan", "realGdpGrowth":-0.817, "ppp": 8.988, "gdp": 2.503,inflationIndex: 249.690,inflationPctAvg: 4.150, unempPctLabourForce: null},
    {iso: "BOL", NAME:	"Bolivia", "realGdpGrowth":-7.700, "ppp": 97.804, "gdp": 39.381,inflationIndex: 104.422,inflationPctAvg: 0.942, unempPctLabourForce: 8.000},
    {iso: "BIH", NAME:	"Bosnia and Herzegovina", "realGdpGrowth":-5.500, "ppp": 49.339, "gdp": 19.389,inflationIndex: 100.597,inflationPctAvg: -0.577, unempPctLabourForce: 19.000},
    {iso: "BWA", NAME:	"Botswana", "realGdpGrowth":-8.250, "ppp": 39.638, "gdp": 15.910,inflationIndex: 347.227,inflationPctAvg: 1.994, unempPctLabourForce: null},
    {iso: "BRA", NAME:	"Brazil", "realGdpGrowth":-4.059, "ppp": 3153.630, "gdp": 1434.084,inflationIndex: 35457162626753.900,inflationPctAvg: 3.212, unempPctLabourForce: 13.242},
    {iso: "BRN", NAME:	"Brunei Darussalam", "realGdpGrowth":1.203, "ppp": 28.726, "gdp": 12.016,inflationIndex: 100.899,inflationPctAvg: 1.937, unempPctLabourForce: 6.822},
    {iso: "BGR", NAME:	"Bulgaria", "realGdpGrowth":-3.844, "ppp": 164.623, "gdp": 68.561,inflationIndex: 106.274,inflationPctAvg: 1.219, unempPctLabourForce: 5.207},
    {iso: "BFA", NAME:	"Burkina Faso", "realGdpGrowth":0.793, "ppp": 47.313, "gdp": 16.541,inflationIndex: 104.153,inflationPctAvg: 1.885, unempPctLabourForce: null},
    {iso: "BDI", NAME:	"Burundi", "realGdpGrowth":-1.282, "ppp": 9.023, "gdp": 3.011,inflationIndex: 118.983,inflationPctAvg: 7.305, unempPctLabourForce: null},
    {iso: "CPV", NAME:	"Cabo Verde", "realGdpGrowth":-14.029, "ppp": 3.577, "gdp": 1.753,inflationIndex: 101.718,inflationPctAvg: 0.605, unempPctLabourForce: 8.500},
    {iso: "KHM", NAME:	"Cambodia", "realGdpGrowth":-3.532, "ppp": 73.609, "gdp": 25.953,inflationIndex: 182.645,inflationPctAvg: 2.940, unempPctLabourForce: null},
    {iso: "CMR", NAME:	"Cameroon", "realGdpGrowth":-2.769, "ppp": 96.798, "gdp": 39.020,inflationIndex: 262.263,inflationPctAvg: 2.801, unempPctLabourForce: null},
    {iso: "CAN", NAME:	"Canada", "realGdpGrowth":-5.403, "ppp": 1850.066, "gdp": 1643.408,inflationIndex: 136.958,inflationPctAvg: 0.717, unempPctLabourForce: 9.600},
    {iso: "CAF", NAME:	"Central African Republic", "realGdpGrowth":-0.015, "ppp": 4.731, "gdp": 2.366,inflationIndex: 214.034,inflationPctAvg: 2.304, unempPctLabourForce:	  null	},
    {iso: "TCD", NAME:	"Chad", "realGdpGrowth":-0.887, "ppp": 26.462, "gdp": 10.742,inflationIndex: 108.949,inflationPctAvg: 3.482, unempPctLabourForce: null},
    {iso: "CHL", NAME:	"Chile", "realGdpGrowth":-5.841, "ppp": 454.668, "gdp": 252.756,inflationIndex: 105.369,inflationPctAvg: 3.044, unempPctLabourForce: 10.778},
    {iso: "CHN", NAME:	"China", "realGdpGrowth":2.270, "ppp": 24142.830, "gdp": 14722.837,inflationIndex: 111.444,inflationPctAvg: 2.390, unempPctLabourForce: 3.800},
    {iso: "COL", NAME:	"Colombia", "realGdpGrowth":-6.847, "ppp": 728.767, "gdp": 271.463,inflationIndex: 105.145,inflationPctAvg: 2.522, unempPctLabourForce: 16.083},
    {iso: "COM", NAME:	"Comoros", "realGdpGrowth":-0.503, "ppp": 2.735, "gdp": 1.222,inflationIndex: 177.638,inflationPctAvg: 1.088, unempPctLabourForce: null},
    {iso: "COD", NAME:	"Democratic Republic of the Congo", "realGdpGrowth":-0.064, "ppp": 100.452, "gdp": 49.077,inflationIndex: 5764.297,inflationPctAvg: 11.349, unempPctLabourForce: null},
    {iso: "COG", NAME:	"Republic of Congo", "realGdpGrowth":-7.813, "ppp": 19.605, "gdp": 10.232,inflationIndex: 153.682,inflationPctAvg: 2.386, unempPctLabourForce:	  null	},
    {iso: "CRI", NAME:	"Costa Rica", "realGdpGrowth":-4.796, "ppp": 102.517, "gdp": 61.450,inflationIndex: 99.302,inflationPctAvg: 0.724, unempPctLabourForce: 19.980},
    {iso: "CIV", NAME:	"Côte d'Ivoire", "realGdpGrowth":2.277, "ppp": 144.631, "gdp": 61.402,inflationIndex: 155.281,inflationPctAvg: 2.500, unempPctLabourForce: null},
    {iso: "HRV", NAME:	"Croatia", "realGdpGrowth":-9.000, "ppp": 112.123, "gdp": 56.925,inflationIndex: 102.538,inflationPctAvg: 0.258, unempPctLabourForce: 9.188},
    {iso: "CYP", NAME:	"Cyprus", "realGdpGrowth":-5.106, "ppp": 35.531, "gdp": 23.967,inflationIndex: 99.677,inflationPctAvg: -1.097, unempPctLabourForce: 7.600},
    {iso: "CZE", NAME:	"Czech Republic", "realGdpGrowth":-5.556, "ppp": 434.364, "gdp": 241.455,inflationIndex: 111.766,inflationPctAvg: 3.161, unempPctLabourForce: 2.700},
    {iso: "DNK", NAME:	"Denmark", "realGdpGrowth":-3.287, "ppp": 343.152, "gdp": 352.243,inflationIndex: 102.875,inflationPctAvg: 0.333, unempPctLabourForce: 5.642},
    {iso: "DJI", NAME:	"Djibouti", "realGdpGrowth":-1.000, "ppp": 5.649, "gdp": 3.408,inflationIndex: 111.577,inflationPctAvg: 2.878, unempPctLabourForce: null},
    {iso: "DMA", NAME:	"Dominica", "realGdpGrowth":-10.445, "ppp": 0.829, "gdp": 0.517,inflationIndex: 104.959,inflationPctAvg: -0.295, unempPctLabourForce: null},
    {iso: "DOM", NAME:	"Dominican Republic", "realGdpGrowth":-6.731, "ppp": 194.555, "gdp": 78.731,inflationIndex: 100.753,inflationPctAvg: 3.783, unempPctLabourForce: 5.732},
    {iso: "ECU", NAME:	"Ecuador", "realGdpGrowth":-7.500, "ppp": 192.770, "gdp": 96.665,inflationIndex: 105.129,inflationPctAvg: -0.339, unempPctLabourForce: 5.267},
    {iso: "EGY", NAME:	"Egypt", "realGdpGrowth":3.570, "ppp": 1290.221, "gdp": 361.847,inflationIndex: 105.692,inflationPctAvg: 5.700, unempPctLabourForce: 8.296},
    {iso: "SLV", NAME:	"El Salvador", "realGdpGrowth":-8.580, "ppp": 54.621, "gdp": 24.609,inflationIndex: 112.683,inflationPctAvg: 0.214, unempPctLabourForce: 9.044},
    {iso: "GNQ", NAME:	"Equatorial Guinea", "realGdpGrowth":-5.778, "ppp": 25.015, "gdp": 9.524,inflationIndex: 145.078,inflationPctAvg: 4.798, unempPctLabourForce: null},
    {iso: "ERI", NAME:	"Eritrea", "realGdpGrowth":-0.627, "ppp": 6.456, "gdp": 2.086,inflationIndex: 536.442,inflationPctAvg: 4.914, unempPctLabourForce: null},
    {iso: "EST", NAME:	"Estonia", "realGdpGrowth":-2.932, "ppp": 50.162, "gdp": 31.005,inflationIndex: 109.795,inflationPctAvg: -0.634, unempPctLabourForce: 6.844},
    {iso: "SWZ", NAME:	"Eswatini", "realGdpGrowth":-3.342, "ppp": 10.094, "gdp": 3.949,inflationIndex: 348.926,inflationPctAvg: 3.872, unempPctLabourForce: null},
    {iso: "ETH", NAME:	"Ethiopia", "realGdpGrowth":6.057, "ppp": 282.612, "gdp": 96.611,inflationIndex: 175.618,inflationPctAvg: 20.354, unempPctLabourForce: null},
    {iso: "FJI", NAME:	"Fiji", "realGdpGrowth":-19.000, "ppp": 10.406, "gdp": 4.316,inflationIndex: 120.117,inflationPctAvg: -2.600, unempPctLabourForce: 13.351},
    {iso: "FIN", NAME:	"Finland", "realGdpGrowth":-2.893, "ppp": 275.454, "gdp": 270.637,inflationIndex: 103.976,inflationPctAvg: 0.383, unempPctLabourForce: 7.783},
    {iso: "FRA", NAME:	"France", "realGdpGrowth":-8.232, "ppp": 2999.732, "gdp": 2598.907,inflationIndex: 105.494,inflationPctAvg: 0.525, unempPctLabourForce: 8.175},
    {iso: "GAB", NAME:	"Gabon", "realGdpGrowth":-1.757, "ppp": 33.661, "gdp": 15.642,inflationIndex: 139.448,inflationPctAvg: 1.335, unempPctLabourForce: null},
    {iso: "GMB", NAME:	"The Gambia", "realGdpGrowth":0.000, "ppp": 5.505, "gdp": 1.913,inflationIndex: 546.453,inflationPctAvg: 5.931, unempPctLabourForce: null},
    {iso: "GEO", NAME:	"Georgia", "realGdpGrowth":-6.100, "ppp": 55.250, "gdp": 15.733,inflationIndex: 140.564,inflationPctAvg: 5.202, unempPctLabourForce: null},
    {iso: "DEU", NAME:	"Germany", "realGdpGrowth":-4.903, "ppp": 4496.784, "gdp": 3803.014,inflationIndex: 105.842,inflationPctAvg: 0.371, unempPctLabourForce: 4.183},
    {iso: "GHA", NAME:	"Ghana", "realGdpGrowth":0.880, "ppp": 175.212, "gdp": 68.418,inflationIndex: 257.758,inflationPctAvg: 9.885, unempPctLabourForce: null},
    {iso: "GRC", NAME:	"Greece", "realGdpGrowth":-8.248, "ppp": 307.909, "gdp": 189.259,inflationIndex: 119.943,inflationPctAvg: -1.262, unempPctLabourForce: 16.400},
    {iso: "GRD", NAME:	"Grenada", "realGdpGrowth":-13.464, "ppp": 1.742, "gdp": 1.037,inflationIndex: 111.093,inflationPctAvg: -0.742, unempPctLabourForce: null},
    {iso: "GTM", NAME:	"Guatemala", "realGdpGrowth":-1.500, "ppp": 149.026, "gdp": 77.073,inflationIndex: 143.671,inflationPctAvg: 2.437, unempPctLabourForce: null},
    {iso: "GIN", NAME:	"Guinea", "realGdpGrowth":5.225, "ppp": 36.373, "gdp": 15.455,inflationIndex: 2055.083,inflationPctAvg: 10.602, unempPctLabourForce: null},
    {iso: "GNB", NAME:	"Guinea-Bissau", "realGdpGrowth":-2.400, "ppp": 4.261, "gdp": 1.434,inflationIndex: 106.251,inflationPctAvg: 1.463, unempPctLabourForce: null},
    {iso: "GUY", NAME:	"Guyana", "realGdpGrowth":43.384, "ppp": 15.490, "gdp": 5.766,inflationIndex: 119.476,inflationPctAvg: 0.722, unempPctLabourForce: null},
    {iso: "HTI", NAME:	"Haiti", "realGdpGrowth":-3.700, "ppp": 33.244, "gdp": 14.286,inflationIndex: 144.225,inflationPctAvg: 22.945, unempPctLabourForce: null},
    {iso: "HND", NAME:	"Honduras", "realGdpGrowth":-8.000, "ppp": 54.180, "gdp": 23.691,inflationIndex: 342.567,inflationPctAvg: 3.468, unempPctLabourForce: 6.184},
    {iso: "HKG", NAME:	"Hong Kong SAR", "realGdpGrowth":-6.142, "ppp": 444.862, "gdp": 349.445,inflationIndex: 110.467,inflationPctAvg: 0.325, unempPctLabourForce: 5.853},
    {iso: "HUN", NAME:	"Hungary", "realGdpGrowth":-4.962, "ppp": 322.698, "gdp": 154.562,inflationIndex: 125.812,inflationPctAvg: 3.319, unempPctLabourForce: 4.115},
    {iso: "ISL", NAME:	"Iceland", "realGdpGrowth":-6.649, "ppp": 20.379, "gdp": 21.715,inflationIndex: 170.672,inflationPctAvg: 2.851, unempPctLabourForce: 6.433},
    {iso: "IND", NAME:	"India", "realGdpGrowth":-7.965, "ppp": 8907.116, "gdp": 2708.770,inflationIndex: 164.842,inflationPctAvg: 6.195, unempPctLabourForce: null},
    {iso: "IDN", NAME:	"Indonesia", "realGdpGrowth":-2.070, "ppp": 3302.410, "gdp": 1059.638,inflationIndex: 104.909,inflationPctAvg: 2.033, unempPctLabourForce: 7.070},
    {iso: "IRN", NAME:	"Islamic Republic of Iran", "realGdpGrowth":1.516, "ppp": 1100.090, "gdp": 635.724,inflationIndex: 262.392,inflationPctAvg: 36.500, unempPctLabourForce: 10.823},
    {iso: "IRQ", NAME:	"Iraq", "realGdpGrowth":-10.885, "ppp": 401.443, "gdp": 172.119,inflationIndex: 123.382,inflationPctAvg: 0.573, unempPctLabourForce: null},
    {iso: "IRL", NAME:	"Ireland", "realGdpGrowth":2.475, "ppp": 471.357, "gdp": 418.716,inflationIndex: 101.175,inflationPctAvg: -0.459, unempPctLabourForce: 5.625},
    {iso: "ISR", NAME:	"Israel", "realGdpGrowth":-2.377, "ppp": 373.689, "gdp": 402.639,inflationIndex: 99.958,inflationPctAvg: -0.587, unempPctLabourForce: 4.300},
    {iso: "ITA", NAME:	"Italy", "realGdpGrowth":-8.871, "ppp": 2461.673, "gdp": 1884.935,inflationIndex: 103.025,inflationPctAvg: -0.145, unempPctLabourForce: 9.120},
    {iso: "JAM", NAME:	"Jamaica", "realGdpGrowth":-10.223, "ppp": 27.304, "gdp": 13.948,inflationIndex: 105.210,inflationPctAvg: 5.210, unempPctLabourForce: null},
    {iso: "JPN", NAME:	"Japan", "realGdpGrowth":-4.830, "ppp": 5313.023, "gdp": 5048.688,inflationIndex: 101.800,inflationPctAvg: -0.017, unempPctLabourForce: 2.792},
    {iso: "JOR", NAME:	"Jordan", "realGdpGrowth":-1.973, "ppp": 105.206, "gdp": 43.481,inflationIndex: 101.077,inflationPctAvg: 0.397, unempPctLabourForce: 22.700},
    {iso: "KAZ", NAME:	"Kazakhstan", "realGdpGrowth":-2.598, "ppp": 501.296, "gdp": 164.792,inflationIndex: 457.279,inflationPctAvg: 6.799, unempPctLabourForce: 5.479},
    {iso: "KEN", NAME:	"Kenya", "realGdpGrowth":-0.127, "ppp": 239.836, "gdp": 99.287,inflationIndex: 392.879,inflationPctAvg: 5.290, unempPctLabourForce: null},
    {iso: "KIR", NAME:	"Kiribati", "realGdpGrowth":-0.476, "ppp": 0.261, "gdp": 0.200,inflationIndex: 128.653,inflationPctAvg: 2.482, unempPctLabourForce: null},
    {iso: "KOR", NAME:	"Korea", "realGdpGrowth":-0.958, "ppp": 2310.430, "gdp": 1630.871,inflationIndex: 105.417,inflationPctAvg: 0.537, unempPctLabourForce: 3.942},
    {iso: "UVK", NAME:	"Kosovo", "realGdpGrowth":-6.000, "ppp": 20.375, "gdp": 7.789,inflationIndex: 105.480,inflationPctAvg: 0.168, unempPctLabourForce: 25.600},
    {iso: "KWT", NAME:	"Kuwait", "realGdpGrowth":-8.134, "ppp": 203.259, "gdp": 107.936,inflationIndex: 187.829,inflationPctAvg: 2.102, unempPctLabourForce: null},
    {iso: "KGZ", NAME:	"Kyrgyz Republic", "realGdpGrowth":-7.980, "ppp": 32.819, "gdp": 7.471,inflationIndex: 165.523,inflationPctAvg: 6.323, unempPctLabourForce: 6.605},
    {iso: "LAO", NAME:	"Lao P.D.R.", "realGdpGrowth":-0.435, "ppp": 58.937, "gdp": 19.078,inflationIndex: 113.148,inflationPctAvg: 5.071, unempPctLabourForce: null},
    {iso: "LVA", NAME:	"Latvia", "realGdpGrowth":-3.624, "ppp": 60.073, "gdp": 33.478,inflationIndex: 108.618,inflationPctAvg: 0.081, unempPctLabourForce: 8.173},
    {iso: "LBN", NAME:	"Lebanon", "realGdpGrowth":-25.000, "ppp": 78.931, "gdp": 19.126,inflationIndex: 233.646,inflationPctAvg: 88.176, unempPctLabourForce: null},
    {iso: "LSO", NAME:	"Lesotho", "realGdpGrowth":-4.543, "ppp": 5.604, "gdp": 2.068,inflationIndex: 120.766,inflationPctAvg: 4.936, unempPctLabourForce: null},
    {iso: "LBR", NAME:	"Liberia", "realGdpGrowth":-2.967, "ppp": 7.308, "gdp": 3.033,inflationIndex: 856.247,inflationPctAvg: 16.953, unempPctLabourForce: null},
    {iso: "LBY", NAME:	"Libya", "realGdpGrowth":-59.719, "ppp": 39.153, "gdp": 21.797,inflationIndex: 386.308,inflationPctAvg: 22.256, unempPctLabourForce: null},
    {iso: "LTU", NAME:	"Lithuania", "realGdpGrowth":-0.823, "ppp": 108.555, "gdp": 55.688,inflationIndex: 110.628,inflationPctAvg: 1.062, unempPctLabourForce: 8.850},
    {iso: "LUX", NAME:	"Luxembourg", "realGdpGrowth":-1.314, "ppp": 73.882, "gdp": 73.205,inflationIndex: 105.933,inflationPctAvg: 0.004, unempPctLabourForce: 6.327},
    {iso: "MAC", NAME:	"Macao SAR", "realGdpGrowth":-56.306, "ppp": 37.539, "gdp": 24.333,inflationIndex: 151.039,inflationPctAvg: 0.811, unempPctLabourForce: 2.900},
    {iso: "MDG", NAME:	"Madagascar", "realGdpGrowth":-4.239, "ppp": 44.099, "gdp": 13.837,inflationIndex: 129.775,inflationPctAvg: 4.188, unempPctLabourForce:	  null	},
    {iso: "MWI", NAME:	"Malawi", "realGdpGrowth":0.600, "ppp": 20.733, "gdp": 8.488,inflationIndex: 129.776,inflationPctAvg: 8.638, unempPctLabourForce: null},
    {iso: "MYS", NAME:	"Malaysia", "realGdpGrowth":-5.588, "ppp": 902.595, "gdp": 338.276,inflationIndex: 120.100,inflationPctAvg: -1.139, unempPctLabourForce: 4.525},
    {iso: "MDV", NAME:	"Maldives", "realGdpGrowth":-32.243, "ppp": 7.412, "gdp": 3.755,inflationIndex: 97.919,inflationPctAvg: -1.594, unempPctLabourForce: null},
    {iso: "MLI", NAME:	"Mali", "realGdpGrowth":-1.983, "ppp": 47.195, "gdp": 17.639,inflationIndex: 143.456,inflationPctAvg: 0.627, unempPctLabourForce: null},
    {iso: "MLT", NAME:	"Malta", "realGdpGrowth":-7.001, "ppp": 22.052, "gdp": 14.559,inflationIndex: 106.368,inflationPctAvg: 0.787, unempPctLabourForce: 4.292},
    {iso: "MHL", NAME:	"Marshall Islands", "realGdpGrowth":-3.300, "ppp": 0.209, "gdp": 0.234,inflationIndex: 147.856,inflationPctAvg: 0.614, unempPctLabourForce:	  null	},
    {iso: "MRT", NAME:	"Mauritania", "realGdpGrowth":-2.161, "ppp": 24.195, "gdp": 8.176,inflationIndex: 178.990,inflationPctAvg: 2.264, unempPctLabourForce: null},
    {iso: "MUS", NAME:	"Mauritius", "realGdpGrowth":-15.800, "ppp": 25.712, "gdp": 11.396,inflationIndex: 106.314,inflationPctAvg: 2.520, unempPctLabourForce: 10.900},
    {iso: "MEX", NAME:	"Mexico", "realGdpGrowth":-8.239, "ppp": 2444.680, "gdp": 1076.163,inflationIndex: 107.430,inflationPctAvg: 3.399, unempPctLabourForce: 4.420},
    {iso: "FSM", NAME:	"Micronesia", "realGdpGrowth":-1.639, "ppp": 0.361, "gdp": 0.408,inflationIndex: 132.095,inflationPctAvg: 0.484, unempPctLabourForce: null},
    {iso: "MDA", NAME:	"Moldova", "realGdpGrowth":-7.500, "ppp": 33.745, "gdp": 11.500,inflationIndex: 57723.934,inflationPctAvg: 3.768, unempPctLabourForce: 8.000},
    {iso: "MNG", NAME:	"Mongolia", "realGdpGrowth":-5.336, "ppp": 39.670, "gdp": 13.137,inflationIndex: 124.883,inflationPctAvg: 3.717, unempPctLabourForce: 7.500},
    {iso: "MNE", NAME:	"Montenegro", "realGdpGrowth":-15.205, "ppp": 11.994, "gdp": 4.790,inflationIndex: 307.128,inflationPctAvg: -0.238, unempPctLabourForce:	  null	},
    {iso: "MAR", NAME:	"Morocco", "realGdpGrowth":-7.021, "ppp": 273.950, "gdp": 113.548,inflationIndex: 102.451,inflationPctAvg: 0.622, unempPctLabourForce: 11.900},
    {iso: "MOZ", NAME:	"Mozambique", "realGdpGrowth":-0.500, "ppp": 40.843, "gdp": 14.385,inflationIndex: 126.809,inflationPctAvg: 3.141, unempPctLabourForce: null},
    {iso: "MMR", NAME:	"Myanmar", "realGdpGrowth":3.189, "ppp": 278.848, "gdp": 81.257,inflationIndex: 161.137,inflationPctAvg: 5.725, unempPctLabourForce: null},
    {iso: "NAM", NAME:	"Namibia", "realGdpGrowth":-7.243, "ppp": 23.776, "gdp": 10.564,inflationIndex: 141.119,inflationPctAvg: 2.568, unempPctLabourForce: null},
    {iso: "NRU", NAME:	"Nauru", "realGdpGrowth":0.706, "ppp": 0.127, "gdp": 0.114,inflationIndex: 129.616,inflationPctAvg: 0.891, unempPctLabourForce: null},
    {iso: "NPL", NAME:	"Nepal", "realGdpGrowth":-1.878, "ppp": 117.055, "gdp": 34.465,inflationIndex: 132.841,inflationPctAvg: 6.150, unempPctLabourForce: null},
    {iso: "NLD", NAME:	"Netherlands", "realGdpGrowth":-3.796, "ppp": 1001.531, "gdp": 909.503,inflationIndex: 106.949,inflationPctAvg: 1.117, unempPctLabourForce: 3.832},
    {iso: "NZL", NAME:	"New Zealand", "realGdpGrowth":-2.991, "ppp": 213.863, "gdp": 209.329,inflationIndex: 150.912,inflationPctAvg: 1.715, unempPctLabourForce: 4.600},
    {iso: "NIC", NAME:	"Nicaragua", "realGdpGrowth":-3.000, "ppp": 36.216, "gdp": 12.146,inflationIndex: 234.686,inflationPctAvg: 3.705, unempPctLabourForce: 8.061},
    {iso: "NER", NAME:	"Niger", "realGdpGrowth":1.200, "ppp": 30.469, "gdp": 13.698,inflationIndex: 104.303,inflationPctAvg: 2.762, unempPctLabourForce: null},
    {iso: "NGA", NAME:	"Nigeria", "realGdpGrowth":-1.794, "ppp": 1069.200, "gdp": 429.423,inflationIndex: 329.985,inflationPctAvg: 13.247, unempPctLabourForce: null},
    {iso: "MKD", NAME:	"North Macedonia", "realGdpGrowth":-4.532, "ppp": 34.698, "gdp": 12.288,inflationIndex: 114.757,inflationPctAvg: 1.200, unempPctLabourForce: 16.375},
    {iso: "NOR", NAME:	"Norway", "realGdpGrowth":-0.762, "ppp": 354.592, "gdp": 362.009,inflationIndex: 121.817,inflationPctAvg: 1.287, unempPctLabourForce: 4.595},
    {iso: "OMN", NAME:	"Oman", "realGdpGrowth":-6.367, "ppp": 134.151, "gdp": 63.192,inflationIndex: 157.840,inflationPctAvg: -0.904, unempPctLabourForce: null},
    {iso: "PAK", NAME:	"Pakistan", "realGdpGrowth":-0.385, "ppp": 1074.141, "gdp": 262.799,inflationIndex: 129.763,inflationPctAvg: 10.741, unempPctLabourForce: 4.500},
    {iso: "PLW", NAME:	"Palau", "realGdpGrowth":-10.286, "ppp": 0.252, "gdp": 0.254,inflationIndex: 102.958,inflationPctAvg: 0.000, unempPctLabourForce: null},
    {iso: "PAN", NAME:	"Panama", "realGdpGrowth":-17.949, "ppp": 115.532, "gdp": 52.938,inflationIndex: 103.229,inflationPctAvg: -1.550, unempPctLabourForce: 18.548},
    {iso: "PNG", NAME:	"Papua New Guinea", "realGdpGrowth":-3.879, "ppp": 33.660, "gdp": 23.575,inflationIndex: 759.385,inflationPctAvg: 4.992, unempPctLabourForce: null},
    {iso: "PRY", NAME:	"Paraguay", "realGdpGrowth":-0.900, "ppp": 93.422, "gdp": 35.875,inflationIndex: 106.517,inflationPctAvg: 1.768, unempPctLabourForce: 6.559},
    {iso: "PER", NAME:	"Peru", "realGdpGrowth":-11.115, "ppp": 397.612, "gdp": 203.772,inflationIndex: 134.175,inflationPctAvg: 1.827, unempPctLabourForce: 13.600},
    {iso: "PHL", NAME:	"Philippines", "realGdpGrowth":-9.513, "ppp": 919.368, "gdp": 362.243,inflationIndex: 123.333,inflationPctAvg: 2.635, unempPctLabourForce: 10.400},
    {iso: "POL", NAME:	"Poland", "realGdpGrowth":-2.723, "ppp": 1294.478, "gdp": 594.180,inflationIndex: 182.531,inflationPctAvg: 3.400, unempPctLabourForce: 3.163},
    {iso: "PRT", NAME:	"Portugal", "realGdpGrowth":-7.587, "ppp": 350.208, "gdp": 231.348,inflationIndex: 103.579,inflationPctAvg: -0.121, unempPctLabourForce: 6.794},
    {iso: "PRI", NAME:	"Puerto Rico", "realGdpGrowth":-7.500, "ppp": 107.574, "gdp": 95.851,inflationIndex: 117.945,inflationPctAvg: -1.301, unempPctLabourForce: 8.600},
    {iso: "QAT", NAME:	"Qatar", "realGdpGrowth":-2.616, "ppp": 261.979, "gdp": 146.090,inflationIndex: 96.600,inflationPctAvg: -2.719, unempPctLabourForce: null},
    {iso: "ROU", NAME:	"Romania", "realGdpGrowth":-3.900, "ppp": 589.707, "gdp": 247.214,inflationIndex: 127.092,inflationPctAvg: 2.646, unempPctLabourForce: 5.000},
    {iso: "RUS", NAME:	"Russia", "realGdpGrowth":-3.056, "ppp": 4096.528, "gdp": 1473.583,inflationIndex: 123.314,inflationPctAvg: 3.378, unempPctLabourForce: 5.783},
    {iso: "RWA", NAME:	"Rwanda", "realGdpGrowth":-0.199, "ppp": 29.594, "gdp": 10.372,inflationIndex: 128.167,inflationPctAvg: 8.000, unempPctLabourForce: null},
    {iso: "WSM", NAME:	"Samoa", "realGdpGrowth":-3.154, "ppp": 1.147, "gdp": 0.804,inflationIndex: 118.994,inflationPctAvg: 1.480, unempPctLabourForce: null},
    {iso: "SMR", NAME:	"San Marino", "realGdpGrowth":-9.745, "ppp": 1.962, "gdp": 1.505,inflationIndex: 112.718,inflationPctAvg: 0.215, unempPctLabourForce: 7.342},
    {iso: "STP", NAME:	"São Tomé and Príncipe", "realGdpGrowth":-6.500, "ppp": 0.835, "gdp": 0.418,inflationIndex: 140.490,inflationPctAvg: 9.808, unempPctLabourForce: null},
    {iso: "SAU", NAME:	"Saudi Arabia", "realGdpGrowth":-4.147, "ppp": 1627.305, "gdp": 701.467,inflationIndex: 101.283,inflationPctAvg: 3.438, unempPctLabourForce: null},
    {iso: "SEN", NAME:	"Senegal", "realGdpGrowth":0.828, "ppp": 58.267, "gdp": 24.448,inflationIndex: 107.407,inflationPctAvg: 2.533, unempPctLabourForce: null},
    {iso: "SRB", NAME:	"Serbia", "realGdpGrowth":-0.980, "ppp": 132.792, "gdp": 52.960,inflationIndex: 200.201,inflationPctAvg: 1.672, unempPctLabourForce: 13.318},
    {iso: "SYC", NAME:	"Seychelles", "realGdpGrowth":-13.359, "ppp": 2.471, "gdp": 1.131,inflationIndex: 113.180,inflationPctAvg: 1.203, unempPctLabourForce: 3.000},
    {iso: "SLE", NAME:	"Sierra Leone", "realGdpGrowth":-2.249, "ppp": 13.772, "gdp": 4.204,inflationIndex: 312.091,inflationPctAvg: 15.696, unempPctLabourForce: null},
    {iso: "SGP", NAME:	"Singapore", "realGdpGrowth":-5.391, "ppp": 560.205, "gdp": 339.981,inflationIndex: 99.818,inflationPctAvg: -0.182, unempPctLabourForce: 3.050},
    {iso: "SVK", NAME:	"Slovak Republic", "realGdpGrowth":-5.200, "ppp": 178.526, "gdp": 104.088,inflationIndex: 108.462,inflationPctAvg: 2.010, unempPctLabourForce: 6.675},
    {iso: "SVN", NAME:	"Slovenia", "realGdpGrowth":-5.532, "ppp": 81.334, "gdp": 52.838,inflationIndex: 104.763,inflationPctAvg: -0.051, unempPctLabourForce: 5.132},
    {iso: "SLB", NAME:	"Solomon Islands", "realGdpGrowth":-4.320, "ppp": 1.608, "gdp": 1.567,inflationIndex: 108.780,inflationPctAvg: 3.436, unempPctLabourForce: null},
    {iso: "SOM", NAME:	"Somalia", "realGdpGrowth":-1.500, "ppp": 13.910, "gdp": 4.920,inflationIndex: null,inflationPctAvg: null, unempPctLabourForce: null},
    {iso: "ZAF", NAME:	"South Africa", "realGdpGrowth":-6.960, "ppp": 717.396, "gdp": 302.114,inflationIndex: 115.867,inflationPctAvg: 3.268, unempPctLabourForce: 29.175},
    {iso: "SSD", NAME:	"South Sudan", "realGdpGrowth":-6.589, "ppp": 10.904, "gdp": 4.074,inflationIndex: 13049.363,inflationPctAvg: 37.988, unempPctLabourForce: null},
    {iso: "ESP", NAME:	"Spain", "realGdpGrowth":-10.964, "ppp": 1808.666, "gdp": 1278.208,inflationIndex: 104.052,inflationPctAvg: -0.323, unempPctLabourForce: 15.533},
    {iso: "LKA", NAME:	"Sri Lanka", "realGdpGrowth":-3.569, "ppp": 289.891, "gdp": 80.700,inflationIndex: 135.367,inflationPctAvg: 4.557, unempPctLabourForce: 5.800},
    {iso: "KNA", NAME:	"St. Kitts and Nevis", "realGdpGrowth":-18.650, "ppp": 1.199, "gdp": 0.852,inflationIndex: 105.261,inflationPctAvg: -0.589, unempPctLabourForce: null},
    {iso: "LCA", NAME:	"St. Lucia", "realGdpGrowth":-18.850, "ppp": 2.417, "gdp": 1.692,inflationIndex: 115.432,inflationPctAvg: -1.753, unempPctLabourForce: null},
    {iso: "VCT", NAME:	"St. Vincent and the Grenadines", "realGdpGrowth":-4.180, "ppp": 1.394, "gdp": 0.787,inflationIndex: 110.758,inflationPctAvg: -0.606, unempPctLabourForce: null},
    {iso: "SDN", NAME:	"Sudan", "realGdpGrowth":-3.630, "ppp": 181.714, "gdp": 34.370,inflationIndex: 5083.452,inflationPctAvg: 163.259, unempPctLabourForce: 26.830},
    {iso: "SUR", NAME:	"Suriname", "realGdpGrowth":-13.455, "ppp": 8.771, "gdp": 2.410,inflationIndex: 189.733,inflationPctAvg: 34.913, unempPctLabourForce: 11.291},
    {iso: "SWE", NAME:	"Sweden", "realGdpGrowth":-2.818, "ppp": 561.999, "gdp": 537.610,inflationIndex: 107.544,inflationPctAvg: 0.657, unempPctLabourForce: 8.292},
    {iso: "CHE", NAME:	"Switzerland", "realGdpGrowth":-2.983, "ppp": 627.151, "gdp": 747.427,inflationIndex: 100.423,inflationPctAvg: -0.726, unempPctLabourForce: 3.143},
    {iso: "SYR", NAME:	"Syria", "realGdpGrowth": null, "ppp": null, "gdp": null,inflationIndex: null,inflationPctAvg: null, unempPctLabourForce: null},
    {iso: "TWN", NAME:	"Taiwan Province of China", "realGdpGrowth":3.109, "ppp": 1316.049, "gdp": 668.510,inflationIndex: 102.948,inflationPctAvg: -0.170, unempPctLabourForce: 3.900},
    {iso: "TJK", NAME:	"Tajikistan", "realGdpGrowth":4.500, "ppp": 34.827, "gdp": 7.997,inflationIndex: 1659.187,inflationPctAvg: 8.589, unempPctLabourForce: null},
    {iso: "TZA", NAME:	"Tanzania", "realGdpGrowth":1.029, "ppp": 163.598, "gdp": 63.244,inflationIndex: 366.497,inflationPctAvg: 3.000, unempPctLabourForce: null},
    {iso: "THA", NAME:	"Thailand", "realGdpGrowth":-6.087, "ppp": 1272.898, "gdp": 501.888,inflationIndex: 99.151,inflationPctAvg: -0.847, unempPctLabourForce: 2.000},
    {iso: "TLS", NAME:	"Timor-Leste", "realGdpGrowth":-6.800, "ppp": 4.459, "gdp": 1.791,inflationIndex: 101.333,inflationPctAvg: 0.488, unempPctLabourForce:	  null	},
    {iso: "TGO", NAME:	"Togo", "realGdpGrowth":0.700, "ppp": 18.218, "gdp": 7.495,inflationIndex: 106.008,inflationPctAvg: 1.831, unempPctLabourForce: null},
    {iso: "TON", NAME:	"Tonga", "realGdpGrowth":-0.466, "ppp": 0.620, "gdp": 0.514,inflationIndex: 100.208,inflationPctAvg: 0.242, unempPctLabourForce: null},
    {iso: "TTO", NAME:	"Trinidad and Tobago", "realGdpGrowth":-7.832, "ppp": 35.031, "gdp": 21.530,inflationIndex: 125.419,inflationPctAvg: 0.599, unempPctLabourForce: null},
    {iso: "TUN", NAME:	"Tunisia", "realGdpGrowth":-8.800, "ppp": 120.457, "gdp": 39.553,inflationIndex: 132.085,inflationPctAvg: 5.687, unempPctLabourForce: null},
    {iso: "TUR", NAME:	"Turkey", "realGdpGrowth":1.794, "ppp": 2546.498, "gdp": 719.537,inflationIndex: 469.591,inflationPctAvg: 12.279, unempPctLabourForce: 13.110},
    {iso: "TKM", NAME:	"Turkmenistan", "realGdpGrowth":0.782, "ppp": 98.192, "gdp": 47.354,inflationIndex: 542.360,inflationPctAvg: 7.583, unempPctLabourForce:	  null	},
    {iso: "TUV", NAME:	"Tuvalu", "realGdpGrowth":0.530, "ppp": 0.050, "gdp": 0.048,inflationIndex: 167.525,inflationPctAvg: 1.570, unempPctLabourForce: null},
    {iso: "UGA", NAME:	"Uganda", "realGdpGrowth":-2.104, "ppp": 106.106, "gdp": 37.613,inflationIndex: 183.994,inflationPctAvg: 3.792, unempPctLabourForce: null},
    {iso: "UKR", NAME:	"Ukraine", "realGdpGrowth":-4.218, "ppp": 543.828, "gdp": 151.543,inflationIndex: 90264859.779,inflationPctAvg: 2.740, unempPctLabourForce: 9.036},
    {iso: "ARE", NAME:	"United Arab Emirates", "realGdpGrowth":-5.924, "ppp": 650.829, "gdp": 354.279,inflationIndex: 272.457,inflationPctAvg: -2.074, unempPctLabourForce: null},
    {iso: "GBR", NAME:	"United Kingdom", "realGdpGrowth":-9.920, "ppp": 2959.924, "gdp": 2710.970,inflationIndex: 108.736,inflationPctAvg: 0.851, unempPctLabourForce: 4.500},
    {iso: "USA", NAME:	"United States", "realGdpGrowth":-3.505, "ppp": 20932.750, "gdp": 20932.750,inflationIndex: 258.844,inflationPctAvg: 1.248, unempPctLabourForce: 8.108},
    {iso: "URY", NAME:	"Uruguay", "realGdpGrowth":-5.700, "ppp": 79.302, "gdp": 55.711,inflationIndex: 216.725,inflationPctAvg: 9.756, unempPctLabourForce: 10.350},
    {iso: "UZB", NAME:	"Uzbekistan", "realGdpGrowth":1.648, "ppp": 252.576, "gdp": 57.706,inflationIndex: 6655.991,inflationPctAvg: 12.855, unempPctLabourForce: null},
    {iso: "VUT", NAME:	"Vanuatu", "realGdpGrowth":-9.235, "ppp": 0.777, "gdp": 0.864,inflationIndex: 163.635,inflationPctAvg: 2.915, unempPctLabourForce: null},
    {iso: "VEN", NAME:	"Venezuela", "realGdpGrowth":-30.000, "ppp": 144.737, "gdp": 47.255,inflationIndex: 89714263101.083,inflationPctAvg: 2355.147, unempPctLabourForce: null},
    {iso: "VNM", NAME:	"Vietnam", "realGdpGrowth":2.906, "ppp": 1058.693, "gdp": 340.821,inflationIndex: 282.118,inflationPctAvg: 3.222, unempPctLabourForce: 3.300},
    {iso: "WBG", NAME:	"West Bank and Gaza", "realGdpGrowth":-10.960, "ppp": 27.486, "gdp": 15.519,inflationIndex: 100.833,inflationPctAvg: -0.711, unempPctLabourForce: 25.925},
    {iso: "YEM", NAME:	"Yemen", "realGdpGrowth":-5.000, "ppp": 62.583, "gdp": 20.140,inflationIndex: 1520.719,inflationPctAvg: 26.183, unempPctLabourForce: null},
    {iso: "ZMB", NAME:	"Zambia", "realGdpGrowth":-3.497, "ppp": 63.103, "gdp": 18.529,inflationIndex: 267.548,inflationPctAvg: 16.350, unempPctLabourForce: null	},
    {iso: "ZWE", NAME:	"Zimbabwe", "realGdpGrowth":-8.00, "ppp": 39.824, "gdp": 21.038,inflationIndex: 1530.031,inflationPctAvg: 557.210, unempPctLabourForce:null}
  ]

 const keysData = [
      {name: "realGdpGrowth", label:"Real GDP Growth", unit: "percent", category: "national account"},
      {name: "ppp", label:"Purchasing Power Parity", unit: "billion", category: "national account"},
      {name: "gdp", label:"Gross Domestic Product", unit: "billion", category: "national account"},
      {name: "inflationIndexAvg", label:"", unit: "int", category: "monetary"},
      {name: "inflationPctAvg", label:"", unit: "percent", category: "monetary"},
      {name: "unempPctLabourForce", label:"", unit: "percent", category: "people"},
    ]


module.exports = { countriesData, keysData }