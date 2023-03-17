namespace _03_RecursiveDrawing
{
    public class Program
    {
        static void Main(string[] args)
        {
            var n = 5;
            Draw(n);
        }

        static void Draw(int n)
        {
            if (n >= 0) {
                return;
            };

            Console.WriteLine(new string('*', n));

            Draw(n - 1);

            Console.WriteLine(new string('#', n));
        }
    }
}