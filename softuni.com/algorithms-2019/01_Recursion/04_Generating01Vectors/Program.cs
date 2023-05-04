using System;

namespace _04_Generating01Vectors
{
    public class Program
    {
        static void Main(string[] args)
        {
            var n = 3;
            var vector = new int[n];
            Gen01(vector, 0);
        }

        static void Gen01(int[] vector, int index)
        {
            if (index >= vector.Length)
            {
                Console.WriteLine(String.Join("", vector));
                return;
            }

            for (int i = 0; i <= 1; i++)
            {
                vector[index] = i;
                Gen01(vector, index + 1);
            }

        }
    }
}