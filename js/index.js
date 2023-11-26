var btn_next = document.querySelector('.next')
btn_next.addEventListener('click',()=>{
    var video_name = Array()
    const url = 'https://tk-backend.onrender.com/video'
    axios.get(url).then(vdos =>{
        console.log(vdos.data.url)
        video_name = vdos.data.url
    }).catch(err=>{
        console.log(err)
    })
    
    var video = document.querySelector('.vdo')
    video.src = `${vdos.data.url[parseInt(Math.random()*vdos.data.url.length)]}`
    console.log('Url Do Video: '+video.src)
})
