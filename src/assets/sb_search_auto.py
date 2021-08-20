doc1 = open("popular.txt", "r")
doc2 = open("words.txt", 'w')

lines = doc1.readlines()

for line in lines:
    doc2.write( "'" + line.replace("\n","").upper() + "': null" + "," + "\n")
    
doc1.close()
doc2.close()
print("DONE!")
