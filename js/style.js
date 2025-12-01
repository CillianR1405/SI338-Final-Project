let recommendations = {
    fantasy: {
        title: "Mistborn: The Final Empire", author: "Brandon Sanderson", img: "images/mistborn.jpg", desc: "In this story we enter a world in which the villain has won. The Lord Ruler has taken over the world. We follow Vin, a young street urchin who is also a Mistborn. This means that she gains special powers through swallowing allomantic metals. Kelsier, her mentor must guide her and their crew to successfully overthrowing the Lord Ruler and saving the world."},
    scifi: {
        title: "Project Hail Mary", author: "Andy Weir", img: "images/hailmary.jpg", desc: "A masterpiece of science fiction and philosophy, with political depth. This story follows an astronaut, as he is the lone survivor from his mission. The fate of the world rests in his hands. As he makes unlikely allies he must do his best to save the world."
        },
    classic: {
        title: "The Count of Monte Cristo", author: "Alexander Dumas", img: "images/comc.jpg", desc: "A profound psychological novel exploring guilt, redemption, and morality. Edmond Dantes has been wrongfully imprisoned for a crime which he didn't commit. Edmond is held for years on the Island fortress - the Chateau D'If. As he spends his time there he plots his escape and plans how he will get his revenge by punishing his perpetrators."},
    mystery: {
        title: "Gone Girl", author: "Gillian Flynn", img: "images/gonegirl.jpg", desc: "A gritty, thrilling mystery with powerful characters and twists. As Nick Dunne's wife goes mysteriously missing we follow both the past and present as he unravels the mystery. However, this story has more than what meets the eye."
    }
};

let buttons = document.querySelectorAll(".rec-buttons button");

let recTitle = document.getElementById("rec-title");
let reccImg = document.getElementById("rec-img");
let recAuthor = document.getElementById("rec-author");

let recDesc = document.getElementById("rec-desc");

let authorP = document.getElementById("author-p");

for (let i = 0; i < buttons.length; i++) {
    let btn = buttons[i];

    btn.addEventListener("click", function () {
        let genre = btn.className;
        let rec = recommendations[genre];

        recTitle.textContent = rec.title;

        reccImg.src = rec.img;
        reccImg.alt = rec.title;
        reccImg.style.display = "block";

        recAuthor.textContent = rec.author;
        authorP.style.display = "block";

        recDesc.textContent = rec.desc;
    });
}






/*js review page*/
let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

let my_reviews = document.getElementById("reviews-container");
let submitBtn = document.getElementById("submit-review");

function displayReviews() {
    my_reviews.innerHTML = "";

    for (let i = 0; i < reviews.length; i++) {
        let r = reviews[i];

        let card =
            "<div class='review-card'>" + "<h3>" + r.title + "</h3>" + "<p><strong>Rating:</strong> " + "⭐️".repeat(r.rating) + "</p>" +
                "<p>" + r.text + "</p>" + "</div>";

        my_reviews.innerHTML += card;
    }
}

submitBtn.addEventListener("click", function () {
    let mytitle = document.getElementById("book-title").value;
    let myrating = document.getElementById("rating").value;
    let mytxt = document.getElementById("review-text").value;

    if (!mytitle || !myrating || !mytxt) {
        alert("Please fill out all fields or you will not be able to submit the form!");
        return;
    }

    let UpdateReview = {
        title: mytitle,
        rating: myrating,
        text: mytxt
    };

    reviews.push(UpdateReview);
    localStorage.setItem("reviews", JSON.stringify(reviews));

    displayReviews();

    document.getElementById("book-title").value = "";
    document.getElementById("rating").value = "";
    document.getElementById("review-text").value = "";
});

displayReviews();
