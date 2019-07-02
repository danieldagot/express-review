const request = require( 'request' )

function fetchColor( color, callback ) {
    request.get( `https://www.thecolorapi.com/id?hex=${color}`, function ( error, response, body ) {
        const colorObject = JSON.parse( body )

        callback( colorObject.name.value )
    } )
}

module.exports = fetchColor
