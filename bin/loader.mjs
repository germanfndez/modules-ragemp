import { createRequire } from "module";
const require = createRequire(import.meta.url);

x();
(async function () {
    require("../packages/main.js"); //Server RUN

    //NATIVE RAGEMP
    const FgReset = "\x1b[0m";
    const FgRed = "\x1b[31m";

    let successful = !0;

    for (let h of mp.events.getAllOf("packagesLoaded")) {
        try {
            h();
        } catch (e) {
            successful = !1;
            console.error(`${FgRed}[ERROR]${FgReset} ${e.stack}`);
        }
    }
    mp.events.remove("packagesLoaded");
    mp.events.initialized = !0;
})();
