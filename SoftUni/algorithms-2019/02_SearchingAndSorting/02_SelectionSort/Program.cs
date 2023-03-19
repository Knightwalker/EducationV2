namespace _02_SelectionSort
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] numbersArr = new int[] { 5, 4, 3, 2, 2, 1 };
            int[] sortedNumbersArr = SelectionSort(numbersArr);
            Console.WriteLine(String.Join(" ", sortedNumbersArr));
        }

        static int[] SelectionSort(int[] numbersArr)
        {
            for (int i = 0; i < numbersArr.Length - 1; i++)
            {
                int minNumber = numbersArr[i];
                int posMinNumber = i;
                bool foundMinNumber = false;
                for (int j = i + 1; j < numbersArr.Length; j++)
                {
                    if (numbersArr[j] < minNumber)
                    {
                        minNumber = numbersArr[j];
                        posMinNumber = j;
                        foundMinNumber = true;
                    }
                }

                if (!foundMinNumber)
                {
                    continue;
                }

                int temp = numbersArr[i];
                numbersArr[i] = numbersArr[posMinNumber];
                numbersArr[posMinNumber] = temp;
            }

            return numbersArr;
        }

    }
}