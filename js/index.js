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
    video.src = 'https://firebasestorage.googleapis.com/v0/b/storagex-5974a.appspot.com/o/lv_0_20231126005727.mp4?alt=media&token=9b8f90c0-c7f0-4a21-9e3c-ccbebb2fd25f'
    console.log('Url Do Video: '+video.src)
})
