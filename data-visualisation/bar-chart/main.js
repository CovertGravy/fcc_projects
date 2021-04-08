console.log('script loaded');

document.addEventListener('DOMContentLoaded', main);


async function fetchGDPData() {
    let response = await fetch('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json');
    let data = await response.json();
    return data;
}

async function main() {
    console.log('DOM loaded!');

    let GDPdata = await fetchGDPData();

    let { data } = GDPdata;

    console.log(data);

    const container = d3.select('.bar-chart');

    container.append('h2')
             .attr('id', 'title')
             .text('United States GDP')
    



}