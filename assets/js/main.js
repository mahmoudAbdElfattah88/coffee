// RANDOM BACKGROUND FOR LANDING

    // let pic = [1, 2, 3];
    // let counter = 0;
   

    // console.log(counter)

    // setInterval(function(){
    //     counter++;
    //     document.querySelector('header .landing').style.backgroundImage = `url(../coffee/assets/images/landing/0${counter}.jpg)`;
    //     if(counter >= pic.length){counter = 0}
    // },7000);
    // console.log(counter)

    let url = ["01.jpg","02.jpg","03.jpg"];
    setInterval(() => {
        let random = Math.floor(Math.random() * url.length);
        document.querySelector("header .landing").style.backgroundImage = `url(assets/images/landing/${url[random]})`;
    },5000)



    
    // let el = document.createElement('i');
    // el.className = "fas fa-mug-hot mug";
    
    // let elIn =document.querySelector("header").appendChild(el)
    // setInterval(() => {
    //     let satrsNum = Math.floor(Math.random() * 20);
    //     elIn.style.left = satrsNum;
    //     console.log(satrsNum)
    // },3000)



     //  Toggle class active for tab
    let bar = document.querySelector(".toggle-bar");
    let list = document.querySelector("header .list");
    bar.addEventListener("click",function(){
        bar.classList.toggle("active");
        list.classList.toggle("active");
    });

    //  Remove Class active when click on itel link
    let item = document.querySelectorAll(".list .item");
    item[i].addEventListener("click",function(){
        item.classList.add("av");
        bar.classList.remove("active");
        list.classList.remove("active");
            
       
    });

    