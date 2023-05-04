namespace _02_RecursiveFactorial
{
    public class Program
    {
        static void Main(string[] args)
        {
            // var n = 5;
            var n = 25; // max for long data type
            Console.WriteLine(Fact(n));
        }

        static long Fact(int n)
        {
            if (n == 0)
            {
                return 1;
            }

            long sum = n * Fact(n - 1);
            return sum;
        }
    }
}