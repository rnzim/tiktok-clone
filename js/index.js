var btn_next = document.querySelector('.next')
btn_next.addEventListener('click',()=>{
    var video_name = ['p.mp4','v1.mp4']
    var video = document.querySelector('.vdo')
    video.src = 'videos/'+video_name[parseInt(Math.random()*2)]
})