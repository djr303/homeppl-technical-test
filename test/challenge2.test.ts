import Grid, { GridStructure, InvalidAdditionError, InvalidGridStructureError } from '../src/grid';

describe('Chanllenge 02', () => {
  it('should add a new column to the end of the row', () => {
    const gridStructure: GridStructure = {
      rows: [
        [
          {
            width: 6,
            text: 'test-value',
          },
          {
            width: 6,
            text: 'test-value',
          },
        ],
        [
          {
            width: 3,
            text: 'test-value',
          },
          {
            width: 4,
            text: 'test-value',
          },
          {
            width: 5,
            text: 'test-value',
          },
        ],
        [
          {
            width: 2,
            text: 'test-value',
          },
          {
            width: 4,
            text: 'test-value',
          },
          {
            width: 6,
            text: 'test-value',
          },
        ], 
      ]
    }

    const grid = new Grid(gridStructure, 12)

    expect(() => grid.add(0, { width: 6, text: 'test-value' })).not.toThrow(InvalidAdditionError)
    expect(() => grid.validate()).not.toThrow(InvalidGridStructureError)
  })

  it('should throw error on non integer types', () => {
    const gridStructure: GridStructure = {
      rows: [
        [
          {
            width: 6,
            text: 'test-value',
          },
          {
            width: 6,
            text: 'test-value',
          },
        ],
        [
          {
            width: 3,
            text: 'test-value',
          },
          {
            width: 4,
            text: 'test-value',
          },
          {
            width: 5,
            text: 'test-value',
          },
        ],
        [
          {
            width: 2,
            text: 'test-value',
          },
          {
            width: 4,
            text: 'test-value',
          },
          {
            width: 6,
            text: 'test-value',
          },
        ], 
      ]
    }

    const grid = new Grid(gridStructure, 12)
    expect(() => grid.add(1, { width: 6, text: 'test-value' })).toThrow(InvalidAdditionError)
  })

  it('should be able to create valid new grid structure when removing columns', () => {
    const gridStructure: GridStructure = {
      rows: [
        [
          {
            width: 6,
            text: 'test-value',
          },
          {
            width: 6,
            text: 'test-value',
          },
        ],
        [
          {
            width: 3,
            text: 'test-value',
          },
          {
            width: 4,
            text: 'test-value',
          },
          {
            width: 5,
            text: 'test-value',
          },
        ],
        [
          {
            width: 2,
            text: 'test-value',
          },
          {
            width: 4,
            text: 'test-value',
          },
          {
            width: 6,
            text: 'test-value',
          },
        ],
      ]
    }

    const grid = new Grid(gridStructure, 12);
    grid.remove(1, 2);
    expect(() => grid.validate()).not.toThrow(InvalidGridStructureError)
  });
})