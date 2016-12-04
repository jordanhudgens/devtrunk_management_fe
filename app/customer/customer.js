"use strict";
var Customer = (function () {
    function Customer(id, f_name, l_name, email, sign_up) {
        this.id = id;
        this.f_name = f_name;
        this.l_name = l_name;
        this.email = email;
        this.sign_up = sign_up;
    }
    return Customer;
}());
exports.Customer = Customer;
//# sourceMappingURL=customer.js.map