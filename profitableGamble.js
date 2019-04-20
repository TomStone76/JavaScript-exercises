// Lara is at a carnival fair. She has decided to 
// only play games which are profitable gambles.

// A profitable gamble is a game that yields a positive net profit, where net profit 
// is calculated in the following manner: 
// net_outcome = probability_of_winning * prize - cost_of_playing.

// Create a function that takes in 3 parameters (probability of winning, prize value, and 
// cost of playing) and returns whether or not the gamble is profitable.

// For instance, profitableGamble(0.2, 50, 9) should yield true, 
// since the net profit is 0.2 * 50 - 9 = 1 and 1 > 0.

function profitableGamble(prob, prize, pay) {
    if ((prob * prize - pay) > 0) { return true; } 
	else { return false; }
}

function profitableGamble(prob, prize, pay) {
    returh (prob * prize - pay > 0);
}