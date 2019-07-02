const express = require( 'express' )
const app = express()
const port = 3000
const path = require( 'path' )
const fetchColor = require( './colors-api' )

app.use( express.static( path.join( __dirname, '..', 'public' ) ) )

app.get( '/color/:color', function ( req, res ) {
    const color = req.params.color

    fetchColor( color, function ( colorName ) {
        res.json( { name: colorName } )
    } )
} )

app.listen( port, () => console.log( `Example app listening on port ${ port }!` ) )
