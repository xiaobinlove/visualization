const cheerio = require('cheerio')
const fs = require('fs-extra')
const path = require('path')

// 读取 HTML 字符串
async function extractSvgIconsFromHtml(html, outputDir) {
  const $ = cheerio.load(html)

  // 创建一个用于保存 SVG 内容的数组
  const svgs = []

  // 查找所有的 svg 元素
  $('svg').each((index, element) => {
    // 获取 svg 的完整 HTML 字符串
    const svgContent = $.html(element)
    const classList = $(element).attr('class').split(/\s+/)
    const className = classList.length > 1 ? classList[1] : null // 如果没有第二个类名，则为 null
    console.log('className', className)
    svgs.push({
      className,
      svgContent
    })
    // 将 svg 内容添加到数组中
    // svgs.push(svgContent)
  })

  // 确保输出目录存在
  await fs.ensureDir(outputDir)
  const iconMenuFilePath = path.join(outputDir, 'icon_menu.json')
  const iconMenu = []
  // 遍历 svg 数组并保存到文件
  svgs.forEach((item, index) => {
    const svg = item.svgContent
    let iconName = item.className
    // const fileName = `svg_icon_${index + 1}.svg`
    // quick-bi-yuanshujubiao-svg
    iconName = iconName.replace('quick-bi-', '')
    iconName = iconName.replace('-svg', '')
    iconName = 'db-' + iconName
    const fileName = `${iconName}.svg`
    const filePath = path.join(outputDir, fileName)
    iconMenu.push({
      name: iconName,
      category: 'system'
    })
    fs.writeFile(filePath, svg, 'utf8', (err) => {
      if (err) {
        console.error(`Error writing file ${fileName}: ${err.message}`)
      } else {
        console.log(`SVG icon saved to ${filePath}`)
      }
    })
  })
  fs.writeFile(iconMenuFilePath, JSON.stringify(iconMenu), 'utf8', (err) => {
    if (err) {
      console.error(`Error writing menu ${iconMenu}: ${err.message}`)
    } else {
      console.log(`SVG icon menu saved to ${iconMenuFilePath}`)
    }
  })
}

// 从文件中读取 HTML（可选，如果你直接有 HTML 字符串可以跳过这一步）
async function readHtmlFile(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8')
    return data
  } catch (err) {
    console.error(`Error reading file: ${err.message}`)
    process.exit(1)
  }
}

// 主函数
async function main() {
  // 你可以从文件读取 HTML，或者直接使用 HTML 字符串
  const htmlFilePath = './test-svg.html' // 替换为你的 HTML 文件路径
  const html = await readHtmlFile(htmlFilePath)

  // 直接使用提供的 HTML 字符串（为了示例方便）
  //   const html = `
  //   <html>
  //     <!-- ...（此处省略了部分 HTML 内容，与上面提供的相同）... -->
  //   </html>
  //   `

  const outputDirectory = './output' // 替换为你想要保存 SVG 图标的目录

  // 提取 SVG 图标并保存到本地文件
  await extractSvgIconsFromHtml(html, outputDirectory)

  console.log('SVG icon extraction completed.')
}

main().catch((err) => {
  console.error(`Error during execution: ${err.message}`)
})
