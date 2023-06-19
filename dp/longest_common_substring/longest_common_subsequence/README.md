# Longest Common Subsequence

## Problem Statement

Find the maximum common subsequence between two words. A subsequence is different than a substring because the subsequence doesn't have to be contiguous.

## Recursive Intuition

To solve this problem recursively, you'll have to keep track of two pointers and a count. Each pointer will correspond to a letter in their respective word: wordOne or wordTwo.

There are three subproblems or branches you'll need to consider. They're broken up into two groups:

1. If there's a match, you'll move both pointers forward and increment the count. This is the first branch. In the case that there's a match, you'll return early and not even consider the other branches.
2. If there isn't a match, you'll try two other branches: move the first pointer but not the second, move the second pointer but not the first. You will not increment the count and in contrast with the substring variant of this problem you won't reset it either. It will remain unchanged. This is how the count is carried through even when there isn't a match.

*Remember to add a memoization step here.*

## Tabulated Intuition

You can imagine a 2D table where the rows correspond to the letters in the first word and the columns correspond to the letters in the second word. We'll add a row and a column for the empty string case. That makes it easier to do boundary checks. In that case, what is the longest common subsequence you can form with an empty string? Well... that's a string of zero length, so you can initialize all of these values to zero.

This two dimensional matrix is going to express *all of the subproblems* that the recursive solution would find. The benefit here is that you only have to solve them once whereas you'll have *overlapping subproblems* in the recursive solution.

Then you'll perform a double loop over the rows and the columns but remember: rows are going to correspond to the first word and the columns will correspond to the second word. You can start at the first row and first column in your loop since we've added the empty string case as a base case row and column.

At every point in the loop you're going to ask if there's a matching branch. If there isn't, you're going to set the current row and column in the dp array to be the max value of either: `dp[row - 1][column]` OR `dp[row][column - 1]`. Essentially what you're saying here is, if there wasn't a match, then what was the previous max subsequence between either using the letters up the current row in wordOne OR using the the letters up the current column in wordTwo?

If there is a match, you'll set the current row, column in the dp array equal to `1 + dp[row - 1][column - 1]`. Why? Well let's break it down:

- You add 1 because you have a match between both characters. That should count toward the longest subsequence. If you match the A in `BAN` and `LAM`, that shouldn't give you a sequence of 2 right? You have a longest substring of exactly 1.
- You add the diagonal north left cell because that represents the previous contiguous longest common subsequence.

In the case there's a match, you'll simply continue onto the next iteration, skipping the other branches in the same way the recursive solution does.

When the loop terminates, you'll return the very last cell in the dp array. The max subsequence will have carried over to the end.

## Similar Problems

- Longest Common Substring
    - This problems looks very similar, except when we find a match, we consider the other branches.

## Recursively Compare Strings Pattern

The recursion is the hardest thing to visualize here. Here are the steps:

- Compare two characters in the string (depends on the problem which strings you're going to compare) using two pointers
- If there's a match, you have a branch that moves the two pointers in their respective directions (subsequence and substring problems will move in the same directions but palindromic subsequence, substring will move in opposite directions)
- Now you have three choices (match and increment count, move pointer one, move pointer two and keep count)
- In substring problems you *WILL* include the match path with the other branches
- In subsequence problems you will *NOT* include the match path with the other branches, you return that immediately
