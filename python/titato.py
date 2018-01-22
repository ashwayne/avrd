board = [['8', '8', '8'], ['8', '8', '8'], ['8', '8', '8']]
a = -1
b = -1


def printboard():
    for i in board:
        for j in i:
            print j, "\t", 
        print "\n"


def getinp():
    a = int(input("enter row"))
    b = int(input("enter column"))
    rec =0
    if a > 2 or b > 2 or a < 0 or b < 0:
        print"enter values less than 2 and greater than 0"
        rec = getinp()
        a = rec[0]
        b = rec[1]
    return a, b


def changevalX(a, b):
    board[a][b] = 'X'


def changevalO(a, b):
    board[a][b] = 'O'


def outpcheck():
    outp = [0, 0, 0, 0, 0, 0, 0, 0]
    result = 0
    for i in range(3):
        hori = ''
        vert = ''
        cros1 = ''
        cros2 = ''
        for j in range(3):
            hori += board[i][j]
            vert +=board[j][i]
            cros1 +=board[j][j]
            cros2 +=board[j][2-j]
        if hori == 'XXX'or vert == 'XXX'or cros1=='XXX'or cros2=='XXX':
            result = 1
            break
        elif hori == 'OOO'or vert == 'OOO'or cros1=='OOO'or cros2=='OOO':
            result = 2
            break
    return result
def gamestart():
    print "player1 enter values"
    pnum = 0
    i = 0
    while i < 9:
        c = getinp()
        if board[c[0]][c[1]] == "8":
            if pnum == 0:
                changevalX(c[0], c[1])
                pnum = 1
            else :
                changevalO(c[0],  c[1])
                pnum = 0
            out = outpcheck()
            print out,  "outvalue"
            printboard()
            if (out == 1):
                print "player 1 wins"
                break
            elif (out == 2):
                print "player 2 wins"
                break
            i+=1
        else:
            print "position already taken enter a new one"
        print i
x = 0
while x < 1:
    gamestart()
    re = raw_input("wanna play again? y/n")
    print re
    if re == "y":
        x = 0
        board = [['8',  '8',  '8'],  ['8',  '8',  '8'],  ['8',  '8',  '8']]
    else:
        x = 1
