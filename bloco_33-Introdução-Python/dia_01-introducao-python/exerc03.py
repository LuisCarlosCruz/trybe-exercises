# Faça um programa que, dado um valor n qualquer, tal que n > 1,
# imprima na tela um quadrado feito de asteriscos de lado de tamanho n.
# Por exemplo:
# n = 5
# xxxxx
# xxxxx
# xxxxx
# xxxxx
# xxxxx


def imprime_quadrado(num):
    for i in range(num):
        print(num * "x")


imprime_quadrado(5)
