namespace _04_MergeSort
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] numbersArr = new int[] { 5, 4, 3, 2, 2, 1 };
            int[] sortedNumbersArr = MergeSort(numbersArr);
            Console.WriteLine(String.Join(" ", sortedNumbersArr));
        }

        static int[] MergeSort(int[] numbersArr)
        {
            // if (numbersArr.Length <= 1)
            // {
            //     return numbersArr;
            // }
            // 
            // int[] leftArr = new int[numbersArr.Length / 2];
            // int[] rightArr = new int[(numbersArr.Length / 2) + 1];

            return numbersArr;
        }
    }
}