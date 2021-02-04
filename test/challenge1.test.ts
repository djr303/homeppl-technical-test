import Grid, { GridStructure, InvalidGridStructureError, InvalidWidthSizeError } from '../src/grid';

describe('Chanllenge 01', () => {
  it('should create a valid grid ', () => {

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

    expect(() => new Grid(gridStructure, 12)).not.toThrow()
  });

  test('should throw correct error class when grid structure is invalid', () => {

    const gridStructure01: GridStructure = {
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
            width: 1,
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

    expect(() => new Grid(gridStructure01, 12)).toThrow(InvalidGridStructureError)

    const gridStructure02: GridStructure = {
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
            width: 2,
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
            width: 3,
            text: 'test-value',
          },
          {
            width: 4,
            text: 'test-value',
          },
        ], 
      ]
    }

    expect(() => new Grid(gridStructure02, 12)).toThrow(InvalidGridStructureError)
  });

  it('should throw invalid width type error when integers arn\'t whole numbers', () => {
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
            width: 2,
            text: 'test-value',
          },
          {
            width: 4.333,
            text: 'test-value',
          },
          {
            width: 5,
            text: 'test-value',
          },
        ]
      ]
    }

    expect(() => new Grid(gridStructure, 12)).toThrow(InvalidWidthSizeError) 
  })
});
