const ranges = document.querySelectorAll('[type="range"]');

const updateRange = range => {
    const rangeName = range.name;
    const rangeValue = range.value * 10 + "vh"; // Convert to viewport height
    document.documentElement.style.setProperty("--" + rangeName, rangeValue);
}

ranges.forEach(range => {
    updateRange(range); // Set initial value

    range.oninput = () => {
        updateRange(range);
    };
});