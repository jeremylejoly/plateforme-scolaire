import { GoogleGenAI } from "@google/genai";
import * as fs from "node:fs";
import * as dotenv from "dotenv";
import * as path from "node:path";

dotenv.config({ path: path.join(__dirname, "../.env") });

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error("GEMINI_API_KEY not found in environment or .env file!");
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey });

async function generate() {
  const prompt = "A high-quality realistic style illustration of a word factory or word workshop. Glowing wooden letter building blocks are being assembled into words on an active crafting table. The wooden blocks have beautifully carved glowing letters like 'A', 'B', 'C', 'M', 'O', 'T'. Warm glowing magical light emanates from the letters. The crafting table is a rustic wooden workbench cluttered with tools, wood shavings, and drafting paper. Depth of field focus, dramatic lighting, highly detailed textures.";
  console.log("Generating image with prompt:", prompt);
  try {
    const response = await ai.models.generateImages({
      model: "imagen-3.0-generate-002",
      prompt: prompt,
      config: {
        numberOfImages: 1,
        outputMimeType: "image/png",
        aspectRatio: "1:1",
      },
    });

    if (!response.generatedImages || response.generatedImages.length === 0) {
      throw new Error("No image was generated");
    }

    const imgBytes = response.generatedImages[0].image.imageBytes;
    const buffer = Buffer.from(imgBytes, "base64");
    const outputPath = "/Users/jeremy/antigravity/LCML/assets/logos/sub_atelier_mots.png";
    
    // Ensure parent directory exists
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    
    fs.writeFileSync(outputPath, buffer);
    console.log("Successfully wrote image to:", outputPath);
  } catch (error) {
    console.error("Error during image generation:", error);
    process.exit(1);
  }
}

generate();
