# Jogoel-lang

A Jogoel-lang encoding algorithm, a simple conversion of the popular slang in Jogja commonly known as "basa walikan". This is not
a programming language, yep, this is for cryptography purpose.

Includes encoding functions that convert text to the logic used. It doesn't have
a specific encoding key like encoding in general, but only changes each group of
letters in the Javanese script (aksara Jawa).

## Algorithm

Javanese script consists of 20 characters, arranged in four lines, each consisting of five characters.

> 1. Ha Na Ca Ra Ka
> 2. Da Ta Sa Wa La
> 3. Pa Dha Ja Ya Nya
> 4. Ma Ga Ba Tha Nga

To use `basa walikan`, substitute the characters in the first line to the characters
in the third line, and the characters in the second line to the characters in
the fourth line, and vice versa.

NOTE:
> The differences between `encode` and `decode` function is just letter `ha` which
become `h` or `vocal letter`

![basa walikan formula](/formula.jpg)

## Installation

U can install it for python and javascript.

### python

- Build manual from source
  - Clone the repo
  - Install:
	```bash
	cd jogoel-lang
	sudo python3 -m build
	pip install dist/*whl
	```
- From PyPI
	```bash
	pip install jogoel
	```

### javascript

- Directly using npm
	```
	npm i -g @c0del1ar/jogoel-lang
	```
- Build from source first
	- Clone the repo
	- install by:
		```bash
		cd jogoel-lang
		npm i -g .
		```

## Usage

For more information, see [here](/docs/READMEpy.md) for Python, and
[here](/docs/READMEjs.md) for Javascript.

## NOTE

This is just a fun project and i'm not taking seriously developing it. But, u can
contributing by make PR or tell creating an issue.
