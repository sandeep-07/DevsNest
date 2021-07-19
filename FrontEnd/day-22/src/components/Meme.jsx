import React,{useState} from 'react'
const Meme = ({ meme,setMeme }) => {
    const [form, setForm] = useState({
        template_id: meme.id,
        username: "imsandeep2",
        password: "imsandeep2",
        boxes:[],
    })
    let x = []

    for (let i = 0; i < meme.box_count; i++)
        x.push(i)
    
    const generatememe = () => {
        let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`
        form.boxes.map((box, index) => {
            url+=`&boxes[${index}][text]=${box.text}`
        })
        console.log(url)
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
            // console.log(data)
                setMeme({...meme,url:data.data.url})
        })
        
    }
    console.log(meme)
    return (
        <div className="meme">
            <img src={meme.url} alt="a" />
            <div>
                {
                    x.map(xx => {
                        
                        return <input key={xx} type="text"
                            placeholder={`Meme caption ${xx+1}`}
                            onChange={(e) => {
                                const newBoxes = form.boxes
                                newBoxes[xx] = { text: e.target.value }
                                setForm({...form,boxes:newBoxes})  
                            }}
                    />
                    })}
            </div>
            <div>
                <button onClick={() => {
                    generatememe()
                }}>Generate Meme</button>
                <button onClick={() => {
                    setMeme(null)
                }}>Choose Template</button>
            </div>
        </div>
    )
}

export default Meme