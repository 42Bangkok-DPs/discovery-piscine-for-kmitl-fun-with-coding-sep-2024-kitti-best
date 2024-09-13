var cur_person = "best";  // current person shown
var cur_proj = 0;

var proj1 = [
    {name: "Drive-And-Chill", src: "images/best/img-3.png"},
    {name: "Ray-Tracing-in-One-Weekend", src: "images/best/img-2.png"},
    {name: "Procedural Map-gen", src: "images/best/img-1.png"},
];

var proj2 = [
    {name: "Nyancat Lost in Space", src: "images/paul/nyancat_game.png"},
    {name: "React Native", src: "images/paul/aora_react_native.png"},
    {name: "SAP Analytics Cloud", src: "images/paul/SAP_build_app.jpg"},
];

var game1 = [
    {
        name:"Hollow Knight",
        src:"https://images.squarespace-cdn.com/content/v1/606d159a953867291018f801/1619987265163-9XILMVT3TK4HZ5X6538M/VH_01_1080pjpg.jpg"
    },
    {
        name:"Factorio",
        src:"https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/427520/ss_2533e54b0bd90a29adbedb60108ed277536ad445.1920x1080.jpg?t=1694021968"
    },
    {
        name:"Core Keeper",
        src:"https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1621690/capsule_616x353.jpg?t=1718121891"
    },
    {
        name:"Stardew Valley",
        src:"https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/capsule_616x353.jpg?t=1711128146"
    },
]
var game2 = [
    {
        name:"Lethal Company",
        src:"https://cdn.mos.cms.futurecdn.net/HBNycpE7BYNucipUmTGf4e-1200-80.jpg"
    },
    {
        name:"Content Warning",
        src:"https://gaming-cdn.com/images/products/16548/616x353/content-warning-pc-spel-steam-cover.jpg?v=1712915138"
    },
    {
        name:"Core Keeper",
        src:"https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1621690/capsule_616x353.jpg?t=1718121891"
    },
    {
        name:"Albion Online",
        src:"https://playulti.com/storage/images/63d7423899e9c.jpg"
    },
]
var contact1 = [
    {
        href: "https://www.facebook.com/kittibest.onlay.7/",
        placeholder: "Facebook/Kitti-best Onlay"
    },
    {   
        href: "https://github.com/kitti-best",
        placeholder: "Github/kitti-best"
    },
    {
        href: "https://discord.gg/SGyjvyTF",
        placeholder: "Discord/CE-KMITL"
    },
]
var contact2 = [
    {
        href: "https://www.instagram.com/mr.paullll/",
        placeholder: "Instagram/Mr.paullll"
    },
    {   
        href: "https://github.com/Schmaew",
        placeholder: "Github/Schmaew"
    },
    {
        href: "https://discord.gg/SGyjvyTF",
        placeholder: "Discord/CE-KMITL"
    },
]
var data = {
    best: { 
        name: "Kittipan Onlay",
        intro: "A computer engineering student at KMITL, Thailand.<br> Interested in algorithm, procedural generations and graphic programming.",
        proj: proj1,
        profileImage: "images/best/profile.jpg",
        contact: contact1,
        game: game1
    },
    paul: { 
        name: "Krittanaputch Choopinij",
        intro: "A computer engineering student at KMITL, Thailand.<br> Interested in sleeping all day, memes and cat.",
        proj: proj2,
        profileImage: "images/paul/profile_image.png",
        contact: contact2,
        game: game2
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

function updateContact(){
    let p_texts = [
        "Talk with me",
        "Work with me",
        "Play with me",
    ]
    let contacts = data[cur_person].contact
    $(".contacts *").remove()
    contacts.forEach((contact, i) => {
        let a = $(`<a href="${contact.href}">${contact.placeholder}</a>`);
        let p = $(`<p>${p_texts[Math.min(i, p_texts.length)]}</p>`);
        let linkCon = $(`<div class="link-container"></div>`).append(a);
        let contactN = $(`<div class="contact-${i}"></div>`);
        contactN.append(p);
        contactN.append(linkCon);
        
        $(".contacts").append(contactN);
        $(".contacts").append($("<hr>"));
    });    
}

function updateGame() {
    let games = data[cur_person].game
    $(".games > .top *").remove()
    games.forEach((game, i) => {
        let img = $(`<img src="${game.src}" alt="game-${i}">`);
        let imgCon = $(`<div class="image-container"></div>`).append(img);
        let h2 = $(`<h2>${game.name}</h2>`);
        let gameN = $(`<div class="game-${i}"></div>`)
        gameN.append(imgCon)
        gameN.append(h2)
        
        $(".games > .top").append(gameN)
    });
}

function updateIntro(){
    $(".greeting").html("");
    $(".greeting").append(
        $(`<h1>${data[cur_person].name}</h1>`)
    );
    $(".greeting").append(
        $(`<p>${data[cur_person].intro}</p>`)
    );
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
    updateIntro();
    updateShowcase();
    updateProfileImage(); 
    updateContact();
    updateGame();
}

setInterval(updateShowcase, 1000);

$("#best-btn").click(function() {
    togglePage("best");
});

$("#paul-btn").click(function() {
    togglePage("paul");
});

function start(){
    $("body").css("overflow", "hidden");
    $(".side-nav").css("width", "calc(100% - 2 * var(--page-padding))");
    $(".home").css("display", "block");
    $(".homent").css("display", "none");
    $(".main-con").css("translate", "100% 0");
    $("#start").on("click", ()=>{
        $("body").css("overflow", "visible");
        $(".home").css("display", "none");
        $(".homent").css("display", "flex");
        $(".side-nav").css("width", "240px");   
        $(".main-con").css("translate", "0 0");
    })
}

start();
togglePage(cur_person);