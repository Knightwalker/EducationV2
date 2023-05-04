namespace _01_RecursiveArraySum
{
    public class Program
    {
        static void Main(string[] args)
        {
            var numbersArr = new int[] { 1, 2, 3, 4, 5 };
            var sum = Sum(numbersArr, 0);
            Console.WriteLine(sum);
        }

        static int Sum(int[] arr, int index)
        {
            if (index == arr.Length - 1)
            {
                return arr[index];
            }

            var currentSum = arr[index] + Sum(arr, index + 1);
            return currentSum;
        }
    }
}