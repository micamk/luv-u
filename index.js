const yesBtn = document.querySelector("#yesBtn");

yesBtn.addEventListener("click", function() {
    alert("te amo mucho, rizitos<3, espero y estemos juntos x siempre :c en serio, me gustas mucho y quiero k esta relación funcione :c te volviste en mi persona especial<3 amo todo de ti<3 eres muy lindo conmigo :c en todos los aspectos, gracias x estar conmigo<3 me voy a esforzar mucho en la relación, xq en serio quiero k seas tú, el amor de mi vida<3 :c te amo muchisisiisimo :C gracias x todo :c te amoamoamoamooooooooo, me haces muy feliz<3 agradezco el día k te conocí<3 :c y espero no me termines, xq te amo mucho y tengo mucho cariño hacia a ti<3 quiero k crecer contigo cm pareja y k sepas, k estoy aqui para ti, para lo k necesites<3 muuak, te amo mucho ")
})

const noBtn = document.querySelector("#noBtn");

noBtn.addEventListener("mouseover",function() {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty("top",randomY+"%");
    noBtn.style.setProperty("left",randomX+"%");
    noBtn.style.setProperty("transform", `translate(-${randomX}%,-${randomY}%)`);
})