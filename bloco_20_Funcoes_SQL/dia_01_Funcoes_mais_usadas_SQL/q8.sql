SELECT JOB_ID, SUM(SALARY)
FROM employees
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG';