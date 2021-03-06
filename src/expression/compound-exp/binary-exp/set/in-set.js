/**
 * 属于（集合）表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        InSetOperator = require( "operator/binary-opr/set/in-set" );

    return kity.createClass( 'InSetExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new InSetOperator() );

        }

    } );

} );
