/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let area = 0;
    if (!height || height.length < 2) return 0;

    let i = 0,
        j = height.length - 1;
    while (i < j) {
        area = Math.max(area, (j - i) * Math.min(height[i], height[j]));
        if (height[i] < height[j]) {
            i++;
        } else {
            j--;
        }
    }
    return area;
};
