import { Component } from '@angular/core';

@Component({
  selector: 'app-mutant-detector',
  templateUrl: './mutant-detector.component.html',
  styleUrls: ['./mutant-detector.component.css'],
})
export class MutantDetectorComponent {
  dnaInput: string = '';
  result: boolean | null = null;

  isMutant(dna: string[]): boolean {
    const rows = dna.length;
    const cols = dna[0].length;
    const directions = [
      [0, 1],   // Horizontal
      [1, 0],   // Vertical
      [1, 1],   // Diagonal derecha
      [-1, 1],  // Diagonal izquierda
    ];

    function checkSequence(row: number, col: number, direction: number[], count: number): boolean {
      if (count === 4) {
        return true; // Encontramos una secuencia de 4 letras iguales
      }

      const newRow = row + direction[0];
      const newCol = col + direction[1];

      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols &&
        dna[newRow][newCol] === dna[row][col]
      ) {
        return checkSequence(newRow, newCol, direction, count + 1);
      }

      return false;
    }

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        for (const direction of directions) {
          if (checkSequence(row, col, direction, 1)) {
            return true;
          }
        }
      }
    }

    return false;
  }

  detectMutant() {
    const dnaArray = this.dnaInput.split('\n').map((row) => row.trim());
    this.result = this.isMutant(dnaArray);
  }
}
