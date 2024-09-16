/**
 * Main JS file for the module.
 */

import { Average } from './average.js'
import { calculateNPV } from './npv.js'

// Average
const average = new Average()

average.add(1)
average.add(2)
average.add(3)

average.calculate() // Output: 2

// NPV
calculateNPV()