class DeviceCard {

    constructor(id, clone) {
        this.id = id;
        this.clone = clone;
        this.open = false;
    }

    insert() {
        this.scaleable_wrapper_x = this.clone.querySelector('#scaleable-wrapper-x');
        this.scaleable_wrapper_x.id = 'scaleable-wrapper-' + this.id;
        this.scaleable_wrapper_x.component = this;

        this.very_specific_design_x = this.clone.querySelector('#very-specific-design-x');
        this.very_specific_design_x.id = 'very-specific-design-' + this.id;

        this.command_lock_x = this.clone.querySelector('#command-lock-x');
        this.command_lock_x.id = 'command-lock-' + this.id;
        this.command_lock_x.onclick = this.command_lock_handler;
        this.command_lock_x.component = this;

        this.command_unlock_x = this.clone.querySelector('#command-unlock-x');
        this.command_unlock_x.id = 'command-unlock-' + this.id;
        this.command_unlock_x.onclick = this.command_unlock_handler;
        this.command_unlock_x.component = this;

        this.content_x = this.clone.querySelector('#content-x');
        this.content_x.id = 'content-' + this.id;
        this.content_x.textContent  = 'test ' + this.id;

        document.body.appendChild(this.clone);

        let $el = $("#very-specific-design-" + this.id);
        var elHeight = $el.outerHeight();
        var elWidth = $el.outerWidth();

        this.$wrapper = $("#scaleable-wrapper-" + this.id);

        this.$wrapper.resizable({
            resize: doResize,
        });
        this.$wrapper.draggable();

        this.scale = 1.0;
        function doResize(event, ui) {

            event.target.component.scale = Math.min(ui.size.width / elWidth, ui.size.height / elHeight);

            $el.css({
                transform: "translate(-50%, -50%) scale(" + event.target.component.scale + ")",
            });
        }

        var starterData = {
            size: {
                width: this.$wrapper.width(),
                height: this.$wrapper.height(),
            },
        };
        doResize({target: {
            component: this
        }}, starterData);

        // initial state
        this.lock();
    }

    command_lock_handler(event) {
        event.srcElement.component.lock();
    }

    command_unlock_handler(event) {
        event.srcElement.component.unlock();
    }

    executeAction() {
        this.locked = !this.locked;
        this.locked ? this.lock() : this.unlock();
    }

    lock() {
        this.locked = true;
        this.very_specific_design_x.style.background = 'green'

        // select lock button
        this.command_lock_x.style.color = 'white';
        this.command_lock_x.style.background = 'blue';

        // unselect unlock button
        this.command_unlock_x.style.color = 'black';
        this.command_unlock_x.style.background = 'grey';
    }

    unlock() {
        this.locked = false;
        this.very_specific_design_x.style.background = 'red';

        // select lock button
        this.command_lock_x.style.color = 'black';
        this.command_lock_x.style.background = 'grey';

        // unselect unlock button
        this.command_unlock_x.style.color = 'white';
        this.command_unlock_x.style.background = 'blue';
    }

    position(x, y) {
        this.$wrapper.css({'top': y, 'left' : x});
    }

}