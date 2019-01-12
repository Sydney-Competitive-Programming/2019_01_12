X = 'AAA2'

import re
_,c,r=re.split('([A-Z]+)',X)
C=0;i=0
while i<len(c):C+=(ord(c[i])%65+1)*26**i;i+=1
(int(r)-1,C-1)

print((int(r)-1, C-1))
