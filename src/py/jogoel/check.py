#!/usr/bin/env python

from .variables import (
	VOCALS,
	ALPH1,
	ALPH2)


def in_vocal(w)->bool:
	return True if w in VOCALS else False
		
def in_alph1(w)->bool:
	return True if w in ALPH1 else False
	
def in_alph2(w)->bool:
	return True if w in ALPH2 else False
	
def listing(chars:str)->list:
	res = []
	c = 0
	while c < len(chars):
		if c < len(chars) - 1:
			if (
				(chars[c]+chars[c+1]) == 'dh' or 
				(chars[c]+chars[c+1]) == 'ny' or
				(chars[c]+chars[c+1]) == 'ng' or
				(chars[c]+chars[c+1]) == 'th'
				):
				if chars[c] != ' ':
					res += [chars[c] + chars[c+1]]
					c += 2
				else:
					res += [chars[c]]
					c += 1
			else:
				res += [chars[c]]
				c += 1
		else:
			res += [chars[c]]
			c += 1
					
	return res
