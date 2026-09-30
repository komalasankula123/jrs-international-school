import { AutoModel, AutoProcessor, RawImage, env } from '@xenova/transformers';
import sharp from 'sharp';
import path from 'path';

// Disable local cache warnings, enable downloading
env.allowLocalModels = false;

async function removeBackground() {
  const inputPath = 'C:/Users/PC/.gemini/antigravity-ide/brain/b9c272f2-15b7-48e2-ae1c-f750fd27d664/.user_uploaded/media_1790687190699.png';
  const outputPath = './public/student-writing-transparent.png';

  console.log('Loading RMBG model...');
  const model = await AutoModel.from_pretrained('briaai/RMBG-1.4');
  const processor = await AutoProcessor.from_pretrained('briaai/RMBG-1.4');

  console.log('Reading input image...');
  const image = await RawImage.read(inputPath);

  console.log('Processing foreground segmentation...');
  const { pixel_values } = await processor(image);
  const { output } = await model({ input: pixel_values });

  console.log('Generating mask...');
  const mask = await RawImage.fromTensor(output[0].mul(255).to('uint8')).resize(image.width, image.height);

  console.log('Applying mask and writing transparent PNG...');
  // Combine image RGB with mask Alpha
  const inputBuffer = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });
  const maskBuffer = Buffer.from(mask.data);

  const rgbaData = Buffer.alloc(image.width * image.height * 4);
  for (let i = 0; i < image.width * image.height; i++) {
    rgbaData[i * 4] = inputBuffer.data[i * inputBuffer.info.channels];
    rgbaData[i * 4 + 1] = inputBuffer.data[i * inputBuffer.info.channels + 1];
    rgbaData[i * 4 + 2] = inputBuffer.data[i * inputBuffer.info.channels + 2];
    rgbaData[i * 4 + 3] = maskBuffer[i]; // Alpha from model mask
  }

  await sharp(rgbaData, {
    raw: {
      width: image.width,
      height: image.height,
      channels: 4,
    },
  })
    .png()
    .toFile(outputPath);

  console.log('Successfully saved transparent cutout to:', outputPath);
}

removeBackground().catch((err) => {
  console.error('Error removing background:', err);
  process.exit(1);
});
