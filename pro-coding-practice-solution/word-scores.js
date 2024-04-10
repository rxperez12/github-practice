const SCRABBLE_LETTER_TO_VALUE = {
  A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  O: 1,
  P: 3,
  Q: 10,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 4,
  X: 8,
  Y: 4,
  Z: 10,
};


/** Convert an array of words to their point values in Scrabble.
 *
 * Can provide an alternative mapping of lettersToValues.
 *
 * If a word contains invalid characters, score entire word as null.
 *
*/

function scoreWords(words, lettersToValues=SCRABBLE_LETTER_TO_VALUE) {
  let scores = [];

  for (let word of words) {
    let score = 0;

    for (let letter of word) {
      let value = lettersToValues[letter.toUpperCase()];
      if (value === undefined) {
        score = null;
        break;
      }
      score += value;
    }

    scores.push(score);
  }

  return scores;
}

// The above solution is a *good* solution, written in a good style.
//
// However, a good developer can find another useful change: this function,
// which scores a list of words, is doing too much!
//
// Better would be to break up the smaller functionality of "score a
// single word" from the functionality of "using that, score a list of words".
//
// Here, we can "decompose" that big function into two functions:

/** Convert an array of words to their point values in Scrabble.
 *
 * Can provide an alternative mapping of lettersToValues.
 *
 * */

function scoreWordsDecomposed(words, lettersToValues=SCRABBLE_LETTER_TO_VALUE) {
  let scores = [];

  for (let word of words) {
    scores.push(scoreWord(word, lettersToValues));
  }

  return scores;
}

/**  Score individual word with point values in Scrabble
*
 * Can provide an alternative mapping of lettersToValues.
 *
 * If word contains invalid letters, always return null
*/

function scoreWord(word, lettersToValues=SCRABBLE_LETTER_TO_VALUE) {
  let score = 0;

  for (let letter of word) {
    let value = lettersToValues[letter.toUpperCase()];
    if (value === undefined) return null;
    score += value;
  }

  return score;
}


// Still, there's another great improvement --- take a good look at the
// scoreWords function, above --- the body is this function is doing the
// same thing as `.map`. We can rewrite that to just use `.map`:

function scoreWordsWithMap(words, lettersToValues=SCRABBLE_LETTER_TO_VALUE) {
  return words.map(word => scoreWord(word, lettersToValues));
}


export { scoreWords, scoreWordsDecomposed, scoreWordsWithMap };