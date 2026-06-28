import { GoogleGenAI } from '@google/genai';
import 'dotenv/config';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
console.log("Keys of ai.models:", Object.keys(ai.models));
console.log("Methods of ai.models:", Object.getOwnPropertyNames(Object.getPrototypeOf(ai.models)));
