"""
Builds the non-golfed solution to the challenge.
"""

TESTS = [
    ('A1', (0,0)),
    ('B1', (0,1)),
    ('A2', (1,0)),
    ('AB2', (1,27)),
    ('AAA2', (1,702)),
]

ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

def ref2coords(string):
    """Runs the main execution."""
    letters = string.rstrip('123456789')
    numbers = string[len(letters):]

    col = 0
    for i, l in enumerate(letters[::-1]):
        col += ((ALPHABET.index(l)+1)*26**i)
    return (int(numbers)-1, col-1)


if __name__ == '__main__':
    for s, c in TESTS:
        coords = ref2coords(s)
        print(f"{s} = {coords}.\nANS: {c}")
