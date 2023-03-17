namespace _05_GeneratingCombinations
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var vector = new int[] { 1, 2, 3, 4 };
            int k = 2;
            var set = new int[k];
            GenCombs(vector, set, 0, 0);
        }

        static void GenCombs(int[] vector, int[] set, int index, int border)
        {
            if (index >= set.Length)
            {
                Console.WriteLine(String.Join("", set));
                return;
            }

            for (int i = border; i < vector.Length; i++)
            {
                set[index] = vector[i];
                GenCombs(vector, set, index + 1, i + 1);
            }
        }
    }
}