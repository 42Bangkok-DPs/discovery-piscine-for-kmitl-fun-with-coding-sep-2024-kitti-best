var cur_person = "best";  // current person shown
var cur_proj = 0;

var proj1 = [
    {name: "Drive-And-Chill", src: "images/best-showcase/img-3.png"},
    {name: "Ray-Tracing-in-One-Weekend", src: "images/best-showcase/img-2.png"},
    {name: "Procedural Map-gen", src: "images/best-showcase/img-1.png"},
];

var proj2 = [
    {name: "Nyancat Lost in Space", src: "images/paul-showcase/nyancat_game.png"},
    {name: "React Native", src: "images/paul-showcase/aora_react_native.png"},
    {name: "SAP Analytics Cloud", src: "images/paul-showcase/SAP_build_app.jpg"},
];

var data = {
    best: { 
        proj: proj1,
        profileImage: "https://scontent.fbkk5-6.fna.fbcdn.net/v/t39.30808-6/415044131_890083446046210_1882306361796690282_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHKGqr3MeHBpC1a5QOTANhUTHdIe_17rvhMd0h7_Xuu-BO23tI2GmWfLAz3iv5d8E5NtpzjvmbztJ9_f07SAQAU&_nc_ohc=uoco__OHvNYQ7kNvgGDaxge&_nc_ht=scontent.fbkk5-6.fna&_nc_gid=AWRIADBjZ28v6q49OIaVDrC&oh=00_AYCdUzTPb7Hyor-mrC_Eiv8708JEv2CILJGFi4Is9obRgQ&oe=66E9D9C3"
    },
    paul: { 
        proj: proj2,
        profileImage: "images/paul-showcase/profile_image.png"
    }
};

function updateShowcase() {
    $(".proj-showcase p").text(data[cur_person].proj[cur_proj].name);
    $(".proj-showcase img").attr("src", data[cur_person].proj[cur_proj].src);
    cur_proj = (cur_proj + 1) % 3;
}

function updateProfileImage() {
    $(".profile-image img").attr("src", data[cur_person].profileImage);
}

function togglePage(person) {
    if (person === "best") {
        $(".best").show();
        $(".paul").hide();
    } else if (person === "paul") {
        $(".best").hide();
        $(".paul").show();
    }
    cur_person = person;
    cur_proj = 0;  
    updateShowcase();
    updateProfileImage();  
}

setInterval(updateShowcase, 1000);

$("#best-btn").click(function() {
    togglePage("best");
});

$("#paul-btn").click(function() {
    togglePage("paul");
});

function start(){
    $(".side-nav").css("width", "calc(100% - 2 * var(--page-padding))");
    $(".side-nav #totop").css("display", "none");
    $("body").css("overflow", "hidden");
    $(".side-nav").css("background-color", "white");
    $(".main-con").css("translate", "100% 0");
    $(".side-nav #start").on("click", ()=>{
        $(".side-nav #start").css("display", "none");
        $(".side-nav #totop").css("display", "block");
        $(".side-nav").css("width", "240px");
        $(".main-con").css("translate", "0 0");
        $(".main-con").css("display", "block");
        $("body").css("overflow", "visible");

    })
}

start()