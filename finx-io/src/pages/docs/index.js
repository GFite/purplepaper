import React from 'react'
import { Redirect } from '@reach/router'

export default function Redirector({ path }) {
    function validateEmail(email) {
      const re = new RegExp('^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$');
      return re.test(String(email).toLowerCase());
    }

    function generateKey() {
        const email_address = prompt('Please enter your email address');
        if (validateEmail(email_address)) {
            alert(`Requesting API key for ${email_address}...`);
            fetch('https://sandbox.finx.io/request-key/', {
                method: 'POST',
                body: JSON.stringify({email_address: email_address})
            }).then(response => response.json()).then(data => {
                alert(data['api_key'] != null ?
                    `Your new API key: ${data['api_key']}. Keep this safe!`
                    : `Could not generate API key for ${email_address}: ${data['message']}`);
            });
        }
        else
            alert('Please enter a valid email address');
    }

  return <Redirect from={path} to={`${path}v2`} noThrow />
}
