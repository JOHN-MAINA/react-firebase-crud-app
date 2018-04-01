import {confirmAlert} from 'react-confirm-alert'

function confirm(header, message, callBack) {
    confirmAlert({
        title: header,
        message: message,
        buttons: [
            {
                label: 'Yes',
                onClick: () => callBack
            },
            {
                label: 'No',
                onClick: () => alert('Click No')
            }
        ]
    })
}

export default confirm;