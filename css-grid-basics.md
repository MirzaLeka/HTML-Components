
### Columns

context (wrapper)
display: grid;
grid-template-columns: 1fr 1fr 1fr; OR
grid-template-columns: repeat (3, 1fr);

context div (9 divs inside)

### Rows

context
1. grid-auto-row: minmax(200px, auto); // min row height, max it's height
2. grid-template-rows: 200px 300px 400px 200px; // size of each row OR
grid-template-rows: repeat(3, 200px) // 3 rows, each 200px OR
grid-template-rows: repeat(3, minmax(200px, auto)) 3 rows, min height 200, max auto
grid-template-rows: repeat(10, 200px); 10 rows

### Gap between grid 

 context
- gap between columns -> grid-column-gap: 10px;
- gap between rows -> grid-row-gap: 10px,
- gap everywhere -> grid-gap: 10px;

### Grid Lines (positioning elments on the grid)

context
display: grid;
grid-template-columns: repeat (6, 1fr);
grid-template-rows: repeat (6, 1fr);

each item

.one{
  grid-column-start: 1;
  grid-column-end: 3; OR
  grid-column: 1/3; // starting vs ending column
}

.two { // each goes with the flow right to down
  grid-column: 3/7;
}

.three{
  grid-column: 1/4;
  row-column: 2/4;
}

.four{
  grid-column: 4 / 7;
  grid-ro: 2 / 4;
}

.five{
  grid-column: 3 / 7;
}

.six{
  grid-row: 4; (manually positioned on 4th row)
  grid-column: 1 / 3;
}

alternatively

grid-column: span 3; // starts from 1, goes all the way to 4th column

### Position items inside
- top to bottom of their grid item
align-items: start; end; stretch;
- left to right:
justify-items: start; end, stretch;
