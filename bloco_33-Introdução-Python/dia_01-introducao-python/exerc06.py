# Crie uma função que receba os três lado de um triângulo e informe
# qual o tipo de triângulo formado ou "não é triangulo", caso não
# seja possível formar um triângulo.

def calcula_triangulo(lado1, lado2, lado3):
    if lado1 == lado2 and lado3 == lado1 and lado3 == lado2:
        return "Triângulo Equilátero: três lados iguais."
    if lado1 == lado2 or lado3 == lado1:
        return "Triângulo Isósceles: quaisquer dois lados iguais."
    if lado1 != lado2 and lado3 != lado1 and lado3 != lado2:
        return "Triângulo Escaleno: três lados diferentes."


print(calcula_triangulo(2, 3, 4))
