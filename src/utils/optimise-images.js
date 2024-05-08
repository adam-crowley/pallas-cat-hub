import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const imgPath = path.resolve('public/img/uncompressed')
const compressedImgPath = path.resolve('public/img/compressed')

const optimizeImages = async () => {
  try {
    const files = await fs.promises.readdir(imgPath)

    for (const file of files) {
      if (file.match(/\.(jpg|jpeg)$/i)) {
        const imagePath = path.join(imgPath, file)
        await sharp(imagePath)
          .jpeg({ quality: 80 })
          .toFile(path.join(compressedImgPath, `${file}`))
      }
      if (file.match(/\.(png)$/i)) {
        const imagePath = path.join(imgPath, file)
        await sharp(imagePath)
          .png()
          .toFile(path.join(compressedImgPath, `${file}`))
      }
    }
    console.log('Images optimized successfully')
  } catch (error) {
    console.error('Error optimizing images:', error)
  }
}

optimizeImages()
