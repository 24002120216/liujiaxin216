/*
 * 刘佳欣 - 电视剧热门排行榜交互脚本
 * 功能：Tab 切换 + 排行榜数据渲染
 */

/* ===== 刘佳欣：排行榜数据源（四个维度） ===== */
var ljx_rankData = {
    // 刘佳欣：每日排行
    daily: [
        '最美的时光',
        '咱们结婚吧',
        '渗透',
        '继承者们',
        '烽火佳人',
        '极品女士第2季',
        '爱闪亮',
        '狼烟（2013）',
        '钱多多炼爱记',
        '苍狼'
    ],
    // 刘佳欣：每周排行
    weekly: [
        '咱们结婚吧',
        '继承者们',
        '最美的时光',
        '爱闪亮',
        '渗透',
        '狼烟（2013）',
        '三十岁，你好',
        '钱多多炼爱记',
        '特种兵之火凤凰',
        '极品女士第2季'
    ],
    // 刘佳欣：每月排行
    monthly: [
        '特种兵之火凤凰',
        '咱们结婚吧',
        '继承者们',
        '金玉满堂',
        '王的女人',
        '爱闪亮',
        '爱情面前谁怕谁',
        '英雄联盟',
        '小爸爸',
        '我们这拨人'
    ],
    // 刘佳欣：全部排行
    all: [
        '永不磨灭的番号',
        '特种兵之火凤凰',
        '新还珠格格',
        '咱们结婚吧',
        '小爸爸',
        '心术',
        '乡村爱情5',
        '天天有喜',
        '一不小心爱上你',
        '夏日甜心'
    ]
};

/* ===== 刘佳欣：初始化 DOM 引用 ===== */
var ljx_tabItems = document.querySelectorAll('.ljx_tab-item');   // 所有 Tab 项
var ljx_rankLeftCol = document.querySelector('.ljx_rank-col--left');   // 左列容器
var ljx_rankRightCol = document.querySelector('.ljx_rank-col--right'); // 右列容器

/*
 * 刘佳欣：渲染排行榜
 * @param {string} tabKey - Tab 键名（daily / weekly / monthly / all）
 */
function ljx_renderRank(tabKey) {
    // 刘佳欣：根据键名获取对应数据
    var ljx_list = ljx_rankData[tabKey];
    if (!ljx_list) return;

    // 刘佳欣：清空左右列
    ljx_rankLeftCol.innerHTML = '';
    ljx_rankRightCol.innerHTML = '';

    // 刘佳欣：遍历 10 条数据，前 5 条放左列，后 5 条放右列
    for (var ljx_i = 0; ljx_i < ljx_list.length; ljx_i++) {
        var ljx_rankNum = ljx_i + 1;                     // 刘佳欣：排名数字（1-10）
        var ljx_title = ljx_list[ljx_i];                 // 刘佳欣：剧集名称
        var ljx_isTop3 = ljx_rankNum <= 3;               // 刘佳欣：判断是否前 3 名

        // 刘佳欣：构建单行 HTML
        var ljx_rowHtml =
            '<div class="ljx_rank-row">' +
                '<span class="ljx_rank-badge' + (ljx_isTop3 ? ' ljx_rank-badge--top' : '') + '">' + ljx_rankNum + '</span>' +
                '<span class="ljx_rank-title">' + ljx_title + '</span>' +
            '</div>';

        // 刘佳欣：前 5 名放左列，后 5 名放右列
        if (ljx_rankNum <= 5) {
            ljx_rankLeftCol.innerHTML += ljx_rowHtml;
        } else {
            ljx_rankRightCol.innerHTML += ljx_rowHtml;
        }
    }
}

/*
 * 刘佳欣：切换 Tab
 * @param {HTMLElement} ljx_targetTab - 被点击的 Tab 元素
 */
function ljx_switchTab(ljx_targetTab) {
    // 刘佳欣：先移除所有 Tab 的激活态
    for (var ljx_j = 0; ljx_j < ljx_tabItems.length; ljx_j++) {
        ljx_tabItems[ljx_j].classList.remove('ljx_tab-item--active');
    }

    // 刘佳欣：给目标 Tab 加上激活态
    ljx_targetTab.classList.add('ljx_tab-item--active');

    // 刘佳欣：读取 data-ljx-tab 属性，获取键名
    var ljx_tabKey = ljx_targetTab.getAttribute('data-ljx-tab');

    // 刘佳欣：渲染对应排行榜数据
    ljx_renderRank(ljx_tabKey);
}

/* ===== 刘佳欣：绑定 Tab 点击事件 ===== */
for (var ljx_k = 0; ljx_k < ljx_tabItems.length; ljx_k++) {
    ljx_tabItems[ljx_k].addEventListener('click', function () {
        ljx_switchTab(this); // 刘佳欣：传入当前点击的 Tab
    });
}

/* ===== 刘佳欣：页面加载完成后，默认渲染"每日"排行 ===== */
document.addEventListener('DOMContentLoaded', function () {
    ljx_renderRank('daily');
});
