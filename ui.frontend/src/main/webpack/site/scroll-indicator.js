/*
 *  Copyright 2018 Adobe Systems Incorporated
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import jQuery from "jquery";

(function (element, $) {
    'use strict';
    var target = $(element),
        className = "scrolly",
        scroll;

    if ($(window).scrollTop() > 15){
        target.addClass(className);
    }

    var day = 0

    document.addEventListener('scroll', () => {
        scroll = $(window).scrollTop();
        if (scroll > 15) {
            target.addClass(className);
        } else {
            target.removeClass(className);
        }
    }, {
        capture: false,
        passive: true
    });

}('body', jQuery));
