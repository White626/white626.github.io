const breakfasts = {
    主食: ["鸡蛋羹", "全麦面包", "蒸南瓜", "煮鸡蛋", "馒头"],
    饮品: ["红枣小米粥", "黄豆豆浆", "黑芝麻糊", "山药粥", "银耳莲子羹", "馄饨", "燕窝燕麦粥", "枸杞粥", "红豆薏米水", "小米南瓜粥", "银耳枸杞小米粥", "山药玉米粥", "紫薯山药燕麦粥", "牛奶燕麦粥", "山药百合小米红枣粥", "五红汤", "红枣银耳汤", "木瓜花生牛奶羹", "木瓜牛奶西米露", "红糖小米粥", "牛奶花生汤", "山楂苹果红枣汤", "百合红豆汤", "木瓜银耳羹", "鸡蛋牛奶燕麦羹", "花生木瓜汤", "鸡蛋酒酿汤圆", "黑米红豆红枣粥", "黑豆豆浆", "桂圆红枣糯米粥", "西芹牛肉羹"]
};

const lunchesAndDinners = {
    主食: ["白米饭", "山药面条", "红豆饭", "糙米饭", "黑米饭", "地瓜饭"],
    素菜: ["苋菜", "生菜", "娃娃菜", "油麦菜", "快白苗", "地瓜叶", "菜心", "豆芽"],
    荤菜: ["清蒸鲈鱼", "西芹炒牛肉", "清蒸鳕鱼", "白萝卜炖牛肉", "煎海鱼", "板栗炖鸡块", "明虾炖豆腐", "彩椒炒瘦肉", "清蒸多宝鱼", "红烧鱼", "糖醋排骨", "红烧鸡翅", "白灼虾", "粉丝蒸扇贝", "红烧鸡块", "茭白肉片", "卤猪蹄", "秋葵肉末", "虾仁蒸蛋", "肉末炖豆腐", "丝瓜肉片", "莴笋炒肉", "南瓜蒸排骨", "荷兰豆炒肉片"],
    汤: ["通草猪骨汤", "丝瓜鲫鱼汤", "通草鲫鱼汤", "王不留行猪蹄汤", "冬瓜鲫鱼汤", "黄花菜鸡汤", "鲫鱼豆腐汤", "海带豆腐汤", "山药乌鸡汤", "菜心瘦肉汤", "海带排骨汤", "茯苓薏米排骨汤", "红枣桂圆老鸡汤", "山药排骨汤", "西红柿老豆腐鱼汤", "黄花菜排骨汤", "干贝丝瓜鱼汤", "椰子鸡汤", "黄芪老鸡汤", "当归土鸡汤", "玉米胡萝卜排骨汤", "黄芪鱼汤", "虫草花排骨汤", "党参山药老鸡汤"]
};

const fruitData = {
    水果: ["苹果", "无花果", "橙子", "葡萄", "香蕉", "猕猴桃", "人参果"]
};

const medicine = {
    汤药: ["当归15克，黄芪15克，枸杞5克，路路通10克，通草10克", "黄芪15克，党参10克，当归10克，通草10克，炒王不留行10克", "黄芪3克，枸杞3克，红枣3克，姜丝0.5克", "红皮花生25克，红糖15克，红枣10克，红豆25克，红枸杞5克", "黑豆20克，黑皮花生15克，黑米20克，黑芝麻5克，黑枣10克", "莲子10克，怀山药10克，芡实10克，茯苓10克"]
};

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateMenu() {
    const breakfast = `${getRandomItem(breakfasts.主食)} ${getRandomItem(breakfasts.饮品)}`;

    let lunchMain = getRandomItem(lunchesAndDinners.主食);
    let lunchVeggie = getRandomItem(lunchesAndDinners.素菜);
    let lunchMeat = getRandomItem(lunchesAndDinners.荤菜);
    let lunchSoup = getRandomItem(lunchesAndDinners.汤);

    let dinnerMain = getRandomItem(lunchesAndDinners.主食);
    let dinnerVeggie = getRandomItem(lunchesAndDinners.素菜);
    let dinnerMeat = getRandomItem(lunchesAndDinners.荤菜);
    let dinnerSoup = getRandomItem(lunchesAndDinners.汤);

    // Ensure lunch and dinner do not have duplicate items
    while (dinnerMain === lunchMain) {
        dinnerMain = getRandomItem(lunchesAndDinners.主食);
    }
    while (dinnerVeggie === lunchVeggie) {
        dinnerVeggie = getRandomItem(lunchesAndDinners.素菜);
    }
    while (dinnerMeat === lunchMeat) {
        dinnerMeat = getRandomItem(lunchesAndDinners.荤菜);
    }
    while (dinnerSoup === lunchSoup) {
        dinnerSoup = getRandomItem(lunchesAndDinners.汤);
    }

    const lunch = `${lunchMain} ${lunchVeggie} ${lunchMeat} ${lunchSoup}`;
    const dinner = `${dinnerMain} ${dinnerVeggie} ${dinnerMeat} ${dinnerSoup}`;

    const fruitItem = `${getRandomItem(fruitData.水果)}`;
    const medicineItem = `${getRandomItem(medicine.汤药)}`;

    document.getElementById("breakfast").textContent = breakfast;
    document.getElementById("lunch").textContent = lunch;
    document.getElementById("dinner").textContent = dinner;
    document.getElementById("fruit").textContent = fruitItem;
    document.getElementById("medicine").textContent = medicineItem;
}

document.getElementById("generateButton").addEventListener("click", generateMenu);
