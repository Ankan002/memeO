import { MEME_API } from "../constants/API"

export const getMemes = async (isMemeLoading: any, memes: any, setIsMemeLoading: any, setMemes: any) => {
    if(isMemeLoading) return
    setIsMemeLoading(true)

    try{
      const Response = await fetch(MEME_API, {
        method: 'GET'
      })

      const data = await Response.json()

      const {memes: result} = data

      const midResult = result.filter((meme: any) => (meme.url.split("."))[(meme.url.split(".")).length - 1] !== 'gif')

      const finalResult = memes.concat(midResult)

      setMemes(finalResult)
      setIsMemeLoading(false)
    }
    catch(error){
      console.error(error)
      setIsMemeLoading(false)
    }
}
