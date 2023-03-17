namespace _06_EightQueens
{
    internal class Program
    {
        static int solutionsCounter = 0;

        static void Main(string[] args)
        {
            int[][] board = new int[8][];
            for (int i = 0; i < board.Length; i++)
            {
                board[i] = new int[8];
            }
            int queensCounter = 0;
            PutQueens(board, queensCounter, 0);
        }

        static void PutQueens(int[][] board, int queensCounter, int row)
        {
            if (queensCounter == 8)
            {
                solutionsCounter++;
                Console.WriteLine("Solution: " + solutionsCounter);

                for (int i = 0; i < board.Length; i++)
                {
                    for (int j = 0; j < board[i].Length; j++)
                    {
                        Console.Write(board[i][j] + " ");
                    }

                    Console.WriteLine();
                }

                Console.WriteLine("------------------------------------");
                return;
            }

            if (row == board.Length)
            {
                return;
            }

            for (int col = 0; col < board.Length; col++)
            {
                bool isPositionSafe = IsPositionSafe(board, row, col);
                if (isPositionSafe)
                {
                    board[row][col] = 1;
                    queensCounter++;
                    PutQueens(board, queensCounter, row + 1);
                    queensCounter--;
                    board[row][col] = 0;
                }
            }

        }

        static bool IsPositionSafe(int[][] board, int row, int col)
        {
            // check horizontal line
            for (int x = 0; x < board.Length; x++)
            {
                if (board[row][x] == 1)
                {
                    return false;
                }
            }

            // check vertical line
            for (int y = 0; y < board.Length; y++)
            {
                if (board[y][col] == 1)
                {
                    return false;
                }
            }

            // check diagonal
            int min = Math.Min(row, col);
            int startRow = row - min;
            int startCol = col - min;

            while(true)
            {
                if (startRow >= board.Length || startCol >= board.Length)
                {
                    break;
                }
                if (board[startRow][startCol] == 1)
                {
                    return false;
                }
                startRow++;
                startCol++;
            }

            // check anti-diagonal
            int subtractedRow = row - 0;
            int subtractedCol = board.Length - 1 - col;
            int minValAntiDiagonal = Math.Min(subtractedRow, subtractedCol);
            int startAntiDiagonalRow = row - minValAntiDiagonal;
            int startAntiDiagonalCol = col + minValAntiDiagonal;

            while (true)
            {
                if (startAntiDiagonalRow >= board.Length || startAntiDiagonalCol < 0)
                {
                    break;
                }
                if (board[startAntiDiagonalRow][startAntiDiagonalCol] == 1)
                {
                    return false;
                }
                startAntiDiagonalRow++;
                startAntiDiagonalCol--;
            }

            // Passed all checks
            return true;
        }

    }
}