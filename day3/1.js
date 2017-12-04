const address = 277678
let gridWidth = 1
do {
    const nextGridWidth = gridWidth + 2
    if (address !== 1) {
        gridWidth = nextGridWidth
    }
} while (address > Math.pow(gridWidth, 2))

const lastInLastRing = Math.pow(gridWidth - 2, 2)
const lastInThisRing = Math.pow(gridWidth, 2)
const positionNumber = address - lastInLastRing

const maxCoords = (gridWidth - 1) / 2

const topRight = lastInLastRing + gridWidth - 1
const topLeft = (lastInLastRing + gridWidth * 2) - 2
const bottomLeft = lastInThisRing - gridWidth + 1
const bottomRight = lastInThisRing

const isOnRightBorder = (address > lastInLastRing && address <= topRight) || address === bottomRight
const isOnLeftBorder =address >= topLeft && address <= bottomLeft
const isOnTopBorder = address >= topRight && address <= topLeft
const isOnBottomBorder = address >= bottomLeft && address <= bottomRight

let x
let y

if (isOnRightBorder) {
    x = maxCoords
    y = positionNumber - maxCoords
} else if (isOnLeftBorder) {
    x = -maxCoords
    y = topLeft - address + maxCoords
} else if (isOnTopBorder) {
    x = topRight - address + maxCoords
    y = maxCoords
} else if (isOnBottomBorder) {
    x = address - bottomLeft - maxCoords
    y = -maxCoords
} else {
    throw new Error('Not on one of the borders??')
}
x
y

const steps = Math.abs(x) + Math.abs(y)
steps