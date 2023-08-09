"use strict";

// Libs
import express from "express";
import { Configuration, OpenAIApi } from "openai";
import openaiConfig from "./configs/openai.config.js";

const OPENAI_KEY = process.env.OPENAI_KEY;
const routerInstance = express.Router();

// Define routes
routerInstance.post("/api/chat", async (req, res) => {
    const { prompt } = req.body;
    openaiConfig.messages.push({ "role": "user", "content": prompt });

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${OPENAI_KEY}`
        },
        body: JSON.stringify(openaiConfig)
    });

    const data = await response.json();
    openaiConfig.messages.push(data.choices[0].message);
    const message = data.choices[0].message;

    return res.json(message);
});

const configuration = new Configuration({
    apiKey: OPENAI_KEY
});
const openai = new OpenAIApi(configuration);

routerInstance.post("/api/general", async (req, res) => {
    const { prompt } = req.body;

    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        temperature: 0,
        messages: [{ role: "user", content: prompt }]
    }); 
    
    // console.log(completion.data.choices[0].message.content);
    const message = completion.data.choices[0].message;
    return res.json(message);
});

const recipeSample = {
    "slug": "fish-tacos",
    "name": "Fish Tacos with Pickled Onion",
    "type": "Main Meal",
    "duration": 60,
    "image": "images/original/fish-tacos-with-pickled-onion.png",
    "description": "Delicious fish tacos made with crispy breaded fish, fresh cilantro, and tangy pickled onions wrapped in a soft flour tortilla.",
    "ingredients": {
        "Red onion": "1",
        "Water": "1 cup",
        "Vinegar": "1 cup",
        "Sugar": "1 tablespoon",
        "Salt": "1 teaspoon",
        "White fish fillets": "1 pound",
        "Flour": "1 cup",
        "Egg": "1",
        "Breadcrumbs": "1 cup",
        "Vegetable oil": "for frying",
        "Flour tortillas": "8",
        "Cilantro": "1 bunch",
        "Lime": "1"
    },
    "steps": [
        {
            "name": "Pickle Onions",
            "description": "Thinly slice the red onion and set aside."
        },
        {
            "name": "Prepare Pickling Liquid",
            "description": "In a small saucepan, combine the water, vinegar, sugar, and salt. Bring to a simmer, then remove from heat.",
            "timer": 5
        },
        {
            "name": "Pickle Onions",
            "description": "Add the sliced onions to the pickling liquid and let sit for at least 30 minutes.",
            "timer": 30
        },
        {
            "name": "Prepare Fish",
            "description": "Cut the fish fillets into 2-inch wide strips."
        },
        {
            "name": "Bread Fish",
            "description": "Set up a breading station with three shallow dishes: one with flour, one with a beaten egg, and one with breadcrumbs. Coat each fish strip in flour, dip in egg, and then coat with breadcrumbs."
        },
        {
            "name": "Fry Fish",
            "description": "Heat vegetable oil in a deep skillet over medium-high heat. Fry the breaded fish strips until golden brown and cooked through, about 3-4 minutes per side. Drain on paper towels."
        },
        {
            "name": "Assemble Tacos",
            "description": "Place a piece of fried fish on a flour tortilla, top with pickled onions, chopped cilantro, and a squeeze of lime. Fold and serve."
        }
    ]
}

routerInstance.post("/api/image", async (req, res) => {
    const { prompt } = req.body;

    const response = await openai.createImage({
        prompt: prompt,
        n: 1,
        size: "512x512",
        response_format: "url"
    });

    const payload = {
        url: response.data.data[0].url
    }

    return res.json(payload);
});

routerInstance.post("/api/recipe", async (req, res) => {
    const { ingredients } = req.body;

    const prompt = `
        Create a recipe with the list of ingredients defined in the markup.
        <ingredients>${JSON.stringify(ingredients)}</ingredients>
        
        You can include typical ingredients found in a kitchen, such as salt, pepper, condiments.

        If the list of ingredients is empty or you can't find ingredients inside, just answer with "false" without any other character.

        When all conditions pass and you've found a recipe, send the output in JSON format. The output should be structured exactly like the following sample, without any additional brackets: ${JSON.stringify(recipeSample)}
    `;

    // console.log(prompt);

    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        temperature: 0,
        messages: [
            { role: "system", content: "You are a cooking expert that creates recipes." },
            { role: "user", content: prompt }
        ]
    }); 

    // console.log(completion.data.choices[0].message.content);
    const message = completion.data.choices[0].message;
    return res.json(message);
});

// Export router for use in main application
export default routerInstance;