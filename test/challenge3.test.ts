import Grid, { GridStructure } from '../src/grid';

describe('Chanllenge 03', () => {
  it('should add a new column to the end of the row', () => { 
    const gridStructure: GridStructure = {
      rows: [
        [
          {
            width: 6,
            text: 'test-value-01',
          },
          {
            width: 6,
            text: 'test-value-02',
          },
        ],
        [
          {
            width: 3,
            text: 'test-value-03',
          },
          {
            width: 4,
            text: 'test-value-04',
          },
          {
            width: 5,
            text: 'test-value-05',
          },
        ]
      ]
    }

    const grid = new Grid(gridStructure, 12);
    const html = grid.getGridAsHTML();
    const expected = `<div class="grid">\n<div class="row">\n<div class="column width-6">test-value-01</div>\n<div class="column width-6">test-value-02</div>\n</div>\n<div class="row">\n<div class="column width-3">test-value-03</div>\n<div class="column width-4">test-value-04</div>\n<div class="column width-5">test-value-05</div>\n</div>\n</div>`

    expect(html).toBe(expected)
  })

  it('should export grid object contained in grid class to JSON', () => {
    const gridStructure: GridStructure = {
      rows: [
        [
          {
            width: 6,
            text: 'test-value-01',
          },
          {
            width: 6,
            text: 'test-value-02',
          },
        ],
        [
          {
            width: 3,
            text: 'test-value-03',
          },
          {
            width: 4,
            text: 'test-value-04',
          },
          {
            width: 5,
            text: 'test-value-05',
          },
        ]
      ]
    };

    const grid = new Grid(gridStructure, 12);
    const json = grid.getGridAsJSON();

    expect(json).toMatchObject(
      [
        [
          {
            width: 6,
            text: 'test-value-01',
          },
          {
            width: 6,
            text: 'test-value-02',
          },
        ],
        [
          {
            width: 3,
            text: 'test-value-03',
          },
          {
            width: 4,
            text: 'test-value-04',
          },
          {
            width: 5,
            text: 'test-value-05',
          },
        ]
      ]
    )
  })
})