import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

const ERROR = 'error';
const INFO = 'info';
const WARNING = 'warning';
const SUCCESS = 'success';

toastr.options = {
    closeButton: true
};


export default {
    
    displayToast: function (errorType, message) {
        switch (errorType) {
            case ERROR:
                toastr.error(message);
                break;
            case INFO:
                toastr.info(message);
                break;
            case WARNING:
                toastr.warning(message);
                break;
            case SUCCESS:
                toastr.success(message);
                break;
            default:
                toastr.info(message);
                break;
        }
    }
}