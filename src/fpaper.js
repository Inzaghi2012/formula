/**
 * 公式专用paper
 */

define( function ( require, exports, module ) {

    var kity = require( 'kity' );

    return kity.createClass( 'FPaper', {

        base: kity.Paper,

        constructor: function ( container ) {

            this.callBase( container );

            this.container = new kity.Group();
            this.baseZoom = 2.5;

            this.base( 'addShape', this.container );

        },

        getBaseZoom: function () {

            return this.baseZoom;

        },

        addShape: function ( shape, pos ) {

            return this.container.addShape( shape, pos );

        },

        removeShape: function ( pos ) {

            return this.container.removeShape( pos );

        }

    } );

} );