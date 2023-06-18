window.onload = function() {
    const brand_nav = document.getElementById("nav1");
    const d8ne_nav = document.getElementById("nav2");
    const parts_nav = document.getElementById("nav3");

    const brand_text = document.getElementById("brand_text");
    const d8ne_text = document.getElementById("d8ne_text");
    const parts_text = document.getElementById("parts_text");

    const brand_video = document.getElementById("brand");
    const d8ne_video = document.getElementById("d8ne");
    const parts_video = document.getElementById("parts");

    d8ne_text.classList.add("hide");
    d8ne_video.classList.add("hide");

    parts_text.classList.add("hide");
    parts_video.classList.add("hide");

    brand_nav.classList.add("select");

    brand_nav.onclick = function(){
        brand_text.classList.remove("hide");
        brand_video.classList.remove("hide");

        d8ne_text.classList.add("hide");
        d8ne_video.classList.add("hide");
    
        parts_text.classList.add("hide");
        parts_video.classList.add("hide");

        brand_nav.classList.add("select");
        d8ne_nav.classList.remove("select");
        parts_nav.classList.remove("select");
    }

    d8ne_nav.onclick = function(){
        brand_text.classList.add("hide");
        brand_video.classList.add("hide");

        d8ne_text.classList.remove("hide");
        d8ne_video.classList.remove("hide");
        
        parts_text.classList.add("hide");
        parts_video.classList.add("hide");

        brand_nav.classList.remove("select");
        d8ne_nav.classList.add("select");
        parts_nav.classList.remove("select");
    }

    parts_nav.onclick = function(){
        brand_text.classList.add("hide");
        brand_video.classList.add("hide");

        d8ne_text.classList.add("hide");
        d8ne_video.classList.add("hide");
        
        parts_text.classList.remove("hide");
        parts_video.classList.remove("hide");

        brand_nav.classList.remove("select");
        d8ne_nav.classList.remove("select");
        parts_nav.classList.add("select");
    }
}
