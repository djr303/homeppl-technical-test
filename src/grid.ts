export type Column = {
  width: number
  text?: string
}

export type Row = Column[]

export type GridStructure = {
  rows: Row[]
}

export class InvalidGridStructureError extends Error {

  constructor(...args: any[]){
    super(...args)

    // Have to explictly set custom error constructor type for Jest tests (TypeScript only issue)
    Object.setPrototypeOf(this, InvalidGridStructureError.prototype);
  }

  message: string = 'Invalid grid structure'
}

export class InvalidWidthSizeError extends Error {

  constructor(num: number){
    super(`Invalid width size number isn't an integer. Value: ${num}`);

    // Have to explictly set custom error constructor type for Jest tests (TypeScript only issue)
    Object.setPrototypeOf(this, InvalidWidthSizeError.prototype);
  }

  message: string = 'Invalid grid structure'
}

export class InvalidAdditionError extends Error {

  constructor(invalidWidth: number){
    super(`Invalid new width of column based on addition of new column. New width: ${invalidWidth}`)

    // Have to explictly set custom error constructor type for Jest tests (TypeScript only issue)
    Object.setPrototypeOf(this, InvalidAdditionError.prototype);
  }
}

class Grid {
    constructor(private grid: GridStructure, private width: number){
      if (!this.validate()) {
        throw new InvalidGridStructureError();
      }
    }

    private sum(widths: number[]){
      return widths.reduce((a, v,) => {
        return a + v
      }, 0)
    }

    private validateIntegers(num: number){
      if (Number.isInteger(num)){
        return true;
      } else {
        throw new InvalidWidthSizeError(num)
      }
    }

    public validate(){
      const { rows } = this.grid;
      const rowsLength = rows.length;

      for (let i = 0; i < rowsLength; i++){
        if (this.sum(
          rows[i].map((c: Column) => {
            this.validateIntegers(c.width)
            return c.width
        })) % this.width !== 0){
          return false;
        }
      }

      return true;
    }

    public add(rowIdx: number, column: Column){
      const newRow: Row = [];
      const { rows } = this.grid;
      const row = rows[rowIdx];
      const newColumnWidth = column.width;
      const availableSpace = this.width - newColumnWidth;
      const colsLength = row.length;

      for (let i = 0; i < colsLength; i++){
        const c = row[i]
        const newWidth = (c.width / this.width) * (availableSpace / 1)

        if (this.width % newWidth !== 0){
          throw new InvalidAdditionError(newWidth)
        } else {
          newRow.push({ width: newWidth, text: c.text})
        }
      }

      newRow.push(column);

      this.grid.rows[rowIdx] = newRow;
    }

    public remove(rowIdx: number, columnIdx: number){
      const { rows } = this.grid
      const columns = rows[rowIdx];
      columns.splice(columnIdx, 1)
      
      const remainingRatio = 1 / this.sum(columns.map((c: Column) => c.width / this.width));
      const newColumns = columns.map((c : Column) => ({ text: c.text, width: Math.round(c.width * remainingRatio) }))
      this.grid.rows[rowIdx] = newColumns;
    }

    private getColumn(width: number, text?: string){
      return `<div class="column width-${width}">${text}</div>`
    }

    private getRow(columns: string){
      return `<div class="row">\n${columns}\n</div>`
    }

    public getGridAsHTML(){
      const header = '<div class="grid">'
      const footer = '</div>'

      const body = this.grid.rows.map((r: Column[]) => this.getRow(
        r.map((c: Column) => this.getColumn(c.width, c.text)).join('\n')
      )).join('\n');

      return `${header}\n${body}\n${footer}`;
    }

    public getGridAsJSON(){
      return this.grid.rows;
    }
}

export default Grid;  