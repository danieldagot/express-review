$( 'button' ).on( 'click', function () {
    const color = $( 'input[name=color]' ).val()

    $.get( `http://localhost:3000/color/${color}`, function ( response ) {
        alert( response.name )
    } )
} )
