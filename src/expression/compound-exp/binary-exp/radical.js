/**
 * 开方表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        RadicalOperator = require( "operator/binary-opr/radical" );

    return kity.createClass( 'RadicalExpression', {

        base: require( "expression/compound-exp/binary" ),

        /**
         * 构造开方表达式
         * @param radicand 被开方数
         * @param exponent 指数
         */
        constructor: function ( radicand, exponent ) {

            this.callBase( radicand, exponent );

            this.setOperator( new RadicalOperator() );

        },

        setRadicand: function ( operand ) {

            return this.setFirstOperand( operand );

        },

        getRadicand: function () {

            return this.getFirstOperand();

        },

        setExponent: function ( operand ) {

            return this.setLastOperand( operand );

        },

        getExponent: function () {

            return this.getLastOperand();

        }

    } );

} );
