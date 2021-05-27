class DeviceCard {

    constructor(id, clone) {
        this.id = id;
        this.clone = clone;
        this.open = false;
    }

    insert() {
        this.scaleable_wrapper_x = this.clone.querySelector('#scaleable-wrapper-x');
        this.scaleable_wrapper_x.id = 'scaleable-wrapper-' + this.id;

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

        document.body.appendChild(this.clone);

        var $el = $("#very-specific-design-" + this.id);
        var elHeight = $el.outerHeight();
        var elWidth = $el.outerWidth();

        var $wrapper = $("#scaleable-wrapper-" + this.id);

        $wrapper.resizable({
            resize: doResize,
        });
        $wrapper.draggable();

        function doResize(event, ui) {
            var scale = Math.min(ui.size.width / elWidth, ui.size.height / elHeight);

            $el.css({
                transform: "translate(-50%, -50%) scale(" + scale + ")",
            });
        }

        var starterData = {
            size: {
                width: $wrapper.width(),
                height: $wrapper.height(),
            },
        };
        doResize(null, starterData);
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
    }

    unlock() {
        this.locked = false;
        this.very_specific_design_x.style.background = 'red';
    }
}