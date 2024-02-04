const panels=document.querySelectorAll('.panel');

let methodtoexecute=(e)=>{
  console.log('e',e);
  removePanelClass();
    e.classList.add('active')
  }
  
  let removePanelClass=()=>{
    panels.forEach(panel => {
      panel.classList.remove('active')
  })
  }
panels.forEach((e)=>{
  e.addEventListener('click',()=>{
    methodtoexecute(e);
    // removePanelClass();
    // e.classList.add('active')

  })
})
