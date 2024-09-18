
import { Average } from './finCalc.js'

const average = new Average()

document.getElementById(calculateBtn).addEventListener('click', () => {
    const averagesInput = document.getElementById('averagesInput').value

    const averagesValues = averagesInput.split(',').map((value) => parseFloat(value.trim))

    averagesValues.numbers = []

    averagesValues.forEach((value) => {
        if (!isNaN(value)) {
            average.add(value)
        }
    })

    // Calculate and display average on the page
    const calculatedAverage = average.calculate()
    document.getElementById('averageOutput').textContent = isNan(calculatedAverage) ? 'Invalid input' : calculatedAverage
})

