

const inputs = document.querySelectorAll('.wrapper input');
const image = document.querySelector('.img');
function callbackMod(){
    console.log(this.value);
    const suffix = this.dataset.sizing || '';
    //this changes the css variable value according to the this.name property to this.value+suffix
    document.documentElement.style.setProperty(`--${this.name}`, this.value+suffix);
   
  
  //// alternate way of doing it. Need to add if condition to check this.name and set corresponding property type
  // image.style.filter = `blur(${this.value}${suffix})`;
    // image.style.padding = this.value + suffix;
}


inputs.forEach(cur => cur.addEventListener('change',callbackMod));