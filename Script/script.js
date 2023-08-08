const searchInput = document.getElementById('searchInput');

    searchInput.addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();

        window.location.href = 'listing.html';
      }
    });