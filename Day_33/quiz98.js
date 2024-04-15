function daysleft() {
    const today2 = new Date();
    const newYear = new Date(today2.getFullYear() + 1, 0, 1);
    const difference = newYear.getTime() - today2.getTime();
    const days = Math.ceil(difference / (1000 * 60 * 60 * 24));
    return days;
}
console.log(daysleft() + " Days Until Neaw year.");
export {};
