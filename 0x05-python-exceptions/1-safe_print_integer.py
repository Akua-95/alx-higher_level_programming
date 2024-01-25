#!/usr/bin/python3

def safe_print_integer(value):
    try:
        print("{:d}".format(value))
        print()  # Print a newline after printing the integer
        return True
    except (ValueError, TypeError):
        return False
