namespace _03_InsertionSort
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] numbersArr = new int[] { 5, 4, 3, 2, 2, 1 };
            int[] sortedNumbersArr = InsertionSort(numbersArr);
            Console.WriteLine(String.Join(" ", sortedNumbersArr));
        }

        static int[] InsertionSort(int[] numbersArr)
        {
            for (int i = 1; i < numbersArr.Length; i++)
            {
                int n = numbersArr[i];
                for (int j = i - 1; j >= 0; j--)
                {
                    if (numbersArr[j] > n)
                    {
                        int temp = numbersArr[j];
                        numbersArr[j] = n;
                        numbersArr[j + 1] = temp;
                    }
                }
            }

            return numbersArr;
        }
    }
}