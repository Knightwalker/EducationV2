**A Fake Among Eight Coins**
There are eight identical-looking coins; one of these coins is counterfeit and is known to be lighter than the genuine coins. What is the minimum number of weighings needed to identify the fake coin with a two-pan balance scale without weights?

Solution 2: Linear Search

- We first comapre the 1st coin with the 2nd coin. If both are not equal weight, then the lighter coin would be the fake one.
- Otherwise, we comapre the 1st coin with the 3rd coin. If both are not equal weight, then the lighter coin would be the fake one.
- We continue the same process until we find the fake coin. In worst case scenario we need to perform 7 comparisons.

Solution 4: Divide and conquer

ref https://www.enjoymathematics.com/blog/fake-among-eight-coins
A. Levitin and M. Levitin, Algorithmic Puzzles, Oxford University Press, 2011, #10

**Find the Jar with contaminated pills**
You have 5 jars of pills. Each pill weighs 10 gram, except for contaminated pills contained in one jar, where each pill weighs 9 gm. Given a scale, how could you tell which jar had the contaminated pills in just one measurement?

Solution:
Step 1: Take out 1 pill from jar 1, 2 pills from jar 2, 3 pills from jar 3, 4 pills from jar 4 and 5 pills from jar 5.
Step 2: Put all these 15 pills on the scale. The correct weight is 150 (15\*10). But one of the jars has contaminated pills. So the weight will definitely be less than 150.
Step 3: If the weight is 149 then jar 1 has contaminated pills because there is only one contaminated pill. If the weight is 148 then jar 2, if the weight is 147 then jar 3, if 146 then jar 4, if 145 then jar 5.

ref https://www.geeksforgeeks.org/puzzle-7-find-the-jar-with-contaminated-pills/

# Probability

Q: Flip two coins, if at least one is heads, what is the probability of both being heads?
A: 1/3

Q: You have 100 balls (50 black balls and 50 white balls) and 2 buckets. How do you divide the balls into the two buckets so as to maximize the probability of selecting a black ball if 1 ball is chosen from 1 of the buckets at random?
A: Place 1 black ball in bucket A and place all other 99 balls (49 black and 50 white) in bucket B.
E: The strategy explanation as follows:

- The probability of selecting Bucket A is 50% (1 out of 2).
- The probability of selecting a black ball from Bucket A is 100% (1 out of 1).
- The probability of selecting Bucket B is 50% (1 out of 2).
- The probability of selecting a black ball from Bucket B is 49/99, which is approximately 49.49%.

So, the overall probability is calculated as:

(Probability of selecting Bucket A _ Probability of selecting a black ball from Bucket A) + (Probability of selecting Bucket B _ Probability of selecting a black ball from Bucket B)

= (0.5 _ 1) + (0.5 _ 0.4949) = 0.5 + 0.24745 = 0.74745 or approximately 74.75%.
