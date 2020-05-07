// Define the selectize dropdown
const $select = $('select').selectize({
    valueField: "value",
    labelField: "name",
    options: [
        {"value": "gb", "name": "Great Britain"},
        {"value": "cn", "name": "China"},
        {"value": "us", "name": "United States"},
        {"value": "ca", "name": "Canada"},
        {"value": "ru", "name": "Russia"},
        {"value": "br", "name": "Brazil"},
        {"value": "au", "name": "Australia"},
        {"value": "de", "name": "Germany"},
        {"value": "jp", "name": "Japan"},
        {"value": "no", "name": "Norway"}
    ],
    render: {
        option: function(item, escape) {
            return '<div class="m-2">'
            + '<span class="flag-icon flag-icon-' 
            + item.value 
            + '"></span> '
            + item.name
            + '</div>';
        },
        item: function(item, escape) {
            return '<div>'
            + '<span class="flag-icon flag-icon-' 
            + item.value 
            + '"></span> '
            + item.name
            + '</div>';
        }
    }
});

let region = window.sessionStorage.getItem('region') || 'gb'

$select[0].selectize.setValue(region);