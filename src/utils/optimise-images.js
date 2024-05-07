import { writeFileSync, readdirSync, statSync } from 'fs'
import { join, extname, resolve } from 'path'
import sharp from 'sharp'

const imgFolderPath = resolve(__dirname, '../../public/img')

// Function to optimize an image
async function optimizeImage(imagePath) {
  const imageBuffer = await sharp(imagePath)
    .jpeg({ quality: 50 }) // Adjust quality as per your requirement
    .toBuffer()

  // Write the optimized image back to the file
  writeFileSync(imagePath, imageBuffer)
}

// Function to recursively traverse through the folder and optimize images
async function optimizeImagesInFolder(folderPath) {
  const files = readdirSync(folderPath)
  for (const file of files) {
    const filePath = join(folderPath, file)
    if (statSync(filePath).isDirectory()) {
      await optimizeImagesInFolder(filePath) // Recursive call for subfolders
    } else {
      const ext = extname(filePath).toLowerCase()
      if (['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg'].includes(ext)) {
        await optimizeImage(filePath)
        console.log(`Optimized: ${filePath}`)
      }
    }
  }
}

// Start optimizing images in the folder
optimizeImagesInFolder(imgFolderPath)
  .then(() => console.log('All images optimized successfully!'))
  .catch((error) => console.error('Error optimizing images:', error))
