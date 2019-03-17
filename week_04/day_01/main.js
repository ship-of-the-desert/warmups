var msg = document.querySelector("#msg");

function bottleCounter(num, end) {
    var className = "red";

    for (let i = num; i >= end; i--) {
        className == "red" ? className = "blue" : className = "red";
        if (i == 1) {
            msg.innerHTML += `<p class="${className}">${i} bottle of coke on the wall, ${i} bottle of coke.
Take it down and pass it around, no more bottles of coke on the wall.</p>`;
        } else if (i == 0) {
            msg.innerHTML += `<p class="green">No more bottles of coke on the wall, no more bottles of coke.
Go to the store and buy some more, ${num} bottles of coke on the wall.</p>`;
        } else {
            msg.innerHTML += `<p class="${className}">${i} bottles of coke on the wall, ${i} bottles of coke.
Take one down, pass it around, ${i - 1} bottles of coke on the wall...</p>`;
        }
    }
}

bottleCounter(5, 0);