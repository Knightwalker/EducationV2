namespace _07_FindAllPathsInALabyrinth
{
    public class Program
    {
        static string[][] labyrinth = new string[][]
        {
            new string[] { "-", "-", "-", "*", "-", "-" },
            new string[] { "*", "*", "-", "*", "*", "-" },
            new string[] { "-", "-", "-", "-", "-", "-" },
            new string[] { "-", "*", "*", "*", "-", "-" },
            new string[] { "-", "*", "-", "*", "*", "-" },
            new string[] { "-", "-", "-", "-", "-", "e" }
        };

        static void Main(string[] args)
        {
            int currentRow = 0;
            int currentCol = 0;
            FindPath(currentRow, currentCol);
        }

        static void FindPath(int row, int col)
        {
            if (!CanStep(row, col))
            {
                return;
            }

            if (labyrinth[row][col] == "e")
            {
                PrintSolution();
                return;
            } 

            labyrinth[row][col] = "x";     
            FindPath(row, col + 1);
            FindPath(row + 1, col);
            FindPath(row, col - 1);
            FindPath(row - 1, col);
            labyrinth[row][col] = "-";

        }

        static bool CanStep(int row, int col)
        {
            // Check index out of bounds
            if (row < 0 || row >= labyrinth.Length || col < 0 || col >= labyrinth[row].Length)
            {
                return false;
            }

            // Check for wall
            if (labyrinth[row][col] == "*")
            {
                return false;
            }

            // Check for mark
            if (labyrinth[row][col] == "x")
            {
                return false;
            }

            return true;

        }

        static void PrintSolution()
        {
            for (int row = 0; row < labyrinth.Length; row++)
            {
                Console.WriteLine(string.Join(" ", labyrinth[row]));
            }
            Console.WriteLine();
        }
    }
}