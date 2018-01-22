list = []
size = int(input("enter matrix size"))
matrix = []

for i in range(size * size):
    list.append(i + 1)

for i in range(size):
    matrix.append([])

for i in range(size):
    for j in range(size):
        matrix[i].append(0)
lisnum = 0
i, j, num, it = 0,0,0,0
# import pdb;pdb.set_trace()
for t in range(1, (size*2)):
    if t % 4 == 1:
        i = 0 + t/4
        j = 0 + t/4
        num = size - t/4
        it = 1

    elif t % 4 == 2:
        i = 1 + t / 4
        j = size - 1 - t / 4
        num = size - (t/4)
        it = 1

    elif t % 4 == 3:
        i = size - 1 - t / 4
        j = size - 2 - t / 4
        num = 0 + t/4 -1
        it = -1

    elif t % 4 == 0:
        i = size - 1 - t / 4
        j = 0 + t/4 - 1
        num = 0 + t/4 - 1
        it = -1

    if t % 2 == 0:
        for u in range(i, num, it):
            matrix[u][j] = list[lisnum]
            lisnum += 1
    elif t % 2 == 1:
        for u in range(j, num, it):
            matrix[i][u] = list[lisnum]
            lisnum += 1
for i in matrix:
    for j in i:
        print j,"\t",
    print "\n"