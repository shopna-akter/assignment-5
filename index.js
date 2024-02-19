// console.log("boda connected")
// l = 0
let sum = 0;
const seats = document.querySelectorAll(".seats");
// console.log(seats);
for (let index = 0; index < seats.length; index++) {
    const seat = seats[index];
    // console.log(seat);
    seat.addEventListener('click', function () {
        seat.classList.add("bg-[#1DD100]")
        seat.classList.add("text-white");
        const seatName = seat.innerText;

        // console.log(seatName);
        const totalSeatsLeft = document.getElementById("seat-count");
        const newTotalSeatsLeft = parseInt(totalSeatsLeft.innerText) - 1;
        totalSeatsLeft.innerText = newTotalSeatsLeft.toString();
        // console.log(newTotalSeatsLeft);
        const seatspurchased = document.getElementById("seat-number");
        const updatedSpan = seatspurchased.classList.remove("hidden");
        const seatsToAdd = parseInt(seatspurchased.innerText) + 1;
        seatspurchased.innerText = seatsToAdd.toString();
        // console.log(seatsToAdd)
        // if(seatsToAdd === 4){
        //     break;
        // }
        const price = parseInt(document.getElementById("seatPrice").innerText);
        const seatDes = document.getElementById("seat_des").innerText;
        const container = document.getElementById("Seat_name_container");
        const desContainer = document.getElementById("Seat_des_container");
        const priceContainer = document.getElementById("Seat_price_container");


        const p = document.createElement("p");
        p.innerText = seatName;
        container.appendChild(p);


        const desP = document.createElement("p");
        desP.innerText = seatDes;
        desContainer.appendChild(desP);

        const priceP = document.createElement("p");
        priceP.innerText = price;
        priceContainer.appendChild(priceP)


        // console.log(container, desContainer);
        const totalPriceSpan = document.getElementById("totalPrice");
        const totalPrice = parseFloat(totalPriceSpan.innerText);
        const finalTotalPrice = totalPrice + sum + parseFloat(price);
        totalPriceSpan.innerText = finalTotalPrice.toString();
        // console.log(typeof price);

        const grandTotalSpan = document.getElementById("grandTotal");
        grandTotalSpan.innerText = finalTotalPrice.toString();
        seat.setAttribute("disabled", true);
        let newSeatCount = parseInt(document.getElementById("seat-count").innerText);
        const purchaseBtn = document.getElementById("purchaseBtn");
        if(39 >= newSeatCount){
            purchaseBtn.removeAttribute("disabled")
        }
        if(36 >= newSeatCount){
            alert("you have parchased max amount of seat")
            document.getElementById("seatContainer").classList.add("hidden")
        }
    })
}
const coupon = document.getElementById("CouponApplyBtn");
coupon.addEventListener("click", function () {
    const CouponInputField = document.getElementById("CouponInputField");
    // const CouponInputFieldValue = CouponInputField.value
    if (CouponInputField.value === "NEW15") {
        const grandTotalSpan = document.getElementById("grandTotal");
        const grandTotalSpanNum = parseFloat(grandTotalSpan.innerText);
        const discountedPrice = grandTotalSpanNum * 15 / 100;
        const newGrandTotalSpan = grandTotalSpanNum - discountedPrice;
        grandTotalSpan.innerText = newGrandTotalSpan.toString();
        console.log(grandTotalSpan);
        const CouponContainer = document.getElementById("CouponContainer").classList.add("hidden")
    }
    if (CouponInputField.value === "Couple 20") {
        const grandTotalSpan = document.getElementById("grandTotal");
        const grandTotalSpanNum = parseFloat(grandTotalSpan.innerText);
        const discountedPrice = grandTotalSpanNum * 20 / 100;
        const newGrandTotalSpan = grandTotalSpanNum - discountedPrice;
        grandTotalSpan.innerText = newGrandTotalSpan.toString();
        console.log(grandTotalSpan);
        const CouponContainer = document.getElementById("CouponContainer").classList.add("hidden")
    }
})
const newSeatCount = parseInt(document.getElementById("seat-count").innerText);
const purchaseBtn = document.getElementById("purchaseBtn");

purchaseBtn.addEventListener("click", function () {
    const mainBonda = document.getElementById("mainBonda").classList.add("hidden");
    const purchaseComplete = document.getElementById("purchaseComplete").classList.remove("hidden");
})
