#!/usr/bin/env python


from .variables import *
from .check import *

basa1 = dict(zip(ALPH1, ALPH2))
basa2 = dict(zip(ALPH2, ALPH1))

def encode(chars: str):
	return Crypt(chars)
	
def decode(chars: str):
	return Crypt(chars, False)
	

def Crypt(letter: str, enc=True)->str:
	letters = listing(vocal_toha(letter.lower()))
	retVal = ""
	for w in letters:
		if in_alph1(w):
			retVal += basa1[w]
		elif in_alph2(w):
			retVal += basa2[w]
		else:
			retVal += w
			
	if enc:
		return retVal
	else:
		return hato_vocal(retVal)
	
def vocal_toha(char: str)->str:
	letters = ' ' + char + ' '
	retVal = ''
	for i,ch in enumerate(letters):
		if letters[i] in VOCALS:
			if letters[i-1] == ' ' or in_vocal(letters[i-1]):
				retVal += 'h'
		retVal += ch
		
	return retVal[1:-1]
	
def hato_vocal(char: str)->str:
	letters = ' ' + char + ' '
	retVal = ''
	for i,ch in enumerate(letters):
		if letters[i] == 'h':
			if not in_vocal(letters[i-1]):
				if letters[i-1] != ' ':
					if letters[i+1] == ' ':
						retVal += letters[i]
		else:
			retVal += letters[i]
				
	return retVal[1:-1]