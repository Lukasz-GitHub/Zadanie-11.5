'use strict';

function Button(text, alertInfo, oko) {
    this.text = text || 'Hello';
    this.alertInfo = alertInfo;
}

Button.prototype = {
    create: function () {
        var self = this;
        this.element = document.createElement('button');
        this.element.innerHTML = this.text;
        this.element.addEventListener('click', function () {
            alert(self.alertInfo);
        });
        document.body.appendChild(this.element);
    }
}

var btn = new Button('Hello', 'Alert!');

btn.create();