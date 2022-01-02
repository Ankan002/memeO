import { CODING_MEME_API } from "../constants/API";

export const getCodingMeme = async (isCodingMemeLoading: any, setIsCodingMemeLoading: any, setCodingMeme: any) => {
    if(isCodingMemeLoading) return
    setIsCodingMemeLoading(true)
    try{
        const Response = await fetch(CODING_MEME_API, {
            method: 'GET'
        })

        const data = await Response.json()

        const newMemeData = {
            partOne: '',
            partTwo: ''
        }

        if (data?.type === 'single') {
            newMemeData.partTwo = data?.joke
        }

        else if(data?.type === 'twopart') {
            newMemeData.partOne = data?.setup
            newMemeData.partTwo = data?.delivery
        }

        else{
            newMemeData.partTwo = 'Data not found'
        }

        setCodingMeme(newMemeData)

        setIsCodingMemeLoading(false)
    }
    catch(error){
        console.error(error)
        setIsCodingMemeLoading(false)
    }
}