// Historical expense data import — runs once, never repeats
(function() {
  var STORAGE_KEY = 'expense_records';
  var IMPORT_FLAG = 'expense_v1_imported';
  if (localStorage.getItem(IMPORT_FLAG)) return; // Already imported

  // Import historical records from May-June 2026
  var IMPORT_DATA = 
[
  {
    "date": "2026-05-18",
    "type": "income",
    "category": "工资",
    "note": "工资",
    "amount": 7643.0,
    "card": false,
    "id": 1000
  },
  {
    "date": "2026-05-18",
    "type": "expense",
    "category": "餐饮",
    "note": "麦当劳",
    "amount": 54.9,
    "card": false,
    "id": 1001
  },
  {
    "date": "2026-05-18",
    "type": "expense",
    "category": "餐饮",
    "note": "甜品",
    "amount": 31.5,
    "card": false,
    "id": 1002
  },
  {
    "date": "2026-05-18",
    "type": "expense",
    "category": "餐饮",
    "note": "买水",
    "amount": 15.0,
    "card": false,
    "id": 1003
  },
  {
    "date": "2026-05-18",
    "type": "expense",
    "category": "购物",
    "note": "数据线",
    "amount": 42.8,
    "card": false,
    "id": 1004
  },
  {
    "date": "2026-05-18",
    "type": "expense",
    "category": "购物",
    "note": "买药",
    "amount": 22.24,
    "card": false,
    "id": 1005
  },
  {
    "date": "2026-05-18",
    "type": "expense",
    "category": "购物",
    "note": "购物",
    "amount": 99.0,
    "card": false,
    "id": 1006
  },
  {
    "date": "2026-05-18",
    "type": "expense",
    "category": "购物",
    "note": "茶叶",
    "amount": 68.0,
    "card": false,
    "id": 1007
  },
  {
    "date": "2026-05-18",
    "type": "expense",
    "category": "购物",
    "note": "购物",
    "amount": 98.0,
    "card": false,
    "id": 1008
  },
  {
    "date": "2026-05-18",
    "type": "expense",
    "category": "购物",
    "note": "购物",
    "amount": 9.0,
    "card": false,
    "id": 1009
  },
  {
    "date": "2026-05-18",
    "type": "expense",
    "category": "购物",
    "note": "购物",
    "amount": 23.0,
    "card": false,
    "id": 1010
  },
  {
    "date": "2026-05-18",
    "type": "expense",
    "category": "购物",
    "note": "购物",
    "amount": 5.0,
    "card": false,
    "id": 1011
  },
  {
    "date": "2026-05-18",
    "type": "expense",
    "category": "购物",
    "note": "购物",
    "amount": 4.0,
    "card": false,
    "id": 1012
  },
  {
    "date": "2026-05-18",
    "type": "expense",
    "category": "餐饮",
    "note": "吃饭",
    "amount": 28.0,
    "card": false,
    "id": 1013
  },
  {
    "date": "2026-05-18",
    "type": "expense",
    "category": "购物",
    "note": "购物",
    "amount": 8.0,
    "card": false,
    "id": 1014
  },
  {
    "date": "2026-05-18",
    "type": "expense",
    "category": "购物",
    "note": "购物",
    "amount": 22.0,
    "card": false,
    "id": 1015
  },
  {
    "date": "2026-05-18",
    "type": "expense",
    "category": "购物",
    "note": "购物",
    "amount": 34.0,
    "card": false,
    "id": 1016
  },
  {
    "date": "2026-05-18",
    "type": "expense",
    "category": "购物",
    "note": "购物",
    "amount": 28.8,
    "card": false,
    "id": 1017
  },
  {
    "date": "2026-05-18",
    "type": "expense",
    "category": "购物",
    "note": "购物",
    "amount": 65.0,
    "card": false,
    "id": 1018
  },
  {
    "date": "2026-05-18",
    "type": "expense",
    "category": "家庭",
    "note": "停车",
    "amount": 200.0,
    "card": false,
    "id": 1019
  },
  {
    "date": "2026-05-18",
    "type": "expense",
    "category": "家庭",
    "note": "停车",
    "amount": 200.0,
    "card": false,
    "id": 1020
  },
  {
    "date": "2026-05-18",
    "type": "expense",
    "category": "家庭",
    "note": "水费",
    "amount": 46.0,
    "card": false,
    "id": 1021
  },
  {
    "date": "2026-05-18",
    "type": "expense",
    "category": "家庭",
    "note": "电费",
    "amount": 92.0,
    "card": false,
    "id": 1022
  },
  {
    "date": "2026-05-18",
    "type": "expense",
    "category": "家庭",
    "note": "煤气费",
    "amount": 6.0,
    "card": false,
    "id": 1023
  },
  {
    "date": "2026-05-19",
    "type": "expense",
    "category": "购物",
    "note": "购物",
    "amount": 9.5,
    "card": false,
    "id": 1024
  },
  {
    "date": "2026-05-19",
    "type": "expense",
    "category": "购物",
    "note": "购物",
    "amount": 98.0,
    "card": false,
    "id": 1025
  },
  {
    "date": "2026-05-19",
    "type": "expense",
    "category": "购物",
    "note": "购物",
    "amount": 146.0,
    "card": false,
    "id": 1026
  },
  {
    "date": "2026-05-19",
    "type": "expense",
    "category": "购物",
    "note": "购物",
    "amount": 9.0,
    "card": false,
    "id": 1027
  },
  {
    "date": "2026-05-19",
    "type": "expense",
    "category": "餐饮",
    "note": "吃饭",
    "amount": 4.0,
    "card": false,
    "id": 1028
  },
  {
    "date": "2026-05-19",
    "type": "expense",
    "category": "购物",
    "note": "购物",
    "amount": 14.0,
    "card": false,
    "id": 1029
  },
  {
    "date": "2026-05-19",
    "type": "expense",
    "category": "餐饮",
    "note": "吃饭",
    "amount": 15.0,
    "card": false,
    "id": 1030
  },
  {
    "date": "2026-05-20",
    "type": "expense",
    "category": "家庭",
    "note": "家庭支出",
    "amount": 800.0,
    "card": false,
    "id": 1031
  },
  {
    "date": "2026-05-20",
    "type": "expense",
    "category": "餐饮",
    "note": "咖啡",
    "amount": 8.0,
    "card": false,
    "id": 1032
  },
  {
    "date": "2026-05-20",
    "type": "expense",
    "category": "购物",
    "note": "购物",
    "amount": 4.5,
    "card": false,
    "id": 1033
  },
  {
    "date": "2026-05-20",
    "type": "expense",
    "category": "餐饮",
    "note": "吃饭",
    "amount": 28.0,
    "card": false,
    "id": 1034
  },
  {
    "date": "2026-05-21",
    "type": "expense",
    "category": "家庭",
    "note": "家庭支出",
    "amount": 6.0,
    "card": false,
    "id": 1035
  },
  {
    "date": "2026-05-21",
    "type": "expense",
    "category": "餐饮",
    "note": "吃饭",
    "amount": 30.5,
    "card": false,
    "id": 1036
  },
  {
    "date": "2026-05-21",
    "type": "expense",
    "category": "餐饮",
    "note": "吃饭",
    "amount": 79.0,
    "card": false,
    "id": 1037
  },
  {
    "date": "2026-05-21",
    "type": "expense",
    "category": "餐饮",
    "note": "饮料",
    "amount": 7.7,
    "card": false,
    "id": 1038
  },
  {
    "date": "2026-05-21",
    "type": "expense",
    "category": "家庭",
    "note": "停车",
    "amount": 4.0,
    "card": false,
    "id": 1039
  },
  {
    "date": "2026-05-21",
    "type": "expense",
    "category": "家庭",
    "note": "停车",
    "amount": 4600.0,
    "card": false,
    "id": 1040
  },
  {
    "date": "2026-05-21",
    "type": "expense",
    "category": "家庭",
    "note": "家庭支出",
    "amount": 200.0,
    "card": false,
    "id": 1041
  },
  {
    "date": "2026-05-22",
    "type": "expense",
    "category": "餐饮",
    "note": "吃饭",
    "amount": 33.0,
    "card": false,
    "id": 1042
  },
  {
    "date": "2026-05-22",
    "type": "expense",
    "category": "餐饮",
    "note": "吃饭",
    "amount": 32.0,
    "card": false,
    "id": 1043
  },
  {
    "date": "2026-05-22",
    "type": "expense",
    "category": "餐饮",
    "note": "饮料",
    "amount": 4.0,
    "card": false,
    "id": 1044
  },
  {
    "date": "2026-05-22",
    "type": "expense",
    "category": "餐饮",
    "note": "吃饭",
    "amount": 18.0,
    "card": false,
    "id": 1045
  },
  {
    "date": "2026-05-22",
    "type": "expense",
    "category": "家庭",
    "note": "家庭支出",
    "amount": 10.0,
    "card": false,
    "id": 1046
  },
  {
    "date": "2026-05-22",
    "type": "expense",
    "category": "购物",
    "note": "购物",
    "amount": 21.0,
    "card": false,
    "id": 1047
  },
  {
    "date": "2026-05-22",
    "type": "expense",
    "category": "购物",
    "note": "购物",
    "amount": 5.0,
    "card": false,
    "id": 1048
  },
  {
    "date": "2026-05-22",
    "type": "expense",
    "category": "购物",
    "note": "购物",
    "amount": 101.0,
    "card": false,
    "id": 1049
  },
  {
    "date": "2026-05-22",
    "type": "expense",
    "category": "餐饮",
    "note": "吃饭",
    "amount": 14.0,
    "card": false,
    "id": 1050
  },
  {
    "date": "2026-05-22",
    "type": "expense",
    "category": "餐饮",
    "note": "吃饭",
    "amount": 24.5,
    "card": false,
    "id": 1051
  },
  {
    "date": "2026-05-22",
    "type": "expense",
    "category": "餐饮",
    "note": "吃饭",
    "amount": 14.0,
    "card": false,
    "id": 1052
  },
  {
    "date": "2026-05-23",
    "type": "expense",
    "category": "餐饮",
    "note": "吃饭",
    "amount": 4.0,
    "card": false,
    "id": 1053
  },
  {
    "date": "2026-05-23",
    "type": "expense",
    "category": "购物",
    "note": "购物",
    "amount": 3.0,
    "card": false,
    "id": 1054
  },
  {
    "date": "2026-05-23",
    "type": "expense",
    "category": "餐饮",
    "note": "吃饭",
    "amount": 9.0,
    "card": false,
    "id": 1055
  },
  {
    "date": "2026-05-23",
    "type": "expense",
    "category": "购物",
    "note": "购物",
    "amount": 24.5,
    "card": false,
    "id": 1056
  },
  {
    "date": "2026-05-23",
    "type": "expense",
    "category": "餐饮",
    "note": "吃饭",
    "amount": 8.0,
    "card": false,
    "id": 1057
  },
  {
    "date": "2026-05-23",
    "type": "expense",
    "category": "购物",
    "note": "购物",
    "amount": 0.5,
    "card": false,
    "id": 1058
  },
  {
    "date": "2026-05-23",
    "type": "expense",
    "category": "餐饮",
    "note": "饮料",
    "amount": 4.0,
    "card": false,
    "id": 1059
  },
  {
    "date": "2026-05-24",
    "type": "expense",
    "category": "餐饮",
    "note": "吃饭",
    "amount": 119.0,
    "card": false,
    "id": 1060
  },
  {
    "date": "2026-05-24",
    "type": "expense",
    "category": "家庭",
    "note": "停车",
    "amount": 500.0,
    "card": false,
    "id": 1061
  },
  {
    "date": "2026-05-24",
    "type": "expense",
    "category": "餐饮",
    "note": "吃饭",
    "amount": 141.0,
    "card": false,
    "id": 1062
  },
  {
    "date": "2026-05-24",
    "type": "expense",
    "category": "餐饮",
    "note": "饮料",
    "amount": 3.0,
    "card": false,
    "id": 1063
  },
  {
    "date": "2026-05-24",
    "type": "expense",
    "category": "餐饮",
    "note": "饮料",
    "amount": 8.0,
    "card": false,
    "id": 1064
  },
  {
    "date": "2026-05-24",
    "type": "expense",
    "category": "餐饮",
    "note": "饮料",
    "amount": 7.0,
    "card": false,
    "id": 1065
  },
  {
    "date": "2026-05-24",
    "type": "expense",
    "category": "购物",
    "note": "购物",
    "amount": 2.0,
    "card": false,
    "id": 1066
  },
  {
    "date": "2026-05-24",
    "type": "expense",
    "category": "家庭",
    "note": "家庭支出",
    "amount": 40.0,
    "card": false,
    "id": 1067
  },
  {
    "date": "2026-05-27",
    "type": "expense",
    "category": "家庭",
    "note": "家庭支出",
    "amount": 200.0,
    "card": false,
    "id": 1068
  },
  {
    "date": "2026-05-27",
    "type": "expense",
    "category": "餐饮",
    "note": "饮料",
    "amount": 1.0,
    "card": false,
    "id": 1069
  },
  {
    "date": "2026-05-27",
    "type": "expense",
    "category": "购物",
    "note": "购物",
    "amount": 2.0,
    "card": false,
    "id": 1070
  },
  {
    "date": "2026-05-27",
    "type": "expense",
    "category": "餐饮",
    "note": "吃饭",
    "amount": 55.0,
    "card": false,
    "id": 1071
  },
  {
    "date": "2026-05-27",
    "type": "expense",
    "category": "餐饮",
    "note": "吃饭",
    "amount": 17.0,
    "card": false,
    "id": 1072
  },
  {
    "date": "2026-05-27",
    "type": "expense",
    "category": "餐饮",
    "note": "吃饭",
    "amount": 18.0,
    "card": false,
    "id": 1073
  },
  {
    "date": "2026-05-27",
    "type": "expense",
    "category": "购物",
    "note": "购物",
    "amount": 10.0,
    "card": false,
    "id": 1074
  },
  {
    "date": "2026-05-28",
    "type": "expense",
    "category": "购物",
    "note": "购物",
    "amount": 28.0,
    "card": false,
    "id": 1075
  },
  {
    "date": "2026-05-29",
    "type": "income",
    "category": "补贴",
    "note": "补贴收入",
    "amount": 7500.0,
    "card": false,
    "id": 1076
  },
  {
    "date": "2026-05-29",
    "type": "expense",
    "category": "购物",
    "note": "购物",
    "amount": 15.0,
    "card": false,
    "id": 1077
  },
  {
    "date": "2026-05-29",
    "type": "expense",
    "category": "餐饮",
    "note": "吃饭",
    "amount": 28.0,
    "card": false,
    "id": 1078
  },
  {
    "date": "2026-05-29",
    "type": "expense",
    "category": "购物",
    "note": "购物",
    "amount": 3200.0,
    "card": false,
    "id": 1079
  },
  {
    "date": "2026-05-29",
    "type": "expense",
    "category": "家庭",
    "note": "家庭支出",
    "amount": 1300.0,
    "card": false,
    "id": 1080
  },
  {
    "date": "2026-05-29",
    "type": "expense",
    "category": "购物",
    "note": "购物",
    "amount": 5.0,
    "card": false,
    "id": 1081
  },
  {
    "date": "2026-05-29",
    "type": "expense",
    "category": "购物",
    "note": "购物",
    "amount": 3.0,
    "card": false,
    "id": 1082
  },
  {
    "date": "2026-05-29",
    "type": "expense",
    "category": "家庭",
    "note": "打车",
    "amount": 24.0,
    "card": false,
    "id": 1083
  },
  {
    "date": "2026-05-29",
    "type": "expense",
    "category": "餐饮",
    "note": "夜宵",
    "amount": 14.0,
    "card": false,
    "id": 1084
  },
  {
    "date": "2026-05-30",
    "type": "income",
    "category": "收入",
    "note": "收入",
    "amount": 1305.0,
    "card": false,
    "id": 1085
  },
  {
    "date": "2026-05-30",
    "type": "expense",
    "category": "餐饮",
    "note": "饮料",
    "amount": 6.0,
    "card": false,
    "id": 1086
  },
  {
    "date": "2026-05-30",
    "type": "expense",
    "category": "家庭",
    "note": "家庭支出",
    "amount": 3.0,
    "card": false,
    "id": 1087
  },
  {
    "date": "2026-05-30",
    "type": "expense",
    "category": "餐饮",
    "note": "喝水",
    "amount": 6.0,
    "card": false,
    "id": 1088
  },
  {
    "date": "2026-05-30",
    "type": "expense",
    "category": "家庭",
    "note": "家庭支出",
    "amount": 154.0,
    "card": false,
    "id": 1089
  },
  {
    "date": "2026-05-31",
    "type": "expense",
    "category": "餐饮",
    "note": "吃饭",
    "amount": 109.0,
    "card": false,
    "id": 1090
  },
  {
    "date": "2026-05-31",
    "type": "expense",
    "category": "餐饮",
    "note": "早餐",
    "amount": 3.0,
    "card": false,
    "id": 1091
  },
  {
    "date": "2026-05-31",
    "type": "expense",
    "category": "餐饮",
    "note": "冰淇淋",
    "amount": 9.0,
    "card": false,
    "id": 1092
  },
  {
    "date": "2026-05-31",
    "type": "expense",
    "category": "餐饮",
    "note": "吃饭",
    "amount": 25.0,
    "card": false,
    "id": 1093
  },
  {
    "date": "2026-05-31",
    "type": "expense",
    "category": "家庭",
    "note": "停车",
    "amount": 26.0,
    "card": false,
    "id": 1094
  },
  {
    "date": "2026-05-31",
    "type": "expense",
    "category": "购物",
    "note": "购物",
    "amount": 81.0,
    "card": false,
    "id": 1095
  },
  {
    "date": "2026-06-01",
    "type": "expense",
    "category": "购物",
    "note": "购物",
    "amount": 20.0,
    "card": false,
    "id": 1096
  },
  {
    "date": "2026-06-01",
    "type": "expense",
    "category": "餐饮",
    "note": "吃饭",
    "amount": 4.0,
    "card": false,
    "id": 1097
  },
  {
    "date": "2026-06-01",
    "type": "expense",
    "category": "餐饮",
    "note": "吃饭",
    "amount": 41.0,
    "card": false,
    "id": 1098
  },
  {
    "date": "2026-06-01",
    "type": "expense",
    "category": "家庭",
    "note": "汽车充电",
    "amount": 50.0,
    "card": false,
    "id": 1099
  },
  {
    "date": "2026-06-01",
    "type": "expense",
    "category": "餐饮",
    "note": "吃饭",
    "amount": 5.0,
    "card": false,
    "id": 1100
  },
  {
    "date": "2026-06-01",
    "type": "expense",
    "category": "餐饮",
    "note": "吃饭",
    "amount": 12.0,
    "card": false,
    "id": 1101
  },
  {
    "date": "2026-06-02",
    "type": "income",
    "category": "补贴",
    "note": "补贴",
    "amount": 500.0,
    "card": false,
    "id": 1102
  },
  {
    "date": "2026-06-02",
    "type": "expense",
    "category": "餐饮",
    "note": "吃饭",
    "amount": 37.0,
    "card": false,
    "id": 1103
  },
  {
    "date": "2026-06-02",
    "type": "expense",
    "category": "购物",
    "note": "购物",
    "amount": 11.0,
    "card": false,
    "id": 1104
  },
  {
    "date": "2026-06-02",
    "type": "expense",
    "category": "餐饮",
    "note": "水果",
    "amount": 8.0,
    "card": false,
    "id": 1105
  },
  {
    "date": "2026-06-02",
    "type": "expense",
    "category": "餐饮",
    "note": "饮料",
    "amount": 29.0,
    "card": false,
    "id": 1106
  },
  {
    "date": "2026-06-02",
    "type": "expense",
    "category": "购物",
    "note": "消费",
    "amount": 1.0,
    "card": false,
    "id": 1107
  },
  {
    "date": "2026-06-02",
    "type": "expense",
    "category": "购物",
    "note": "购物",
    "amount": 304.0,
    "card": false,
    "id": 1108
  },
  {
    "date": "2026-06-02",
    "type": "expense",
    "category": "家庭",
    "note": "家庭",
    "amount": 416.0,
    "card": false,
    "id": 1109
  },
  {
    "date": "2026-06-03",
    "type": "income",
    "category": "补贴",
    "note": "补贴",
    "amount": 12091.0,
    "card": false,
    "id": 1110
  },
  {
    "date": "2026-06-03",
    "type": "expense",
    "category": "餐饮",
    "note": "吃饭",
    "amount": 129.0,
    "card": false,
    "id": 1111
  },
  {
    "date": "2026-06-03",
    "type": "expense",
    "category": "家庭",
    "note": "家庭",
    "amount": 73.0,
    "card": false,
    "id": 1112
  },
  {
    "date": "2026-06-03",
    "type": "expense",
    "category": "购物",
    "note": "购物",
    "amount": 76.0,
    "card": false,
    "id": 1113
  },
  {
    "date": "2026-06-03",
    "type": "expense",
    "category": "家庭",
    "note": "家庭",
    "amount": 200.0,
    "card": false,
    "id": 1114
  },
  {
    "date": "2026-06-04",
    "type": "expense",
    "category": "餐饮",
    "note": "吃饭",
    "amount": 53.0,
    "card": false,
    "id": 1115
  },
  {
    "date": "2026-06-04",
    "type": "expense",
    "category": "家庭",
    "note": "打车费",
    "amount": 15.0,
    "card": false,
    "id": 1116
  },
  {
    "date": "2026-06-04",
    "type": "expense",
    "category": "家庭",
    "note": "家庭",
    "amount": 200.0,
    "card": false,
    "id": 1117
  },
  {
    "date": "2026-06-04",
    "type": "expense",
    "category": "购物",
    "note": "购物",
    "amount": 79.0,
    "card": false,
    "id": 1118
  }
]
  // Find the highest existing ID to avoid collisions
  var maxId = 0;
  try {
    var existingRecords = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    existingRecords.forEach(function(r) { if (r.id > maxId) maxId = r.id; });
  } catch(e) {}

  // Re-assign IDs to avoid collisions
  IMPORT_DATA.forEach(function(r, i) {
    r.id = maxId + i + 1;
  });

  // Merge with existing records
  var allRecords;
  try {
    allRecords = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch(e) {
    allRecords = [];
  }
  allRecords = allRecords.concat(IMPORT_DATA);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(allRecords));
  localStorage.setItem(IMPORT_FLAG, '1');
  console.log('已导入 ' + IMPORT_DATA.length + ' 条历史记录');
})();
