## The Sieve of Eratosthenes

____

The Sieve of Eratosthenes is a simple, ancient algorithm for finding all prime numbers up to any given limit.

A prime number is a natural number that has exactly two distinct natural number divisors: 1 and itself.

Create your range, starting at two and ending at the given limit.

The algorithm consists of repeating the following over and over:

- take the next available unmarked number in your list (it is prime)
- remove all the multiples of that number (they are not prime)

Repeat until you don't have any possible primes left in your range.

When the algorithm terminates, all the numbers in the list that have not been removed are prime.

____

#### The sieve in action:

![Sieve of erasothenes in action](https://upload.wikimedia.org/wikipedia/commons/b/b9/Sieve_of_Eratosthenes_animation.gif)