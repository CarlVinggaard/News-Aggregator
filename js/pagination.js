// Sets the 'page' variable in session storage
function setPage(number) {
    window.sessionStorage.setItem('page', number);
}

// Increments the page
function incrementPage() {
    let currentPage = window.sessionStorage.getItem('page');
    setPage(parseInt(currentPage) + 1);
}

// Decrements the page
function decrementPage() {
    let currentPage = window.sessionStorage.getItem('page');
    setPage(parseInt(currentPage) - 1);
}

function showPaginationButtons() {
    if (window.sessionStorage.getItem('totalResults') > 10) {
        $('#pagination').removeClass('d-none');
    } else {
        $('#pagination').addClass('d-none');
    }

    disablePaginationButtons();
}

function disablePaginationButtons() {
    let currentPage = parseInt(window.sessionStorage.getItem('page'));
    let totalResults = parseInt(window.sessionStorage.getItem('totalResults'));

    if (currentPage === 1) {
        $('#previous-button').attr('disabled', true);
    } else {
        $('#previous-button').attr('disabled', false);
    }

    if (currentPage * 10 > totalResults) {
        $('#next-button').attr('disabled', true);
    } else {
        $('#next-button').attr('disabled', false);
    }
}