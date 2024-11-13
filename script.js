//your JS code here. If required.
document.querySelector('input[type="button"]').addEventListener('click', function() {
    var select = document.getElementById('colorSelect');
    var selectedOption = select.options[select.selectedIndex];

    // Remove the selected option if it is valid (i.e., something is selected)
    if (selectedOption) {
        select.removeChild(selectedOption);
    }
});
