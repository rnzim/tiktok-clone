var btn_next = document.querySelector('.next')
btn_next.addEventListener('click',()=>{
    var video_name = Array()
    const url = 'https://tk-backend.onrender.com'
    axios.get(url).then(vdos =>{
        console.log(vdos)
        video_name = vdos
    }).catch(err=>{
        console.log(err)
    })
    
    var video = document.querySelector('.vdo')
    video.src = video_name[parseInt(Math.random()*video_name.length)]
})