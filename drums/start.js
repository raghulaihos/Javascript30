    let box;

    document.addEventListener('keydown',e=>{
        
        
        if(e.keyCode === 65 || e.keyCode === 83 || e.keyCode === 68 || e.keyCode === 70 ||e.keyCode === 71 || e.keyCode === 72 ||e.keyCode === 74 ||e.keyCode === 75||e.keyCode === 73||e.keyCode === 76){
       
            box = document.querySelector(`.key[data-key="${e.keyCode}"]`);
            box.classList.add('playing');
            const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
            audio.currentTime = 0;
            audio.play();
            setTimeout(function() { killPlaying(); }, 100);
            
        }

       let killPlaying = () =>{
        box = document.querySelectorAll(`.key`);
        box.forEach((cur)=>{
            cur.classList.remove('playing');
        })
        }

    })
