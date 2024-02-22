document.getElementById("buy-ticket").addEventListener("click", function() {
    document.getElementById("target").scrollIntoView({ 
      behavior: 'smooth' 
    });
  });



  let selectedCount = 0;
  let availableSeats = 40; 
  const pricePerTicket = 550;
  let totalPrice = 0;
  let grandTotal = 0;
  const maxTickets = 4;

  function selectSeat(seat) {
      if (selectedCount >= maxTickets) {
          alert("You can buy a maximum of 4 tickets at a time.");
          return;
      }
      if (!seat.classList.contains('selected')) {
          seat.classList.add('selected');
          selectedCount++;
          availableSeats--;
          totalPrice += pricePerTicket;
          updateDisplay();
      } else {
          seat.classList.remove('selected');
          selectedCount--;
          availableSeats++;
          totalPrice -= pricePerTicket;
          updateDisplay();
      }
  }

  function updateDisplay() {
      document.getElementById('selectedSeats').textContent = selectedCount;
      document.getElementById('availableSeats').textContent = availableSeats;
      document.getElementById('totalPrice').textContent = totalPrice;
      calculateGrandTotal();
  }

  function calculateGrandTotal() {
      const couponCode = document.getElementById('couponCode').value.toUpperCase();
      grandTotal = totalPrice;
      if (selectedCount == maxTickets) {
          if (couponCode === "NEW15") {
              grandTotal = totalPrice * 0.85;
          } else if (couponCode === "COUPLE20") {
              grandTotal = totalPrice * 0.8;
          }
      }
      document.getElementById('grandTotal').textContent = grandTotal.toFixed(2);
  }

  function goNext() {
      const phoneNumber = document.getElementById('phoneNumber').value;
      if (!phoneNumber) {
          alert("Phone number is mandatory");
          return;
      }
      document.getElementById('modal').style.display = "block";
  }

  function closeModal() {
      document.getElementById('modal').style.display = "none";
  }