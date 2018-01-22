import itertools
board = [['8', '8', '8'], ['8', '8', '8'], ['8', '8', '8']]
a = 0
b = 0
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
        print "enter values less than 3 and greater than -1"
        rec = getinp()
        a = rec[0]
        b = rec[1]
    return a,b
def changevalX(a,b):
    board[a][b] = 'X'
def compmove(board, movenum):
    if movenum == 1:
        if board[1][1] =='8':
            board[1][1] = 'O'
        else:
            board[0][0] == 'O'
    elif movenum > 2:
        for i in range(3):
            hori = 0
            vert = 0
            cros1 = 0
            cros2 = 0
            fill = 0
            for j in range(3):
                if (board[i][j] == 'X'):
                    hori += 1
                    if hori > 1 :
                        for each in range(3):
                            if board[i][each] == '8':
                                board[i][each] = 'O'
                                fill = 1
                elif(board[i][j] == 'O'):
                    hori -= 1
                    if hori < -1 :
                        for each in range(3):
                            if board[i][each] == '8':
                                board[i][each] = 'O'
                                fill = 1
                if (board[j][i] == 'X'):
                    vert += 1
                    if vert > 1 :
                        for each in range(3):
                            if board[each][i] == '8':
                                board[each][i] = 'O'
                                fill = 1
                elif (board[j][i] == 'O'):
                    vert -= 1
                    if vert < -1:
                        for each in range(3):
                            if board[each][i] == '8':
                                board[each][i] = 'O'
                                fill = 1
                if (board[j][j] == 'X'):
                    cros1 += 1
                    if cros1 > 1 :
                        for each in range(3):
                            if board[each][each] == '8':
                                board[each][each] = 'O'
                                fill = 1
                elif (board[j][j] == 'O'):
                    cros1 -= 1
                    if cros1 < -1:
                        for each in range(3):
                            if board[each][each] == '8':
                                board[each][each] = 'O'
                                fill = 1
                if (board[j][2 - j] == 'X'):
                    cros2 += 1
                    if cros2 > 1 :
                        for each in range(3):
                            if board[each][each - 2] == '8':
                                board[each][each - 2] = 'O'
                                fill = 1
                elif (board[j][2 - j] == 'O'):
                    cros2 -= 1
                    if cros2 < -1 :
                        for each in range(3):
                            if board[each][each - 2] == '8':
                                board[each][each - 2] = 'O'
                                fill = 1


    # else:
    #     result =0
    #     for i in range(3):
    #         hori = ''
    #         vert = ''
    #         cros1 = ''
    #         cros2 = ''
    #         for j in range(3):
    #             hori += board[i][j]
    #             vert += board[j][i]
    #             cros1 += board[j][j]
    #             cros2 += board[j][2 - j]
    #
    #     for i in range(3):
    #         for j in range(3):
    #             if board[i][j]

def outpcheck():
    result = 0
    for i in range(3):
        hori = ''
        vert = ''
        cros1 = ''
        cros2 = ''
        for j in range(3):
            hori += board[i][j]
            vert += board[j][i]
            cros1 += board[j][j]
            cros2 += board[j][2-j]
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
            if pnum == 0:
                c = getinp()
                if board[c[0]][c[1]] == "8":
                    changevalX(c[0], c[1])
                    i += 1
                    pnum = 1
                else:
                    print "position already taken enter a new one"

            else:
                compmove(board,i)
                pnum = 0
                i += 1
            out = outpcheck()
            printboard()
            if out == 1:
                print "player 1 wins"
                break
            elif out == 2:
                print "player 2 wins"
                break

x = 0
while x < 1:
    gamestart()
    re = raw_input("wanna play again? y/n")
    print re
    if re == "y":
        x = 0
        board = [['8', '8', '8'], ['8', '8', '8'], ['8', '8', '8']]
    else:
        x = 1
