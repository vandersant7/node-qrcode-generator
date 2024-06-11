import prompt from "prompt";
import PromptShemaQRCode from "../../prompts/prompt-shema-qrcode.js";
import handle from './handle.js'

async function createQRCode(){
    prompt.get(PromptShemaQRCode, handle)
    prompt.start()
}

export default createQRCode;