/* ================================
Week 7 Assignment: Midterm Functions + Signatures
================================ */
var slides = [(title: "slide 1", text:"some text")]
var currentslide =0;
var addTitle = (title)=>{
  $('.sidebar').append(`<h1>${title}</h1>`)
}
var addText = (text)=>{}
var buildslide = (slideobj)=>{
  addTitle(slideobj.title)
  addText(slideobj.text)
}

buildslide(slides[currentslide])
