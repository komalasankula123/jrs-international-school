import sharp from 'sharp';
import fs from 'fs';

async function makeTransparent() {
  const inputPath = 'C:/Users/PC/.gemini/antigravity-ide/brain/b9c272f2-15b7-48e2-ae1c-f750fd27d664/two_girls_white_bg_1790682126584.jpg';
  const outputPath = './public/two-girls-transparent.png';

  const image = sharp(inputPath);
  const { data, info } = await image.ensureAlpha().raw().toBuffer({ resolveWithObject: true });

  const threshold = 238;

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    // If near white background, make transparent with smooth feathering
    if (r > threshold && g > threshold && b > threshold) {
      const minVal = Math.min(r, g, b);
      if (minVal > 248) {
        data[i + 3] = 0;
      } else {
        const factor = (255 - minVal) / (255 - threshold);
        data[i + 3] = Math.round(255 * factor);
      }
    }
  }

  await sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4,
    },
  })
    .png()
    .toFile(outputPath);

  console.log('Successfully created transparent cutout at', outputPath);
}

makeTransparent();
