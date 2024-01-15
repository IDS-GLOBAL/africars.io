import OpenAI from 'openai';
import dotenv from "dotenv";
        //2.    Intialize dotenv.
dotenv.config();
        //3.    Intialize OpenAI API client.
const openai = new OpenAI();
        //4.    Define the API handler funciton.
export default async function handler(req: any, res: any) {

        try {
        //5.    Create a a new chat completion request to GPT-4.
                const gpt4CompletionRequest = await openai.chat.completions.create({
                    model: 'gpt-4',
                    messages: [
        //6.    Define the role of the system message and it's content.
                        { role: 'system', content: "You only return in JSON a coordinates key with a value in this format [43.6426, -79.6871], then a title of the location with a title key"},
        //7.    catpure users' request from req.body.
                        { role: 'user', content: req.body.value }
                    ],
                })
        //8.    Extract conent from the chat completion response.
                const responseText = gpt4CompletionRequest.choices[0]?.message?.content;
        //9     Check if the conent is a valid JSON.
                if (responseText && responseText[0] === "{") {
        //10    Parsse the content to JSON.
                    const json = JSON.parse(responseText);
        //11    Respond with a 200 status and parsed JSON.
                    res.status(200).send(json)
        //12    Log the JSON to console.
                    console.log(json)
                }else{
        //13.   Respond with a 200 status and a tryAgain Flag if the contentis not a valid JSON.
                    res.status(200).json({ tryAgain: true })
                }

        } catch (error) {
            res.status(500).json({ error: error })
        }
        
    }