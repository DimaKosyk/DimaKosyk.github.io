(() => {
    "use strict";
    document.addEventListener("DOMContentLoaded", () => {
        const gridButton = document.querySelector(".grid-button");
        const rowButton = document.querySelector(".row-button");
        const postsRows = document.querySelector(".posts-rows");
        const postsGrids = document.querySelector(".posts-grids");
        gridButton.addEventListener("click", () => {
            gridButton.classList.add("active");
            postsGrids.classList.add("active");
            rowButton.classList.remove("active");
            postsRows.classList.remove("active");
        });
        rowButton.addEventListener("click", () => {
            rowButton.classList.add("active");
            postsRows.classList.add("active");
            gridButton.classList.remove("active");
            postsGrids.classList.remove("active");
        });
    });
    document.addEventListener("DOMContentLoaded", () => {
        const fmt = "d_m_Y";
        const fromPicker = flatpickr("#datepicker-from-input", {
            dateFormat: fmt,
            disableMobile: true,
            locale: {
                weekdays: {
                    shorthand: [ "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa" ],
                    longhand: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]
                }
            },
            prevArrow: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.2609 3.5L11.0834 4.3225L8.41171 7L11.0834 9.6775L10.2609 10.5L6.76087 7L10.2609 3.5Z" fill="black" /><path d="M6.41676 3.5L7.23926 4.3225L4.56759 7L7.23926 9.6775L6.41676 10.5L2.91676 7L6.41676 3.5Z" fill="black" /></svg>`,
            nextArrow: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.73913 3.5L2.91663 4.3225L5.58829 7L2.91663 9.6775L3.73913 10.5L7.23913 7L3.73913 3.5Z" fill="black" /><path d="M7.58324 3.5L6.76074 4.3225L9.43241 7L6.76074 9.6775L7.58324 10.5L11.0832 7L7.58324 3.5Z" fill="black" /></svg>`,
            onChange(selectedDates) {
                const inp = document.getElementById("datepicker-from-input");
                const btn = document.getElementById("datepicker-from-clear");
                if (selectedDates.length) {
                    inp.classList.add("has-value");
                    btn.style.display = "flex";
                    if (toPicker.selectedDates[0] && selectedDates[0] > toPicker.selectedDates[0]) toPicker.clear();
                    toPicker.set("minDate", selectedDates[0]);
                } else {
                    inp.classList.remove("has-value");
                    btn.style.display = "none";
                    toPicker.set("minDate", null);
                }
            }
        });
        const toPicker = flatpickr("#datepicker-to-input", {
            dateFormat: fmt,
            disableMobile: true,
            locale: {
                weekdays: {
                    shorthand: [ "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa" ],
                    longhand: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]
                }
            },
            prevArrow: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.2609 3.5L11.0834 4.3225L8.41171 7L11.0834 9.6775L10.2609 10.5L6.76087 7L10.2609 3.5Z" fill="black" /><path d="M6.41676 3.5L7.23926 4.3225L4.56759 7L7.23926 9.6775L6.41676 10.5L2.91676 7L6.41676 3.5Z" fill="black" /></svg>`,
            nextArrow: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.73913 3.5L2.91663 4.3225L5.58829 7L2.91663 9.6775L3.73913 10.5L7.23913 7L3.73913 3.5Z" fill="black" /><path d="M7.58324 3.5L6.76074 4.3225L9.43241 7L6.76074 9.6775L7.58324 10.5L11.0832 7L7.58324 3.5Z" fill="black" /></svg>`,
            onChange(selectedDates) {
                const inp = document.getElementById("datepicker-to-input");
                const btn = document.getElementById("datepicker-to-clear");
                if (selectedDates.length) {
                    inp.classList.add("has-value");
                    btn.style.display = "flex";
                } else {
                    inp.classList.remove("has-value");
                    btn.style.display = "none";
                }
            }
        });
        document.getElementById("datepicker-calendar-from").addEventListener("click", () => fromPicker.open());
        document.getElementById("datepicker-calendar-to").addEventListener("click", () => toPicker.open());
        document.getElementById("datepicker-from-clear").addEventListener("click", () => {
            fromPicker.clear();
            toPicker.set("minDate", null);
        });
        document.getElementById("datepicker-to-clear").addEventListener("click", () => toPicker.clear());
    });
    window["FLS"] = false;
})();