import { Prediction } from '../types';

export async function recognizeDrawing(imageData: ImageData): Promise<Prediction> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const features = extractFeatures(imageData);
      const prediction = classifyDrawing(features);
      resolve(prediction);
    }, 1000);
  });
}

interface Features {
  hasCircularShape: number;
  hasAngularShape: number;
  complexity: number;
  centerDensity: number;
  edgeDensity: number;
  aspectRatio: number;
  fillRatio: number;
}

function extractFeatures(imageData: ImageData): Features {
  const { width, height, data } = imageData;
  let totalPixels = 0;
  let centerPixels = 0;
  let edgePixels = 0;

  const centerMinX = width * 0.3;
  const centerMaxX = width * 0.7;
  const centerMinY = height * 0.3;
  const centerMaxY = height * 0.7;

  let minX = width, maxX = 0, minY = height, maxY = 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];

      const isDrawn = r < 200 || g < 200 || b < 200;

      if (isDrawn) {
        totalPixels++;

        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;

        if (x >= centerMinX && x <= centerMaxX && y >= centerMinY && y <= centerMaxY) {
          centerPixels++;
        }

        if (x < width * 0.1 || x > width * 0.9 || y < height * 0.1 || y > height * 0.9) {
          edgePixels++;
        }
      }
    }
  }

  const drawingWidth = maxX - minX;
  const drawingHeight = maxY - minY;
  const aspectRatio = drawingWidth > 0 ? drawingHeight / drawingWidth : 1;

  const boundingBoxArea = drawingWidth * drawingHeight;
  const fillRatio = boundingBoxArea > 0 ? totalPixels / boundingBoxArea : 0;

  let corners = 0;
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      if (isCorner(data, width, x, y)) corners++;
    }
  }

  return {
    hasCircularShape: fillRatio > 0.6 ? 0.8 : 0.3,
    hasAngularShape: corners / totalPixels,
    complexity: totalPixels / (width * height),
    centerDensity: totalPixels > 0 ? centerPixels / totalPixels : 0,
    edgeDensity: totalPixels > 0 ? edgePixels / totalPixels : 0,
    aspectRatio,
    fillRatio
  };
}

function isCorner(data: Uint8ClampedArray, width: number, x: number, y: number): boolean {
  const getPixel = (px: number, py: number) => {
    const i = (py * width + px) * 4;
    return data[i] < 200 || data[i + 1] < 200 || data[i + 2] < 200;
  };

  const center = getPixel(x, y);
  if (!center) return false;

  const neighbors = [
    getPixel(x - 1, y),
    getPixel(x + 1, y),
    getPixel(x, y - 1),
    getPixel(x, y + 1)
  ];

  const drawnNeighbors = neighbors.filter(n => n).length;
  return drawnNeighbors === 2;
}

function classifyDrawing(features: Features): Prediction {
  const scores: Record<string, number> = {
    circle: 0,
    triangle: 0,
    square: 0,
    tree: 0,
    sun: 0,
    cat: 0,
    house: 0,
    star: 0,
    flower: 0
  };

  if (features.fillRatio > 0.6 && features.hasCircularShape > 0.5) {
    scores.circle += 3;
    scores.sun += 1.5;
  }

  if (features.hasAngularShape > 0.01) {
    scores.triangle += 2;
    scores.square += 2;
    scores.star += 1.5;
    scores.house += 1;
  }

  if (features.fillRatio < 0.4 && features.aspectRatio > 0.3) {
    scores.square += 1.5;
  }

  if (features.aspectRatio > 1.2) {
    scores.tree += 2;
    scores.flower += 1;
  }

  if (features.centerDensity > 0.4 && features.hasCircularShape > 0.5) {
    scores.sun += 2;
    scores.flower += 1.5;
  }

  if (features.complexity > 0.15) {
    scores.cat += 1.5;
    scores.tree += 1;
    scores.flower += 1.5;
  }

  if (features.hasAngularShape > 0.015 && features.aspectRatio < 0.8) {
    scores.house += 2;
    scores.star += 1.5;
  }

  let maxScore = 0;
  let bestMatch = 'circle';

  for (const [shape, score] of Object.entries(scores)) {
    if (score > maxScore) {
      maxScore = score;
      bestMatch = shape;
    }
  }

  const confidence = Math.min(0.95, maxScore / 5 + Math.random() * 0.15);

  return {
    className: bestMatch,
    probability: confidence
  };
}
