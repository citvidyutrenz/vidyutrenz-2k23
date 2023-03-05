import { motion } from "framer-motion";
import { useState } from "react";
import { useLayoutEffect } from "react";

const Loader = ({ count = 5 }) => {
  let [width, setWidth] = useState(window.innerWidth);

  useLayoutEffect(() => {
    function updateWidth() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const svgvariants = {
    hidden: {  opacity: 0, scale:0 },
    visible: {  opacity: 1, scale: width > 768 ? 1.7 : 1.2 ,transition :{delay:1,duration:2}},
  };

  const pathvariants1 = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        delay:1,
        duration: 3,
      },
    },
  };

  const pathvariants2 = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        delay: 3,
        duration: 5,
      },
    },
  };

  const circlevariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        delay: 6,
        duration: 6,
      },
    },
  };

  return (
    <motion.svg
      variants={svgvariants}
      initial="hidden"
      animate="visible"
      width="400"
      height="300"
      viewBox="0 0 2000 2500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="2210" height="1752" />
      <g clip-path="url(#clip0_0_1)">
        <motion.path
          variants={pathvariants1}
          initial="hidden"
          animate="visible"
          d="M465.635 903.423C518.813 1058.92 595.456 1148.78 804.583 1312.07L811.806 1296.88C649.247 1159.16 555.697 1082.44 504.473 960.837C619.557 1072.73 730.751 1141.52 842.201 1176.98V1158.41C699.564 1106.77 617.18 1044.45 465.635 903.423Z"
          fill="url(#paint0_linear_0_1)"
        />
        <motion.path
          variants={pathvariants1}
          initial="hidden"
          animate="visible"
          d="M1744.37 903.423C1691.19 1058.92 1614.54 1148.78 1405.42 1312.07L1398.19 1296.88C1560.75 1159.16 1654.3 1082.44 1705.53 960.836C1590.44 1072.73 1479.25 1141.52 1367.8 1176.98V1158.41C1510.44 1106.77 1592.82 1044.45 1744.37 903.423Z"
          fill="url(#paint1_linear_0_1)"
        />
        <motion.path
          variants={pathvariants1}
          initial="hidden"
          animate="visible"
          d="M139.727 0C155.695 387.826 267.229 496.402 492.653 661.947L512.916 638.306C299.477 514.686 208.589 414.653 163.368 111.45C255.86 288.033 347.982 375.208 587.217 508.281L798.297 636.617C930.011 688.965 1106.62 919.412 1124.2 1119.57H1152.91V1053.71C1070.17 825.745 1011.07 704.163 604.103 491.394C316.027 338.559 220.431 228.567 139.727 0Z"
          fill="url(#paint2_linear_0_1)"
        />
        <motion.path
          variants={pathvariants1}
          initial="hidden"
          animate="visible"
          d="M2070.27 0C2054.3 387.826 1942.77 496.402 1717.35 661.947L1697.08 638.306C1910.52 514.686 2001.41 414.653 2046.63 111.45C1954.14 288.033 1862.02 375.208 1622.78 508.281L1411.7 636.617C1279.99 688.965 1103.38 919.412 1085.8 1119.57H1057.09V1053.71C1139.83 825.745 1198.93 704.163 1605.9 491.394C1893.97 338.559 1989.57 228.567 2070.27 0Z"
          fill="url(#paint3_linear_0_1)"
        />
        <motion.path
          variants={pathvariants1}
          initial="hidden"
          animate="visible"
          d="M1075.1 1117.22H1105.63V1751.12C1073.43 1584.73 1010.63 1488.7 803.763 1311.61C866.018 1165.86 843.321 1096.45 703.706 993.819C107.642 624.797 -22.3828 383.321 2.94681 126.648C103.903 354.615 225.847 466.065 503.593 647.286L588.905 494.772C919.879 680.522 1000.48 823.088 1075.1 1117.22Z"
          fill="url(#paint4_linear_0_1)"
        />
        <motion.path
          variants={pathvariants1}
          initial="hidden"
          animate="visible"
          d="M1134.9 1117.22H1104.37V1751.12C1136.57 1584.73 1199.37 1488.7 1406.24 1311.61C1343.98 1165.86 1366.68 1096.45 1506.29 993.819C2102.36 624.797 2232.38 383.321 2207.05 126.648C2106.1 354.615 1984.15 466.065 1706.41 647.286L1621.09 494.772C1290.12 680.522 1209.52 823.088 1134.9 1117.22Z"
          fill="url(#paint5_linear_0_1)"
        />
        <mask
          id="mask0_0_1"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="2210"
          height="1752"
        >
          <motion.path
            variants={pathvariants2}
            initial="hidden"
            animate="visible"
            d="M465.635 903.423C518.813 1058.92 595.456 1148.78 804.583 1312.07L811.806 1296.88C649.247 1159.16 555.697 1082.44 504.473 960.837C619.557 1072.73 730.751 1141.52 842.201 1176.98V1158.41C699.564 1106.77 617.18 1044.45 465.635 903.423Z"
            fill="url(#paint6_linear_0_1)"
          />
          <motion.path
            variants={pathvariants2}
            initial="hidden"
            animate="visible"
            d="M139.727 0C155.695 387.826 267.229 496.402 492.653 661.947L512.916 638.306C299.477 514.686 208.589 414.653 163.368 111.45C255.86 288.033 347.982 375.208 587.217 508.281L798.297 636.617C930.011 688.965 1106.62 919.412 1124.2 1119.57H1152.91V1053.71C1070.17 825.745 1011.07 704.163 604.103 491.394C316.027 338.559 220.431 228.567 139.727 0Z"
            fill="url(#paint8_linear_0_1)"
          />
          <motion.path
            variants={pathvariants2}
            initial="hidden"
            animate="visible"
            d="M1744.37 903.423C1691.19 1058.92 1614.54 1148.78 1405.42 1312.07L1398.19 1296.88C1560.75 1159.16 1654.3 1082.44 1705.53 960.836C1590.44 1072.73 1479.25 1141.52 1367.8 1176.98V1158.41C1510.44 1106.77 1592.82 1044.45 1744.37 903.423Z"
            fill="url(#paint7_linear_0_1)"
          />
          <motion.path
            variants={pathvariants2}
            initial="hidden"
            animate="visible"
            d="M2070.27 0C2054.3 387.826 1942.77 496.402 1717.35 661.947L1697.08 638.306C1910.52 514.686 2001.41 414.653 2046.63 111.45C1954.14 288.033 1862.02 375.208 1622.78 508.281L1411.7 636.617C1279.99 688.965 1103.38 919.412 1085.8 1119.57H1057.09V1053.71C1139.83 825.745 1198.93 704.163 1605.9 491.394C1893.97 338.559 1989.57 228.567 2070.27 0Z"
            fill="url(#paint9_linear_0_1)"
          />
          <motion.path
            variants={pathvariants2}
            initial="hidden"
            animate="visible"
            d="M1075.1 1117.22H1105.63V1751.12C1073.43 1584.73 1010.63 1488.7 803.763 1311.61C866.018 1165.86 843.321 1096.45 703.706 993.819C107.642 624.797 -22.3828 383.321 2.94681 126.648C103.903 354.615 225.847 466.065 503.593 647.286L588.905 494.772C919.879 680.522 1000.48 823.088 1075.1 1117.22Z"
            fill="url(#paint10_linear_0_1)"
          />
          <motion.path
            variants={pathvariants2}
            initial="hidden"
            animate="visible"
            d="M1134.9 1117.22H1104.37V1751.12C1136.57 1584.73 1199.37 1488.7 1406.24 1311.61C1343.98 1165.86 1366.68 1096.45 1506.29 993.819C2102.36 624.797 2232.38 383.321 2207.05 126.648C2106.1 354.615 1984.15 466.065 1706.41 647.286L1621.09 494.772C1290.12 680.522 1209.52 823.088 1134.9 1117.22Z"
            fill="url(#paint11_linear_0_1)"
          />
        </mask>
        <g mask="url(#mask0_0_1)">
          <motion.path
            variants={pathvariants2}
            initial="hidden"
            animate="visible"
            d="M1108.66 1116.19V1737.61"
            stroke="#FFD700"
            stroke-width="12.808"
          />
          <motion.path
            variants={pathvariants2}
            initial="hidden"
            animate="visible"
            d="M1154.6 1604.36V1156.72L1372.43 957.459"
            stroke="#FFD700"
            stroke-width="7.6848"
          />
          <motion.path
            variants={circlevariants}
            initial="hidden"
            animate="visible"
            d="M1384.26 967.591C1396.38 967.591 1406.21 957.763 1406.21 945.639C1406.21 933.515 1396.38 923.687 1384.26 923.687C1372.14 923.687 1362.31 933.515 1362.31 945.639C1362.31 957.763 1372.14 967.591 1384.26 967.591Z"
            fill="#FFD700"
          />
          <motion.path
            variants={circlevariants}
            initial="hidden"
            animate="visible"
            d="M1220.46 1474.18C1235.38 1474.18 1247.48 1462.08 1247.48 1447.16C1247.48 1432.24 1235.38 1420.14 1220.46 1420.14C1205.54 1420.14 1193.44 1432.24 1193.44 1447.16C1193.44 1462.08 1205.54 1474.18 1220.46 1474.18Z"
            fill="#FFD700"
          />
          <motion.path
            variants={circlevariants}
            initial="hidden"
            animate="visible"
            d="M761.146 974.346C772.337 974.346 781.41 965.273 781.41 954.082C781.41 942.891 772.337 933.818 761.146 933.818C749.955 933.818 740.882 942.891 740.882 954.082C740.882 965.273 749.955 974.346 761.146 974.346Z"
            fill="#FFD700"
          />
          <motion.path
            variants={circlevariants}
            initial="hidden"
            animate="visible"
            d="M1396.08 893.291C1407.27 893.291 1416.34 884.218 1416.34 873.027C1416.34 861.836 1407.27 852.763 1396.08 852.763C1384.89 852.763 1375.82 861.836 1375.82 873.027C1375.82 884.218 1384.89 893.291 1396.08 893.291Z"
            fill="#FFD700"
          />
          <motion.path
            variants={circlevariants}
            initial="hidden"
            animate="visible"
            d="M656.451 859.518C669.508 859.518 680.092 848.934 680.092 835.877C680.092 822.82 669.508 812.236 656.451 812.236C643.394 812.236 632.81 822.82 632.81 835.877C632.81 848.934 643.394 859.518 656.451 859.518Z"
            fill="#FFD700"
          />
          <motion.path
            variants={circlevariants}
            initial="hidden"
            animate="visible"
            d="M585.528 900.045C598.585 900.045 609.169 889.461 609.169 876.404C609.169 863.347 598.585 852.763 585.528 852.763C572.471 852.763 561.887 863.347 561.887 876.404C561.887 889.461 572.471 900.045 585.528 900.045Z"
            fill="#FFD700"
          />
          <motion.path
            variants={circlevariants}
            initial="hidden"
            animate="visible"
            d="M798.297 1095.93C811.354 1095.93 821.938 1085.35 821.938 1072.29C821.938 1059.23 811.354 1048.65 798.297 1048.65C785.24 1048.65 774.656 1059.23 774.656 1072.29C774.656 1085.35 785.24 1095.93 798.297 1095.93Z"
            fill="#FFD700"
          />
          <motion.path
            variants={circlevariants}
            initial="hidden"
            animate="visible"
            d="M1507.53 785.218C1520.59 785.218 1531.17 774.634 1531.17 761.577C1531.17 748.52 1520.59 737.936 1507.53 737.936C1494.47 737.936 1483.89 748.52 1483.89 761.577C1483.89 774.634 1494.47 785.218 1507.53 785.218Z"
            fill="#FFD700"
          />
          <motion.path
            variants={circlevariants}
            initial="hidden"
            animate="visible"
            d="M1407.9 653.504C1421.89 653.504 1433.23 642.163 1433.23 628.174C1433.23 614.185 1421.89 602.844 1407.9 602.844C1393.91 602.844 1382.57 614.185 1382.57 628.174C1382.57 642.163 1393.91 653.504 1407.9 653.504Z"
            fill="#FFD700"
          />
          <motion.path
            variants={circlevariants}
            initial="hidden"
            animate="visible"
            d="M1585.2 660.259C1601.99 660.259 1615.6 646.65 1615.6 629.863C1615.6 613.076 1601.99 599.468 1585.2 599.468C1568.41 599.468 1554.8 613.076 1554.8 629.863C1554.8 646.65 1568.41 660.259 1585.2 660.259Z"
            fill="#FFD700"
          />
          <motion.path
            variants={circlevariants}
            initial="hidden"
            animate="visible"
            d="M396.4 670.39C409.457 670.39 420.041 659.806 420.041 646.749C420.041 633.692 409.457 623.108 396.4 623.108C383.343 623.108 372.759 633.692 372.759 646.749C372.759 659.806 383.343 670.39 396.4 670.39Z"
            fill="#FFD700"
          />
          <motion.path
            variants={circlevariants}
            initial="hidden"
            animate="visible"
            d="M578.773 528.545C591.83 528.545 602.414 517.961 602.414 504.904C602.414 491.847 591.83 481.263 578.773 481.263C565.716 481.263 555.132 491.847 555.132 504.904C555.132 517.961 565.716 528.545 578.773 528.545Z"
            fill="#FFD700"
          />
          <motion.path
            variants={circlevariants}
            initial="hidden"
            animate="visible"
            d="M848.956 933.819C860.147 933.819 869.22 924.746 869.22 913.555C869.22 902.364 860.147 893.291 848.956 893.291C837.765 893.291 828.692 902.364 828.692 913.555C828.692 924.746 837.765 933.819 848.956 933.819Z"
            fill="#FFD700"
          />
          <motion.path
            variants={circlevariants}
            initial="hidden"
            animate="visible"
            d="M1320.09 1214.13C1328.48 1214.13 1335.29 1207.32 1335.29 1198.93C1335.29 1190.54 1328.48 1183.73 1320.09 1183.73C1311.7 1183.73 1304.89 1190.54 1304.89 1198.93C1304.89 1207.32 1311.7 1214.13 1320.09 1214.13Z"
            fill="#FFD700"
          />
          <motion.path
            variants={circlevariants}
            initial="hidden"
            animate="visible"
            d="M1379.19 1085.8C1394.11 1085.8 1406.21 1073.7 1406.21 1058.78C1406.21 1043.86 1394.11 1031.76 1379.19 1031.76C1364.27 1031.76 1352.17 1043.86 1352.17 1058.78C1352.17 1073.7 1364.27 1085.8 1379.19 1085.8Z"
            fill="#FFD700"
          />
          <motion.path
            variants={pathvariants2}
            initial="hidden"
            animate="visible"
            d="M1220.46 1443.79V1209.07L1363.99 1073.98"
            stroke="#FFD700"
            stroke-width="7.6848"
          />
          <motion.path
            variants={pathvariants2}
            initial="hidden"
            animate="visible"
            d="M629.433 951.635V918.62L597.348 888.225M754.392 1021.63V1043.58"
            stroke="#FFD700"
            stroke-width="5.1232"
          />
          <motion.path
            variants={pathvariants2}
            initial="hidden"
            animate="visible"
            d="M1119.14 1079.04L1318.4 898.357V646.749M1510.9 521.79V538.676L1490.64 558.94V656.881L1396.08 748.068V864.584"
            stroke="#FFD700"
            stroke-width="5.1232"
          />
          <motion.path
            variants={pathvariants2}
            initial="hidden"
            animate="visible"
            d="M1507.53 775.086V997.987"
            stroke="#FFD700"
            stroke-width="7.6848"
          />
          <motion.path
            variants={pathvariants2}
            initial="hidden"
            animate="visible"
            d="M1585.2 650.127V957.459"
            stroke="#FFD700"
            stroke-width="10.2464"
          />
          <motion.path
            variants={pathvariants2}
            initial="hidden"
            animate="visible"
            d="M1632.48 920.309V732.87H1732.11L1809.79 800.416"
            stroke="#FFD700"
            stroke-width="10.2464"
          />
          <motion.path
            variants={pathvariants2}
            initial="hidden"
            animate="visible"
            d="M1872 772L1769 686.085V559"
            stroke="#FFD700"
            stroke-width="10.2464"
          />
          <motion.path
            variants={pathvariants2}
            initial="hidden"
            animate="visible"
            d="M102.577 508.281H246.111L393.023 646.749M575.396 516.724V743.002L654.762 840.943M523.048 609.599V885.033"
            stroke="#FFD700"
            stroke-width="7.6848"
          />
          <motion.path
            variants={pathvariants2}
            initial="hidden"
            animate="visible"
            d="M460.569 600.217V841.486"
            stroke="#FFD700"
            stroke-width="12.808"
          />
          <motion.path
            variants={pathvariants2}
            initial="hidden"
            animate="visible"
            d="M1085.37 1697.08V1489.38L825.315 1232.71"
            stroke="#FFD700"
            stroke-width="10.2464"
          />
          <motion.path
            variants={pathvariants2}
            initial="hidden"
            animate="visible"
            d="M1058.35 1617.72V1502.89L816.872 1266.48"
            stroke="#FFD700"
            stroke-width="7.6848"
          />
          <motion.path
            variants={pathvariants2}
            initial="hidden"
            animate="visible"
            d="M1110.7 1372.86L953.651 1215.82M953.651 1215.82L906.37 1168.54V873.027M953.651 1215.82V1100.99L1002.62 1057.09V972.657L953.651 925.375L952.916 794.096M906.37 753.134V873.027M906.37 873.027L698.667 697.409V539.217M1110.7 1273.23L1017.82 1183.74V1126.32L1065.1 1077.35V994.609M762.835 952.393V842.632L848.956 910.177"
            stroke="#FFD700"
            stroke-width="7.6848"
          />
          <motion.path
            variants={pathvariants2}
            initial="hidden"
            animate="visible"
            d="M1282.94 1430.28V1394.82L1330.22 1352.6V1285.06L1282.94 1237.77L1309.95 1209.07"
            stroke="#FFD700"
            stroke-width="7.6848"
          />
          <motion.path
            variants={pathvariants2}
            initial="hidden"
            animate="visible"
            d="M139.727 96.2526L203.895 140.304V190.36"
            stroke="#FFD700"
            stroke-width="7.6848"
          />
          <motion.path
            variants={pathvariants2}
            initial="hidden"
            animate="visible"
            d="M396.4 356.303V389.65M467.323 405.447V438.794M533.18 447.57V481.581M906.369 759.981V677.491M933.388 751.206L958.717 724.879M975.604 802.104L1004.31 774.022"
            stroke="#FFD700"
            stroke-width="7.6848"
          />
          <motion.path
            variants={pathvariants2}
            initial="hidden"
            animate="visible"
            d="M1110.69 1065.53V852.763"
            stroke="#FFD700"
            stroke-width="12.808"
          />
          <motion.path
            variants={pathvariants2}
            initial="hidden"
            animate="visible"
            d="M1026.26 879.782C1036.52 879.782 1044.83 871.466 1044.83 861.207C1044.83 850.948 1036.52 842.632 1026.26 842.632C1016 842.632 1007.68 850.948 1007.68 861.207C1007.68 871.466 1016 879.782 1026.26 879.782Z"
            fill="#FFD700"
          />
          <motion.path
            variants={pathvariants2}
            initial="hidden"
            animate="visible"
            d="M2083.35 454.244C2101.07 454.244 2115.43 439.88 2115.43 422.16C2115.43 404.44 2101.07 390.076 2083.35 390.076C2065.63 390.076 2051.27 404.44 2051.27 422.16C2051.27 439.88 2065.63 454.244 2083.35 454.244Z"
            fill="#FFD700"
          />
          <motion.path
            variants={pathvariants2}
            initial="hidden"
            animate="visible"
            d="M1998.92 221.212C2016.64 221.212 2031 206.848 2031 189.128C2031 171.408 2016.64 157.044 1998.92 157.044C1981.2 157.044 1966.84 171.408 1966.84 189.128C1966.84 206.848 1981.2 221.212 1998.92 221.212Z"
            fill="#FFD700"
          />
          <motion.path
            variants={pathvariants2}
            initial="hidden"
            animate="visible"
            d="M1157.98 1666.68C1175.7 1666.68 1190.06 1652.32 1190.06 1634.6C1190.06 1616.88 1175.7 1602.52 1157.98 1602.52C1140.26 1602.52 1125.9 1616.88 1125.9 1634.6C1125.9 1652.32 1140.26 1666.68 1157.98 1666.68Z"
            fill="#FFD700"
          />
          <motion.path
            variants={pathvariants2}
            initial="hidden"
            animate="visible"
            d="M1266.05 727.804C1283.77 727.804 1298.13 713.44 1298.13 695.72C1298.13 678 1283.77 663.636 1266.05 663.636C1248.33 663.636 1233.97 678 1233.97 695.72C1233.97 713.44 1248.33 727.804 1266.05 727.804Z"
            fill="#FFD700"
          />
          <motion.path
            variants={pathvariants2}
            initial="hidden"
            animate="visible"
            d="M715.553 1288.43C740.733 1288.43 761.146 1268.78 761.146 1244.53C761.146 1220.28 740.733 1200.63 715.553 1200.63C690.372 1200.63 669.96 1220.28 669.96 1244.53C669.96 1268.78 690.372 1288.43 715.553 1288.43Z"
            fill="#FFD700"
          />
          <motion.path
            variants={pathvariants2}
            initial="hidden"
            animate="visible"
            d="M1721.98 852.763C1734.1 852.763 1743.93 842.935 1743.93 830.811C1743.93 818.687 1734.1 808.859 1721.98 808.859C1709.86 808.859 1700.03 818.687 1700.03 830.811C1700.03 842.935 1709.86 852.763 1721.98 852.763Z"
            fill="#FFB051"
          />
          <motion.path
            variants={pathvariants2}
            initial="hidden"
            animate="visible"
            d="M528.114 1050.33V954.082M756.08 1119.57V1158.41M798.296 1134.77V1166.85"
            stroke="#FFD700"
            stroke-width="7.6848"
          />
          <motion.path
            variants={pathvariants2}
            initial="hidden"
            animate="visible"
            d="M1401.14 1323.89V1286.74"
            stroke="#FFD700"
            stroke-width="7.6848"
          />
          <motion.path
            variants={pathvariants2}
            initial="hidden"
            animate="visible"
            d="M1514.28 1249.59V1082.28M1593.65 1171.92L1589.47 1033.61M1624 1001.59C1649.5 993.5 1740.5 963.5 1769.66 954M1662.88 489.706L1645.99 469.442M1721.98 455.933L1703.41 435.669M1777.71 415.406V379.944M1998.92 658.57V455.933L1928 391.765"
            stroke="#FFD700"
            stroke-width="7.6848"
          />
          <motion.path
            variants={pathvariants2}
            initial="hidden"
            animate="visible"
            d="M2078.29 553.874V422.16"
            stroke="#FFD700"
            stroke-width="10.2464"
          />
          <motion.path
            variants={pathvariants2}
            initial="hidden"
            animate="visible"
            d="M1926.31 699.097L1921.2 448.28"
            stroke="#FFD700"
            stroke-width="10.2464"
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_0_1"
          x1="463.946"
          y1="932.13"
          x2="874.286"
          y2="1366.11"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F02D36" />
          <stop offset="1" stop-color="#F9911A" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_0_1"
          x1="1746.05"
          y1="932.13"
          x2="1335.71"
          y2="1366.11"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F02D36" />
          <stop offset="1" stop-color="#F9911A" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_0_1"
          x1="139.727"
          y1="-1.68866"
          x2="1152.91"
          y2="1119.57"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFB051" />
          <stop offset="0.557292" stop-color="#F02D36" />
          <stop offset="1" stop-color="#F56327" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_0_1"
          x1="2070.27"
          y1="-1.68868"
          x2="1057.09"
          y2="1119.57"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFB051" />
          <stop offset="0.557292" stop-color="#F02D36" />
          <stop offset="1" stop-color="#F56327" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_0_1"
          x1="1.25827"
          y1="172.241"
          x2="1105.63"
          y2="1715.66"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFB051" />
          <stop offset="0.416667" stop-color="#F02D36" />
          <stop offset="0.886562" stop-color="#F9911A" />
          <stop offset="0.982542" stop-color="#F1462A" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_0_1"
          x1="2208.74"
          y1="172.241"
          x2="1104.37"
          y2="1715.66"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFB051" />
          <stop offset="0.416667" stop-color="#F02D36" />
          <stop offset="0.895833" stop-color="#F9911A" />
          <stop offset="0.978551" stop-color="#F24E2C" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_0_1"
          x1="463.946"
          y1="932.13"
          x2="874.286"
          y2="1366.11"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F02D36" />
          <stop offset="1" stop-color="#F9911A" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_0_1"
          x1="1746.05"
          y1="932.13"
          x2="1335.71"
          y2="1366.11"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F02D36" />
          <stop offset="1" stop-color="#F9911A" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_0_1"
          x1="139.727"
          y1="-1.68866"
          x2="1152.91"
          y2="1119.57"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFB051" />
          <stop offset="0.557292" stop-color="#F02D36" />
          <stop offset="1" stop-color="#F56327" />
        </linearGradient>
        <linearGradient
          id="paint9_linear_0_1"
          x1="2070.27"
          y1="-1.68868"
          x2="1057.09"
          y2="1119.57"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFB051" />
          <stop offset="0.557292" stop-color="#F02D36" />
          <stop offset="1" stop-color="#F56327" />
        </linearGradient>
        <linearGradient
          id="paint10_linear_0_1"
          x1="1.25827"
          y1="172.241"
          x2="1105.63"
          y2="1715.66"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFB051" />
          <stop offset="0.416667" stop-color="#F02D36" />
          <stop offset="1" stop-color="#F9911A" />
        </linearGradient>
        <linearGradient
          id="paint11_linear_0_1"
          x1="2208.74"
          y1="172.241"
          x2="1104.37"
          y2="1715.66"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFB051" />
          <stop offset="0.416667" stop-color="#F02D36" />
          <stop offset="1" stop-color="#F9911A" />
        </linearGradient>
        <clipPath id="clip0_0_1">
          <rect width="2210" height="1752" fill="white" />
        </clipPath>
      </defs>
    </motion.svg>
  );
};

export default Loader;
