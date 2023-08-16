/** @format */

import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
dotenv.config();

const configaretion = new Configuration({
  apiKey: process.env.OPEN_API_KEY,
});

const openai = new OpenAIApi(configaretion);

export default openai;
