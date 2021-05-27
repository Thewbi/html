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
        this.command_lock_x.onclick=this.command_lock_handler;

        this.command_unlock_x = this.clone.querySelector('#command-unlock-x');
        this.command_unlock_x.id = 'command-unlock-' + this.id;
        this.command_unlock_x.onclick=this.command_unlock_handler;

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

    command_lock_handler() {
        let msg = 'command_lock_handler() ' + this.id;
        console.log(msg);
        alert(msg);
    }

    command_unlock_handler() {
        let msg = 'command_unlock_handler() ' + this.id;
        console.log(msg);
        alert(msg);
    }

    executeAction() {
        this.open = !this.open;
        this.very_specific_design_x.style.background = this.open ? 'red' : 'green';
    }
}