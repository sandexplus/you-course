import drawTable from "./drawTable";

export default function putTables(data) {
    const swiper = document.querySelector('.swiper__tables .swiper-wrapper');
    
    for (let table of data) {
        swiper.append(drawTable(table))
    }
    if (data[data.length - 1].length === 6) {
        // console.log(table)
        for (let table of ['']) {
            swiper.append(drawTable(table))
        }
    }
}