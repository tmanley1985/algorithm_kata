# Target Sum

## Problem Statement

You are given an integer array `nums` and an integer `target`.

You want to build an **expression** out of nums by adding one of the symbols `'+'` and `'-'` before each integer in nums and then concatenate all the integers.

-   For example, if `nums = [2, 1]`, you can add a `'+'` before `2` and a `'-'` before `1` and concatenate them to build the expression `"+2-1"`.

Return the number of different **expressions** that you can build, which evaluates to `target`.

## Recursive Intuition

This is a variant of the 0/1 Knapsack problem. Great, what does that mean? Well to me this means two things:

- You can't reuse elements
- You're going to have two branches (in this case add, subtract)

So how do you approach this? Well you're going to use depth first search and keep track of two variables: an index intialized to zero and a current sum initialized to zero.

The recursion: At every step, you will add the result of two branches - the add branch and subtract branch.

It will look like this: `return dfs(i + 1, currentSum - nums[i]) + dfs(i + 1, currentSum - nums[i])`

Notice how we need to move the index each time? And we'll have two possibilities: *subtract the current number from the current sum* OR a*dd the current number to the current sum*.

Great. But what are we adding? Well that's where the base case comes in.

If the current index reaches the length of the nums array, you're going to return 1 only in the case that the current sum is equal to the target sum. If it's not you'll return 0.

*Remember to add a memoization step here.*

## Tabulated Intuition

There's a few pieces to the bottom up approach.

*The first is to remember that the dp array is going to express all of the subproblems expresssed by the recursive solution.*

That should be a hint but only once you're aware of the solution. Unless you're a genius. But then I'd question why you're even reading this in the first place.

So the columns of the array will express the possible targets you could reach if you were to add up all the numbers or turn all of them negative and add them all together.

A trick here is to realize that you can sum all the numbers and that will be the maximum target you can reach. But that's also the maximum negative value you could reach if you were to flip them all negative and add them together. But you'll also need a column for a target of 0.

So if you look at the kata for this, you'll notice I usually have an `offset` variable. That's just the sum of the numbers.

Then to find the number of columns you'll multiply the `offset` by 2 so you'll get all the possible negative and positive targets. But you'll have to add 1 for the zeroth target.

That gives you: `columns = (offset * 2) + 1`. Now the associative property should protect us here, so you really don't need the parens but I prefer explision. And if that's not a word then it should be.

What about the number of rows? Well you're going to have the same number of rows as you have numbers *plus one*. You add one for the answer row and you won't iterate over that row.

So now you can create the dp array and fill it with zeros. But we'll initialize `dp[0][offset] = 1`.

But why? Well there are a few things here:

- Remember that arrays can't have negative indices, but we're pretending they are because the math works out and it fits our model.
- Because of the above, we are going to act like the very center of our columns is zero.
- We want to initialize the zeroth* column to 1 because this is like saying, using zero, there is one way to make a target of zero.

The last point is something I had to think deeply about for a while.

The next steps are trivial to implement but it's literally the most important part to get into your head.

You'll traverse the entire dp array *except for the last row because it's our answer row*.

If you come across a non-zero number you are going to:

- Get the current number you're on: `num = nums[row]`. Remember that the rows (except for the last one!) represent the nums in the list.
- You're going to take whatever the non-zero number is (initially it will be 1) and add it to the next row in two locations: `dp[row + 1][column - num]` and `dp[row + 1][column - num]`.

But why? Well think about it. That second step is essentially expressing the *add* and *subtract* choice from the recursive solution. The way I like to think about it is saying: from the current position, using the current number I am this far away from zeroth column on both the left hand and right hand size. Remember that the columns represent the potential targets, and the rows (except the answer row) represent the numbers in the nums array.

Once you've run through the loop, you can return the answer by finding the last row, and then adding the offset to the target for the column. Why do this?

Well if we were to have a target of 3, remember the columns are expressing the negative cases as well. So the third index isn't going to represent the target of three. You have to add that offset from earlier and that's like saying: start from the zeroth column and go three over from that.
