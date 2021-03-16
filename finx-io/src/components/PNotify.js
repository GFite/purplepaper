/*
Author: Jake Mathai
Purpose: Wrapper for PNotify module
 */
import React from "react";
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/confirm/dist/PNotifyConfirm.css';
import '@pnotify/confirm/dist/PNotifyConfirm.css';
import * as PNotifyConfirm from '@pnotify/confirm';
import "../../assets/css/black-dashboard-react.css";
import '@pnotify/bootstrap3/dist/PNotifyBootstrap3.css';
import '@pnotify/bootstrap4/dist/PNotifyBootstrap4.css';
import { alert, error, info, notice, success, defaultModules, defaults, Stack } from "@pnotify/core";

// Set default styling.
defaults.styling = 'material';
// This icon setting requires the Material Icons font. (See below.)
defaults.icons = 'material';

var PNotify = (() => {

    var stack_params = {
        dir1: 'left',
        maxOpen: 1,
    };

    function successNotification(title, text, kwargs=null) {
        stack_params['context'] = document.getElementsByClassName('fixed-plugin')[0];
        let params = {
            title: title,
            text: text,
            styling: defaults.styling,
            stack: new Stack(stack_params),
            hide: false,
            closer: true,
            addClass: 'custom-pnotify-success pnotify-title pnotify-text',
            animateSpeed: 'slow',
            delay: Infinity,
            sticker: true,
            destroy: true,
            modules: new Map([...defaultModules])
        };
        if (typeof kwargs == 'object') {
            params = {
                ...params,
                ...kwargs
            }
        }
        return success(params);
    }

    function errorNotification(title, text, kwargs) {
        stack_params['context'] = document.getElementsByClassName('fixed-plugin')[0];
        let params = {
            title: title,
            text: text,
            styling: defaults.styling,
            stack: new Stack(stack_params),
            hide: false,
            closer: true,
            addClass: 'custom-pnotify-error pnotify-title pnotify-text',
            animateSpeed: 'slow',
            delay: Infinity,
            sticker: true,
            destroy: true,
            modules: new Map([...defaultModules])
        };
        if (typeof kwargs === 'object') {
            params = {
                ...params,
                ...kwargs
            }
        }
        return error(params);
    }

    function noticeNotification(title, text, prompt=false, kwargs=null) {
        stack_params['context'] = document.getElementsByClassName('fixed-plugin')[0];
        let params = {
            title: title,
            text: text,
            styling: defaults.styling,
            stack: new Stack(stack_params),
            hide: false,
            shadow: false,
            closer: true,
            addClass: 'custom-pnotify-notice pnotify-title pnotify-text',
            textTrusted: false,
            animateSpeed: 'slow',
            delay: Infinity,
            sticker: true,
            destroy: true,
            modules: new Map([
                ...defaultModules,
                [PNotifyConfirm, {prompt: prompt}]
            ])
        };
        if (typeof kwargs === 'object') {
            params = {
                ...params,
                ...kwargs
            }
        }
        return notice(params);
    }

    function removeAll() {
        var notices = document.getElementsByClassName('pnotify');
        if (notices.length !== 0) {
            for (let i = 0; notices.length !== 0 && i !== 10; ++i) {
                notices = document.getElementsByClassName('pnotify');
                if (notices[0] !== undefined) {
                    try {
                        notices[0].remove();
                    }
                    catch (e) {
                        console.log(e);
                    }
                }
            }
        }
        return null
    }

    return {
        successNotification: successNotification,
        noticeNotification: noticeNotification,
        errorNotification: errorNotification,
        removeAll: removeAll
    }
})();

export {
    PNotify,
    PNotifyConfirm,
    alert,
    error,
    info,
    notice,
    success,
    defaultModules,
    defaults,
    Stack,
};
