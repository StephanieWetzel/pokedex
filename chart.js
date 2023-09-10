function createChart(i) {
    const ctx = document.getElementById(`myChart${i}`).getContext('2d');
    Chart.defaults.font.size = 16;
    Chart.defaults.plugins.legend = false;

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: pokemonStatsNames,
            datasets: [{
                data: pokemonStatsValues,
                borderColor: backgroundColor,
                backgroundColor: typeColor1,
                borderWidth: 3
            }]
        },
        options: {
            indexAxis: 'y',
        }
    });
}