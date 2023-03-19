namespace _01_BubbleSort
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] numbersArr = new int[] { 5, 4, 3, 2, 2, 1 };
            int[] sortedNumbersArr = BubbleSort(numbersArr);
            Console.WriteLine(String.Join(" ", sortedNumbersArr));
        }

        static int[] BubbleSort(int[] numbersArr)
        {
            bool swapped = true;

            while (true)
            {
                if (!swapped)
                {
                    break;
                }

                swapped = false;
                for (int i = 0; i < numbersArr.Length - 1; i++)
                {
                    if (numbersArr[i] > numbersArr[i + 1])
                    {
                        int temp = numbersArr[i];
                        numbersArr[i] = numbersArr[i + 1];
                        numbersArr[i + 1] = temp;
                        swapped = true;
                    }
                }
            }

            return numbersArr;
        }
    }
}