define(
    [
        'uiComponent',
    ],
    function (
        Component
    ) {
        'use strict';

        return Component.extend({
            test: function () {
                console.log('HERE I\'M');
            }
        });
    }
);
