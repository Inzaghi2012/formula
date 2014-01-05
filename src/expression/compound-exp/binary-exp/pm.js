/**
 * 上加下减表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        PmOperator = require( "operator/binary-opr/pm" );

    return kity.createClass( 'PmExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new PmOperator() );

        }

    } );

} );
