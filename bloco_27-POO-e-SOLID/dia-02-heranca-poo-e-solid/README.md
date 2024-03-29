
># Exercício Herança e Interfaces 
---
</br>


## Exercício 1 : Crie uma nova classe cujos objetos representarão uma pessoa no nosso sistema.

Class: Person

Attributes:
  - name: nome da pessoa
  - birthDate: data de nascimento da pessoa

Methods:
  - Getters/Setters
  - constructor: deve receber como parâmetro nome e a data de nascimento

Validations:
  - O nome deve ter no mínimo 3 caracteres
  - A data de nascimento não pode ser uma data no futuro

</br>

## Exercício 2 : Refatore nossa classe de pessoa estudante para que ela herde da nossa classe pessoa.

Class: Student

Extends: Person

Attributes:
  - enrollment: matrícula da pessoa estudante
  - examsGrades: notas de provas
  - worksGrades: notas de trabalhos

Methods:
  - Getters/Setters
  - constructor: deve receber como parâmetro nome e data de nascimento e 
    preencher a matrícula automaticamente
  - sumGrades: retorna a soma das notas da pessoa estudante
  - sumAverageGrade: retorna a média das notas da pessoa estudante
  - generateEnrollment: retorna uma string única gerada 
    como matrícula para a pessoa estudante
    
Validations:
  - A matrícula deve possuir no mínimo 16 caracteres
  - A pessoa estudante deve possuir no máximo 4 notas de provas
  - A pessoa estudante deve possuir no máximo 2 notas de trabalhos

</br>

## Exercício 3 : Crie uma interface que representará uma pessoa funcionária.

Interface: Employee
Attributes:
  - registration: número do registro
  - salary: valor do salário
  - admissionDate: data de admissão
Methods:
  - generateRegistration: retorna uma string única gerada como registro

</br>

## Exercício 4 : Crie uma classe cujos objetos representem uma disciplina lecionada na escola.
Class: Subject

Attributes:
  - name: nome da disciplina
Methods:
  - Getters/Setters
  - constructor: deve receber como parâmetro nome

Validations:
  - O nome tem que possuir no mínimo 3 caracteres