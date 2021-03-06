/**
 * 等号表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        EqualOperator = require( "operator/binary-opr/equal" );

    return kity.createClass( 'EqualExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new EqualOperator() );

        }

    } );

} );
