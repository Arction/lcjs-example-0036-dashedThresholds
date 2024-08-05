/**
 * Example showcasing use of `DashedLine` style in a _threshold_ indicator.
 */

const lcjs = require('@lightningchart/lcjs')

const { lightningChart, Themes, AxisTickStrategies, DashedLine, SolidFill, StipplePatterns } = lcjs

const chart = lightningChart({
            resourcesBaseUrl: new URL(document.head.baseURI).origin + new URL(document.head.baseURI).pathname + 'resources/',
        })
    .ChartXY({
        theme: Themes[new URLSearchParams(window.location.search).get('theme') || 'darkGold'] || undefined,
    })
    .setTitle('Machine temperatures')

// Example uses Theme properties that are only guaranteed to be included in official LC themes (intended for example purposes only)
const theme = chart.getTheme()
const exampleThemeProperties = theme.examples
if (!exampleThemeProperties) {
    throw new Error('Unofficial theme used')
}

// Configure X Axis as Time
const axisX = chart.getDefaultAxisX().setTickStrategy(AxisTickStrategies.Time)
const axisY = chart
    .getDefaultAxisY()
    .setTitle('Temperature')
    .setUnits('°C')

Promise.all([
    fetch(new URL(document.head.baseURI).origin + new URL(document.head.baseURI).pathname + 'examples/assets/0036/temperature.json').then(
        (r) => r.json(),
    ),
    fetch(new URL(document.head.baseURI).origin + new URL(document.head.baseURI).pathname + 'examples/assets/0036/temperature2.json').then(
        (r) => r.json(),
    ),
]).then(([temperatureData, temperatureData2]) => {
    const seriesMachine1 = chart
        .addLineSeries({ dataPattern: { pattern: 'ProgressiveX' } })
        .setName('Machine 1 temperature')
        .add(temperatureData)

    const seriesMachine2 = chart
        .addLineSeries({ dataPattern: { pattern: 'ProgressiveX' } })
        .setName('Machine 2 temperature')
        .add(temperatureData2)

    const thresholdLine = axisY
        .addConstantLine(true)
        .setValue(120)
        .setStrokeStyle(
            new DashedLine({
                thickness: 4,
                fillStyle: new SolidFill({ color: exampleThemeProperties.badGoodColorPalette[0] }),
                pattern: StipplePatterns.Dashed,
                patternScale: 4,
            }),
        )
        // Prevent users from moving constant line with mouse interactions.
        .setMouseInteractions(false)

    // Configure both Axis intervals manually to add some extra space around line series
    axisX.setInterval({
        start: Math.min(seriesMachine1.getXMin(), seriesMachine2.getXMin()) - 1000,
        end: Math.max(seriesMachine1.getXMax(), seriesMachine2.getXMax()) + 1000,
    })

    axisY.setInterval({
        start: 0,
        end: Math.max(seriesMachine1.getYMax(), seriesMachine2.getYMax()) + 20,
    })
})
