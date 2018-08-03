if __name__ == '__main__':
    x = int(raw_input())
    y = int(raw_input())
    z = int(raw_input())
    n = int(raw_input())

    xcounter = 0
    ycounter = 0
    zcounter = 0

    while xcounter <= x:
        while ycounter <= y:

            while zcounter <= z:
                if xcounter + ycounter + zcounter != n:
                    print [xcounter, ycounter, zcounter]
                    zcounter = zcounter + 1

            ycounter = ycounter + 1
            zcounter = 0
        xcounter = xcounter + 1
        ycounter = 0
