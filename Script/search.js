(function() {
    // Get the grid element
    var grid = document.querySelector('.grid');
  
    // Get all criterion elements
    var criterionElements = Array.from(grid.querySelectorAll('.tile'));
  
    // Get the filter buttons
    var filterButtons = Array.from(document.querySelectorAll('.button-group button'));
  
    // Get the search input
    var searchInput = document.querySelector('.quicksearch');
  
    // Function to filter the criterion elements
    function filterCriterion() {
      var selectedFilter = document.querySelector('.button-group .is-checked');
      var filterValue = selectedFilter ? selectedFilter.getAttribute('data-filter') : 'all';
  
      criterionElements.forEach(function(element) {
        var category = element.classList.contains(filterValue);
        var isVisible = filterValue === 'all' || category;
        var searchTerm = searchInput.value.toLowerCase();
        var content = element.textContent.toLowerCase();
        var matchesSearch = content.includes(searchTerm);
        element.style.display = isVisible && matchesSearch ? 'block' : 'none';
      });
    }
  
    // Event listener for filter button click
    filterButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        filterButtons.forEach(function(btn) {
          btn.classList.remove('is-checked');
        });
        button.classList.add('is-checked');
        filterCriterion();
      });
    });
  
    // Event listener for search input keyup
    searchInput.addEventListener('keyup', function() {
      filterCriterion();
    });
  
  })();
  