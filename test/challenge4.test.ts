import Grid, { GridStructure } from '../src/grid';

describe('Chanllenge 04', () => {
  it('should create a valid grid ', () => {

    const gridStructure: GridStructure = {
      rows: [
        [
          {
            width: 12,
            text: 'test-value',
          },
          {
            width: 12,
            text: 'test-value',
          },
        ],
        [
          {
            width: 6,
            text: 'test-value',
          },
          {
            width: 8,
            text: 'test-value',
          },
          {
            width: 10,
            text: 'test-value',
          },
        ],
        [
          {
            width: 4,
            text: 'test-value',
          },
          {
            width: 8,
            text: 'test-value',
          },
          {
            width: 12,
            text: 'test-value',
          },
        ], 
      ]
    }

    expect(() => new Grid(gridStructure, 24)).not.toThrow()
  });
});