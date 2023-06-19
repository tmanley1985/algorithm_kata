# Longest Common Substring

## Problem Statement

Find the maximum common substring between two words. The order has to be strictly increasing, meaning that, you can't skip elements.

## Recursive Intuition

To solve this problem recursively, you'll have to keep track of two pointers and a count. Each pointer will correspond to a letter in their respective word: wordOne or wordTwo.

There are three subproblems or branches you'll need to consider. They're broken up into two groups:

1. If there's a match, you'll move both pointers forward and increment the count. This is the first branch. You can default this branch to zero if there isn't a match.
2. If there isn't a match, you're effectively going to start over! You'll set the count back to zero and you'll try two other branches: move the first pointer but not the second, move the second pointer but not the first.

The return value will be the maximum value between all three of these branches.

*Remember to add a memoization step here.*

## Tabulated Intuition

You can imagine a 2D table where the rows correspond to the letters in the first word and the columns correspond to the letters in the second word. We'll add a row and a column for the empty string case. That makes it easier to do boundary checks. In that case, what is the longest common substring you can form with an empty string? Well... that's a string of zero length, so you can initialize all of these values to zero.

This two dimensional matrix is going to express *all of the subproblems* that the recursive solution would find. The benefit here is that you only have to solve them once whereas you'll have *overlapping subproblems* in the recursive solution.

You'll also need a running max variable that can default to zero. You'll need this to be outside of the loop. Since we're dealing with substring problems, we're looking for the longest contiguous substring. Well, that means that it's possible for the longest substring to be in the middle of both words. That would be expressed in the middle of the two dimensional array. So in order to prevent having to iterate over the entire array again just to find the largest number, you can keep a running max.

Then you'll perform a double loop over the rows and the columns but remember: rows are going to correspond to the first word and the columns will correspond to the second word. You can start at the first row and first column in your loop since we've added the empty string case as a base case row and column.

At every point in the loop you're going to ask if there's a matching branch. If there isn't, you can just continue onto the next iteration. There's nothing to do.

If there is a match, you'll update the running max variable to be equal to `1 + dp[row - 1][column - 1]`. Why? Well let's break it down:

- You add 1 because you have a match between both characters. That should count toward the longest substring. If you match the A in `BAN` and `LAM`, that shouldn't give you a substring of 2 right? You have a longest substring of exactly 1.
- You add the diagonal north left cell because that represents the previous contiguous longest common substring.

When the loop terminates, you can return the running max variable.

## Similar Problems

- Longest Common Subsequence
    - This problems looks very similar, except when we find a match, we do not consider the other branches at all.

## Recursively Compare Strings Pattern

The recursion is the hardest thing to visualize here. Here are the steps:

- Compare two characters in the string (depends on the problem which strings you're going to compare) using two pointers
- If there's a match, you have a branch that moves the two pointers in their respective directions (subsequence and substring problems will move in the same directions but palindromic subsequence, substring will move in opposite directions)
- Now you have three choices (match and increment count, move pointer one, move pointer two and keep count)
- In substring problems you *WILL* include the match path with the other branches
- In subsequence problems you will *NOT* include the match path with the other branches, you return that immediately
