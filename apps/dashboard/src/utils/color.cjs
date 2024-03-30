const cheerio = require('cheerio')
const fs = require('fs')

// 读取HTML文件内容
const htmlContent = fs.readFileSync('./test.html', 'utf8')

// 使用cheerio解析HTML
const $ = cheerio.load(htmlContent)

// 用于存储色值的数组
const colors = []

// 选择所有带有background样式的div元素
$('.color-col').each((index, element) => {
  // 获取元素的style属性
  const style = $(element).attr('style')

  // 使用正则表达式匹配色值
  const rgbRegex = /rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)/g
  let match

  // 查找所有匹配项
  while ((match = rgbRegex.exec(style)) !== null) {
    // 将匹配到的色值转换为数组并添加到colors数组中
    const colorArray = match.slice(1).map(Number)
    console.log(match, 'match')
    colors.push(match[0])
  }
})

// 输出色值数组
console.log(colors)
fs.writeFileSync('./colors.json', JSON.stringify(colors, null, 2))
