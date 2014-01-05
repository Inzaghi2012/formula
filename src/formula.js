/**
 * 公式对象，表达式容器
 */

define( function ( require, exports, module ) {

    var kity = require( 'kity' ),
        EXPRESSION_INTERVAL = 50;

    return kity.createClass( 'Formula', {

        base: require( 'fpaper' ),

        constructor: function ( container ) {

            this.callBase( container );
            this.expressions = [];

            this.zoom = 1;

            initZoom.call( this );

        },

        insertExpression: function ( expression, index ) {

            for ( var i = this.expressions.length; i > index; i-- ) {

                this.expressions[ i ] = this.expressions[ i-1 ];

            }

            this.expressions[ index ] = expression;

            this.addShape( expression );

            notifyExpression.call( this, expression );
            correctOffset.call( this );

        },

        appendExpression: function ( expression ) {

            this.insertExpression( expression, this.expressions.length );

        }

    } );

    function initZoom () {

        var zoomLevel = this.zoom - this.getBaseZoom();

        if ( zoomLevel !== 0 ) {

            this.container.setAnchor( 0, 0 );
            this.container.scale( Math.pow( 2, zoomLevel ) );

        }

    }

    // 调整表达式之间的偏移
    function correctOffset () {

        var exprOffset = 0;

        kity.Utils.each( this.expressions, function ( expr ) {

            var box = null;

            if ( !expr ) {
                return;
            }

            expr.setTransform( new kity.Matrix( 1, 0, 0, 1, 0, 0 ) );
            box = expr.getRenderBox();
            expr.translate( 0 - box.x, exprOffset );

            exprOffset += box.height + EXPRESSION_INTERVAL;

        } );

        return this;

    }

    // 通知表达式已接入到paper
    function notifyExpression ( expression ) {

        var len = expression.getChildren().length;

        if ( len > 0 ) {

            for ( var i = 0; i < len; i++ ) {

                notifyExpression( expression.getChild( i ) );

            }

        }

        expression.addedCall && expression.addedCall();

    }

} );