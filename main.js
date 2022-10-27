const ist_offset = 5.5 * 60;
const gmt_offset = 0;
const bst_offset = 1 * 60;
const est_offset = -5 * 60;
const cst_offset = -5 * 60;

document.addEventListener("DOMContentLoaded", Timezone);

function getDate(offset) {
    let today = new Date();
    let utc_offset = today.getTimezoneOffset();
    today.setMinutes(today.getMinutes() + utc_offset);
    today.setMinutes(today.getMinutes() + offset);
    return today;
}

let timezones = [
    getDate(gmt_offset),
    getDate(est_offset),
    getDate(bst_offset),
    getDate(ist_offset),
    getDate(cst_offset),
];

function Timezone() {

    for (i = 0; i < timezones.length; i++) {
        let time = `${timezones[i].getHours()}:${timezones[
            i
        ].getMinutes()}:${timezones[i].getSeconds()}`;
        document.getElementById(`timezone${i}`).innerHTML = time;
    }
}
