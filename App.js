var lightmood=document.getElementById("darkmood");
var body=document.body;
lightmood.addEventListener("click", () => {
    body.classList.toggle("dark");
lightmood.textContent=body.classList.contains("dark")?"click":"click";
})

// function completepara() {
//     var para = document.getElementById("para")

//     var link = document.getElementById("link")

//     if (link.innerHTML === "Read More") {
//         para.innerHTML = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
//         Provident, sed delectus? Facilis ullam enim tenetur iusto soluta quam repellat
//          quod sed dolor quia voluptatem sequi ipsa suscipit animi velit magnam excepturi
//           obcaecati eligendi, veniam eum illo culpa nisi at. Laborum inventore, quam culpa
//            dolorum aliquam assumenda numquam sunt saepe provident dicta incidunt obcaecati 
//            maiores minima quidem quos est enim vitae.`
        
//            link.innerHTML = "Read Less"
//     }

//     else {
//         para.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, quam!`
//         link.innerHTML = `Read More`
//     }
// }

function hideImG(){
    var image=document.getElementById("img")
    image.className +=" hide"

}