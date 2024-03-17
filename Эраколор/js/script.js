const containerEl = document.querySelector('.page')
const rowList = containerEl.querySelectorAll('.row');
let windowInnerWidth = window.innerWidth;


wrapColums(windowInnerWidth);
window.addEventListener('resize', () => {
    windowInnerWidth = window.innerWidth;
    wrapColums(windowInnerWidth);
})


function wrapColums(windowInnerWidth) {
    if (rowList) {
        rowList.forEach(row => {
            const colList = row.children;
            [...colList].forEach(col => {
                if (windowInnerWidth > 1199) {
                    if (col.classList.contains('col-3')) {
                        col.style.width = `calc((100% - 75px)/4)`;

                        if ([...colList].length == 3) {
                            col.style.flex = `1 0 auto`;
                        }
                    } else if (col.classList.contains('col-9')) {
                        col.style.width = `calc((100% - 75px)/4*3 + 50px)`;
                    } else if (col.classList.contains('col-6')) {
                        col.style.width = `calc((100% - 25px)/2)`;
                        col.style.flex = `1 2 auto`;
                        if ([...colList].indexOf(col) === 1) {
                            col.style.order = `0`;
                        }
                    } else if (col.classList.contains('col-4')) {
                        col.style.width = `calc((100% - 50px)/3)`;
                        col.style.flex = `1 0 auto`;
                    } else if (col.classList.contains('col-8')) {
                        col.style.width = `calc((100% - 50px)/3 * 2 + 25px)`;
                        col.style.flex = `1 2 auto`;
                    }

                } else if (windowInnerWidth <= 1199 && windowInnerWidth > 991) {
                    if (col.classList.contains('col-3')) {
                        col.style.width = `calc((100% - 25px) / 2)`;
                        if ([...colList].length == 3) {
                            col.style.flex = `1 0 auto`;
                        }
                        if ([...colList].length < 3) {
                            col.style.width = `calc((100% - 50px) / 3`;
                        }
                    } else if (col.classList.contains('col-9')) {
                        col.style.width = `calc((100% - 50px)/3*2 + 25px)`;

                    } else if (col.classList.contains('col-6')) {
                        col.style.width = `calc((100% - 25px) / 2)`;
                        col.style.flex = `1 2 auto`;
                        if ([...colList].length === 3) {
                            col.style.width = `100%`;
                            if ([...colList].indexOf(col) === 1) {
                                col.style.order = `1`;
                            }
                        }

                    } else if (col.classList.contains('col-4')) {
                        col.style.width = `calc((100% - 50px) / 3`;


                    } else if (col.classList.contains('col-8')) {
                        col.style.width = `calc((100% - 50px)/3*2 + 25px)`;
                    }

                }
                else if (windowInnerWidth <= 991 && windowInnerWidth > 767) {
                    if (col.classList.contains('col-3')) {
                        col.style.width = `calc((100% - 25px) / 2)`;
                        col.style.flex = `1 1 auto`;
                        if ([...colList].length < 3) {
                            col.style.width = `calc((100% - 25px) / 2)`;
                        }

                    } else if (col.classList.contains('col-9')) {
                        if ([...colList].length < 3) {
                            col.style.flex = `0 1 auto`;
                            col.style.width = `calc((100% - 25px) / 2)`;
                        }
                    } else if (col.classList.contains('col-6')) {
                        col.style.width = `calc((100% - 25px) / 2)`;
                        col.style.flex = `1 2 auto`;
                        if ([...colList].length === 3) {
                            col.style.width = `100%`;
                            if ([...colList].indexOf(col) === 1) {
                                col.style.order = `1`;
                            }
                        }

                    } else if (col.classList.contains('col-4') || col.classList.contains('col-8')) {
                        col.style.width = `calc((100% - 25px) / 2)`;
                    }
                }
                else if (windowInnerWidth <= 767 && windowInnerWidth > 576) {
                    if (col.classList.contains('col-3')) {
                        col.style.width = `calc((100% - 25px) / 2)`;
                        col.style.flex = `1 1 auto`;

                        if ([...colList].length < 3) {
                            col.style.width = `calc((100% - 25px) / 2)`;
                        } else if ([...colList].length === 3) {

                        }

                    } else if (col.classList.contains('col-9') || col.classList.contains('col-8')) {
                        if ([...colList].length < 3) {
                            col.style.width = `100%`;
                        }
                    } else if (col.classList.contains('col-6')) {
                        col.style.width = `100%`;
                        col.style.flex = `1 2 auto`;
                        if ([...colList].length === 3) {
                            col.style.width = `100%`;
                            if ([...colList].indexOf(col) === 1) {
                                col.style.order = `1`;
                            }
                        }

                    } else if (col.classList.contains('col-4')) {
                        col.style.width = `100%`;
                    }
                } else if (windowInnerWidth <= 576) {
                    col.style.width = `100%`;
                    if (col.classList.contains('col-6')) {
                        if ([...colList].length === 3) {
                            col.style.width = `100%`;
                            if ([...colList].indexOf(col) === 1) {
                                col.style.order = `0`;
                            }
                        }
                    }
                }
            });

        });
    }
}



const tableEl = containerEl.querySelectorAll('table');

if (tableEl) {
    tableEl.forEach(table => {
        table.classList.add('table', 'table-hover', 'table-striped', 'table-bordered');
    });
}