// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
const keys: { [key: number]: number } = {
  37: 1,
  38: 1,
  39: 1,
  40: 1,
};

function preventDefault(e: any) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e: any) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  var opts = Object.defineProperty({}, "passive", {
    get: function () {
      supportsPassive = true;
    },
  });
  window.addEventListener(
    "test",
    null as any, // Cast null to any to satisfy TypeScript
    opts as AddEventListenerOptions, // Cast the options object for clarity, though casting the listener is the primary fix
  );
} catch (e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent =
  "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

// call this to Disable
export function disableScroll(element: HTMLElement) {
  element.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
  element.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  element.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
  element.addEventListener("keydown", preventDefaultForScrollKeys, false);
}

// call this to Enable
export function enableScroll(element: HTMLElement) {
  element.removeEventListener("DOMMouseScroll", preventDefault, false);
  element.removeEventListener(
    wheelEvent,
    preventDefault,
    wheelOpt as EventListenerOptions | boolean,
  );
  element.removeEventListener(
    "touchmove",
    preventDefault,
    wheelOpt as EventListenerOptions | boolean,
  );
  element.removeEventListener("keydown", preventDefaultForScrollKeys, false);
}
