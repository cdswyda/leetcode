/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  var days = prices.length;
  // 记录收益 下标为天数 第一个成员为手里无股票 第二个为手里有股票
  var profitArr = new Array(days).fill(0).map((_) => [0, 0]);
  profitArr[0][0] = 0;
  profitArr[0][1] = -prices[0];

  for (var i = 1; i < days; i++) {
    // 第 i 天手里无股票 = 上一次无股票的收益 or 卖出上一次有股票的收益 取较大的
    profitArr[i][0] = Math.max(
      profitArr[i - 1][0],
      profitArr[i - 1][1] + prices[i] - fee
    );
    // 第 i 天手里有股票 = 上一次有股票的收益（继续持有） or 此时进行买入 取较大
    profitArr[i][1] = Math.max(
      profitArr[i - 1][1],
      profitArr[i - 1][0] - prices[i]
    );
  }
  return profitArr[days - 1][0];
};

// test
function test(p, f) {
  console.log(JSON.stringify(p), f, "=>", maxProfit(p, f));
}

test([1, 3, 2, 8, 4, 9], 2);
