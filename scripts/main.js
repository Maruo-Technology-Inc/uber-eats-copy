document.addEventListener('DOMContentLoaded', function () {
    const mainLocation=document.querySelector(".main-location");

    const options={rootMargin:"-82px 0px 0px 0px"};
    
    const cb=function(entries,observe){
        const headerLocation=document.querySelector(".header-location");
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                headerLocation.classList.add("outview");
            }else{
                headerLocation.classList.remove("outview");
            }

        });

    };
    const io = new IntersectionObserver(cb,options);
    io.observe (mainLocation);
});
