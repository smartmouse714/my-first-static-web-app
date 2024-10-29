document.getElementById("CalgaryClock").textContent = new Date(CalgaryTime).toLocaleTimeString();
document.getElementById("CopenhagenClock").textContent = new Date(CopenhagenTime).toLocaleTimeString();
document.getElementById("MelbourneClock").textContent = new Date(MelbourneTime).toLocaleTimeString();
document.getElementById("PerthClock").textContent = new Date(PerthTime).toLocaleTimeString();
document.getElementById("BrisbaneClock").textContent = new Date(BrisbaneTime).toLocaleTimeString();
document.getElementById("VancouverClock").textContent = new Date(VancouverTime).toLocaleTimeString();

function newFunction() {
    const now = new Date();
    const CalgaryTime = now.getTime() + now.getTimezoneOffset() * 60000 - 6 * 60 * 60 * 1000;
    const CopenhagenTime = now.getTime() + (now.getTimezoneOffset() + 2 * 60) * 60000;
    const MelbourneTime = now.getTime() + now.getTimezoneOffset() * 60000 + 11 * 60 * 60 * 1000;
    const PerthTime = now.getTime() + now.getTimezoneOffset() * 60000 + 8 * 60 * 60 * 1000;
    const BrisbaneTime = now.getTime() + now.getTimezoneOffset() * 60000 + 10 * 60 * 60 * 1000;
    const VancouverTime = now.getTime() + now.getTimezoneOffset() * 60000 - 7 * 60 * 60 * 1000;
    return { CalgaryTime, CopenhagenTime, MelbourneTime, PerthTime, BrisbaneTime, VancouverTime };
}