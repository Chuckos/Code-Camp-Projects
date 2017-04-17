/**
 * Created by charlesadeeko on 17/04/2017.
 */

/*
 *
 * Return the factorial of the provided integer.
 * If the integer is represented with the letter n,
 * a factorial is the product of all positive integers less than or equal to n.
 */

function factorialize(num) {
    if (num === 0) { return 1; }
    return num * factorialize(num-1);
}

factorialize(5);
factorialize(10);
factorialize(20);
factorialize(0);
