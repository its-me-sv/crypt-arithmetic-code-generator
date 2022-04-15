const text: string = `
'''Code generated with Crypt Arithmetic Code Generator'''
from time import time

def are_distinct(*args) -> bool:
    '''
        Accepts n arguments and returns true
        if they are distinct else returns false
    '''
    return len(args) == len(set(args))

def solve() -> None:
    '''
        Prints the solution with no. of
        iterations if the solution exists
    '''
    iterations = 0
    for E in range(0, 10):
        for S in range(1, 10):
            if not are_distinct(E, S): continue
            for D in range(0, 10):
                if not are_distinct(E, S, D): continue
                for R in range(0, 10):
                    if not are_distinct(E, S, D, R): continue
                    for N in range(0, 10):
                        if not are_distinct(E, S, D, R, N): continue
                        for M in range(1, 10):
                            if not are_distinct(E, S, D, R, N, M): continue
                            for Y in range(0, 10):
                                if not are_distinct(E, S, D, R, N, M, Y): continue
                                for O in range(0, 10):
                                    iterations += 1
                                    if are_distinct(E, S, D, R, N, M, Y, O):
                                        SEND = (1000 * S) + (100 * E) + (10 * N) + (1 * D)
                                        MORE = (1000 * M) + (100 * O) + (10 * R) + (1 * E)
                                        MONEY = (10000 * M) + (1000 * O) + (100 * N) + (10 * E) + (1 * Y)
                                        if SEND + MORE == MONEY:
                                            print("\nSEND + MORE = MONEY")
                                            print("{} + {} = {}".format(SEND, MORE, MONEY))
                                            print("Iterations:", iterations)
                                            return
    print("\nNo solution available")

if __name__ == '__main__':
    # starting time
    start = time()
    # Calling the solve function
    solve()
    # total time
    total_time = round(time() - start, 3)
    print("Time: {} seconds".format(total_time))

'''Code generated with Crypt Arithmetic Code Generator'''

`;

export default text;