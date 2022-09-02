# Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados
# e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00.
# Crie uma função que retorne dois valores em uma tupla contendo a
#  quantidade de latas de tinta a serem compradas e o preço total a partir
# do tamanho de uma parede(em m²).

def pintura(parede_m2):
    litro_por_metro = 3
    tamanho_lata = 18
    preco_lata = 80.00
    qtd_litros_gastos = round(parede_m2 / litro_por_metro, 2)
    qtd_latas_gastas = round(qtd_litros_gastos / tamanho_lata, 3)
    preco_total = qtd_latas_gastas * preco_lata
    return qtd_latas_gastas, preco_total


print(pintura(80))
